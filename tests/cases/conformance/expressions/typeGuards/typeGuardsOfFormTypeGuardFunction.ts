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