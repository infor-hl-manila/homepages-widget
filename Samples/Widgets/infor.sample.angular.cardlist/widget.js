define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) {
        return {
            angularConfig: {
                moduleType: main_1.CardListModule,
                componentType: main_1.CardListComponent
            }
        };
    };
});
//# sourceMappingURL=widget.js.map