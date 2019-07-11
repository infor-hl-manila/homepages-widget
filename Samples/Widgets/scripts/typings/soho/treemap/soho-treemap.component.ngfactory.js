(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-treemap.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-treemap.component");
    var styles_SohoTreemapComponent = [];
    var RenderType_SohoTreemapComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTreemapComponent, data: {} });
    exports.RenderType_SohoTreemapComponent = RenderType_SohoTreemapComponent;
    function View_SohoTreemapComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTreemapComponent_0 = View_SohoTreemapComponent_0;
    function View_SohoTreemapComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-treemap", ""]], [[2, "chart-container", null]], null, null, View_SohoTreemapComponent_0, RenderType_SohoTreemapComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoTreemapComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isTreemap; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoTreemapComponent_Host_0 = View_SohoTreemapComponent_Host_0;
    var SohoTreemapComponentNgFactory = i0.ɵccf("[soho-treemap]", i1.SohoTreemapComponent, View_SohoTreemapComponent_Host_0, { dataset: "dataset", redrawOnResize: "redrawOnResize", margin: "margin", colors: "colors", showLabel: "showLabel", labelFormatter: "labelFormatter", showTitle: "showTitle", emptyMessage: "emptyMessage" }, { rendered: "rendered" }, ["*"]);
    exports.SohoTreemapComponentNgFactory = SohoTreemapComponentNgFactory;
});
