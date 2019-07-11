(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-lookup.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-lookup.component");
    var styles_SohoLookupComponent = [];
    var RenderType_SohoLookupComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoLookupComponent, data: {} });
    exports.RenderType_SohoLookupComponent = RenderType_SohoLookupComponent;
    function View_SohoLookupComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoLookupComponent_0 = View_SohoLookupComponent_0;
    function View_SohoLookupComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "input", [["soho-lookup", ""]], [[2, "lookup", null], [1, "disabled", 0]], [[null, "keyup"]], function (_v, en, $event) { var ad = true; if (("keyup" === en)) {
            var pd_0 = (i0.ɵnov(_v, 2).onKeyUp($event) !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_SohoLookupComponent_0, RenderType_SohoLookupComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoLookupComponent]), i0.ɵdid(2, 4374528, null, 0, i2.SohoLookupComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isLookup; var currVal_1 = i0.ɵnov(_v, 2).isDisabled; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoLookupComponent_Host_0 = View_SohoLookupComponent_Host_0;
    var SohoLookupComponentNgFactory = i0.ɵccf("input[soho-lookup]", i2.SohoLookupComponent, View_SohoLookupComponent_Host_0, { asobject: "asobject", beforeShow: "beforeShow", columns: "columns", dataset: "dataset", editable: "editable", autoWidth: "autoWidth", field: "field", match: "match", click: "click", title: "title", multiselect: "multiselect", name: "name", options: "options", source: "source", toolbar: "toolbar", isDisabled: "isDisabled" }, { afteropen: "afteropen", beforeopen: "beforeopen", change: "change", open: "open" }, ["*"]);
    exports.SohoLookupComponentNgFactory = SohoLookupComponentNgFactory;
});
