(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-widget-header.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-widget-header.component");
    var styles_SohoWidgetHeaderComponent = [];
    var RenderType_SohoWidgetHeaderComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoWidgetHeaderComponent, data: {} });
    exports.RenderType_SohoWidgetHeaderComponent = RenderType_SohoWidgetHeaderComponent;
    function View_SohoWidgetHeaderComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWidgetHeaderComponent_0 = View_SohoWidgetHeaderComponent_0;
    function View_SohoWidgetHeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-widget-header", ""]], [[2, "widget-header", null]], null, null, View_SohoWidgetHeaderComponent_0, RenderType_SohoWidgetHeaderComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoWidgetHeaderComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isWidgetHeader; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoWidgetHeaderComponent_Host_0 = View_SohoWidgetHeaderComponent_Host_0;
    var SohoWidgetHeaderComponentNgFactory = i0.ɵccf("div[soho-widget-header]", i1.SohoWidgetHeaderComponent, View_SohoWidgetHeaderComponent_Host_0, {}, {}, ["*"]);
    exports.SohoWidgetHeaderComponentNgFactory = SohoWidgetHeaderComponentNgFactory;
});
