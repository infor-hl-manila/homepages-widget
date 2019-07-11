(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-icons-extended.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-icons-extended.component");
    var styles_SohoIconsExtendedComponent = [];
    var RenderType_SohoIconsExtendedComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoIconsExtendedComponent, data: {} });
    exports.RenderType_SohoIconsExtendedComponent = RenderType_SohoIconsExtendedComponent;
    function View_SohoIconsExtendedComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Please remove `soho-icons-ext` as all icons are now in one file per theme (svg.html or theme-uplift-svg.html)"])), (_l()(), i0.ɵted(-1, null, [" -->"]))], null, null); }
    exports.View_SohoIconsExtendedComponent_0 = View_SohoIconsExtendedComponent_0;
    function View_SohoIconsExtendedComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-icons-ext", [], [[4, "display", null]], null, null, View_SohoIconsExtendedComponent_0, RenderType_SohoIconsExtendedComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoIconsExtendedComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).none; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoIconsExtendedComponent_Host_0 = View_SohoIconsExtendedComponent_Host_0;
    var SohoIconsExtendedComponentNgFactory = i0.ɵccf("soho-icons-ext", i1.SohoIconsExtendedComponent, View_SohoIconsExtendedComponent_Host_0, {}, {}, []);
    exports.SohoIconsExtendedComponentNgFactory = SohoIconsExtendedComponentNgFactory;
});
