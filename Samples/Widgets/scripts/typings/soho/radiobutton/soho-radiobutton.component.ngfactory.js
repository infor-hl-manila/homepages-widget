(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-radiobutton.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-radiobutton.component");
    var styles_SohoRadioButtonComponent = [];
    var RenderType_SohoRadioButtonComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoRadioButtonComponent, data: {} });
    exports.RenderType_SohoRadioButtonComponent = RenderType_SohoRadioButtonComponent;
    function View_SohoRadioButtonComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoRadioButtonComponent_0 = View_SohoRadioButtonComponent_0;
    function View_SohoRadioButtonComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input", [["soho-radiobutton", ""]], [[1, "type", 0], [2, "radio", null], [1, "checked", 0]], null, null, View_SohoRadioButtonComponent_0, RenderType_SohoRadioButtonComponent)), i0.ɵdid(1, 4243456, null, 0, i1.SohoRadioButtonComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isRadioType; var currVal_1 = i0.ɵnov(_v, 1).isRadioButton; var currVal_2 = i0.ɵnov(_v, 1).checked; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
    exports.View_SohoRadioButtonComponent_Host_0 = View_SohoRadioButtonComponent_Host_0;
    var SohoRadioButtonComponentNgFactory = i0.ɵccf("input[soho-radiobutton]", i1.SohoRadioButtonComponent, View_SohoRadioButtonComponent_Host_0, { value: "value", disabled: "disabled", checked: "checked" }, { change: "change" }, ["*"]);
    exports.SohoRadioButtonComponentNgFactory = SohoRadioButtonComponentNgFactory;
});
