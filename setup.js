/* Global state and variables */

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 480;
const SIZE = 40;
const DOT_SIZE = SIZE/1.5;


const params = {};
var index = -1; // puzzle index
var ctx, canvas;

/* Hex class */

class Hex {

   q;
   r;
   s;

   constructor(q,r,s) {
      this.q = q;
      this.r = r;
      this.s = s;
   }

}


function H( q, r, s ) {
	if( s != undefined ) {
		console.assert( q+r+s==0, "Not a valid Hex: [%o,%o,%o]", q, r, s );
		if( q+r+s != 0 ) {
			console.trace();
		}
	}
	return new Hex(q,r, s == undefined ? -q-r : s);
}


function add( a, b ) {

	result = H( a.q + b.q, a.r + b.r, a.s + b.s );
   
   return result;
}
/* Data */

const Color = {
   "hex": "maroon",
   "red": "rgb(191, 85, 69)",
   "green": "rgb(69, 191, 85)",
   "blue": "rgb(85, 69, 191)",
   "blocked": "rgba(128, 128, 128, 1)",
   "stop": "rgba(0, 0, 0, 1)",
   "shape": {
   	"triangle": "rgba(255, 125, 25, 1)",
   	"zigzag": "rgba(38, 166, 153, 1)",
   	"hockeystick": "rgba(69, 191, 85, 1)",
   	"boomerang": "rgba(188, 71, 172, 1)",
   	"trapezoid": "rgba(27, 118, 255, 1)",
   	"branch": "rgba(244, 67, 54, 1)",
   }
};


//   A O a a
//  B a a O a
// C b a b a a
//  c b b b b
//   c b b c
//    c c c 
// Note: this conveniently maps hexes to indices: 
//    0  1  2  3
//  4  5  6  7  8
// 9 10 11 12 13 14
//  15 16 17 18 19
//   20 21 22 23
//    24 25 26 

const hexes = [
				H(0,-3), H(1,-3), H(2,-3), H(3,-3),
			H(-1,-2), H(0,-2), H(1,-2), H(2,-2), H(3,-2),
		H(-2,-1), H(-1,-1), H(0,-1), H(1,-1), H(2,-1), H(3,-1),
				H(-2,0), H(-1,0), H(0,0), H(1,0), H(2, 0),
				     H(-2,1),H(-1,1), H(0,1), H(1,1),
				     	   H(-2,2), H(-1,2), H(0,2)
	];

const blocked = [ H(1,-3), H(2,-2)];
const A = [H(0, -3),H(0,-2), H(0,-1),H(1,-2), H(2,-3), H(3,-3), H(3,-2) ,H(2,-1), H(3,-1) ];
const B = [H(-1, -2), H(-1,-1),H(-1,0),H(-1,1), H(0,1), H(0,0),H(1,-1), H(1,0), H(2, 0) ];
const C = [H(-2, -1), H(-2,0),H(-2,1),H(-2,2), H(-1,2), H(0,2),H(1,1) ];

// Define shapes.
// All are rotated around the first hex of their hex list which is zero.
// This makes rotation easier: first rotate, then place
const triangle = [ H(0,0), H(1,0), H(0,1) ];
const zigzag = [ H(0,0), H(1,0), H(2,-1,-	1), H(3,-1,-2) ];
const hockeystick = [ H(0,0), H(0,1,-1), H(1,1,-2), H(2,1,-3) ];
const boomerang = [ H(0,0), H(-1, 1, 0), H(-1, 2, -1) ];
const trapezoid = [ H(0,0), H(-1,1,0), H(1,0,-1), H(0,1,-1), H(1,1,-2)];
const branch = [ H(0,0), H(1,0,-1), H(2,0,-2), H(2,-1,-1), H(2,1,-3) ];

// basis vectors
const dq = H( Math.sqrt(3), Math.sqrt(3)/2 );
const dr = H( 0, 3/2  );

var stops = [ A[0], B[0], C[0] ]; // location of a,b,c blockers
var show_paths = true;

/* Code */

function main() {

	// read any url params
	for(const [key, value] of new URLSearchParams(window.location.search)) {
		params[key] = value;
	}

	canvas = document.querySelector("#scene");
	canvas.setAttribute("width", CANVAS_WIDTH);
	canvas.setAttribute("height", CANVAS_HEIGHT);

	ctx = document.getElementById("scene").getContext("2d", { alpha: true });
	ctx.font = "bold 48px Menlo";

	stats();

	if( params.index ) {
		index = parseInt(params.index);
		stops = stops_from_index( index );
		document.querySelector("#title").innerText = "Puzzle #"+index;
		document.querySelector("#a").value = stops[0];
		document.querySelector("#b").value = stops[1];
		document.querySelector("#c").value = stops[2];
		document.querySelector("#solution").checked = true;
		show_paths = false;
		show_solution = true;
		draw();
	} else {
		set();
	}

}

