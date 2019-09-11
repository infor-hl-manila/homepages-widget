(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-masthead.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-masthead.component");
    var styles_SohoMastheadComponent = ["[_nghost-%COMP%] {\n      display: block;\n    }"];
    var RenderType_SohoMastheadComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoMastheadComponent, data: {} });
    exports.RenderType_SohoMastheadComponent = RenderType_SohoMastheadComponent;
    function View_SohoMastheadComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "toolbar no-actions-button"], ["role", "toolbar"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "buttonset"]], null, null, null, null, null)), i0.ɵncd(null, 1)], null, null); }
    exports.View_SohoMastheadComponent_0 = View_SohoMastheadComponent_0;
    function View_SohoMastheadComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-masthead", [], [[8, "className", 0]], null, null, View_SohoMastheadComponent_0, RenderType_SohoMastheadComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoMastheadComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).classes; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoMastheadComponent_Host_0 = View_SohoMastheadComponent_Host_0;
    var SohoMastheadComponentNgFactory = i0.ɵccf("soho-masthead", i1.SohoMastheadComponent, View_SohoMastheadComponent_Host_0, { ariaLabel: "ariaLabel" }, {}, ["soho-masthead-title", "soho-masthead-buttonset"]);
    exports.SohoMastheadComponentNgFactory = SohoMastheadComponentNgFactory;
});
