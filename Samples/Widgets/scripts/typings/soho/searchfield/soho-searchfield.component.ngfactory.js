(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-searchfield.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-searchfield.component");
    var styles_SohoSearchFieldWrapperComponent = [];
    var RenderType_SohoSearchFieldWrapperComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSearchFieldWrapperComponent, data: {} });
    exports.RenderType_SohoSearchFieldWrapperComponent = RenderType_SohoSearchFieldWrapperComponent;
    function View_SohoSearchFieldWrapperComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSearchFieldWrapperComponent_0 = View_SohoSearchFieldWrapperComponent_0;
    function View_SohoSearchFieldWrapperComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-searchfield-wrapper", ""]], [[2, "searchfield-wrapper", null]], null, null, View_SohoSearchFieldWrapperComponent_0, RenderType_SohoSearchFieldWrapperComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoSearchFieldWrapperComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSearchfieldWrapper; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoSearchFieldWrapperComponent_Host_0 = View_SohoSearchFieldWrapperComponent_Host_0;
    var SohoSearchFieldWrapperComponentNgFactory = i0.ɵccf("[soho-searchfield-wrapper]", i1.SohoSearchFieldWrapperComponent, View_SohoSearchFieldWrapperComponent_Host_0, {}, {}, ["*"]);
    exports.SohoSearchFieldWrapperComponentNgFactory = SohoSearchFieldWrapperComponentNgFactory;
    var styles_SohoSearchFieldComponent = [];
    var RenderType_SohoSearchFieldComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSearchFieldComponent, data: {} });
    exports.RenderType_SohoSearchFieldComponent = RenderType_SohoSearchFieldComponent;
    function View_SohoSearchFieldComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSearchFieldComponent_0 = View_SohoSearchFieldComponent_0;
    function View_SohoSearchFieldComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input", [["soho-searchfield", ""]], [[2, "searchfield", null]], null, null, View_SohoSearchFieldComponent_0, RenderType_SohoSearchFieldComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoSearchFieldComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSearchField; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoSearchFieldComponent_Host_0 = View_SohoSearchFieldComponent_Host_0;
    var SohoSearchFieldComponentNgFactory = i0.ɵccf("input[soho-searchfield]", i1.SohoSearchFieldComponent, View_SohoSearchFieldComponent_Host_0, { options: "options", allResultsCallback: "allResultsCallback", categories: "categories", categoryMultiselect: "categoryMultiselect", clearable: "clearable", showAllResults: "showAllResults", showCategoryText: "showCategoryText", source: "source", template: "template" }, { selected: "selected" }, ["*"]);
    exports.SohoSearchFieldComponentNgFactory = SohoSearchFieldComponentNgFactory;
});
