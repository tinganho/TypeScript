//@target: ES6

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