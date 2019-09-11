(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-line.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-line.component");
    var styles_SohoLineComponent = [];
    var RenderType_SohoLineComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoLineComponent, data: {} });
    exports.RenderType_SohoLineComponent = RenderType_SohoLineComponent;
    function View_SohoLineComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoLineComponent_0 = View_SohoLineComponent_0;
    function View_SohoLineComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-line", ""]], [[2, "chart-container", null]], null, null, View_SohoLineComponent_0, RenderType_SohoLineComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoLineComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isLine; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoLineComponent_Host_0 = View_SohoLineComponent_Host_0;
    var SohoLineComponentNgFactory = i0.ɵccf("[soho-line]", i1.SohoLineComponent, View_SohoLineComponent_Host_0, { dataset: "dataset", tooltip: "tooltip", isArea: "isArea", isBubble: "isBubble", showLegend: "showLegend", xAxis: "xAxis", yAxis: "yAxis", hideDots: "hideDots", axisLabels: "axisLabels", animate: "animate", redrawOnResize: "redrawOnResize", dots: "dots", formatterString: "formatterString", emptyMessage: "emptyMessage" }, { selected: "selected", unselected: "unselected", rendered: "rendered" }, ["*"]);
    exports.SohoLineComponentNgFactory = SohoLineComponentNgFactory;
});
