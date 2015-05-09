//// [tests/cases/compiler/separateCompilationOut.ts] ////

//// [file1.ts]

export var x;
//// [file2.ts]
var y;

//// [file1.js]
//// [all.js]
var y;
