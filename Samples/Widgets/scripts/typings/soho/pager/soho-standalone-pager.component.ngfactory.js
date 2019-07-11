(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-standalone-pager.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-standalone-pager.component");
    var styles_SohoStandalonePagerComponent = [];
    var RenderType_SohoStandalonePagerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStandalonePagerComponent, data: {} });
    exports.RenderType_SohoStandalonePagerComponent = RenderType_SohoStandalonePagerComponent;
    function View_SohoStandalonePagerComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "pager-container"]], null, null, null, null, null))], null, null); }
    exports.View_SohoStandalonePagerComponent_0 = View_SohoStandalonePagerComponent_0;
    function View_SohoStandalonePagerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-standalone-pager", ""]], null, null, null, View_SohoStandalonePagerComponent_0, RenderType_SohoStandalonePagerComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoStandalonePagerComponent, [i0.ElementRef, i0.NgZone], null, null)], null, null); }
    exports.View_SohoStandalonePagerComponent_Host_0 = View_SohoStandalonePagerComponent_Host_0;
    var SohoStandalonePagerComponentNgFactory = i0.ɵccf("div[soho-standalone-pager]", i1.SohoStandalonePagerComponent, View_SohoStandalonePagerComponent_Host_0, { pageSize: "pageSize", pageSizes: "pageSizes", showFirstButton: "showFirstButton", showLastButton: "showLastButton", showNextButton: "showNextButton", showPreviousButton: "showPreviousButton", showPageSizeSelector: "showPageSizeSelector", enableFirstButton: "enableFirstButton", enableLastButton: "enableLastButton", enablePreviousButton: "enablePreviousButton", enableNextButton: "enableNextButton", previousPageTooltip: "previousPageTooltip", firstPageTooltip: "firstPageTooltip", nextPageTooltip: "nextPageTooltip", lastPageTooltip: "lastPageTooltip" }, { firstPage: "firstPage", lastPage: "lastPage", previousPage: "previousPage", nextPage: "nextPage", pageSizeChange: "pageSizeChange" }, []);
    exports.SohoStandalonePagerComponentNgFactory = SohoStandalonePagerComponentNgFactory;
});
