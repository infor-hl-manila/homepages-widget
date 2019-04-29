(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-wizard-page.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-wizard-page.component");
    var styles_SohoWizardPageComponent = ["[_nghost-%COMP%] {\n        flex:           1;\n        display:        flex;\n        flex-direction: column;\n        overflow-y:     auto;\n    }"];
    var RenderType_SohoWizardPageComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoWizardPageComponent, data: {} });
    exports.RenderType_SohoWizardPageComponent = RenderType_SohoWizardPageComponent;
    function View_SohoWizardPageComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWizardPageComponent_0 = View_SohoWizardPageComponent_0;
    function View_SohoWizardPageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-wizard-page", ""]], [[2, "wizard-page", null], [2, "hidden", null]], null, null, View_SohoWizardPageComponent_0, RenderType_SohoWizardPageComponent)), i0.ɵdid(1, 4243456, null, 0, i1.SohoWizardPageComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isWizardPage; var currVal_1 = i0.ɵnov(_v, 1).hidden; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoWizardPageComponent_Host_0 = View_SohoWizardPageComponent_Host_0;
    var SohoWizardPageComponentNgFactory = i0.ɵccf("div[soho-wizard-page]", i1.SohoWizardPageComponent, View_SohoWizardPageComponent_Host_0, { tickId: "tickId" }, { activated: "activated" }, ["*"]);
    exports.SohoWizardPageComponentNgFactory = SohoWizardPageComponentNgFactory;
});
