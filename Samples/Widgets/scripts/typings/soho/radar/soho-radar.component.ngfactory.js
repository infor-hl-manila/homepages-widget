(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-radar.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-radar.component");
    var styles_SohoRadarComponent = [];
    var RenderType_SohoRadarComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoRadarComponent, data: {} });
    exports.RenderType_SohoRadarComponent = RenderType_SohoRadarComponent;
    function View_SohoRadarComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoRadarComponent_0 = View_SohoRadarComponent_0;
    function View_SohoRadarComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-radar", ""]], [[2, "chart-container", null]], null, null, View_SohoRadarComponent_0, RenderType_SohoRadarComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoRadarComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isRadar; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoRadarComponent_Host_0 = View_SohoRadarComponent_Host_0;
    var SohoRadarComponentNgFactory = i0.ɵccf("[soho-radar]", i1.SohoRadarComponent, View_SohoRadarComponent_Host_0, { dataset: "dataset", redrawOnResize: "redrawOnResize", margin: "margin", levels: "levels", maxValue: "maxValue", labelFactor: "labelFactor", wrapWidth: "wrapWidth", opacityArea: "opacityArea", dotRadius: "dotRadius", opacityCircles: "opacityCircles", strokeWidth: "strokeWidth", roundStrokes: "roundStrokes", showCrosslines: "showCrosslines", showAxisLabels: "showAxisLabels", colors: "colors", showTooltips: "showTooltips", tooltip: "tooltip", axisFormatter: "axisFormatter", showLegend: "showLegend", legendPlacement: "legendPlacement", emptyMessage: "emptyMessage" }, { selected: "selected", unselected: "unselected", rendered: "rendered" }, ["*"]);
    exports.SohoRadarComponentNgFactory = SohoRadarComponentNgFactory;
});
