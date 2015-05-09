//// [exportNonInitializedVariablesAMD.ts]

export var a;
export let b;
export var c: string;
export let d: number;
class A {}
export var e: A;
export let f: A;


//// [exportNonInitializedVariablesAMD.js]
define(["require", "exports"], function (require, exports) {
    var A = (function () {
        function A() {
        }
        return A;
    })();
});
