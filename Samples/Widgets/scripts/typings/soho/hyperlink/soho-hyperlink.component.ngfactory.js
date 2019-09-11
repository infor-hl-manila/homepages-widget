(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../icon/soho-icon.component.ngfactory", "../icon/soho-icon.component", "@angular/common", "./soho-hyperlink.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("../icon/soho-icon.component.ngfactory");
    var i2 = require("../icon/soho-icon.component");
    var i3 = require("@angular/common");
    var i4 = require("./soho-hyperlink.component");
    var styles_SohoHyperlinkComponent = [];
    var RenderType_SohoHyperlinkComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoHyperlinkComponent, data: {} });
    exports.RenderType_SohoHyperlinkComponent = RenderType_SohoHyperlinkComponent;
    function View_SohoHyperlinkComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["soho-icon", ""]], [[2, "icon", null], [1, "aria-hidden", 0], [1, "focusable", 0], [1, "role", 0], [2, "icon-empty-state", null]], null, null, i1.View_SohoIconComponent_0, i1.RenderType_SohoIconComponent)), i0.ɵdid(1, 49152, null, 0, i2.SohoIconComponent, [i0.ElementRef, i0.Renderer2], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_5 = "caret-left"; _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isIcon; var currVal_1 = i0.ɵnov(_v, 1).ariaHidden; var currVal_2 = i0.ɵnov(_v, 1).focusable; var currVal_3 = i0.ɵnov(_v, 1).role; var currVal_4 = i0.ɵnov(_v, 1).isEmptyState; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    function View_SohoHyperlinkComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["soho-icon", ""]], [[2, "icon", null], [1, "aria-hidden", 0], [1, "focusable", 0], [1, "role", 0], [2, "icon-empty-state", null]], null, null, i1.View_SohoIconComponent_0, i1.RenderType_SohoIconComponent)), i0.ɵdid(1, 49152, null, 0, i2.SohoIconComponent, [i0.ElementRef, i0.Renderer2], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_5 = "caret-right"; _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isIcon; var currVal_1 = i0.ɵnov(_v, 1).ariaHidden; var currVal_2 = i0.ɵnov(_v, 1).focusable; var currVal_3 = i0.ɵnov(_v, 1).role; var currVal_4 = i0.ɵnov(_v, 1).isEmptyState; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    function View_SohoHyperlinkComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_SohoHyperlinkComponent_1)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SohoHyperlinkComponent_2)), i0.ɵdid(4, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isCaretLeft; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.isCaretRight; _ck(_v, 4, 0, currVal_1); }, null); }
    exports.View_SohoHyperlinkComponent_0 = View_SohoHyperlinkComponent_0;
    function View_SohoHyperlinkComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["soho-hyperlink", ""]], [[2, "hyperlink", null], [2, "show-visited", null], [2, "directional", null], [2, "back", null], [1, "href", 4], [1, "disabled", 0], [1, "isCaretRight", 0], [1, "isCaretLeft", 0]], null, null, View_SohoHyperlinkComponent_0, RenderType_SohoHyperlinkComponent)), i0.ɵdid(1, 4243456, null, 0, i4.SohoHyperlinkComponent, [i0.ElementRef], { sohoHyperlink: [0, "sohoHyperlink"] }, null)], function (_ck, _v) { var currVal_8 = ""; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).hyperLinkClass; var currVal_1 = i0.ɵnov(_v, 1).showVisitedClass; var currVal_2 = i0.ɵnov(_v, 1).directionalClass; var currVal_3 = i0.ɵnov(_v, 1).backClass; var currVal_4 = i0.ɵnov(_v, 1).href; var currVal_5 = i0.ɵnov(_v, 1).disabled; var currVal_6 = i0.ɵnov(_v, 1).isCaretRight; var currVal_7 = i0.ɵnov(_v, 1).isCaretLeft; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
    exports.View_SohoHyperlinkComponent_Host_0 = View_SohoHyperlinkComponent_Host_0;
    var SohoHyperlinkComponentNgFactory = i0.ɵccf("a[soho-hyperlink]", i4.SohoHyperlinkComponent, View_SohoHyperlinkComponent_Host_0, { sohoHyperlink: "soho-hyperlink", icon: "icon", href: "href", disabled: "disabled", isCaretRight: "isCaretRight", isCaretLeft: "isCaretLeft" }, { change: "change" }, ["*"]);
    exports.SohoHyperlinkComponentNgFactory = SohoHyperlinkComponentNgFactory;
});
