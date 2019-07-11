(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-wizard-tick.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-wizard-tick.component");
    var styles_SohoWizardTickComponent = [];
    var RenderType_SohoWizardTickComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoWizardTickComponent, data: {} });
    exports.RenderType_SohoWizardTickComponent = RenderType_SohoWizardTickComponent;
    function View_SohoWizardTickComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "label"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWizardTickComponent_0 = View_SohoWizardTickComponent_0;
    function View_SohoWizardTickComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["soho-wizard-tick", ""]], [[2, "tick", null], [1, "href", 4], [2, "current", null], [2, "is-disabled", null]], null, null, View_SohoWizardTickComponent_0, RenderType_SohoWizardTickComponent)), i0.ɵdid(1, 4243456, null, 0, i1.SohoWizardTickComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isWizardTick; var currVal_1 = i0.ɵnov(_v, 1).hrefAttr; var currVal_2 = i0.ɵnov(_v, 1).current; var currVal_3 = i0.ɵnov(_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoWizardTickComponent_Host_0 = View_SohoWizardTickComponent_Host_0;
    var SohoWizardTickComponentNgFactory = i0.ɵccf("a[soho-wizard-tick]", i1.SohoWizardTickComponent, View_SohoWizardTickComponent_Host_0, { tickId: "tickId", current: "current", disabled: "disabled" }, {}, ["*"]);
    exports.SohoWizardTickComponentNgFactory = SohoWizardTickComponentNgFactory;
});
