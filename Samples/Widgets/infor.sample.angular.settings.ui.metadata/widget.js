define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) { return ({
        angularConfig: {
            moduleType: main_1.WidgetModule,
            componentType: main_1.WidgetComponent
        }
    }); };
});
//# sourceMappingURL=widget.js.map