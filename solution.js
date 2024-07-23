// Solutions are [triangle, zigzag, hockeystick, boomerang, trapezoid, branch] in order
// and consist of a list of [mirror, clockwise rotation count, hex_index] 

function m( arr ) { // mirror shape
	return [...arr, true];
}

//    0  1  2  3
//  4  5  6  7  8
// 9 10 11 12 13 14
//  15 16 17 18 19
//   20 21 22 23
//    24 25 26 

const ROTATE = 0;
const HINDEX = 1;

alternative_solution = []; // some puzzles have more than 1 solution

alternative_solution[25] = 	[ 
								[ [0,9],  [0,4],     m([0,24]), m([2,17]), [5,22], [0,6]    ]
							];

alternative_solution[474] = [ 
								[ [1,21], [4,23],    m([1,4]),  [3,19],    [1,10], m([1,5]) ]
							];

alternative_solution[531] = [
								[ [0,5],  m([5,19]), m([3,2]),  m([2,4]),  [1,10], [2,18]   ],
								[ [0,15], m([5,19]), m([3,2]),  m([4,1]),  [2,5],  [2,18]   ],
								[ [1,22], m([5,24]), m([0,15]), [0,1],     [5,6],  [2,8]    ]
							];

solution = [];
//               triangle zigzag    hockeystick boomerang  trapezoid branch
solution[514] = [ [1,0],  m([4,19]), [3,8],     [2,13],    [3,26], [3,17]    ];
solution[0]   = [ [1,22], m([0,21]), m([3,8]),  [0,16],    [3,7],  m([4,12]) ];
solution[8]   = [ [0,6],  m([0,9]),  m([2,2]),  m([4,13]), [0,21], m([4,18]) ];
solution[17]  = [ [1,1],  m([1,20]), m([2,2]),  [0,4],     [2,19], m([1,10]) ];
solution[18]  = [ [0,2],  [5,26],    [4,17],    [3,19],    [0,4],  [3,22]    ]; // pair with 368
solution[25]  = [ [1,4],  [4,19],    m([1,5]),  [2,14],    [1,18], m([3,11]) ]; // pair with 347
solution[34]  = [ [0,9],  [0,4],     [0,20],    [0,11],    [0,12], [0,6]     ];
solution[44]  = [ [0,9],  m([1,6]),  [3,8],     m([3,4]),  [3,23], m([2,16]) ];
solution[55]  = [ [0,13], [4,26],    [2,8],     [5,20],    [5,9],  [5,11]    ];
solution[66]  = [ [1,3],  m([4,26]), [5,22],    [4,17],    [3,16], m([5,12]) ];
solution[77]  = [ [1,18], [5,15],    [0,20],    [3,19],    [3,7],  [5,21]    ];
solution[85]  = [ [1,7],  m([5,17]), m([2,2]),  [5,20],    [5,22], [4,16]    ];
solution[93]  = [ [1,21], m([1,6]),  [2,1],     m([3,2]),  [0,10], [1,12]    ];
solution[101] = [ [0,9],  m([4,26]), m([1,4]),  m([2,16]), [2,19], [0,6]     ];
solution[109] = [ [0,9],  [0,17],    m([0,24]), [1,1],     [0,2],  m([1,21]) ];
solution[112] = [ [1,22], [1,4],     m([3,8]),  [0,3],     [1,16], m([5,12]) ];
solution[114] = false;
solution[126] = [ [1,3],  m([5,22]), [5,25],    [1,14],    [1,16], [5,10]    ];
solution[141] = [ [0,22], m([3,2]),  [2,1],     [5,20],    [4,13], m([4,19]) ];
solution[155] = [ [0,16], m([4,14]), [3,8],     [5,20],    [2,5],  [1,12]    ];
solution[170] = [ [1,22], m([1,0]),  m([2,2]),  [3,23],    [5,9],  [5,24]    ];
solution[184] = [ [1,2],  [4,21],    m([4,23]), m([1,22]), [5,4],  m([0,18]) ];
solution[199] = [ [1,0],  m([1,20]), [3,8],     [5,9],     [5,18], m([3,7])  ];
solution[207] = [ [0,11], [5,26],    [4,19],    [2,7],     [2,5],  [3,22]    ]; // pair with 242
solution[213] = [ [1,22], m([4,12]), [3,7],     m([4,3]),  [1,10], m([1,17]) ];
solution[214] = [ [0,0],  m([5,24]), m([2,2]),  [0,4],     [1,18], [0,11]    ]; // pair with 221
solution[221] = [ [0,2],  [5,26],    [2,1],     m([4,8]),  [5,20], m([4,12]) ]; // pair with 214
solution[228] = [ [0,9],  [1,5],     m([1,4]),  [0,16],    [4,13], m([1,21]) ];
solution[239] = [ [3,11], m([0,20]), [2,1],     [2,8],     [0,21], [1,7]     ];
solution[242] = [ [0,11], m([5,24]), m([0,15]), [1,2],     [4,13], m([1,21]) ]; // pair with 207
solution[250] = [ [1,0],  [0,24],    [5,20],    [2,7],     [3,16], m([0,18]) ];
solution[262] = [ [0,12], m([1,0]),  [4,19],    [2,11],    [3,26], [3,17]    ];
solution[274] = [ [0,5],  [4,22],    [2,1],     [5,20],    [4,13], [1,12]    ];
solution[286] = [ [0,9],  m([2,5]),  [0,20],    [1,1],     [4,13], m([2,6])  ];
solution[297] = [ [0,22], m([1,0]),  [4,19],    [4,17],    [5,9],  [4,25]    ];
solution[303] = [ [0,11], m([4,7]),  [5,22],    m([4,3]),  [5,9],  m([2,16]) ];
solution[309] = [ [0,11], [5,20],    [2,1],     [0,13],    [0,21], [0,6]     ];
solution[320] = [ [0,13], [4,21],    m([1,11]), m([0,25]), [4,22], [5,10]    ];
solution[332] = [ [3,13], [5,21],    m([1,4]),  [3,19],    [2,23], m([3,5])  ];
solution[333] = [ [0,13], m([1,1]),  [4,26],    [0,6],     [2,5],  [3,22]    ];
solution[347] = [ [1,8],  m([0,15]), [3,7],     m([2,9]),  [5,20], [1,12]    ]; // pair with 25
solution[348] = [ [1,21], m([1,1]),  m([1,15]), m([2,20]), [5,18], m([4,6])  ];
solution[354] = [ [1,8],  m([5,24]), m([0,15]), m([3,11]), [0,1],  m([1,21]) ];
solution[363] = [ [0,9],  [1,16],    [3,7],     [5,20],    [2,14], m([5,17]) ];
solution[368] = [ [0,0],  m([5,24]), m([0,17]), [0,4],     [0,7],  m([1,21]) ]; // pair with 18
solution[378] = [ [0,0],  m([5,26]), m([5,25]), m([2,6]),  [1,11], [1,7]     ];
solution[389] = [ [0,0],  [0,17],    m([0,24]), [0,4],     [5,6],  m([1,21]) ]; // pair with 445
solution[394] = [ [0,2],  m([1,5]),  [2,1],     [1,11],    [0,21], m([1,17]) ];
solution[408] = [ [0,13], [4,18],    m([0,15]), [4,25],    [3,7],  [1,10]    ];
solution[423] = [ [1,0],  m([0,22]), m([4,6]),  [4,25],    [3,21], m([5,13]) ];
solution[434] = [ [0,2],  [0,17],    m([2,0]),  m([5,23]), [1,5],  [3,22]    ];
solution[445] = [ [0,2],  m([4,17]), [4,26],    m([4,8]),  [1,1],  [3,22]    ]; // pair with 389
solution[452] = [ [0,20], [0,15],    [4,19],    [2,7],     [1,18], m([4,6])  ];
solution[459] = [ [0,2],  m([5,17]), [4,26],    [3,19],    [2,5],  [3,22]    ];
solution[474] = [ [0,9],  [4,23],    m([1,4]),  [3,19],    [4,24], m([1,5])  ];
solution[482] = [ [1,4],  m([0,16]), [4,19],    m([0,21]), [3,6],  [2,18]    ];
solution[490] = [ [5,7],  [5,17],    [5,22],    [5,21],    [5,4],  m([3,11]) ];
solution[498] = [ [0,20], m([4,17]), m([1,4]),  m([0,12]), [2,23], [0,6]     ];
solution[506] = [ [0,6],  m([2,3]),  m([3,11]), [5,9],     [2,23], [5,10]    ];
solution[522] = [ [0,20], m([5,26]), m([0,15]), m([4,13]), [0,2],  [4,17]    ];
solution[531] = [ [1,0],  m([5,19]), m([3,2]),  [3,11],    [1,10], [2,18]    ];
solution[541] = [ [1,21], m([5,26]), [3,8],     m([4,13]), [4,15], [3,7]     ];
solution[550] = [ [0,22], [4,13],    m([1,21]), m([3,2]),  [2,5],  m([3,11]) ];
solution[560] = [ [1,3],  [5,15],    [0,20],    [1,2],     [2,12], [2,13]    ];
