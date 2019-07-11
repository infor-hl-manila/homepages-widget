(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-spinbox.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-spinbox.component");
    var styles_SohoSpinboxComponent = [];
    var RenderType_SohoSpinboxComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSpinboxComponent, data: {} });
    exports.RenderType_SohoSpinboxComponent = RenderType_SohoSpinboxComponent;
    function View_SohoSpinboxComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSpinboxComponent_0 = View_SohoSpinboxComponent_0;
    function View_SohoSpinboxComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "input", [["soho-spinbox", ""]], [[2, "spinbox", null], [1, "type", 0], [1, "id", 0], [1, "name", 0], [1, "min", 0], [1, "max", 0], [1, "value", 0], [1, "step", 0]], null, null, View_SohoSpinboxComponent_0, RenderType_SohoSpinboxComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoSpinboxComponent]), i0.ɵdid(2, 12763136, null, 0, i2.SohoSpinboxComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).spinboxClass; var currVal_1 = i0.ɵnov(_v, 2).spinboxType; var currVal_2 = i0.ɵnov(_v, 2).id; var currVal_3 = i0.ɵnov(_v, 2).name; var currVal_4 = i0.ɵnov(_v, 2).min; var currVal_5 = i0.ɵnov(_v, 2).max; var currVal_6 = i0.ɵnov(_v, 2).value; var currVal_7 = i0.ɵnov(_v, 2).step; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
    exports.View_SohoSpinboxComponent_Host_0 = View_SohoSpinboxComponent_Host_0;
    var SohoSpinboxComponentNgFactory = i0.ɵccf("input[soho-spinbox]", i2.SohoSpinboxComponent, View_SohoSpinboxComponent_Host_0, { disabled: "disabled", id: "id", name: "name", min: "min", max: "max", value: "value", step: "step", attrDisabled: "attrDisabled" }, { change: "change" }, ["*"]);
    exports.SohoSpinboxComponentNgFactory = SohoSpinboxComponentNgFactory;
});
