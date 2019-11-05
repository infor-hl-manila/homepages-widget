define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
    exports.widgetFactory = function (context) {
=======
    exports.widgetFactory = function () {
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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