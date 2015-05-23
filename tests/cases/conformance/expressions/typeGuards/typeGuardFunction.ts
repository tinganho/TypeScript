
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

/**
 * Errors
 */

function isQux(): x {
	return true;
}

function isPsy(x): x is {
	return true;
}

function isPee(y): x is A {
	return true;
}

function isPoo(x: A): x is B {
	return true;
}

function isMan(x: string): x is number {
	return true;
}

function isBaj(x: A, y): x is Foo {
	return true;
}

function isSam(x: A): x is A {	
	return true;
}

function isGen<T>(a: string): a is T[] {
	return true;
}

if (isBaz(b)) {
	a.baz();
}

function isNonGuard(x) {
}

if (isNonGuard(a)) {
	a.foo();
}