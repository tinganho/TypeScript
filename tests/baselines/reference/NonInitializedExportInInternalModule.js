//// [NonInitializedExportInInternalModule.ts]

module A {
    export var a;
    export let b;
    export var c: string;
    export let d: number;
    class A {}
    export var e: A;
    export let f: A;
}

//// [NonInitializedExportInInternalModule.js]
var A;
(function (A_1) {
    var A = (function () {
        function A() {
        }
        return A;
    })();
})(A || (A = {}));
