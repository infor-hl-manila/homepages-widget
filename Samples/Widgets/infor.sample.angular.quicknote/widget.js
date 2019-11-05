define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
    exports.widgetFactory = function (context) {
=======
<<<<<<< HEAD
    exports.widgetFactory = function (context) {
=======
    exports.widgetFactory = function () {
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
        return {
            angularConfig: {
                moduleType: main_1.QuicknoteModule,
                componentType: main_1.QuicknoteComponent
            },
            actions: main_1.getActions()
        };
    };
});
//# sourceMappingURL=widget.js.map