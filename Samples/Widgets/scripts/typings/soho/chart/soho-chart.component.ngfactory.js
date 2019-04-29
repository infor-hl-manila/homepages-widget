(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-chart.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-chart.component");
    var styles_SohoChartComponent = [];
    var RenderType_SohoChartComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoChartComponent, data: {} });
    exports.RenderType_SohoChartComponent = RenderType_SohoChartComponent;
    function View_SohoChartComponent_0(_l) { return i0.ɵvid(0, [], null, null); }
    exports.View_SohoChartComponent_0 = View_SohoChartComponent_0;
    function View_SohoChartComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-chart", ""]], null, null, null, View_SohoChartComponent_0, RenderType_SohoChartComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoChartComponent, [i0.ElementRef, i0.NgZone], null, null)], null, null); }
    exports.View_SohoChartComponent_Host_0 = View_SohoChartComponent_Host_0;
    var SohoChartComponentNgFactory = i0.ɵccf("div[soho-chart]", i1.SohoChartComponent, View_SohoChartComponent_Host_0, { chartOptions: "chartOptions", selectedIndex: "selectedIndex", dataSet: "dataSet", type: "type", axisLabels: "axisLabels", showLegend: "showLegend", hideLabels: "hideLabels", formatterString: "formatterString", legendFormatter: "legendFormatter", chartLabel: "chartLabel", chartredrawOnResizeLabel: "chartredrawOnResizeLabel", chartAnimate: "chartAnimate" }, { selected: "selected", unselected: "unselected", rendered: "rendered", contextmenu: "contextmenu" }, []);
    exports.SohoChartComponentNgFactory = SohoChartComponentNgFactory;
});
