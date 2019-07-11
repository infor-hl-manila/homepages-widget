(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./soho-menu-button.component.css.shim.ngstyle", "@angular/core", "../icon/soho-icon.component.ngfactory", "../icon/soho-icon.component", "@angular/common", "./soho-menu-button.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("./soho-menu-button.component.css.shim.ngstyle");
    var i1 = require("@angular/core");
    var i2 = require("../icon/soho-icon.component.ngfactory");
    var i3 = require("../icon/soho-icon.component");
    var i4 = require("@angular/common");
    var i5 = require("./soho-menu-button.component");
    var styles_SohoMenuButtonComponent = [i0.styles];
    var RenderType_SohoMenuButtonComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SohoMenuButtonComponent, data: {} });
    exports.RenderType_SohoMenuButtonComponent = RenderType_SohoMenuButtonComponent;
    function View_SohoMenuButtonComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, ":svg:svg", [["soho-icon", ""]], [[2, "icon", null], [1, "aria-hidden", 0], [1, "focusable", 0], [1, "role", 0], [2, "icon-empty-state", null]], null, null, i2.View_SohoIconComponent_0, i2.RenderType_SohoIconComponent)), i1.ɵdid(1, 49152, null, 0, i3.SohoIconComponent, [i1.ElementRef, i1.Renderer2], { icon: [0, "icon"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.icon; _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).isIcon; var currVal_1 = i1.ɵnov(_v, 1).ariaHidden; var currVal_2 = i1.ɵnov(_v, 1).focusable; var currVal_3 = i1.ɵnov(_v, 1).role; var currVal_4 = i1.ɵnov(_v, 1).isEmptyState; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    function View_SohoMenuButtonComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, ":svg:svg", [["soho-icon", ""]], [[2, "icon", null], [1, "aria-hidden", 0], [1, "focusable", 0], [1, "role", 0], [2, "icon-empty-state", null]], null, null, i2.View_SohoIconComponent_0, i2.RenderType_SohoIconComponent)), i1.ɵdid(1, 49152, null, 0, i3.SohoIconComponent, [i1.ElementRef, i1.Renderer2], { icon: [0, "icon"] }, null)], function (_ck, _v) { var currVal_5 = "dropdown"; _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).isIcon; var currVal_1 = i1.ɵnov(_v, 1).ariaHidden; var currVal_2 = i1.ɵnov(_v, 1).focusable; var currVal_3 = i1.ɵnov(_v, 1).role; var currVal_4 = i1.ɵnov(_v, 1).isEmptyState; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    function View_SohoMenuButtonComponent_0(_l) { return i1.ɵvid(2, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_SohoMenuButtonComponent_1)), i1.ɵdid(1, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), i1.ɵncd(null, 0), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SohoMenuButtonComponent_2)), i1.ɵdid(4, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.hideMenuArrow; _ck(_v, 4, 0, currVal_1); }, null); }
    exports.View_SohoMenuButtonComponent_0 = View_SohoMenuButtonComponent_0;
    function View_SohoMenuButtonComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "button", [["soho-menu-button", ""]], [[2, "btn-menu", null], [1, "type", 0]], null, null, View_SohoMenuButtonComponent_0, RenderType_SohoMenuButtonComponent)), i1.ɵdid(1, 12763136, null, 0, i5.SohoMenuButtonComponent, [i1.ElementRef, i1.ChangeDetectorRef, i1.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).isBtnMenu; var currVal_1 = i1.ɵnov(_v, 1).buttonType; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoMenuButtonComponent_Host_0 = View_SohoMenuButtonComponent_Host_0;
    var SohoMenuButtonComponentNgFactory = i1.ɵccf("button[soho-menu-button]", i5.SohoMenuButtonComponent, View_SohoMenuButtonComponent_Host_0, { icon: "icon", autoFocus: "autoFocus", mouseFocus: "mouseFocus", showArrow: "showArrow", returnFocus: "returnFocus", trigger: "trigger", menu: "menu", ajaxBeforeOpenFunction: "ajaxBeforeOpenFunction", hideMenuArrow: "hideMenuArrow" }, { selected: "selected", beforeopen: "beforeopen", open$: "open", close$: "close" }, ["*"]);
    exports.SohoMenuButtonComponentNgFactory = SohoMenuButtonComponentNgFactory;
});
