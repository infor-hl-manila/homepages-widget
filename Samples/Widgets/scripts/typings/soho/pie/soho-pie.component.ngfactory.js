(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-pie.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-pie.component");
    var styles_SohoPieComponent = [];
    var RenderType_SohoPieComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPieComponent, data: {} });
    exports.RenderType_SohoPieComponent = RenderType_SohoPieComponent;
    function View_SohoPieComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPieComponent_0 = View_SohoPieComponent_0;
    function View_SohoPieComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-pie", ""]], [[2, "chart-container", null]], null, null, View_SohoPieComponent_0, RenderType_SohoPieComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoPieComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isPie; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoPieComponent_Host_0 = View_SohoPieComponent_Host_0;
    var SohoPieComponentNgFactory = i0.ɵccf("[soho-pie]", i1.SohoPieComponent, View_SohoPieComponent_Host_0, { dataset: "dataset", isDonut: "isDonut", animationSpeed: "animationSpeed", animate: "animate", redrawOnResize: "redrawOnResize", hideCenterLabel: "hideCenterLabel", showLines: "showLines", showLinesMobile: "showLinesMobile", lines: "lines", showLegend: "showLegend", legendPlacement: "legendPlacement", legend: "legend", showTooltips: "showTooltips", tooltip: "tooltip" }, { selected: "selected", unselected: "unselected", rendered: "rendered" }, ["*"]);
    exports.SohoPieComponentNgFactory = SohoPieComponentNgFactory;
});
