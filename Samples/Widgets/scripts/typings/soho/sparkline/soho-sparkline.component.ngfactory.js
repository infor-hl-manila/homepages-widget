(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-sparkline.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-sparkline.component");
    var styles_SohoSparklineComponent = [];
    var RenderType_SohoSparklineComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSparklineComponent, data: {} });
    exports.RenderType_SohoSparklineComponent = RenderType_SohoSparklineComponent;
    function View_SohoSparklineComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSparklineComponent_0 = View_SohoSparklineComponent_0;
    function View_SohoSparklineComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-sparkline", ""]], [[2, "sparkline", null]], null, null, View_SohoSparklineComponent_0, RenderType_SohoSparklineComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoSparklineComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSparkline; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoSparklineComponent_Host_0 = View_SohoSparklineComponent_Host_0;
    var SohoSparklineComponentNgFactory = i0.ɵccf("[soho-sparkline]", i1.SohoSparklineComponent, View_SohoSparklineComponent_Host_0, { dataset: "dataset", type: "type", colors: "colors", isDots: "isDots", isPeakDot: "isPeakDot", isMinMax: "isMinMax", isMedianRange: "isMedianRange" }, { rendered: "rendered" }, ["*"]);
    exports.SohoSparklineComponentNgFactory = SohoSparklineComponentNgFactory;
});
