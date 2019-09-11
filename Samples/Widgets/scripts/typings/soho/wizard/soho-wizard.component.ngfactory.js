(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-wizard.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-wizard.component");
    var styles_SohoWizardComponent = ["[_nghost-%COMP%] {\n        display:        flex;\n        flex:           1;\n        flex-direction: column;\n    }"];
    var RenderType_SohoWizardComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoWizardComponent, data: {} });
    exports.RenderType_SohoWizardComponent = RenderType_SohoWizardComponent;
    function View_SohoWizardComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWizardComponent_0 = View_SohoWizardComponent_0;
    function View_SohoWizardComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["soho-wizard", ""]], [[2, "wizard", null]], null, null, View_SohoWizardComponent_0, RenderType_SohoWizardComponent)), i0.ɵdid(1, 5423104, null, 2, i1.SohoWizardComponent, [i0.ElementRef], null, null), i0.ɵqud(603979776, 1, { pagesContainer: 0 }), i0.ɵqud(603979776, 2, { header: 0 })], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isWizardClass; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoWizardComponent_Host_0 = View_SohoWizardComponent_Host_0;
    var SohoWizardComponentNgFactory = i0.ɵccf("div[soho-wizard]", i1.SohoWizardComponent, View_SohoWizardComponent_Host_0, { ticks: "ticks", currentTickId: "currentTickId", beforeActivate: "beforeActivate" }, { activated: "activated", afteractivated: "afteractivated" }, ["*"]);
    exports.SohoWizardComponentNgFactory = SohoWizardComponentNgFactory;
});
