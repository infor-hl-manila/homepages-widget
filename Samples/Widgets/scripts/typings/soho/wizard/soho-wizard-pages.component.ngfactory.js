(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-wizard-pages.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-wizard-pages.component");
    var styles_SohoWizardPagesComponent = ["[_nghost-%COMP%] {\n    display:        flex;\n    flex:           1 100%;\n    margin:         0px 40px 0px 40px;\n    border:         1px;\n  }"];
    var RenderType_SohoWizardPagesComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoWizardPagesComponent, data: {} });
    exports.RenderType_SohoWizardPagesComponent = RenderType_SohoWizardPagesComponent;
    function View_SohoWizardPagesComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWizardPagesComponent_0 = View_SohoWizardPagesComponent_0;
    function View_SohoWizardPagesComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["soho-wizard-pages", ""]], null, null, null, View_SohoWizardPagesComponent_0, RenderType_SohoWizardPagesComponent)), i0.ɵdid(1, 49152, null, 1, i1.SohoWizardPagesComponent, [], null, null), i0.ɵqud(603979776, 1, { pages: 1 })], null, null); }
    exports.View_SohoWizardPagesComponent_Host_0 = View_SohoWizardPagesComponent_Host_0;
    var SohoWizardPagesComponentNgFactory = i0.ɵccf("div[soho-wizard-pages]", i1.SohoWizardPagesComponent, View_SohoWizardPagesComponent_Host_0, {}, {}, ["*"]);
    exports.SohoWizardPagesComponentNgFactory = SohoWizardPagesComponentNgFactory;
});
