//// [exportNonInitializedVariablesSystem.ts]

export var a;
export let b;
export var c: string;
export let d: number;
class A {}
export var e: A;
export let f: A;


//// [exportNonInitializedVariablesSystem.js]
System.register([], function(exports_1) {
    var a, b, c, d, A, e, f;
    return {
        setters:[],
        execute: function() {
            A = (function () {
                function A() {
                }
                return A;
            })();
        }
    }
});
