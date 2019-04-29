(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-rating.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-rating.component");
    var styles_SohoRatingComponent = [];
    var RenderType_SohoRatingComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoRatingComponent, data: {} });
    exports.RenderType_SohoRatingComponent = RenderType_SohoRatingComponent;
    function View_SohoRatingComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoRatingComponent_0 = View_SohoRatingComponent_0;
    function View_SohoRatingComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-rating", ""]], [[2, "rating", null]], null, null, View_SohoRatingComponent_0, RenderType_SohoRatingComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoRatingComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isRating; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoRatingComponent_Host_0 = View_SohoRatingComponent_Host_0;
    var SohoRatingComponentNgFactory = i0.ɵccf("[soho-rating]", i1.SohoRatingComponent, View_SohoRatingComponent_Host_0, {}, {}, ["*"]);
    exports.SohoRatingComponentNgFactory = SohoRatingComponentNgFactory;
});
