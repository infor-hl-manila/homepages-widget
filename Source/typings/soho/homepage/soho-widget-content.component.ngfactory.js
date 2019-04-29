(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-widget-content.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-widget-content.component");
    var styles_SohoWidgetContentComponent = [];
    var RenderType_SohoWidgetContentComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoWidgetContentComponent, data: {} });
    exports.RenderType_SohoWidgetContentComponent = RenderType_SohoWidgetContentComponent;
    function View_SohoWidgetContentComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWidgetContentComponent_0 = View_SohoWidgetContentComponent_0;
    function View_SohoWidgetContentComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-widget-content", ""]], [[2, "widget-content", null]], null, null, View_SohoWidgetContentComponent_0, RenderType_SohoWidgetContentComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoWidgetContentComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isWidgetContent; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoWidgetContentComponent_Host_0 = View_SohoWidgetContentComponent_Host_0;
    var SohoWidgetContentComponentNgFactory = i0.ɵccf("div[soho-widget-content]", i1.SohoWidgetContentComponent, View_SohoWidgetContentComponent_Host_0, {}, {}, ["*"]);
    exports.SohoWidgetContentComponentNgFactory = SohoWidgetContentComponentNgFactory;
});
