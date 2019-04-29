(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../icon/soho-icon.component.ngfactory", "../icon/soho-icon.component", "@angular/common", "./soho-button.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("../icon/soho-icon.component.ngfactory");
    var i2 = require("../icon/soho-icon.component");
    var i3 = require("@angular/common");
    var i4 = require("./soho-button.component");
    var styles_SohoButtonComponent = [];
    var RenderType_SohoButtonComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoButtonComponent, data: {} });
    exports.RenderType_SohoButtonComponent = RenderType_SohoButtonComponent;
    function View_SohoButtonComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["soho-icon", ""]], [[2, "icon", null], [1, "aria-hidden", 0], [1, "focusable", 0], [1, "role", 0], [2, "icon-empty-state", null]], null, null, i1.View_SohoIconComponent_0, i1.RenderType_SohoIconComponent)), i0.ɵdid(1, 49152, null, 0, i2.SohoIconComponent, [i0.ElementRef, i0.Renderer2], { icon: [0, "icon"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.currentIcon; _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isIcon; var currVal_1 = i0.ɵnov(_v, 1).ariaHidden; var currVal_2 = i0.ɵnov(_v, 1).focusable; var currVal_3 = i0.ɵnov(_v, 1).role; var currVal_4 = i0.ɵnov(_v, 1).isEmptyState; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    function View_SohoButtonComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_SohoButtonComponent_1)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), i0.ɵncd(null, 0), i0.ɵncd(null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasIcon; _ck(_v, 1, 0, currVal_0); }, null); }
    exports.View_SohoButtonComponent_0 = View_SohoButtonComponent_0;
    function View_SohoButtonComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "button", [["soho-button", ""]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 1).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_SohoButtonComponent_0, RenderType_SohoButtonComponent)), i0.ɵdid(1, 4440064, null, 0, i4.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"] }, null)], function (_ck, _v) { var currVal_17 = ""; _ck(_v, 1, 0, currVal_17); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).btn; var currVal_1 = i0.ɵnov(_v, 1).btnPrimary; var currVal_2 = i0.ɵnov(_v, 1).btnSecondary; var currVal_3 = i0.ɵnov(_v, 1).btnTertiary; var currVal_4 = i0.ɵnov(_v, 1).btnIcon; var currVal_5 = i0.ɵnov(_v, 1).btnToggle; var currVal_6 = i0.ɵnov(_v, 1).btnModal; var currVal_7 = i0.ɵnov(_v, 1).btnModalPrimary; var currVal_8 = i0.ɵnov(_v, 1).btnTogglePressed; var currVal_9 = i0.ɵnov(_v, 1).iconFavorite; var currVal_10 = i0.ɵnov(_v, 1).moveToLeft; var currVal_11 = i0.ɵnov(_v, 1).moveToRight; var currVal_12 = i0.ɵnov(_v, 1).moveToSelected; var currVal_13 = i0.ɵnov(_v, 1).noRipple; var currVal_14 = i0.ɵnov(_v, 1).type; var currVal_15 = i0.ɵnov(_v, 1).isExpandableExpander; var currVal_16 = i0.ɵnov(_v, 1).ariaPressed; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); }); }
    exports.View_SohoButtonComponent_Host_0 = View_SohoButtonComponent_Host_0;
    var SohoButtonComponentNgFactory = i0.ɵccf("button[soho-button]", i4.SohoButtonComponent, View_SohoButtonComponent_Host_0, { sohoButton: "soho-button", buttonOptions: "buttonOptions", toggleOnIcon: "toggleOnIcon", toggleOffIcon: "toggleOffIcon", replaceText: "replaceText", hideMenuArrow: "hideMenuArrow", isToggle: "isToggle", isTogglePressed: "isTogglePressed", icon: "icon", isSubmit: "isSubmit", ripple: "ripple", state: "state", toggle: "toggle", expandableExpander: "expandableExpander", moveToLeft: "moveToLeft", moveToRight: "moveToRight", moveToSelected: "moveToSelected" }, {}, ["*", "div.disabled-tooltip"]);
    exports.SohoButtonComponentNgFactory = SohoButtonComponentNgFactory;
});
