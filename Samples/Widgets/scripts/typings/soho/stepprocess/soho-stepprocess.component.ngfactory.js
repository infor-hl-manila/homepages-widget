(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-stepprocess.component", "../toolbar/soho-toolbar.component.ngfactory", "../toolbar/soho-toolbar.component", "../button/soho-button.component.ngfactory", "../button/soho-button.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-stepprocess.component");
    var i2 = require("../toolbar/soho-toolbar.component.ngfactory");
    var i3 = require("../toolbar/soho-toolbar.component");
    var i4 = require("../button/soho-button.component.ngfactory");
    var i5 = require("../button/soho-button.component");
    var styles_SohoStepListTitleComponent = [];
    var RenderType_SohoStepListTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepListTitleComponent, data: {} });
    exports.RenderType_SohoStepListTitleComponent = RenderType_SohoStepListTitleComponent;
    function View_SohoStepListTitleComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepListTitleComponent_0 = View_SohoStepListTitleComponent_0;
    function View_SohoStepListTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-step-list-title", ""]], [[2, "title", null], [2, "title-wide", null]], null, null, View_SohoStepListTitleComponent_0, RenderType_SohoStepListTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepListTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).title; var currVal_1 = i0.ɵnov(_v, 1).titleWide; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoStepListTitleComponent_Host_0 = View_SohoStepListTitleComponent_Host_0;
    var SohoStepListTitleComponentNgFactory = i0.ɵccf("div[soho-step-list-title]", i1.SohoStepListTitleComponent, View_SohoStepListTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoStepListTitleComponentNgFactory = SohoStepListTitleComponentNgFactory;
    var styles_SohoStepListComponent = [];
    var RenderType_SohoStepListComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepListComponent, data: {} });
    exports.RenderType_SohoStepListComponent = RenderType_SohoStepListComponent;
    function View_SohoStepListComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepListComponent_0 = View_SohoStepListComponent_0;
    function View_SohoStepListComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ul", [["soho-step-list", ""]], [[2, "tree", null], [2, "js-step-list-scroll", null], [1, "id", 0], [1, "data-init", 0]], null, null, View_SohoStepListComponent_0, RenderType_SohoStepListComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepListComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isTree; var currVal_1 = i0.ɵnov(_v, 1).isJSStepTreeScroll; var currVal_2 = i0.ɵnov(_v, 1).id; var currVal_3 = i0.ɵnov(_v, 1).dataInit; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoStepListComponent_Host_0 = View_SohoStepListComponent_Host_0;
    var SohoStepListComponentNgFactory = i0.ɵccf("ul[soho-step-list]", i1.SohoStepListComponent, View_SohoStepListComponent_Host_0, {}, {}, ["*"]);
    exports.SohoStepListComponentNgFactory = SohoStepListComponentNgFactory;
    var styles_SohoSubstepListComponent = [];
    var RenderType_SohoSubstepListComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSubstepListComponent, data: {} });
    exports.RenderType_SohoSubstepListComponent = RenderType_SohoSubstepListComponent;
    function View_SohoSubstepListComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSubstepListComponent_0 = View_SohoSubstepListComponent_0;
    function View_SohoSubstepListComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ul", [["soho-substep-list", ""]], [[2, "folder", null], [2, "js-step-folder", null]], null, null, View_SohoSubstepListComponent_0, RenderType_SohoSubstepListComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoSubstepListComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isFolder; var currVal_1 = i0.ɵnov(_v, 1).isJSStepFolder; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoSubstepListComponent_Host_0 = View_SohoSubstepListComponent_Host_0;
    var SohoSubstepListComponentNgFactory = i0.ɵccf("ul[soho-substep-list]", i1.SohoSubstepListComponent, View_SohoSubstepListComponent_Host_0, {}, {}, ["*"]);
    exports.SohoSubstepListComponentNgFactory = SohoSubstepListComponentNgFactory;
    var styles_SohoStepListItemComponent = [];
    var RenderType_SohoStepListItemComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepListItemComponent, data: {} });
    exports.RenderType_SohoStepListItemComponent = RenderType_SohoStepListItemComponent;
    function View_SohoStepListItemComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepListItemComponent_0 = View_SohoStepListItemComponent_0;
    function View_SohoStepListItemComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [["soho-step-list-item", ""]], [[2, "js-step", null], [2, "is-selected", null]], null, null, View_SohoStepListItemComponent_0, RenderType_SohoStepListItemComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepListItemComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).jsStep; var currVal_1 = i0.ɵnov(_v, 1).isSelected; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoStepListItemComponent_Host_0 = View_SohoStepListItemComponent_Host_0;
    var SohoStepListItemComponentNgFactory = i0.ɵccf("li[soho-step-list-item]", i1.SohoStepListItemComponent, View_SohoStepListItemComponent_Host_0, { isSelected: "isSelected" }, {}, ["*"]);
    exports.SohoStepListItemComponentNgFactory = SohoStepListItemComponentNgFactory;
    var styles_SohoStepListItemAnchorComponent = [];
    var RenderType_SohoStepListItemAnchorComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepListItemAnchorComponent, data: {} });
    exports.RenderType_SohoStepListItemAnchorComponent = RenderType_SohoStepListItemAnchorComponent;
    function View_SohoStepListItemAnchorComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepListItemAnchorComponent_0 = View_SohoStepListItemAnchorComponent_0;
    function View_SohoStepListItemAnchorComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["soho-step-list-item-anchor", ""]], [[2, "js-step-link", null], [1, "href", 4]], null, null, View_SohoStepListItemAnchorComponent_0, RenderType_SohoStepListItemAnchorComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepListItemAnchorComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isJsStepLink; var currVal_1 = i0.ɵnov(_v, 1).hrefAttr; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoStepListItemAnchorComponent_Host_0 = View_SohoStepListItemAnchorComponent_Host_0;
    var SohoStepListItemAnchorComponentNgFactory = i0.ɵccf("a[soho-step-list-item-anchor]", i1.SohoStepListItemAnchorComponent, View_SohoStepListItemAnchorComponent_Host_0, { stepId: "stepId" }, {}, ["*"]);
    exports.SohoStepListItemAnchorComponentNgFactory = SohoStepListItemAnchorComponentNgFactory;
    var styles_SohoStepListItemTitleComponent = [];
    var RenderType_SohoStepListItemTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepListItemTitleComponent, data: {} });
    exports.RenderType_SohoStepListItemTitleComponent = RenderType_SohoStepListItemTitleComponent;
    function View_SohoStepListItemTitleComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepListItemTitleComponent_0 = View_SohoStepListItemTitleComponent_0;
    function View_SohoStepListItemTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["soho-step-list-item-title", ""]], [[2, "tree-text", null]], null, null, View_SohoStepListItemTitleComponent_0, RenderType_SohoStepListItemTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepListItemTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).treeText; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoStepListItemTitleComponent_Host_0 = View_SohoStepListItemTitleComponent_Host_0;
    var SohoStepListItemTitleComponentNgFactory = i0.ɵccf("span[soho-step-list-item-title]", i1.SohoStepListItemTitleComponent, View_SohoStepListItemTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoStepListItemTitleComponentNgFactory = SohoStepListItemTitleComponentNgFactory;
    var styles_SohoStepContentTitleComponent = [];
    var RenderType_SohoStepContentTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepContentTitleComponent, data: {} });
    exports.RenderType_SohoStepContentTitleComponent = RenderType_SohoStepContentTitleComponent;
    function View_SohoStepContentTitleComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepContentTitleComponent_0 = View_SohoStepContentTitleComponent_0;
    function View_SohoStepContentTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-step-content-title", ""]], [[2, "heading", null]], null, null, View_SohoStepContentTitleComponent_0, RenderType_SohoStepContentTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepContentTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isHeading; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoStepContentTitleComponent_Host_0 = View_SohoStepContentTitleComponent_Host_0;
    var SohoStepContentTitleComponentNgFactory = i0.ɵccf("div[soho-step-content-title]", i1.SohoStepContentTitleComponent, View_SohoStepContentTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoStepContentTitleComponentNgFactory = SohoStepContentTitleComponentNgFactory;
    var styles_SohoStepContentComponent = [];
    var RenderType_SohoStepContentComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepContentComponent, data: {} });
    exports.RenderType_SohoStepContentComponent = RenderType_SohoStepContentComponent;
    function View_SohoStepContentComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepContentComponent_0 = View_SohoStepContentComponent_0;
    function View_SohoStepContentComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-step-content", ""]], [[2, "scrollable", null], [2, "step-container", null], [2, "js-step-container-scroll", null]], null, null, View_SohoStepContentComponent_0, RenderType_SohoStepContentComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepContentComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isScrollable; var currVal_1 = i0.ɵnov(_v, 1).iStepContainer; var currVal_2 = i0.ɵnov(_v, 1).isJsStepPanelsScroll; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
    exports.View_SohoStepContentComponent_Host_0 = View_SohoStepContentComponent_Host_0;
    var SohoStepContentComponentNgFactory = i0.ɵccf("div[soho-step-content]", i1.SohoStepContentComponent, View_SohoStepContentComponent_Host_0, {}, {}, ["*"]);
    exports.SohoStepContentComponentNgFactory = SohoStepContentComponentNgFactory;
    var styles_SohoStepContentPanelComponent = [];
    var RenderType_SohoStepContentPanelComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepContentPanelComponent, data: {} });
    exports.RenderType_SohoStepContentPanelComponent = RenderType_SohoStepContentPanelComponent;
    function View_SohoStepContentPanelComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoStepContentPanelComponent_0 = View_SohoStepContentPanelComponent_0;
    function View_SohoStepContentPanelComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-step-content-panel", ""]], [[2, "js-step-panel", null], [1, "id", 0]], null, null, View_SohoStepContentPanelComponent_0, RenderType_SohoStepContentPanelComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoStepContentPanelComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isJsStepProcessPanel; var currVal_1 = i0.ɵnov(_v, 1).idAttr; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoStepContentPanelComponent_Host_0 = View_SohoStepContentPanelComponent_Host_0;
    var SohoStepContentPanelComponentNgFactory = i0.ɵccf("div[soho-step-content-panel]", i1.SohoStepContentPanelComponent, View_SohoStepContentPanelComponent_Host_0, { stepId: "stepId" }, {}, ["*"]);
    exports.SohoStepContentPanelComponentNgFactory = SohoStepContentPanelComponentNgFactory;
    var styles_SohoStepProcessComponent = [];
    var RenderType_SohoStepProcessComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoStepProcessComponent, data: {} });
    exports.RenderType_SohoStepProcessComponent = RenderType_SohoStepProcessComponent;
    function View_SohoStepProcessComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "div", [["class", "sidebar"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 4, "div", [["class", "toolbar-custom toolbar-collapsible phone-visible"], ["soho-toolbar", ""]], [[2, "toolbar", null], [2, "has-more-button", null], [4, "display", null], [2, "no-actions-button", null]], null, null, i2.View_SohoToolbarComponent_0, i2.RenderType_SohoToolbarComponent)), i0.ɵdid(2, 12763136, null, 0, i3.SohoToolbarComponent, [i0.ChangeDetectorRef, i0.ElementRef, i0.NgZone], null, null), (_l()(), i0.ɵeld(3, 0, null, 0, 2, "soho-toolbar-title", [], [[2, "title", null]], null, null, i2.View_SohoToolbarTitleComponent_0, i2.RenderType_SohoToolbarTitleComponent)), i0.ɵdid(4, 49152, null, 0, i3.SohoToolbarTitleComponent, [], null, null), i0.ɵncd(0, 0), i0.ɵncd(null, 1), (_l()(), i0.ɵeld(7, 0, null, null, 6, "div", [["class", "phone-action-bar phone-visible"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 2, "button", [["class", "btn btn-secondary js-btn-save-changes"], ["soho-button", "secondary"]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 9).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, i4.View_SohoButtonComponent_0, i4.RenderType_SohoButtonComponent)), i0.ɵdid(9, 4440064, null, 0, i5.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"] }, null), (_l()(), i0.ɵted(-1, 0, ["Save & Close"])), (_l()(), i0.ɵeld(11, 0, null, null, 2, "button", [["class", "btn btn-primary js-toggle-sidebar"], ["soho-button", "primary"]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 12).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, i4.View_SohoButtonComponent_0, i4.RenderType_SohoButtonComponent)), i0.ɵdid(12, 4440064, null, 0, i5.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"] }, null), (_l()(), i0.ɵted(-1, 0, ["Continue"])), (_l()(), i0.ɵeld(14, 0, null, null, 19, "div", [["class", "main no-scroll"], ["role", "main"]], null, null, null, null, null)), (_l()(), i0.ɵeld(15, 0, null, null, 10, "div", [["class", "toolbar-custom toolbar-collapsible"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 1, "button", [["class", "btn-icon btn-toggle-steps js-toggle-sidebar"], ["icon", "bullet-steps"], ["soho-button", "icon"]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 17).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, i4.View_SohoButtonComponent_0, i4.RenderType_SohoButtonComponent)), i0.ɵdid(17, 4440064, null, 0, i5.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"], icon: [1, "icon"] }, null), i0.ɵncd(null, 2), (_l()(), i0.ɵeld(19, 0, null, null, 6, "div", [["class", "actions phone-hidden"]], null, null, null, null, null)), (_l()(), i0.ɵeld(20, 0, null, null, 2, "button", [["class", "btn-tertiary js-step-link-prev"], ["soho-button", "tertiary"]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 21).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, i4.View_SohoButtonComponent_0, i4.RenderType_SohoButtonComponent)), i0.ɵdid(21, 4440064, null, 0, i5.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"] }, null), (_l()(), i0.ɵted(-1, 0, ["Previous"])), (_l()(), i0.ɵeld(23, 0, null, null, 2, "button", [["class", "btn-tertiary js-step-link-next"], ["soho-button", "tertiary"]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 24).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, i4.View_SohoButtonComponent_0, i4.RenderType_SohoButtonComponent)), i0.ɵdid(24, 4440064, null, 0, i5.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"] }, null), (_l()(), i0.ɵted(-1, 0, ["Next"])), i0.ɵncd(null, 3), (_l()(), i0.ɵeld(27, 0, null, null, 6, "div", [["class", "phone-action-bar phone-visible"]], null, null, null, null, null)), (_l()(), i0.ɵeld(28, 0, null, null, 2, "button", [["class", "btn btn-secondary js-btn-save-changes"], ["soho-button", "secondary"]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 29).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, i4.View_SohoButtonComponent_0, i4.RenderType_SohoButtonComponent)), i0.ɵdid(29, 4440064, null, 0, i5.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"] }, null), (_l()(), i0.ɵted(-1, 0, ["Save & Close"])), (_l()(), i0.ɵeld(31, 0, null, null, 2, "button", [["class", "btn btn-primary js-step-link-next"], ["soho-button", "primary"]], [[2, "btn", null], [2, "btn-primary", null], [2, "btn-secondary", null], [2, "btn-tertiary", null], [2, "btn-icon", null], [2, "btn-toggle", null], [2, "btn-modal", null], [2, "btn-modal-primary", null], [2, "is-pressed", null], [2, "icon-favorite", null], [2, "btn-moveto-left", null], [2, "btn-moveto-right", null], [2, "btn-moveto-selected", null], [2, "no-ripple", null], [1, "type", 0], [2, "expandable-expander", null], [1, "aria-pressed", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 32).toggleState() !== false);
            ad = (pd_0 && ad);
        } return ad; }, i4.View_SohoButtonComponent_0, i4.RenderType_SohoButtonComponent)), i0.ɵdid(32, 4440064, null, 0, i5.SohoButtonComponent, [i0.ElementRef, i0.NgZone], { sohoButton: [0, "sohoButton"] }, null), (_l()(), i0.ɵted(-1, 0, ["Next"]))], function (_ck, _v) { var currVal_22 = "secondary"; _ck(_v, 9, 0, currVal_22); var currVal_40 = "primary"; _ck(_v, 12, 0, currVal_40); var currVal_58 = "icon"; var currVal_59 = "bullet-steps"; _ck(_v, 17, 0, currVal_58, currVal_59); var currVal_77 = "tertiary"; _ck(_v, 21, 0, currVal_77); var currVal_95 = "tertiary"; _ck(_v, 24, 0, currVal_95); var currVal_113 = "secondary"; _ck(_v, 29, 0, currVal_113); var currVal_131 = "primary"; _ck(_v, 32, 0, currVal_131); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isToolbar; var currVal_1 = i0.ɵnov(_v, 2).showMoreButton; var currVal_2 = i0.ɵnov(_v, 2).isBlock; var currVal_3 = i0.ɵnov(_v, 2).noActionsButton; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = i0.ɵnov(_v, 4).isTitle; _ck(_v, 3, 0, currVal_4); var currVal_5 = i0.ɵnov(_v, 9).btn; var currVal_6 = i0.ɵnov(_v, 9).btnPrimary; var currVal_7 = i0.ɵnov(_v, 9).btnSecondary; var currVal_8 = i0.ɵnov(_v, 9).btnTertiary; var currVal_9 = i0.ɵnov(_v, 9).btnIcon; var currVal_10 = i0.ɵnov(_v, 9).btnToggle; var currVal_11 = i0.ɵnov(_v, 9).btnModal; var currVal_12 = i0.ɵnov(_v, 9).btnModalPrimary; var currVal_13 = i0.ɵnov(_v, 9).btnTogglePressed; var currVal_14 = i0.ɵnov(_v, 9).iconFavorite; var currVal_15 = i0.ɵnov(_v, 9).moveToLeft; var currVal_16 = i0.ɵnov(_v, 9).moveToRight; var currVal_17 = i0.ɵnov(_v, 9).moveToSelected; var currVal_18 = i0.ɵnov(_v, 9).noRipple; var currVal_19 = i0.ɵnov(_v, 9).type; var currVal_20 = i0.ɵnov(_v, 9).isExpandableExpander; var currVal_21 = i0.ɵnov(_v, 9).ariaPressed; _ck(_v, 8, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_23 = i0.ɵnov(_v, 12).btn; var currVal_24 = i0.ɵnov(_v, 12).btnPrimary; var currVal_25 = i0.ɵnov(_v, 12).btnSecondary; var currVal_26 = i0.ɵnov(_v, 12).btnTertiary; var currVal_27 = i0.ɵnov(_v, 12).btnIcon; var currVal_28 = i0.ɵnov(_v, 12).btnToggle; var currVal_29 = i0.ɵnov(_v, 12).btnModal; var currVal_30 = i0.ɵnov(_v, 12).btnModalPrimary; var currVal_31 = i0.ɵnov(_v, 12).btnTogglePressed; var currVal_32 = i0.ɵnov(_v, 12).iconFavorite; var currVal_33 = i0.ɵnov(_v, 12).moveToLeft; var currVal_34 = i0.ɵnov(_v, 12).moveToRight; var currVal_35 = i0.ɵnov(_v, 12).moveToSelected; var currVal_36 = i0.ɵnov(_v, 12).noRipple; var currVal_37 = i0.ɵnov(_v, 12).type; var currVal_38 = i0.ɵnov(_v, 12).isExpandableExpander; var currVal_39 = i0.ɵnov(_v, 12).ariaPressed; _ck(_v, 11, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]); var currVal_41 = i0.ɵnov(_v, 17).btn; var currVal_42 = i0.ɵnov(_v, 17).btnPrimary; var currVal_43 = i0.ɵnov(_v, 17).btnSecondary; var currVal_44 = i0.ɵnov(_v, 17).btnTertiary; var currVal_45 = i0.ɵnov(_v, 17).btnIcon; var currVal_46 = i0.ɵnov(_v, 17).btnToggle; var currVal_47 = i0.ɵnov(_v, 17).btnModal; var currVal_48 = i0.ɵnov(_v, 17).btnModalPrimary; var currVal_49 = i0.ɵnov(_v, 17).btnTogglePressed; var currVal_50 = i0.ɵnov(_v, 17).iconFavorite; var currVal_51 = i0.ɵnov(_v, 17).moveToLeft; var currVal_52 = i0.ɵnov(_v, 17).moveToRight; var currVal_53 = i0.ɵnov(_v, 17).moveToSelected; var currVal_54 = i0.ɵnov(_v, 17).noRipple; var currVal_55 = i0.ɵnov(_v, 17).type; var currVal_56 = i0.ɵnov(_v, 17).isExpandableExpander; var currVal_57 = i0.ɵnov(_v, 17).ariaPressed; _ck(_v, 16, 1, [currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57]); var currVal_60 = i0.ɵnov(_v, 21).btn; var currVal_61 = i0.ɵnov(_v, 21).btnPrimary; var currVal_62 = i0.ɵnov(_v, 21).btnSecondary; var currVal_63 = i0.ɵnov(_v, 21).btnTertiary; var currVal_64 = i0.ɵnov(_v, 21).btnIcon; var currVal_65 = i0.ɵnov(_v, 21).btnToggle; var currVal_66 = i0.ɵnov(_v, 21).btnModal; var currVal_67 = i0.ɵnov(_v, 21).btnModalPrimary; var currVal_68 = i0.ɵnov(_v, 21).btnTogglePressed; var currVal_69 = i0.ɵnov(_v, 21).iconFavorite; var currVal_70 = i0.ɵnov(_v, 21).moveToLeft; var currVal_71 = i0.ɵnov(_v, 21).moveToRight; var currVal_72 = i0.ɵnov(_v, 21).moveToSelected; var currVal_73 = i0.ɵnov(_v, 21).noRipple; var currVal_74 = i0.ɵnov(_v, 21).type; var currVal_75 = i0.ɵnov(_v, 21).isExpandableExpander; var currVal_76 = i0.ɵnov(_v, 21).ariaPressed; _ck(_v, 20, 1, [currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76]); var currVal_78 = i0.ɵnov(_v, 24).btn; var currVal_79 = i0.ɵnov(_v, 24).btnPrimary; var currVal_80 = i0.ɵnov(_v, 24).btnSecondary; var currVal_81 = i0.ɵnov(_v, 24).btnTertiary; var currVal_82 = i0.ɵnov(_v, 24).btnIcon; var currVal_83 = i0.ɵnov(_v, 24).btnToggle; var currVal_84 = i0.ɵnov(_v, 24).btnModal; var currVal_85 = i0.ɵnov(_v, 24).btnModalPrimary; var currVal_86 = i0.ɵnov(_v, 24).btnTogglePressed; var currVal_87 = i0.ɵnov(_v, 24).iconFavorite; var currVal_88 = i0.ɵnov(_v, 24).moveToLeft; var currVal_89 = i0.ɵnov(_v, 24).moveToRight; var currVal_90 = i0.ɵnov(_v, 24).moveToSelected; var currVal_91 = i0.ɵnov(_v, 24).noRipple; var currVal_92 = i0.ɵnov(_v, 24).type; var currVal_93 = i0.ɵnov(_v, 24).isExpandableExpander; var currVal_94 = i0.ɵnov(_v, 24).ariaPressed; _ck(_v, 23, 1, [currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94]); var currVal_96 = i0.ɵnov(_v, 29).btn; var currVal_97 = i0.ɵnov(_v, 29).btnPrimary; var currVal_98 = i0.ɵnov(_v, 29).btnSecondary; var currVal_99 = i0.ɵnov(_v, 29).btnTertiary; var currVal_100 = i0.ɵnov(_v, 29).btnIcon; var currVal_101 = i0.ɵnov(_v, 29).btnToggle; var currVal_102 = i0.ɵnov(_v, 29).btnModal; var currVal_103 = i0.ɵnov(_v, 29).btnModalPrimary; var currVal_104 = i0.ɵnov(_v, 29).btnTogglePressed; var currVal_105 = i0.ɵnov(_v, 29).iconFavorite; var currVal_106 = i0.ɵnov(_v, 29).moveToLeft; var currVal_107 = i0.ɵnov(_v, 29).moveToRight; var currVal_108 = i0.ɵnov(_v, 29).moveToSelected; var currVal_109 = i0.ɵnov(_v, 29).noRipple; var currVal_110 = i0.ɵnov(_v, 29).type; var currVal_111 = i0.ɵnov(_v, 29).isExpandableExpander; var currVal_112 = i0.ɵnov(_v, 29).ariaPressed; _ck(_v, 28, 1, [currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112]); var currVal_114 = i0.ɵnov(_v, 32).btn; var currVal_115 = i0.ɵnov(_v, 32).btnPrimary; var currVal_116 = i0.ɵnov(_v, 32).btnSecondary; var currVal_117 = i0.ɵnov(_v, 32).btnTertiary; var currVal_118 = i0.ɵnov(_v, 32).btnIcon; var currVal_119 = i0.ɵnov(_v, 32).btnToggle; var currVal_120 = i0.ɵnov(_v, 32).btnModal; var currVal_121 = i0.ɵnov(_v, 32).btnModalPrimary; var currVal_122 = i0.ɵnov(_v, 32).btnTogglePressed; var currVal_123 = i0.ɵnov(_v, 32).iconFavorite; var currVal_124 = i0.ɵnov(_v, 32).moveToLeft; var currVal_125 = i0.ɵnov(_v, 32).moveToRight; var currVal_126 = i0.ɵnov(_v, 32).moveToSelected; var currVal_127 = i0.ɵnov(_v, 32).noRipple; var currVal_128 = i0.ɵnov(_v, 32).type; var currVal_129 = i0.ɵnov(_v, 32).isExpandableExpander; var currVal_130 = i0.ɵnov(_v, 32).ariaPressed; _ck(_v, 31, 1, [currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130]); }); }
    exports.View_SohoStepProcessComponent_0 = View_SohoStepProcessComponent_0;
    function View_SohoStepProcessComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-stepprocess", ""]], [[2, "step-process-container", null], [2, "two-column", null], [2, "fixed", null], [2, "page-container", null], [2, "no-scroll", null], [1, "role", 0]], null, null, View_SohoStepProcessComponent_0, RenderType_SohoStepProcessComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoStepProcessComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isStepProcessContainer; var currVal_1 = i0.ɵnov(_v, 1).isTwoColumn; var currVal_2 = i0.ɵnov(_v, 1).isFixed; var currVal_3 = i0.ɵnov(_v, 1).isPageContainer; var currVal_4 = i0.ɵnov(_v, 1).isNoScroll; var currVal_5 = i0.ɵnov(_v, 1).main; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
    exports.View_SohoStepProcessComponent_Host_0 = View_SohoStepProcessComponent_Host_0;
    var SohoStepProcessComponentNgFactory = i0.ɵccf("div[soho-stepprocess]", i1.SohoStepProcessComponent, View_SohoStepProcessComponent_Host_0, { linearProgression: "linearProgression", nextButtonLabel: "nextButtonLabel", nextButtonEnable: "nextButtonEnable", previousButtonEnable: "previousButtonEnable", saveCloseButtonEnable: "saveCloseButtonEnable" }, { beforeSelectStep: "beforeSelectStep", saveClose: "saveClose" }, ["div[soho-step-list-title]", "ul[soho-step-list]", "div[soho-step-content-title]", "div[soho-step-content]"]);
    exports.SohoStepProcessComponentNgFactory = SohoStepProcessComponentNgFactory;
});
