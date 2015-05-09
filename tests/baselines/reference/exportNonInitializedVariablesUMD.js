//// [exportNonInitializedVariablesUMD.ts]

export var a;
export let b;
export var c: string;
export let d: number;
class A {}
export var e: A;
export let f: A;

//// [exportNonInitializedVariablesUMD.js]
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    var A = (function () {
        function A() {
        }
        return A;
    })();
});
