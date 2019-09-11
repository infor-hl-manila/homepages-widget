(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-form-compact.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-form-compact.component");
    var styles_SohoFormCompactComponent = [];
    var RenderType_SohoFormCompactComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoFormCompactComponent, data: {} });
    exports.RenderType_SohoFormCompactComponent = RenderType_SohoFormCompactComponent;
    function View_SohoFormCompactComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoFormCompactComponent_0 = View_SohoFormCompactComponent_0;
    function View_SohoFormCompactComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-form-compact", ""]], [[2, "form-compact", null]], null, null, View_SohoFormCompactComponent_0, RenderType_SohoFormCompactComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoFormCompactComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isFormCompact; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoFormCompactComponent_Host_0 = View_SohoFormCompactComponent_Host_0;
    var SohoFormCompactComponentNgFactory = i0.ɵccf("[soho-form-compact]", i1.SohoFormCompactComponent, View_SohoFormCompactComponent_Host_0, {}, {}, ["*"]);
    exports.SohoFormCompactComponentNgFactory = SohoFormCompactComponentNgFactory;
});
