//// [exportNonInitializedVariablesCommonJS.ts]

export var a;
export let b;
export var c: string;
export let d: number;
class A {}
export var e: A;
export let f: A;

//// [exportNonInitializedVariablesCommonJS.js]
var A = (function () {
    function A() {
    }
    return A;
})();
