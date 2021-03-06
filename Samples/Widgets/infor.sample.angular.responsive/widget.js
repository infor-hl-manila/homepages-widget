define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) {
        return {
            actions: main_1.getActions(),
            angularConfig: {
                moduleType: main_1.ResponsiveWidgetModule,
                componentType: main_1.ResponsiveWidgetComponent
            }
        };
    };
});
//# sourceMappingURL=widget.js.map