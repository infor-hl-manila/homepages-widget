(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-icon.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-icon.component");
    var styles_SohoIconUseComponent = [];
    var RenderType_SohoIconUseComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoIconUseComponent, data: {} });
    exports.RenderType_SohoIconUseComponent = RenderType_SohoIconUseComponent;
    function View_SohoIconUseComponent_0(_l) { return i0.ɵvid(0, [], null, null); }
    exports.View_SohoIconUseComponent_0 = View_SohoIconUseComponent_0;
    function View_SohoIconUseComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "use", [], [[1, ":xmlns:xlink", 0], [1, ":xlink:href", 0]], null, null, View_SohoIconUseComponent_0, RenderType_SohoIconUseComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoIconUseComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).xmlnsXlink; var currVal_1 = i0.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoIconUseComponent_Host_0 = View_SohoIconUseComponent_Host_0;
    var SohoIconUseComponentNgFactory = i0.ɵccf("svg:use", i1.SohoIconUseComponent, View_SohoIconUseComponent_Host_0, { icon: "icon" }, {}, []);
    exports.SohoIconUseComponentNgFactory = SohoIconUseComponentNgFactory;
    var styles_SohoIconComponent = [];
    var RenderType_SohoIconComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoIconComponent, data: {} });
    exports.RenderType_SohoIconComponent = RenderType_SohoIconComponent;
    function View_SohoIconComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:use", [], [[1, ":xmlns:xlink", 0], [1, ":xlink:href", 0]], null, null, View_SohoIconUseComponent_0, RenderType_SohoIconUseComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoIconUseComponent, [], { icon: [0, "icon"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.icon; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).xmlnsXlink; var currVal_1 = i0.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoIconComponent_0 = View_SohoIconComponent_0;
    function View_SohoIconComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["soho-icon", ""]], [[2, "icon", null], [1, "aria-hidden", 0], [1, "focusable", 0], [1, "role", 0], [2, "icon-empty-state", null]], null, null, View_SohoIconComponent_0, RenderType_SohoIconComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoIconComponent, [i0.ElementRef, i0.Renderer2], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isIcon; var currVal_1 = i0.ɵnov(_v, 1).ariaHidden; var currVal_2 = i0.ɵnov(_v, 1).focusable; var currVal_3 = i0.ɵnov(_v, 1).role; var currVal_4 = i0.ɵnov(_v, 1).isEmptyState; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    exports.View_SohoIconComponent_Host_0 = View_SohoIconComponent_Host_0;
    var SohoIconComponentNgFactory = i0.ɵccf("svg[soho-icon]", i1.SohoIconComponent, View_SohoIconComponent_Host_0, { isEmptyState: "isEmptyState", alert: "alert", icon: "icon" }, {}, []);
    exports.SohoIconComponentNgFactory = SohoIconComponentNgFactory;
});
