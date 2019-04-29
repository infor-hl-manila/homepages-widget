(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-homepage.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-homepage.component");
    var styles_SohoHomePageComponent = [];
    var RenderType_SohoHomePageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoHomePageComponent, data: {} });
    exports.RenderType_SohoHomePageComponent = RenderType_SohoHomePageComponent;
    function View_SohoHomePageComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoHomePageComponent_0 = View_SohoHomePageComponent_0;
    function View_SohoHomePageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-homepage", ""]], [[2, "homepage", null]], null, null, View_SohoHomePageComponent_0, RenderType_SohoHomePageComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoHomePageComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isHomepage; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoHomePageComponent_Host_0 = View_SohoHomePageComponent_Host_0;
    var SohoHomePageComponentNgFactory = i0.ɵccf("div[soho-homepage]", i1.SohoHomePageComponent, View_SohoHomePageComponent_Host_0, { homePageOptions: "homePageOptions", columns: "columns", gutterSize: "gutterSize", widgetWidth: "widgetWidth", widgetHeight: "widgetHeight", animate: "animate", timeout: "timeout", easing: "easing" }, {}, ["*"]);
    exports.SohoHomePageComponentNgFactory = SohoHomePageComponentNgFactory;
});
