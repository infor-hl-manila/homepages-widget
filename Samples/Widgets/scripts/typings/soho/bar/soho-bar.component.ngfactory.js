(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-bar.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-bar.component");
    var styles_SohoBarComponent = [];
    var RenderType_SohoBarComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoBarComponent, data: {} });
    exports.RenderType_SohoBarComponent = RenderType_SohoBarComponent;
    function View_SohoBarComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoBarComponent_0 = View_SohoBarComponent_0;
    function View_SohoBarComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-bar", ""]], [[2, "chart-container", null]], null, null, View_SohoBarComponent_0, RenderType_SohoBarComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoBarComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isBar; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoBarComponent_Host_0 = View_SohoBarComponent_Host_0;
    var SohoBarComponentNgFactory = i0.ɵccf("[soho-bar]", i1.SohoBarComponent, View_SohoBarComponent_Host_0, { dataset: "dataset", type: "type", isStacked: "isStacked", isNormalized: "isNormalized", isGrouped: "isGrouped", showLegend: "showLegend", animate: "animate", redrawOnResize: "redrawOnResize", formatterString: "formatterString", format: "format", tooltip: "tooltip", useLogScale: "useLogScale", ticks: "ticks", showLines: "showLines", labelFactor: "labelFactor", wrapWidth: "wrapWidth", emptyMessage: "emptyMessage" }, { selected: "selected", unselected: "unselected", rendered: "rendered" }, ["*"]);
    exports.SohoBarComponentNgFactory = SohoBarComponentNgFactory;
});
