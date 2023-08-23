"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sudoku_js_1 = require("./sudoku.js");
let input = `
---------------------------
|| 0 0 4 | 0 5 0 | 0 0 0 ||
|| 9 0 0 | 7 3 4 | 6 0 0 ||
|| 0 0 3 | 0 2 1 | 0 4 9 ||
---------------------------
|| 0 3 5 | 0 9 0 | 4 8 0 ||
|| 0 9 0 | 0 0 0 | 0 3 0 ||
|| 0 7 6 | 0 1 0 | 9 2 0 ||
---------------------------
|| 0 1 8 | 9 7 0 | 2 0 0 ||
|| 0 0 9 | 1 8 2 | 0 0 3 ||
|| 5 0 0 | 0 6 0 | 1 0 0 ||
---------------------------
`;
console.log("Input Sudoku is......");
console.log(input);
let s = new sudoku_js_1.Sudoku();
s.decode(input);
s.solve();
console.log(`Solved Sudoku is ...`);
console.log(s.printSudoku());
