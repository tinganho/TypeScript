//// [newWithSpreadES5.ts]

function f(x: number, y: number, ...z: string[]) {
}

interface A {
    f: {
        new (x: number, y: number, ...z: string[]);
    }
}

class B {
    constructor(x: number, y: number, ...z: string[]) {}
}

interface C {
    "a-b": typeof B;
}

var a: string[];
var b: A;
var c: C;
var d: A[];
var e: { [key: string]: A };
var g: C[];
var h: { [key: string]: C };

// Basic expression
new f(1, 2, "string");
new f(1, 2, ...a);
new f(1, 2, ...a, "string");

// Property access expression
new b.f(1, 2, "string");
new b.f(1, 2, ...a);
new b.f(1, 2, ...a, "string"); 

// Parenthesised expression
new (b.f)(1, 2, "string");
new (b.f)(1, 2, ...a);
new (b.f)(1, 2, ...a, "string"); 

// Element access expression
new d[1].f(1, 2, "string");
new d[1].f(1, 2, ...a);
new d[1].f(1, 2, ...a, "string");

// Element access expression with a punctuated key
new e["a-b"].f(1, 2, "string");
new e["a-b"].f(1, 2, ...a);
new e["a-b"].f(1, 2, ...a, "string");

// Basic expression
new B(1, 2, "string");
new B(1, 2, ...a);
new B(1, 2, ...a, "string");

// Property access expression
new c["a-b"](1, 2, "string");
new c["a-b"](1, 2, ...a);
new c["a-b"](1, 2, ...a, "string");

// Parenthesised expression
new (c["a-b"])(1, 2, "string");
new (c["a-b"])(1, 2, ...a);
new (c["a-b"])(1, 2, ...a, "string");

// Element access expression
new g[1]["a-b"](1, 2, "string");
new g[1]["a-b"](1, 2, ...a);
new g[1]["a-b"](1, 2, ...a, "string");

// Element access expression with a punctuated key
new h["a-b"]["a-b"](1, 2, "string");
new h["a-b"]["a-b"](1, 2, ...a);
new h["a-b"]["a-b"](1, 2, ...a, "string");

//// [newWithSpreadES5.js]
function f(x, y) {
    var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
}
var B = (function () {
    function B(x, y) {
        var z = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            z[_i - 2] = arguments[_i];
        }
    }
    return B;
})();
var a;
var b;
var c;
var d;
var e;
var g;
var h;
// Basic expression
new f(1, 2, "string");
new (f.bind.apply(f, [void 0].concat([1, 2].concat(a))));
new (f.bind.apply(f, [void 0].concat([1, 2].concat(a, ["string"]))));
// Property access expression
new b.f(1, 2, "string");
new (b.f.bind.apply(b.f, [void 0].concat([1, 2].concat(a))));
new (b.f.bind.apply(b.f, [void 0].concat([1, 2].concat(a, ["string"]))));
// Parenthesised expression
new (b.f)(1, 2, "string");
new (b.f.bind.apply(b.f, [void 0].concat([1, 2].concat(a))));
new (b.f.bind.apply(b.f, [void 0].concat([1, 2].concat(a, ["string"]))));
// Element access expression
new d[1].f(1, 2, "string");
new ((_a = d[1]).f.bind.apply(_a.f, [void 0].concat([1, 2].concat(a))));
new ((_b = d[1]).f.bind.apply(_b.f, [void 0].concat([1, 2].concat(a, ["string"]))));
// Element access expression with a punctuated key
new e["a-b"].f(1, 2, "string");
new ((_c = e["a-b"]).f.bind.apply(_c.f, [void 0].concat([1, 2].concat(a))));
new ((_d = e["a-b"]).f.bind.apply(_d.f, [void 0].concat([1, 2].concat(a, ["string"]))));
// Basic expression
new B(1, 2, "string");
new (B.bind.apply(B, [void 0].concat([1, 2].concat(a))));
new (B.bind.apply(B, [void 0].concat([1, 2].concat(a, ["string"]))));
// Property access expression
new c["a-b"](1, 2, "string");
new (c["a-b"].bind.apply(c["a-b"], [void 0].concat([1, 2].concat(a))));
new (c["a-b"].bind.apply(c["a-b"], [void 0].concat([1, 2].concat(a, ["string"]))));
// Parenthesised expression
new (c["a-b"])(1, 2, "string");
new (c["a-b"].bind.apply(c["a-b"], [void 0].concat([1, 2].concat(a))));
new (c["a-b"].bind.apply(c["a-b"], [void 0].concat([1, 2].concat(a, ["string"]))));
// Element access expression
new g[1]["a-b"](1, 2, "string");
new ((_e = g[1])["a-b"].bind.apply(_e["a-b"], [void 0].concat([1, 2].concat(a))));
new ((_f = g[1])["a-b"].bind.apply(_f["a-b"], [void 0].concat([1, 2].concat(a, ["string"]))));
// Element access expression with a punctuated key
new h["a-b"]["a-b"](1, 2, "string");
new ((_g = h["a-b"])["a-b"].bind.apply(_g["a-b"], [void 0].concat([1, 2].concat(a))));
new ((_h = h["a-b"])["a-b"].bind.apply(_h["a-b"], [void 0].concat([1, 2].concat(a, ["string"]))));
var _a, _b, _c, _d, _e, _f, _g, _h;
