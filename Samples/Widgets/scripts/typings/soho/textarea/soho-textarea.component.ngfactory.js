(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-textarea.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-textarea.component");
    var styles_SohoTextAreaComponent = [];
    var RenderType_SohoTextAreaComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTextAreaComponent, data: {} });
    exports.RenderType_SohoTextAreaComponent = RenderType_SohoTextAreaComponent;
    function View_SohoTextAreaComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTextAreaComponent_0 = View_SohoTextAreaComponent_0;
    function View_SohoTextAreaComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "textarea", [["soho-textarea", ""]], [[2, "resizable", null]], [[null, "input"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
            var pd_0 = (i0.ɵnov(_v, 2).oninput($event, $event.target) !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_SohoTextAreaComponent_0, RenderType_SohoTextAreaComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoTextAreaComponent]), i0.ɵdid(2, 4374528, null, 0, i2.SohoTextAreaComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).resizable; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoTextAreaComponent_Host_0 = View_SohoTextAreaComponent_Host_0;
    var SohoTextAreaComponentNgFactory = i0.ɵccf("textarea[soho-textarea]", i2.SohoTextAreaComponent, View_SohoTextAreaComponent_Host_0, { disabled: "disabled", readonly: "readonly", resizable: "resizable", maxLength: "maxLength", autoGrow: "autoGrow", autoGrowMaxHeight: "autoGrowMaxHeight", characterCounter: "characterCounter", printable: "printable", charRemainingText: "charRemainingText", charMaxText: "charMaxText" }, { updated: "updated", change: "change" }, ["*"]);
    exports.SohoTextAreaComponentNgFactory = SohoTextAreaComponentNgFactory;
});
