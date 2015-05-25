
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