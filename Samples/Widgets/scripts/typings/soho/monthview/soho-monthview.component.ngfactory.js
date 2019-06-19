(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-monthview.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-monthview.component");
    var styles_SohoMonthViewComponent = [];
    var RenderType_SohoMonthViewComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoMonthViewComponent, data: {} });
    exports.RenderType_SohoMonthViewComponent = RenderType_SohoMonthViewComponent;
    function View_SohoMonthViewComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoMonthViewComponent_0 = View_SohoMonthViewComponent_0;
    function View_SohoMonthViewComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-monthview", ""]], null, null, null, View_SohoMonthViewComponent_0, RenderType_SohoMonthViewComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoMonthViewComponent, [i0.ElementRef, i0.NgZone, i0.ChangeDetectorRef], null, null)], null, null); }
    exports.View_SohoMonthViewComponent_Host_0 = View_SohoMonthViewComponent_Host_0;
    var SohoMonthViewComponentNgFactory = i0.ɵccf("div[soho-monthview]", i1.SohoMonthViewComponent, View_SohoMonthViewComponent_Host_0, { month: "month", year: "year", showMonthYearPicker: "showMonthYearPicker" }, { selected: "selected", monthRendered: "monthRendered" }, ["*"]);
    exports.SohoMonthViewComponentNgFactory = SohoMonthViewComponentNgFactory;
});
