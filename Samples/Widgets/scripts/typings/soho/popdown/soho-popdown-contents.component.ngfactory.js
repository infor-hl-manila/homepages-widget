(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-popdown-contents.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-popdown-contents.component");
    var styles_SohoPopDownContentsComponent = [];
    var RenderType_SohoPopDownContentsComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPopDownContentsComponent, data: {} });
    exports.RenderType_SohoPopDownContentsComponent = RenderType_SohoPopDownContentsComponent;
    function View_SohoPopDownContentsComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPopDownContentsComponent_0 = View_SohoPopDownContentsComponent_0;
    function View_SohoPopDownContentsComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-popdown-contents", [], [[2, "popdown", null]], null, null, View_SohoPopDownContentsComponent_0, RenderType_SohoPopDownContentsComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoPopDownContentsComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isPopDownContents; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoPopDownContentsComponent_Host_0 = View_SohoPopDownContentsComponent_Host_0;
    var SohoPopDownContentsComponentNgFactory = i0.ɵccf("soho-popdown-contents", i1.SohoPopDownContentsComponent, View_SohoPopDownContentsComponent_Host_0, {}, {}, ["*"]);
    exports.SohoPopDownContentsComponentNgFactory = SohoPopDownContentsComponentNgFactory;
});
