(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-wizard-header.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-wizard-header.component");
    var styles_SohoWizardHeaderComponent = ["[_nghost-%COMP%] { padding: 20px 40px 60px 40px }"];
    var RenderType_SohoWizardHeaderComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoWizardHeaderComponent, data: {} });
    exports.RenderType_SohoWizardHeaderComponent = RenderType_SohoWizardHeaderComponent;
    function View_SohoWizardHeaderComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "bar"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "div", [["class", "completed-range"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWizardHeaderComponent_0 = View_SohoWizardHeaderComponent_0;
    function View_SohoWizardHeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["soho-wizard-header", ""]], [[2, "wizard-header", null]], null, null, View_SohoWizardHeaderComponent_0, RenderType_SohoWizardHeaderComponent)), i0.ɵdid(1, 49152, null, 1, i1.SohoWizardHeaderComponent, [], null, null), i0.ɵqud(603979776, 1, { steps: 1 })], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isWizardHeader; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoWizardHeaderComponent_Host_0 = View_SohoWizardHeaderComponent_Host_0;
    var SohoWizardHeaderComponentNgFactory = i0.ɵccf("div[soho-wizard-header]", i1.SohoWizardHeaderComponent, View_SohoWizardHeaderComponent_Host_0, {}, {}, ["*"]);
    exports.SohoWizardHeaderComponentNgFactory = SohoWizardHeaderComponentNgFactory;
});