function stats() {
	let max = 0;
	let last = 0;
	let pos = 0;
	for( const n of Object.keys(solution) ) {
		if( n-last > max) {
			max = n-last;
			pos = n;
		}; 
		last = n;
	}
	let next = Math.floor( pos - (max/2) );
	let done = Math.floor(10000*Object.keys(solution).length/567)/100;

	document.querySelector("#next").innerText = next;
	document.querySelector("#done").innerText = done;

}

function stops_from_index( index ) {

	let stop_a = Math.floor(index / 63);
	let stop_b = Math.floor( (index - stop_a*63) / 7 );
	let stop_c = index - stop_a*63 - stop_b*7;
	result = [ stop_a, stop_b, stop_c ];
	return result;
}

function draw() {

   ctx.fillStyle = "white";
	ctx.fillRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

	if( show_paths ) {
		blocked.forEach( h => fill( hex_to_pixel(h), Color.blocked ) );
		A.forEach( h => fill( hex_to_pixel(h), Color.red ) );
		B.forEach( h => fill( hex_to_pixel(h), Color.green ) );
		C.forEach( h => fill( hex_to_pixel(h), Color.blue ) );
	}

	// hex outlines
	hexes.forEach( h => stroke( hex_to_pixel(h), Color.hex ) );

	// stops
	disk( hex_to_pixel( A[stops[0]] ), SIZE/2, Color.stop );
	disk( hex_to_pixel( B[stops[1]] ), SIZE/2, Color.stop );
	disk( hex_to_pixel( C[stops[2]] ), SIZE/2, Color.stop );

	if( solution[index] && show_solution ) {

		let shapes = [triangle, zigzag, hockeystick, boomerang, trapezoid, branch];
		let colors = [Color.shape.triangle, Color.shape.zigzag, Color.shape.hockeystick, Color.shape.boomerang, Color.shape.trapezoid, Color.shape.branch];
		for( let i=0; i<shapes.length; i++ ) {
			let shape = solution[index][i][MIRROR] ? mirror(shapes[i]) : shapes[i];
			shape = rotate_cw( shape, solution[index][i][ROTATE] );
		 	shape = move( shape, solution[index][i][HINDEX] );
			shape.forEach( s => disk( hex_to_pixel( s ), DOT_SIZE, colors[i] ) );
		}


	}
}

// Mirror a number of hexes using the q axis
function mirror( hex_list ) {
	let result = hex_list.map( h => H(h.q, h.s, h.r) );
	return result;
}

// Move a number of hexes to some hex
function move( hex_list, hex_index ) {
	let target = hexes[hex_index];
	// offset all the hexes in the list to the target
	let result = hex_list.map( h => add( h, target ) );
	return result;
}

/**
 * A rotation 60° right (clockwise ↻) shoves each coordinate one slot to the left ←:

      [ q,  r,  s]
to        [-r, -s, -q]
to           [  s,  q,  r]
*/
function rotate_cw( hex_list, steps ) {

	let result = hex_list;
	for( let i=0; i<steps; i++ ) {
		result = result.map( h => H(-h.r, -h.s, -h.q) );
	}
	return result;
}

function hex_to_pixel( h ) {
	return H(
		CANVAS_WIDTH/2 + SIZE * (h.q*dq.q + h.r*dq.r),
		CANVAS_HEIGHT/2 + SIZE * (h.r*dr.q + h.r*dr.r)
	);
}

function set() {

	show_paths = document.querySelector("#setup").checked;
	show_solution = document.querySelector("#solution").checked;

	stops = ["a","b", "c"].map( s => parseInt(document.querySelector("#"+s).value) );
	index = 63*stops[0] + 7*stops[1] + stops[2];
	document.querySelector("#title").innerText = "Puzzle #" + index;

	history.pushState({}, "", "?index="+index);

	draw();
}

function pointy_hex_corner(center, size, i) {
    let angle_deg = 60 * i - 30;
    let angle_rad = Math.PI / 180 * angle_deg;
    return [
    	center.q + size * Math.cos(angle_rad),
      center.r + size * Math.sin(angle_rad)
   ];
}

function disk( center, radius, color ) {

   ctx.fillStyle = color;
   ctx.beginPath();
   ctx.arc( center.q, center.r, radius, 0, 2 * Math.PI);
   ctx.fill();
}


function stroke( h, color ) {
   ctx.strokeStyle = color;
	hex(h);
   ctx.stroke();
}

function fill( h, color ) {
  	ctx.fillStyle = color;
	hex(h);
	ctx.fill();
}

function hex( h ) {

   ctx.beginPath();

   let start = pointy_hex_corner(h, SIZE, 0);
   ctx.moveTo( ...start );
   for(let i=1; i<6; i++) {
      ctx.lineTo( ...pointy_hex_corner(h, SIZE, i) );
   }
   ctx.lineTo( ...start );
}