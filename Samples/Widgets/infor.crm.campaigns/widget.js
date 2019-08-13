define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) {
        return {
            angularConfig: {
                moduleType: main_1.CampaignsWidgetModule,
                componentType: main_1.CampaignsWidgetComponent
            }
        };
    };
});
//# sourceMappingURL=widget.js.map