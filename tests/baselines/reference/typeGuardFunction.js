//// [typeGuardFunction.ts]

class A {
    kind: number;
}

class B {
}

class Foo extends A {
    foo() {
    }
}

class DerivedFoo extends Foo {
    name: string;
}

class Bar extends A {
    bar() {
    }
}

class Baz extends B {
    baz() {
    }
}

function isA(x: any): x is A {
    return true;
}

function isFoo(x: A): x is Foo {
    return true;
}

function isBar(x: A): x is Bar {
    return true;
}

function isBaz(x: B): x is Baz {
    return true;
}

function isArrayOf_1<T>(of: (item) => T, a: any[]): a is T[] {
    return true;
}

function isArrayOf_2<T>(of: (item) => item is T, a: any[]): a is T[] {
    return true;
}

declare function getObjectOfType<T>(of: (item: any) => item is T, obj: any[]): T;

function foo(): Foo {
    return <Foo>a;
}

var a: A;
var b: B;

if (isFoo(a)) {
    a.foo();
}

if(isFoo(a)) {
    a.foo();
}

if (isBar(a)) {
    a.bar();
}

if (isBar(a)) {
    var alias = a;
    alias.bar();
}

var As: A[];
if (isArrayOf_1(foo, As)) {
    As[0].foo();
}
if (isArrayOf_2(isFoo, As)) {
    As[0].foo();
}

function hasMultipleParameters(x: any, y): x is Foo {
    return true;
}

// The parameter index and argument index for the type guard target is matching.
if (hasMultipleParameters(a, 0)) {
    a.foo();
}

function hasAMatchingParameterTypeWithTypeGuardType(x: A): x is A {
    return true;
}

function acceptingBoolean(a: boolean) {
}
acceptingBoolean(isFoo(a));

function acceptingTypeGuardFunction(a: (item) => item is Foo) {
}
acceptingTypeGuardFunction(isFoo);

// Foo extends A and Baz extends B
var union: Foo | Baz;
if(isA(union)) {
    union.kind;
}

var subType: DerivedFoo;
if(isFoo(subType)) {
    subType.name;
}

/**
 * Errors
 */

function hasANonBooleanReturnStatement(x): x is A {
    return '';
}

function hasTypeGuardTypeInsideTypeGuardType(x): x is x is A {
    return true;
}

function isMissingIsKeyword(): x {
    return true;
}

function isMissingTypeInTypeGuardType(x): x is {
    return true;
}

function hasNonMatchingParameter(y): x is A {
    return true;
}

function hasNonMatchingParameterType1(x: A): x is B {
    return true;
}

function hasNonMatchingParameterType2(x: string): x is number {
    return true;
}

function hasNonMathcingGenericType<T>(a: string): a is T[] {
    return true;
}

if (isBaz(b)) {
    a.baz(); // Error
}

// Error: Type Foo is not assignable to string
var f: string = getObjectOfType(isFoo, [1, 2]); 

// The parameter index and argument index for the type guard target is not matching.
if (hasMultipleParameters(0, a)) {
    a.foo(); // Error
}

function hasNoTypeGuard(x) {
}

if (hasNoTypeGuard(a)) {
    a.foo(); // Error
}

// Only do a return type type checking. Because parameters are currently
// not signature checked in a general callback.
function acceptingDifferentSignatureTypeGuardFunction(a: (item) => item is Baz) {
}
acceptingDifferentSignatureTypeGuardFunction(isFoo);

var test1: (a, b) => boolean;
test1 = function(a, b): a is A  {
    return true;
};

var test2: (a, b) => a is A;
test2 = function(a, b): boolean  {
    return true;
};

var test3: (a, b) => a is A;
test3 = function(a, b): b is A  {
    return true;
};

//// [typeGuardFunction.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var A = (function () {
    function A() {
    }
    return A;
})();
var B = (function () {
    function B() {
    }
    return B;
})();
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo() {
        _super.apply(this, arguments);
    }
    Foo.prototype.foo = function () {
    };
    return Foo;
})(A);
var DerivedFoo = (function (_super) {
    __extends(DerivedFoo, _super);
    function DerivedFoo() {
        _super.apply(this, arguments);
    }
    return DerivedFoo;
})(Foo);
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        _super.apply(this, arguments);
    }
    Bar.prototype.bar = function () {
    };
    return Bar;
})(A);
var Baz = (function (_super) {
    __extends(Baz, _super);
    function Baz() {
        _super.apply(this, arguments);
    }
    Baz.prototype.baz = function () {
    };
    return Baz;
})(B);
function isA(x) {
    return true;
}
function isFoo(x) {
    return true;
}
function isBar(x) {
    return true;
}
function isBaz(x) {
    return true;
}
function isArrayOf_1(of, a) {
    return true;
}
function isArrayOf_2(of, a) {
    return true;
}
function foo() {
    return a;
}
var a;
var b;
if (isFoo(a)) {
    a.foo();
}
if (isFoo(a)) {
    a.foo();
}
if (isBar(a)) {
    a.bar();
}
if (isBar(a)) {
    var alias = a;
    alias.bar();
}
var As;
if (isArrayOf_1(foo, As)) {
    As[0].foo();
}
if (isArrayOf_2(isFoo, As)) {
    As[0].foo();
}
function hasMultipleParameters(x, y) {
    return true;
}
// The parameter index and argument index for the type guard target is matching.
if (hasMultipleParameters(a, 0)) {
    a.foo();
}
function hasAMatchingParameterTypeWithTypeGuardType(x) {
    return true;
}
function acceptingBoolean(a) {
}
acceptingBoolean(isFoo(a));
function acceptingTypeGuardFunction(a) {
}
acceptingTypeGuardFunction(isFoo);
// Foo extends A and Baz extends B
var union;
if (isA(union)) {
    union.kind;
}
var subType;
if (isFoo(subType)) {
    subType.name;
}
/**
 * Errors
 */
function hasANonBooleanReturnStatement(x) {
    return '';
}
function hasTypeGuardTypeInsideTypeGuardType(x) {
    return true;
}
function isMissingIsKeyword() {
    return true;
}
function isMissingTypeInTypeGuardType(x) {
    return true;
}
function hasNonMatchingParameter(y) {
    return true;
}
function hasNonMatchingParameterType1(x) {
    return true;
}
function hasNonMatchingParameterType2(x) {
    return true;
}
function hasNonMathcingGenericType(a) {
    return true;
}
if (isBaz(b)) {
    a.baz(); // Error
}
// Error: Type Foo is not assignable to string
var f = getObjectOfType(isFoo, [1, 2]);
// The parameter index and argument index for the type guard target is not matching.
if (hasMultipleParameters(0, a)) {
    a.foo(); // Error
}
function hasNoTypeGuard(x) {
}
if (hasNoTypeGuard(a)) {
    a.foo(); // Error
}
// Only do a return type type checking. Because parameters are currently
// not signature checked in a general callback.
function acceptingDifferentSignatureTypeGuardFunction(a) {
}
acceptingDifferentSignatureTypeGuardFunction(isFoo);
var test1;
test1 = function (a, b) {
    return true;
};
var test2;
test2 = function (a, b) {
    return true;
};
var test3;
test3 = function (a, b) {
    return true;
};
