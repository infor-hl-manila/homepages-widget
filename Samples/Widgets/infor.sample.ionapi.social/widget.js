define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) {
        main_1.dataService.init(context);
        return {
            angularConfig: {
                moduleType: main_1.IonApiSocialModule,
                componentType: main_1.IonApiSocialComponent
            }
        };
    };
});
//# sourceMappingURL=widget.js.map