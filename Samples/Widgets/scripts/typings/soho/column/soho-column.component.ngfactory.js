(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-column.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-column.component");
    var styles_SohoColumnComponent = [];
    var RenderType_SohoColumnComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoColumnComponent, data: {} });
    exports.RenderType_SohoColumnComponent = RenderType_SohoColumnComponent;
    function View_SohoColumnComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoColumnComponent_0 = View_SohoColumnComponent_0;
    function View_SohoColumnComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-column", ""]], [[2, "chart-container", null]], null, null, View_SohoColumnComponent_0, RenderType_SohoColumnComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoColumnComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isColumn; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoColumnComponent_Host_0 = View_SohoColumnComponent_Host_0;
    var SohoColumnComponentNgFactory = i0.ɵccf("[soho-column]", i1.SohoColumnComponent, View_SohoColumnComponent_Host_0, { dataset: "dataset", type: "type", isStacked: "isStacked", showLegend: "showLegend", animate: "animate", redrawOnResize: "redrawOnResize", format: "format", formatterString: "formatterString", ticks: "ticks", emptyMessage: "emptyMessage", xAxis: "xAxis", yAxis: "yAxis" }, { selected: "selected", unselected: "unselected", rendered: "rendered" }, ["*"]);
    exports.SohoColumnComponentNgFactory = SohoColumnComponentNgFactory;
});
