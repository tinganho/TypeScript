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

class Bar extends A {
	bar() {	
	}
}

class Baz extends B {
	baz() {
	}
}

function isFoo(x: A) x is Foo {
	return x.kind === 1; 
}

function isBar(x: A) x is Bar {
	return x.kind === 2;
}

function isBaz(x: B) x is Baz {
}

function isNonGuard(x) {
}

var a: A;
var b: B;
if(isFoo(a)) {
	a.foo();
}
if(isBar(a)) {
	a.bar();
}
if(isBar(a)) {
	var alias = a;
	alias.bar();
}

/**
 * Errors
 */

function isQux() x {
}
function isPsy(x) x is {
}
function isPee(y) x is A {
}
function isPoo(x: B) x is A {
}
if(isBaz(b)) {
	a.baz();
}
if(isNonGuard(a)) {
	a.foo();
}

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
function isFoo(x) {
    return x.kind === 1;
}
function isBar(x) {
    return x.kind === 2;
}
function isBaz(x) {
}
function isNonGuard(x) {
}
var a;
var b;
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
/**
 * Errors
 */
function isQux() {
}
function isPsy(x) {
}
function isPee(y) {
}
function isPoo(x) {
}
if (isBaz(b)) {
    a.baz();
}
if (isNonGuard(a)) {
    a.foo();
}
