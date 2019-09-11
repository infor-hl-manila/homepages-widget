(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-widget.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-widget.component");
    var styles_SohoWidgetComponent = [];
    var RenderType_SohoWidgetComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoWidgetComponent, data: {} });
    exports.RenderType_SohoWidgetComponent = RenderType_SohoWidgetComponent;
    function View_SohoWidgetComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWidgetComponent_0 = View_SohoWidgetComponent_0;
    function View_SohoWidgetComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-widget", ""]], [[8, "className", 0], [2, "widget", null]], null, null, View_SohoWidgetComponent_0, RenderType_SohoWidgetComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoWidgetComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).classList; var currVal_1 = i0.ɵnov(_v, 1).isWidget; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoWidgetComponent_Host_0 = View_SohoWidgetComponent_Host_0;
    var SohoWidgetComponentNgFactory = i0.ɵccf("div[soho-widget]", i1.SohoWidgetComponent, View_SohoWidgetComponent_Host_0, { widgetWidth: "widgetWidth", widgetHeight: "widgetHeight" }, {}, ["*"]);
    exports.SohoWidgetComponentNgFactory = SohoWidgetComponentNgFactory;
});
