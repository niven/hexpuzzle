// Solutions are [triangle, zigzag, hockeystick, boomerang, trapezoid, branch] in order
// and consist of a list of [mirror, clockwise rotation count, hex_index] 

//    0  1  2  3
//  4  5  6  7  8
// 9 10 11 12 13 14
//  15 16 17 18 19
//   20 21 22 23
//    24 25 26 

const MIRROR = 0;
const ROTATE = 1;
const HINDEX = 2;

solution = [];

solution[0]   = [ [false,1,22], [true,0,21],  [true,3,8],   [false,0,16], [false,3,7],  [true,4,12] ];
solution[34]  = [ [false,0,9],  [false,0,4],  [false,0,20], [false,0,11], [false,0,12], [false,0,6] ];
solution[228] = [ [false,0,9],  [false,1,5],  [true,1,4],   [false,0,16], [false,4,13], [true,1,21] ];
solution[239] = [ [false,3,11], [true,0,20],  [false,2,1],  [false,2,8],  [false,0,21], [false,1,7] ];
solution[332] = [ [false,3,13], [false,5,21], [true,1,4],   [false,3,19], [false,2,23], [true,3,5]  ];
solution[452] = [ [false,0,20], [false,0,15], [false,4,19], [false,2,7],  [false,1,18], [true,4,6]  ];
