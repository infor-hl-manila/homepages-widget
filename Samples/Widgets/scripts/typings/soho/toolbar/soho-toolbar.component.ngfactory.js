(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-toolbar.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-toolbar.component");
    var styles_SohoToolbarSearchFieldWrapperComponent = [];
    var RenderType_SohoToolbarSearchFieldWrapperComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarSearchFieldWrapperComponent, data: {} });
    exports.RenderType_SohoToolbarSearchFieldWrapperComponent = RenderType_SohoToolbarSearchFieldWrapperComponent;
    function View_SohoToolbarSearchFieldWrapperComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarSearchFieldWrapperComponent_0 = View_SohoToolbarSearchFieldWrapperComponent_0;
    function View_SohoToolbarSearchFieldWrapperComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["soho-toolbar-searchfield-wrapper", ""]], [[2, "searchfield-wrapper", null], [2, "toolbar-searchfield-wrapper", null]], null, null, View_SohoToolbarSearchFieldWrapperComponent_0, RenderType_SohoToolbarSearchFieldWrapperComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarSearchFieldWrapperComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSearchfieldWrapper; var currVal_1 = i0.ɵnov(_v, 1).isToolbarSearchfieldWrapper; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoToolbarSearchFieldWrapperComponent_Host_0 = View_SohoToolbarSearchFieldWrapperComponent_Host_0;
    var SohoToolbarSearchFieldWrapperComponentNgFactory = i0.ɵccf("span[soho-toolbar-searchfield-wrapper]", i1.SohoToolbarSearchFieldWrapperComponent, View_SohoToolbarSearchFieldWrapperComponent_Host_0, {}, {}, ["*"]);
    exports.SohoToolbarSearchFieldWrapperComponentNgFactory = SohoToolbarSearchFieldWrapperComponentNgFactory;
    var styles_SohoToolbarSearchFieldComponent = [];
    var RenderType_SohoToolbarSearchFieldComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarSearchFieldComponent, data: {} });
    exports.RenderType_SohoToolbarSearchFieldComponent = RenderType_SohoToolbarSearchFieldComponent;
    function View_SohoToolbarSearchFieldComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, [["toolbarSearchField", 1]], null, 1, "div", [], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarSearchFieldComponent_0 = View_SohoToolbarSearchFieldComponent_0;
    function View_SohoToolbarSearchFieldComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input", [["soho-toolbar-searchfield", ""]], [[2, "searchfield", null]], null, null, View_SohoToolbarSearchFieldComponent_0, RenderType_SohoToolbarSearchFieldComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoToolbarSearchFieldComponent, [i0.ChangeDetectorRef, i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSearchField; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarSearchFieldComponent_Host_0 = View_SohoToolbarSearchFieldComponent_Host_0;
    var SohoToolbarSearchFieldComponentNgFactory = i0.ɵccf("input[soho-toolbar-searchfield]", i1.SohoToolbarSearchFieldComponent, View_SohoToolbarSearchFieldComponent_Host_0, { options: "options", clearable: "clearable", collapsible: "collapsible", collapsibleOnMobile: "collapsibleOnMobile", source: "source", template: "template" }, { selected: "selected", cleared: "cleared" }, ["*"]);
    exports.SohoToolbarSearchFieldComponentNgFactory = SohoToolbarSearchFieldComponentNgFactory;
    var styles_SohoToolbarMoreButtonComponent = [];
    var RenderType_SohoToolbarMoreButtonComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarMoreButtonComponent, data: {} });
    exports.RenderType_SohoToolbarMoreButtonComponent = RenderType_SohoToolbarMoreButtonComponent;
    function View_SohoToolbarMoreButtonComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "button", [["class", "btn-actions page-changer"], ["type", "button"]], [[1, "disabled", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["class", "icon"], ["focusable", "false"], ["role", "presentation"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, ":svg:use", [[":xlink:href", "#icon-more"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "span", [["class", "audible"], ["data-translate", "text"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["More"])), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isDisabled ? "disabled" : null); _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarMoreButtonComponent_0 = View_SohoToolbarMoreButtonComponent_0;
    function View_SohoToolbarMoreButtonComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-toolbar-more-button", [], [[2, "more", null]], null, null, View_SohoToolbarMoreButtonComponent_0, RenderType_SohoToolbarMoreButtonComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarMoreButtonComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isMoreButton; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarMoreButtonComponent_Host_0 = View_SohoToolbarMoreButtonComponent_Host_0;
    var SohoToolbarMoreButtonComponentNgFactory = i0.ɵccf("soho-toolbar-more-button", i1.SohoToolbarMoreButtonComponent, View_SohoToolbarMoreButtonComponent_Host_0, { isDisabled: "isDisabled" }, {}, ["*"]);
    exports.SohoToolbarMoreButtonComponentNgFactory = SohoToolbarMoreButtonComponentNgFactory;
    var styles_SohoPageTitleComponent = [];
    var RenderType_SohoPageTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPageTitleComponent, data: {} });
    exports.RenderType_SohoPageTitleComponent = RenderType_SohoPageTitleComponent;
    function View_SohoPageTitleComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPageTitleComponent_0 = View_SohoPageTitleComponent_0;
    function View_SohoPageTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["soho-page-title", ""]], [[2, "page-title", null]], null, null, View_SohoPageTitleComponent_0, RenderType_SohoPageTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoPageTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isPageTitle; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoPageTitleComponent_Host_0 = View_SohoPageTitleComponent_Host_0;
    var SohoPageTitleComponentNgFactory = i0.ɵccf("span[soho-page-title]", i1.SohoPageTitleComponent, View_SohoPageTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoPageTitleComponentNgFactory = SohoPageTitleComponentNgFactory;
    var styles_SohoSectionTitleComponent = [];
    var RenderType_SohoSectionTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSectionTitleComponent, data: {} });
    exports.RenderType_SohoSectionTitleComponent = RenderType_SohoSectionTitleComponent;
    function View_SohoSectionTitleComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSectionTitleComponent_0 = View_SohoSectionTitleComponent_0;
    function View_SohoSectionTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["soho-section-title", ""]], [[2, "section-title", null]], null, null, View_SohoSectionTitleComponent_0, RenderType_SohoSectionTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoSectionTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSectionTitle; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoSectionTitleComponent_Host_0 = View_SohoSectionTitleComponent_Host_0;
    var SohoSectionTitleComponentNgFactory = i0.ɵccf("span[soho-section-title]", i1.SohoSectionTitleComponent, View_SohoSectionTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoSectionTitleComponentNgFactory = SohoSectionTitleComponentNgFactory;
    var styles_SohoSelectionCountComponent = [];
    var RenderType_SohoSelectionCountComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSelectionCountComponent, data: {} });
    exports.RenderType_SohoSelectionCountComponent = RenderType_SohoSelectionCountComponent;
    function View_SohoSelectionCountComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSelectionCountComponent_0 = View_SohoSelectionCountComponent_0;
    function View_SohoSelectionCountComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-selection-count", ""]], [[2, "title", null], [2, "selection-count", null]], null, null, View_SohoSelectionCountComponent_0, RenderType_SohoSelectionCountComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoSelectionCountComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isTitle; var currVal_1 = i0.ɵnov(_v, 1).isSelectionCount; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoSelectionCountComponent_Host_0 = View_SohoSelectionCountComponent_Host_0;
    var SohoSelectionCountComponentNgFactory = i0.ɵccf("div[soho-selection-count]", i1.SohoSelectionCountComponent, View_SohoSelectionCountComponent_Host_0, {}, {}, ["*"]);
    exports.SohoSelectionCountComponentNgFactory = SohoSelectionCountComponentNgFactory;
    var styles_SohoToolbarNavButtonComponent = [];
    var RenderType_SohoToolbarNavButtonComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarNavButtonComponent, data: {} });
    exports.RenderType_SohoToolbarNavButtonComponent = RenderType_SohoToolbarNavButtonComponent;
    function View_SohoToolbarNavButtonComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "icon app-header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "span", [["class", "one"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "span", [["class", "two"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "three"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["class", "audible"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarNavButtonComponent_0 = View_SohoToolbarNavButtonComponent_0;
    function View_SohoToolbarNavButtonComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "button", [["soho-nav-button", ""]], [[2, "btn-icon", null], [2, "application-menu-trigger", null], [1, "type", 0]], null, null, View_SohoToolbarNavButtonComponent_0, RenderType_SohoToolbarNavButtonComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarNavButtonComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isIconButton; var currVal_1 = i0.ɵnov(_v, 1).isAppMenuTrigger; var currVal_2 = i0.ɵnov(_v, 1).typeAttr; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
    exports.View_SohoToolbarNavButtonComponent_Host_0 = View_SohoToolbarNavButtonComponent_Host_0;
    var SohoToolbarNavButtonComponentNgFactory = i0.ɵccf("button[soho-nav-button]", i1.SohoToolbarNavButtonComponent, View_SohoToolbarNavButtonComponent_Host_0, {}, {}, ["*"]);
    exports.SohoToolbarNavButtonComponentNgFactory = SohoToolbarNavButtonComponentNgFactory;
    var styles_SohoToolbarTitleComponent = ["{%BLOCK%}"];
    var RenderType_SohoToolbarTitleComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoToolbarTitleComponent, data: {} });
    exports.RenderType_SohoToolbarTitleComponent = RenderType_SohoToolbarTitleComponent;
    function View_SohoToolbarTitleComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarTitleComponent_0 = View_SohoToolbarTitleComponent_0;
    function View_SohoToolbarTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-toolbar-title", [], [[2, "title", null]], null, null, View_SohoToolbarTitleComponent_0, RenderType_SohoToolbarTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isTitle; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarTitleComponent_Host_0 = View_SohoToolbarTitleComponent_Host_0;
    var SohoToolbarTitleComponentNgFactory = i0.ɵccf("soho-toolbar-title", i1.SohoToolbarTitleComponent, View_SohoToolbarTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoToolbarTitleComponentNgFactory = SohoToolbarTitleComponentNgFactory;
    var styles_SohoToolbarButtonSetComponent = ["{%BLOCK%}"];
    var RenderType_SohoToolbarButtonSetComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoToolbarButtonSetComponent, data: {} });
    exports.RenderType_SohoToolbarButtonSetComponent = RenderType_SohoToolbarButtonSetComponent;
    function View_SohoToolbarButtonSetComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarButtonSetComponent_0 = View_SohoToolbarButtonSetComponent_0;
    function View_SohoToolbarButtonSetComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-toolbar-button-set", [], [[2, "buttonset", null]], null, null, View_SohoToolbarButtonSetComponent_0, RenderType_SohoToolbarButtonSetComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarButtonSetComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isButtonSet; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarButtonSetComponent_Host_0 = View_SohoToolbarButtonSetComponent_Host_0;
    var SohoToolbarButtonSetComponentNgFactory = i0.ɵccf("soho-toolbar-button-set", i1.SohoToolbarButtonSetComponent, View_SohoToolbarButtonSetComponent_Host_0, {}, {}, ["*"]);
    exports.SohoToolbarButtonSetComponentNgFactory = SohoToolbarButtonSetComponentNgFactory;
    var styles_SohoToolbarComponent = [];
    var RenderType_SohoToolbarComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarComponent, data: {} });
    exports.RenderType_SohoToolbarComponent = RenderType_SohoToolbarComponent;
    function View_SohoToolbarComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0), i0.ɵncd(null, 1), i0.ɵncd(null, 2)], null, null); }
    exports.View_SohoToolbarComponent_0 = View_SohoToolbarComponent_0;
    function View_SohoToolbarComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-toolbar", [], [[2, "toolbar", null], [2, "has-more-button", null], [4, "display", null], [2, "no-actions-button", null]], null, null, View_SohoToolbarComponent_0, RenderType_SohoToolbarComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoToolbarComponent, [i0.ChangeDetectorRef, i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isToolbar; var currVal_1 = i0.ɵnov(_v, 1).showMoreButton; var currVal_2 = i0.ɵnov(_v, 1).isBlock; var currVal_3 = i0.ɵnov(_v, 1).noActionsButton; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoToolbarComponent_Host_0 = View_SohoToolbarComponent_Host_0;
    var SohoToolbarComponentNgFactory = i0.ɵccf("soho-toolbar, div[soho-toolbar]", i1.SohoToolbarComponent, View_SohoToolbarComponent_Host_0, { noActionsButton: "noActionsButton", hasMoreButton: "hasMoreButton", maxVisibleButtons: "maxVisibleButtons", rightAligned: "rightAligned", rightAlign: "rightAlign", resizeContainers: "resizeContainers", favorButtonset: "favorButtonset", moreMenuSettings: "moreMenuSettings" }, { beforeActivated: "beforeActivated", activated: "activated", afterActivated: "afterActivated", selected: "selected", menuItemMouseOver: "menuItemMouseOver" }, ["soho-toolbar-title", "soho-toolbar-button-set", "soho-toolbar-more-button"]);
    exports.SohoToolbarComponentNgFactory = SohoToolbarComponentNgFactory;
});
