//// [typeGuardsOfFormInstanceOfWithAny.ts]
class A {}

var x: any;

if (x instanceof A) {
    x; // A
}
else {
    x; // any
}

//// [typeGuardsOfFormInstanceOfWithAny.js]
var A = (function () {
    function A() {
    }
    return A;
})();
var x;
if (x instanceof A) {
    x; // A
}
else {
    x; // any
}
