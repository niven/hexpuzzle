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
//                 triangle      zigzag        hockeystick   boomerang     trapezoid     branch
solution[0]   = [ [false,1,22], [true,0,21],  [true,3,8],   [false,0,16], [false,3,7],  [true,4,12]  ];
solution[17]  = [ [false,1,1],  [true,1,20],  [true,2,2], [false,0,4], [false,2,19], [true,1,10]  ];
solution[34]  = [ [false,0,9],  [false,0,4],  [false,0,20], [false,0,11], [false,0,12], [false,0,6]  ];
solution[55]  = [ [false,0,13], [false,4,26], [false,2,8],  [false,5,20], [false,5,9],  [false,5,11] ];
solution[77]  = [ [false,1,18], [false,5,15], [false,0,20], [false,3,19], [false,3,7],  [false,5,21] ];
solution[109] = [ [false,0,9],  [false,0,17], [true,0,24],  [false,1,1],  [false,0,2],  [true,1,21]  ];
solution[112] = [ [false,1,22], [false,1,4],  [true,3,8],   [false,0,3],  [false,1,16], [true,5,12]  ];
solution[141] = [ [false,0,22], [true,3,2],   [false,2,1],  [false,5,20], [false,4,13], [true,4,19]  ];
solution[170] = [ [false,1,22], [true,1,0],   [true,2,2],   [false,3,23], [false,5,9],  [false,5,24] ];
solution[199] = [ [false,1,0],  [true,1,20],  [false,3,8],  [false,5,9],  [false,5,18], [true,3,7]   ];
solution[228] = [ [false,0,9],  [false,1,5],  [true,1,4],   [false,0,16], [false,4,13], [true,1,21]  ];
solution[239] = [ [false,3,11], [true,0,20],  [false,2,1],  [false,2,8],  [false,0,21], [false,1,7]  ];
solution[262] = [ [false,0,12], [true,1,0],   [false,4,19], [false,2,11], [false,3,26], [false,3,17] ];
solution[286] = [ [false,0,9],  [true,2,5],   [false,0,20], [false,1,1],  [false,4,13], [true,2,6]   ];
solution[309] = [ [false,0,11], [false,5,20], [false,2,1],   [false,0,13], [false,0,21], [false,0,6]   ];
solution[332] = [ [false,3,13], [false,5,21], [true,1,4],   [false,3,19], [false,2,23], [true,3,5]   ];
solution[333] = [ [false,0,13], [true,1,1],   [false,4,26], [false,0,6],  [false,2,5],  [false,3,22] ];
solution[363] = [ [false,0,9],  [false,1,16], [false,3,7],  [false,5,20], [false,2,14], [true,5,17]  ];
solution[394] = [ [false,0,2],  [true,1,5],   [false,2,1],  [false,1,11], [false,0,21], [true,1,17]  ];
solution[423] = [ [false,1,0],  [true,0,22],  [true,4,6],   [false,4,25], [false,3,21], [true,5,13]  ];
solution[452] = [ [false,0,20], [false,0,15], [false,4,19], [false,2,7],  [false,1,18], [true,4,6]   ];
solution[459] = [ [false,0,2],  [true,5,17],  [false,4,26], [false,3,19], [false,2,5],  [false,3,22] ];
solution[490] = [ [false,5,7],  [false,5,17], [false,5,22], [false,5,21], [false,5,4],  [true,3,11]  ];
solution[522] = [ [false,0,20], [true,5,26],  [true,0,15],  [true,4,13],  [false,0,2],  [false,4,17] ];
