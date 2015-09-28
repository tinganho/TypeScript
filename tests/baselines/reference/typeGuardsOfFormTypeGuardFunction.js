//// [typeGuardsOfFormTypeGuardFunction.ts]
function f(x: any): x is string {
    return true;
}

var x: any;

if (f(x)) {
    x; // string
}
else {
    x; // any
}

//// [typeGuardsOfFormTypeGuardFunction.js]
function f(x) {
    return true;
}
var x;
if (f(x)) {
    x; // string
}
else {
    x; // any
}
