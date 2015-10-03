// A type guard of the form x instanceof C, where C is of a subtype of the global type 'Function' 
// and C has a property named 'prototype'
//  - when true, narrows the type of x to the type of the 'prototype' property in C provided 
//    it is a subtype of the type of x, or
//  - when false, has no effect on the type of x.

class C1 {
    p1: string;
}
class C2 {
    p2: number;
}
class D1 extends C1 {
    p3: number;
}
var str: string;
var num: number;
var strOrNum: string | number;

var ctor1: C1 | C2;
str = ctor1 instanceof C1 && ctor1.p1; // C1
num = ctor1 instanceof C2 && ctor1.p2; // C2
str = ctor1 instanceof D1 && ctor1.p1; // D1
num = ctor1 instanceof D1 && ctor1.p3; // D1

var ctor2: C2 | D1;
num = ctor2 instanceof C2 && ctor2.p2; // C2
num = ctor2 instanceof D1 && ctor2.p3; // D1
str = ctor2 instanceof D1 && ctor2.p1; // D1
var r2: D1 | C2 = ctor2 instanceof C1 && ctor2; // C2 | D1

var ctor3: C1 | C2;
if (ctor3 instanceof C1) {
    ctor3.p1; // C1
}
else {
    ctor3.p2; // C2
}