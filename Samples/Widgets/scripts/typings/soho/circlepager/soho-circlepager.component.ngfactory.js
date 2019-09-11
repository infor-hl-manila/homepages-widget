(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-circlepager.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-circlepager.component");
    var styles_SohoCirclepagerComponent = [];
    var RenderType_SohoCirclepagerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoCirclepagerComponent, data: {} });
    exports.RenderType_SohoCirclepagerComponent = RenderType_SohoCirclepagerComponent;
    function View_SohoCirclepagerComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoCirclepagerComponent_0 = View_SohoCirclepagerComponent_0;
    function View_SohoCirclepagerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-circlepager", ""]], [[2, "circlepager", null]], null, null, View_SohoCirclepagerComponent_0, RenderType_SohoCirclepagerComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoCirclepagerComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isCirclePager; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoCirclepagerComponent_Host_0 = View_SohoCirclepagerComponent_Host_0;
    var SohoCirclepagerComponentNgFactory = i0.ɵccf("[soho-circlepager]", i1.SohoCirclepagerComponent, View_SohoCirclepagerComponent_Host_0, { slidesToShow: "slidesToShow", startingSlide: "startingSlide", loop: "loop" }, {}, ["*"]);
    exports.SohoCirclepagerComponentNgFactory = SohoCirclepagerComponentNgFactory;
});
