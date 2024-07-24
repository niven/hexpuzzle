// Solutions are [triangle, zigzag, hockeystick, boomerang, trapezoid, branch] in order
// and consist of a list of [mirror, clockwise rotation count, hex_index] 


//    0  1  2  3
//  4  5  6  7  8
// 9 10 11 12 13 14
//  15 16 17 18 19
//   20 21 22 23
//    24 25 26 

const m = true; // mirror
const ROTATE = 0;
const HINDEX = 1;

alternative_solution = []; // some puzzles have more than 1 solution

alternative_solution[25] = 	[ 
								[ [0,9],  [0,4],    [0,24,m], [2,17,m], [5,22], [0,6]   ]
							];

alternative_solution[474] = [ 
								[ [1,21], [4,23],   [1,4,m],  [3,19],   [1,10], [1,5,m] ]
							];

alternative_solution[531] = [
								[ [0,5],  [5,19,m], [3,2,m],  [2,4,m],  [1,10], [2,18]  ],
								[ [0,15], [5,19,m], [3,2,m],  [4,1,m],  [2,5],  [2,18]  ],
								[ [1,22], [5,24,m], [0,15,m], [0,1],    [5,6],  [2,8]   ]
							];

solution = [];
//               triangle zigzag    hockeystick boomerang  trapezoid branch
solution[0]   = [ [1,22], [0,21,m], [3,8,m],  [0,16],   [3,7],  [4,12,m] ];
solution[8]   = [ [0,6],  [0,9,m],  [2,2,m],  [4,13,m], [0,21], [4,18,m] ];
solution[17]  = [ [1,1],  [1,20,m], [2,2,m],  [0,4],    [2,19], [1,10,m] ];
solution[18]  = [ [0,2],  [5,26],   [4,17],   [3,19],   [0,4],  [3,22]   ]; // pair with 368
solution[25]  = [ [1,4],  [4,19],   [1,5,m],  [2,14],   [1,18], [3,11,m] ]; // pair with 347
solution[34]  = [ [0,9],  [0,4],    [0,20],   [0,11],   [0,12], [0,6]    ];
solution[44]  = [ [0,9],  [1,6,m],  [3,8],    [3,4,m],  [3,23], [2,16,m] ];
solution[55]  = [ [0,13], [4,26],   [2,8],    [5,20],   [5,9],  [5,11]   ];
solution[66]  = [ [1,3],  [4,26,m], [5,22],   [4,17],   [3,16], [5,12,m] ];
solution[67]  = [ [0,9],  [4,7,m],  [2,2,m],  [0,16],   [3,18], [1,21,m] ];
solution[77]  = [ [1,18], [5,15],   [0,20],   [3,19],   [3,7],  [5,21]   ];
solution[85]  = [ [1,7],  [5,17,m], [2,2,m],  [5,20],   [5,22], [4,16]   ];
solution[93]  = [ [1,21], [1,6,m],  [2,1],    [3,2,m],  [0,10], [1,12]   ];
solution[101] = [ [0,9],  [4,26,m], [1,4,m],  [2,16,m], [2,19], [0,6]    ];
solution[109] = [ [0,9],  [0,17],   [0,24,m], [1,1],    [0,2],  [1,21,m] ];
solution[112] = [ [1,22], [1,4],    [3,8,m],  [0,3],    [1,16], [5,12,m] ];
solution[133] = [ [0,15], [0,24,m], [5,25],   [2,8],    [0,0],  [4,14,m] ];
solution[114] = false;
solution[126] = [ [1,3],  [5,22,m], [5,25],   [1,14],   [1,16], [5,10]   ];
solution[141] = [ [0,22], [3,2,m],  [2,1],    [5,20],   [4,13], [4,19,m] ];
solution[155] = [ [0,16], [4,14,m], [3,8],    [5,20],   [2,5],  [1,12]   ];
solution[162] = [ [0,13], [5,24,m], [3,8],    [0,7],    [3,26], [4,6,m]  ];
solution[170] = [ [1,22], [1,0,m],  [2,2,m],  [3,23],   [5,9],  [5,24]   ];
solution[184] = [ [1,2],  [4,21],   [4,23,m], [1,22,m], [5,4],  [0,18,m] ];
solution[191] = [ [0,0],  [0,24,m], [5,25],   [2,8],    [3,16], [4,14,m] ];
solution[199] = [ [1,0],  [1,20,m], [3,8],    [5,9],    [5,18], [3,7,m]  ];
solution[207] = [ [0,11], [5,26],   [4,19],   [2,7],    [2,5],  [3,22]   ]; // pair with 242
solution[213] = [ [1,22], [4,12,m], [3,7],    [4,3,m],  [1,10], [1,17,m] ];
solution[214] = [ [0,0],  [5,24,m], [2,2,m],  [0,4],    [1,18], [0,11]   ]; // pair with 221
solution[221] = [ [0,2],  [5,26],   [2,1],    [4,8,m],  [5,20], [4,12,m] ]; // pair with 214
solution[228] = [ [0,9],  [1,5],    [1,4,m],  [0,16],   [4,13], [1,21,m] ];
solution[239] = [ [3,11], [0,20,m], [2,1],    [2,8],    [0,21], [1,7]    ];
solution[242] = [ [0,11], [5,24,m], [0,15,m], [1,2],    [4,13], [1,21,m] ]; // pair with 207
solution[250] = [ [1,0],  [0,24],   [5,20],   [2,7],    [3,16], [0,18,m] ];
solution[262] = [ [0,12], [1,0,m],  [4,19],   [2,11],   [3,26], [3,17]   ];
solution[274] = [ [0,5],  [4,22],   [2,1],    [5,20],   [4,13], [1,12]   ];
solution[286] = [ [0,9],  [2,5,m],  [0,20],   [1,1],    [4,13], [2,6,m]  ];
solution[297] = [ [0,22], [1,0,m],  [4,19],   [4,17],   [5,9],  [4,25]   ];
solution[302] = [ [1,4],  [4,7,m],  [4,19],   [0,16],   [3,26], [3,13]   ];
solution[303] = [ [0,11], [4,7,m],  [5,22],   [4,3,m],  [5,9],  [2,16,m] ];
solution[309] = [ [0,11], [5,20],   [2,1],    [0,13],   [0,21], [0,6]    ];
solution[320] = [ [0,13], [4,21],   [1,11,m], [0,25,m], [4,22], [5,10]   ];
solution[332] = [ [3,13], [5,21],   [1,4,m],  [3,19],   [2,23], [3,5,m]  ];
solution[333] = [ [0,13], [1,1,m],  [4,26],   [0,6],    [2,5],  [3,22]   ];
solution[339] = [ [1,22], [4,23],   [1,4],    [0,5],    [1,8],  [5,12,m] ];
solution[347] = [ [1,8],  [0,15,m], [3,7],    [2,9,m],  [5,20], [1,12]   ]; // pair with 25
solution[348] = [ [1,21], [1,1,m],  [1,15,m], [2,20,m], [5,18], [4,6,m]  ];
solution[354] = [ [1,8],  [5,24,m], [0,15,m], [3,11,m], [0,1],  [1,21,m] ];
solution[363] = [ [0,9],  [1,16],   [3,7],    [5,20],   [2,14], [5,17,m] ];
solution[368] = [ [0,0],  [5,24,m], [0,17,m], [0,4],    [0,7],  [1,21,m] ]; // pair with 18
solution[378] = [ [0,0],  [5,26,m], [5,25,m], [2,6,m],  [1,11], [1,7]    ];
solution[389] = [ [0,0],  [0,17],   [0,24,m], [0,4],    [5,6],  [1,21,m] ]; // pair with 445
solution[394] = [ [0,2],  [1,5,m],  [2,1],    [1,11],   [0,21], [1,17,m] ];
solution[408] = [ [0,13], [4,18],   [0,15,m], [4,25],   [3,7],  [1,10]   ];
solution[415] = [ [1,10], [4,18],   [2,1],    [1,3],    [0,21], [1,7]    ];
solution[423] = [ [1,0],  [0,22,m], [4,6,m],  [4,25],   [3,21], [5,13,m] ];
solution[434] = [ [0,2],  [0,17],   [2,0,m],  [5,23,m], [1,5],  [3,22]   ];
solution[445] = [ [0,2],  [4,17,m], [4,26],   [4,8,m],  [1,1],  [3,22]   ]; // pair with 389
solution[452] = [ [0,20], [0,15],   [4,19],   [2,7],    [1,18], [4,6,m]  ];
solution[459] = [ [0,2],  [5,17,m], [4,26],   [3,19],   [2,5],  [3,22]   ];
solution[466] = [ [1,4],  [4,12],   [4,19],   [2,7],    [1,18], [3,11,m] ];
solution[474] = [ [0,9],  [4,23],   [1,4,m],  [3,19],   [4,24], [1,5,m]  ];
solution[482] = [ [1,4],  [0,16,m], [4,19],   [0,21,m], [3,6],  [2,18]   ];
solution[490] = [ [5,7],  [5,17],   [5,22],   [5,21],   [5,4],  [3,11,m] ];
solution[498] = [ [0,20], [4,17,m], [1,4,m],  [0,12,m], [2,23], [0,6]    ];
solution[506] = [ [0,6],  [2,3,m],  [3,11,m], [5,9],    [2,23], [5,10]   ];
solution[514] = [ [1,0],  [4,19,m], [3,8],    [2,13],   [3,26], [3,17]   ];
solution[522] = [ [0,20], [5,26,m], [0,15,m], [4,13,m], [0,2],  [4,17]   ];
solution[531] = [ [1,0],  [5,19,m], [3,2,m],  [3,11],   [1,10], [2,18]   ];
solution[541] = [ [1,21], [5,26,m], [3,8],    [4,13,m], [4,15], [3,7]    ];
solution[550] = [ [0,22], [4,13],   [1,21,m], [3,2,m],  [2,5],  [3,11,m] ];
solution[560] = [ [1,3],  [5,15],   [0,20],   [1,2],    [2,12], [2,13]   ];
