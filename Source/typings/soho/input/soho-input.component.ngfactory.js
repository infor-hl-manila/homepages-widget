(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-input.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-input.component");
    var styles_SohoInputComponent = [];
    var RenderType_SohoInputComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoInputComponent, data: {} });
    exports.RenderType_SohoInputComponent = RenderType_SohoInputComponent;
    function View_SohoInputComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoInputComponent_0 = View_SohoInputComponent_0;
    function View_SohoInputComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "input", [["soho-input", ""]], [[1, "disabled", 0]], [[null, "keyup"]], function (_v, en, $event) { var ad = true; if (("keyup" === en)) {
            var pd_0 = (i0.ɵnov(_v, 2).onKeyUp($event) !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_SohoInputComponent_0, RenderType_SohoInputComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoInputComponent]), i0.ɵdid(2, 4374528, null, 0, i2.SohoInputComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isDisabled; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoInputComponent_Host_0 = View_SohoInputComponent_Host_0;
    var SohoInputComponentNgFactory = i0.ɵccf("input[soho-input]", i2.SohoInputComponent, View_SohoInputComponent_Host_0, { isDisabled: "isDisabled" }, { change: "change" }, ["*"]);
    exports.SohoInputComponentNgFactory = SohoInputComponentNgFactory;
});
