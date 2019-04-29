(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-autocomplete.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-autocomplete.component");
    var styles_SohoAutoCompleteComponent = [];
    var RenderType_SohoAutoCompleteComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoAutoCompleteComponent, data: {} });
    exports.RenderType_SohoAutoCompleteComponent = RenderType_SohoAutoCompleteComponent;
    function View_SohoAutoCompleteComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoAutoCompleteComponent_0 = View_SohoAutoCompleteComponent_0;
    function View_SohoAutoCompleteComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "input", [["soho-autocomplete", ""]], [[2, "autocomplete", null]], [[null, "keyup"]], function (_v, en, $event) { var ad = true; if (("keyup" === en)) {
            var pd_0 = (i0.ɵnov(_v, 2).onKeyUp($event) !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_SohoAutoCompleteComponent_0, RenderType_SohoAutoCompleteComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoAutoCompleteComponent]), i0.ɵdid(2, 12763136, null, 0, i2.SohoAutoCompleteComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isAutoComplete; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoAutoCompleteComponent_Host_0 = View_SohoAutoCompleteComponent_Host_0;
    var SohoAutoCompleteComponentNgFactory = i0.ɵccf("input[soho-autocomplete]", i2.SohoAutoCompleteComponent, View_SohoAutoCompleteComponent_Host_0, { source: "source", sourceArguments: "sourceArguments", template: "template", caseSensitive: "caseSensitive", filterMode: "filterMode", delay: "delay", width: "width", offset: "offset", autoSelectFirstItem: "autoSelectFirstItem", disabled: "disabled", readonly: "readonly" }, { change: "change", selected: "selected", beforeopen: "beforeopen" }, ["*"]);
    exports.SohoAutoCompleteComponentNgFactory = SohoAutoCompleteComponentNgFactory;
});
