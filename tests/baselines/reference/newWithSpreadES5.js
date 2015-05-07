//// [newWithSpreadES5.ts]

function spreadMethod(x: number, y: number, ...z: string[]) {
}

interface ObjectWithSpreadMethod {
    spreadMethod: {
        new (x: number, y: number, ...z: string[]);
    }
}

class ClassWithSpreadConstructor {
    constructor(x: number, y: number, ...z: string[]) {}
}

interface ObjectWithClassWithSpreadConstructor {
    class: typeof ClassWithSpreadConstructor;
}

var spread: string[];
var objectWithSpreadMethod: ObjectWithSpreadMethod;
var objectWithClassWithSpreadConstructor: ObjectWithClassWithSpreadConstructor;
var arrayWithObjectWithSpreadMethod: ObjectWithSpreadMethod[];
var arrayWithObjectWithClassWithSpreadConstructor: ObjectWithClassWithSpreadConstructor[];

// Basic expression
new spreadMethod(1, 2, "string");
new spreadMethod(1, 2, ...spread);
new spreadMethod(1, 2, ...spread, "string");

// Property access expression
new objectWithSpreadMethod.spreadMethod(1, 2, "string");
new objectWithSpreadMethod.spreadMethod(1, 2, ...spread);
new objectWithSpreadMethod.spreadMethod(1, 2, ...spread, "string"); 

// Parenthesised expression
new (objectWithSpreadMethod.spreadMethod)(1, 2, "string");
new (objectWithSpreadMethod.spreadMethod)(1, 2, ...spread);
new (objectWithSpreadMethod.spreadMethod)(1, 2, ...spread, "string"); 

// Element access expression
new arrayWithObjectWithSpreadMethod[1].spreadMethod(1, 2, "string");
new arrayWithObjectWithSpreadMethod[1].spreadMethod(1, 2, ...spread);
new arrayWithObjectWithSpreadMethod[1].spreadMethod(1, 2, ...spread, "string");

// Basic expression
new ClassWithSpreadConstructor(1, 2, "string");
new ClassWithSpreadConstructor(1, 2, ...spread);
new ClassWithSpreadConstructor(1, 2, ...spread, "string");

// Property access expression
new objectWithClassWithSpreadConstructor.class(1, 2, "string");
new objectWithClassWithSpreadConstructor.class(1, 2, ...spread);
new objectWithClassWithSpreadConstructor.class(1, 2, ...spread, "string");

// Parenthesised expression
new (objectWithClassWithSpreadConstructor.class)(1, 2, "string");
new (objectWithClassWithSpreadConstructor.class)(1, 2, ...spread);
new (objectWithClassWithSpreadConstructor.class)(1, 2, ...spread, "string");

// Element access expression
new arrayWithObjectWithClassWithSpreadConstructor[1].class(1, 2, "string");
new arrayWithObjectWithClassWithSpreadConstructor[1].class(1, 2, ...spread);
new arrayWithObjectWithClassWithSpreadConstructor[1].class(1, 2, ...spread, "string");

//// [newWithSpreadES5.js]
function spreadMethod(x, y) {
    var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
}
var ClassWithSpreadConstructor = (function () {
    function ClassWithSpreadConstructor(x, y) {
        var z = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            z[_i - 2] = arguments[_i];
        }
    }
    return ClassWithSpreadConstructor;
})();
var spread;
var objectWithSpreadMethod;
var objectWithClassWithSpreadConstructor;
var arrayWithObjectWithSpreadMethod;
var arrayWithObjectWithClassWithSpreadConstructor;
// Basic expression
new spreadMethod(1, 2, "string");
new (spreadMethod.bind.apply(spreadMethod, [null].concat([1, 2].concat(spread))));
new (spreadMethod.bind.apply(spreadMethod, [null].concat([1, 2].concat(spread, ["string"]))));
// Property access expression
new objectWithSpreadMethod.spreadMethod(1, 2, "string");
new (objectWithSpreadMethod.spreadMethod.bind.apply(objectWithSpreadMethod.spreadMethod, [null].concat([1, 2].concat(spread))));
new (objectWithSpreadMethod.spreadMethod.bind.apply(objectWithSpreadMethod.spreadMethod, [null].concat([1, 2].concat(spread, ["string"]))));
// Parenthesised expression
new (objectWithSpreadMethod.spreadMethod)(1, 2, "string");
new (objectWithSpreadMethod.spreadMethod.bind.apply(objectWithSpreadMethod.spreadMethod, [null].concat([1, 2].concat(spread))));
new (objectWithSpreadMethod.spreadMethod.bind.apply(objectWithSpreadMethod.spreadMethod, [null].concat([1, 2].concat(spread, ["string"]))));
// Element access expression
new arrayWithObjectWithSpreadMethod[1].spreadMethod(1, 2, "string");
new ((_a = arrayWithObjectWithSpreadMethod[1]).spreadMethod.bind.apply(_a.spreadMethod, [null].concat([1, 2].concat(spread))));
new ((_b = arrayWithObjectWithSpreadMethod[1]).spreadMethod.bind.apply(_b.spreadMethod, [null].concat([1, 2].concat(spread, ["string"]))));
// Basic expression
new ClassWithSpreadConstructor(1, 2, "string");
new (ClassWithSpreadConstructor.bind.apply(ClassWithSpreadConstructor, [null].concat([1, 2].concat(spread))));
new (ClassWithSpreadConstructor.bind.apply(ClassWithSpreadConstructor, [null].concat([1, 2].concat(spread, ["string"]))));
// Property access expression
new objectWithClassWithSpreadConstructor.class(1, 2, "string");
new (objectWithClassWithSpreadConstructor.class.bind.apply(objectWithClassWithSpreadConstructor.class, [null].concat([1, 2].concat(spread))));
new (objectWithClassWithSpreadConstructor.class.bind.apply(objectWithClassWithSpreadConstructor.class, [null].concat([1, 2].concat(spread, ["string"]))));
// Parenthesised expression
new (objectWithClassWithSpreadConstructor.class)(1, 2, "string");
new (objectWithClassWithSpreadConstructor.class.bind.apply(objectWithClassWithSpreadConstructor.class, [null].concat([1, 2].concat(spread))));
new (objectWithClassWithSpreadConstructor.class.bind.apply(objectWithClassWithSpreadConstructor.class, [null].concat([1, 2].concat(spread, ["string"]))));
// Element access expression
new arrayWithObjectWithClassWithSpreadConstructor[1].class(1, 2, "string");
new ((_c = arrayWithObjectWithClassWithSpreadConstructor[1]).class.bind.apply(_c.class, [null].concat([1, 2].concat(spread))));
new ((_d = arrayWithObjectWithClassWithSpreadConstructor[1]).class.bind.apply(_d.class, [null].concat([1, 2].concat(spread, ["string"]))));
var _a, _b, _c, _d;
