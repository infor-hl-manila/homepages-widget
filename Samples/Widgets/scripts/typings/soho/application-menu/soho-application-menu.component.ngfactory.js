(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-application-menu.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-application-menu.component");
    var styles_SohoApplicationMenuComponent = [];
    var RenderType_SohoApplicationMenuComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoApplicationMenuComponent, data: {} });
    exports.RenderType_SohoApplicationMenuComponent = RenderType_SohoApplicationMenuComponent;
    function View_SohoApplicationMenuComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoApplicationMenuComponent_0 = View_SohoApplicationMenuComponent_0;
    function View_SohoApplicationMenuComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "nav", [["soho-application-menu", ""]], [[8, "className", 0], [8, "id", 0]], null, null, View_SohoApplicationMenuComponent_0, RenderType_SohoApplicationMenuComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoApplicationMenuComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).classes; var currVal_1 = i0.ɵnov(_v, 1).menuId; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoApplicationMenuComponent_Host_0 = View_SohoApplicationMenuComponent_Host_0;
    var SohoApplicationMenuComponentNgFactory = i0.ɵccf("nav[soho-application-menu]", i1.SohoApplicationMenuComponent, View_SohoApplicationMenuComponent_Host_0, { breakpoint: "breakpoint", openOnLarge: "openOnLarge", dismissOnClickMobile: "dismissOnClickMobile", triggers: "triggers", filterable: "filterable" }, { visibility: "visibility", menuVisibility: "menuVisibility", filtered: "filtered" }, ["*"]);
    exports.SohoApplicationMenuComponentNgFactory = SohoApplicationMenuComponentNgFactory;
});
