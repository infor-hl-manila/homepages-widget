(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-toolbar-flex.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-toolbar-flex.component");
    var styles_SohoToolbarFlexSearchFieldComponent = [];
    var RenderType_SohoToolbarFlexSearchFieldComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarFlexSearchFieldComponent, data: {} });
    exports.RenderType_SohoToolbarFlexSearchFieldComponent = RenderType_SohoToolbarFlexSearchFieldComponent;
    function View_SohoToolbarFlexSearchFieldComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, [["toolbarFlexSearchField", 1]], null, 1, "div", [], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarFlexSearchFieldComponent_0 = View_SohoToolbarFlexSearchFieldComponent_0;
    function View_SohoToolbarFlexSearchFieldComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input", [["soho-toolbar-flex-searchfield", ""]], [[2, "searchfield", null]], null, null, View_SohoToolbarFlexSearchFieldComponent_0, RenderType_SohoToolbarFlexSearchFieldComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoToolbarFlexSearchFieldComponent, [i0.ChangeDetectorRef, i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSearchField; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarFlexSearchFieldComponent_Host_0 = View_SohoToolbarFlexSearchFieldComponent_Host_0;
    var SohoToolbarFlexSearchFieldComponentNgFactory = i0.ɵccf("input[soho-toolbar-flex-searchfield]", i1.SohoToolbarFlexSearchFieldComponent, View_SohoToolbarFlexSearchFieldComponent_Host_0, { options: "options", clearable: "clearable", collapsible: "collapsible", collapsibleOnMobile: "collapsibleOnMobile", source: "source", template: "template" }, { selected: "selected", cleared: "cleared" }, ["*"]);
    exports.SohoToolbarFlexSearchFieldComponentNgFactory = SohoToolbarFlexSearchFieldComponentNgFactory;
    var styles_SohoToolbarFlexMoreButtonComponent = [];
    var RenderType_SohoToolbarFlexMoreButtonComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarFlexMoreButtonComponent, data: {} });
    exports.RenderType_SohoToolbarFlexMoreButtonComponent = RenderType_SohoToolbarFlexMoreButtonComponent;
    function View_SohoToolbarFlexMoreButtonComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "button", [["class", "btn-actions"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["class", "icon"], ["focusable", "false"], ["role", "presentation"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, ":svg:use", [[":xlink:href", "#icon-more"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "span", [["class", "audible"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["More Actions"])), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarFlexMoreButtonComponent_0 = View_SohoToolbarFlexMoreButtonComponent_0;
    function View_SohoToolbarFlexMoreButtonComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-toolbar-flex-more-button", [], [[2, "more", null], [2, "toolbar-section", null]], null, null, View_SohoToolbarFlexMoreButtonComponent_0, RenderType_SohoToolbarFlexMoreButtonComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarFlexMoreButtonComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isMoreButton; var currVal_1 = i0.ɵnov(_v, 1).isToolbarSection; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoToolbarFlexMoreButtonComponent_Host_0 = View_SohoToolbarFlexMoreButtonComponent_Host_0;
    var SohoToolbarFlexMoreButtonComponentNgFactory = i0.ɵccf("soho-toolbar-flex-more-button", i1.SohoToolbarFlexMoreButtonComponent, View_SohoToolbarFlexMoreButtonComponent_Host_0, { isDisabled: "isDisabled", ajaxBeforeFunction: "ajaxBeforeFunction", menuId: "menuId" }, {}, ["*"]);
    exports.SohoToolbarFlexMoreButtonComponentNgFactory = SohoToolbarFlexMoreButtonComponentNgFactory;
    var styles_SohoToolbarFlexPageTitleComponent = [];
    var RenderType_SohoToolbarFlexPageTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarFlexPageTitleComponent, data: {} });
    exports.RenderType_SohoToolbarFlexPageTitleComponent = RenderType_SohoToolbarFlexPageTitleComponent;
    function View_SohoToolbarFlexPageTitleComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarFlexPageTitleComponent_0 = View_SohoToolbarFlexPageTitleComponent_0;
    function View_SohoToolbarFlexPageTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-toolbar-flex-page-title", ""]], [[2, "page-title", null]], null, null, View_SohoToolbarFlexPageTitleComponent_0, RenderType_SohoToolbarFlexPageTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarFlexPageTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isPageTitle; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarFlexPageTitleComponent_Host_0 = View_SohoToolbarFlexPageTitleComponent_Host_0;
    var SohoToolbarFlexPageTitleComponentNgFactory = i0.ɵccf("[soho-toolbar-flex-page-title]", i1.SohoToolbarFlexPageTitleComponent, View_SohoToolbarFlexPageTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoToolbarFlexPageTitleComponentNgFactory = SohoToolbarFlexPageTitleComponentNgFactory;
    var styles_SohoToolbarFlexSectionTitleComponent = [];
    var RenderType_SohoToolbarFlexSectionTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarFlexSectionTitleComponent, data: {} });
    exports.RenderType_SohoToolbarFlexSectionTitleComponent = RenderType_SohoToolbarFlexSectionTitleComponent;
    function View_SohoToolbarFlexSectionTitleComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarFlexSectionTitleComponent_0 = View_SohoToolbarFlexSectionTitleComponent_0;
    function View_SohoToolbarFlexSectionTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-toolbar-flex-section-title", ""]], [[2, "section-title", null]], null, null, View_SohoToolbarFlexSectionTitleComponent_0, RenderType_SohoToolbarFlexSectionTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarFlexSectionTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSectionTitle; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarFlexSectionTitleComponent_Host_0 = View_SohoToolbarFlexSectionTitleComponent_Host_0;
    var SohoToolbarFlexSectionTitleComponentNgFactory = i0.ɵccf("[soho-toolbar-flex-section-title]", i1.SohoToolbarFlexSectionTitleComponent, View_SohoToolbarFlexSectionTitleComponent_Host_0, {}, {}, ["*"]);
    exports.SohoToolbarFlexSectionTitleComponentNgFactory = SohoToolbarFlexSectionTitleComponentNgFactory;
    var styles_SohoToolbarFlexSectionComponent = [];
    var RenderType_SohoToolbarFlexSectionComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarFlexSectionComponent, data: {} });
    exports.RenderType_SohoToolbarFlexSectionComponent = RenderType_SohoToolbarFlexSectionComponent;
    function View_SohoToolbarFlexSectionComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarFlexSectionComponent_0 = View_SohoToolbarFlexSectionComponent_0;
    function View_SohoToolbarFlexSectionComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-toolbar-flex-section", [], [[2, "toolbar-section", null], [2, "favor", null], [2, "title", null], [2, "buttonset", null], [2, "search", null]], null, null, View_SohoToolbarFlexSectionComponent_0, RenderType_SohoToolbarFlexSectionComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarFlexSectionComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isToolbarSection; var currVal_1 = i0.ɵnov(_v, 1).isTitleFavor; var currVal_2 = i0.ɵnov(_v, 1).isTitle; var currVal_3 = i0.ɵnov(_v, 1).isButtonSet; var currVal_4 = i0.ɵnov(_v, 1).isSearch; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    exports.View_SohoToolbarFlexSectionComponent_Host_0 = View_SohoToolbarFlexSectionComponent_Host_0;
    var SohoToolbarFlexSectionComponentNgFactory = i0.ɵccf("soho-toolbar-flex-section", i1.SohoToolbarFlexSectionComponent, View_SohoToolbarFlexSectionComponent_Host_0, { isTitleFavor: "isTitleFavor", isTitle: "isTitle", isButtonSet: "isButtonSet", isSearch: "isSearch" }, {}, ["*"]);
    exports.SohoToolbarFlexSectionComponentNgFactory = SohoToolbarFlexSectionComponentNgFactory;
    var styles_SohoToolbarFlexNavButtonComponent = [];
    var RenderType_SohoToolbarFlexNavButtonComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarFlexNavButtonComponent, data: {} });
    exports.RenderType_SohoToolbarFlexNavButtonComponent = RenderType_SohoToolbarFlexNavButtonComponent;
    function View_SohoToolbarFlexNavButtonComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "span", [["class", "icon app-header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "span", [["class", "one"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "span", [["class", "two"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "three"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["class", "audible"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarFlexNavButtonComponent_0 = View_SohoToolbarFlexNavButtonComponent_0;
    function View_SohoToolbarFlexNavButtonComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "button", [["soho-toolbar-flex-nav-button", ""]], [[2, "btn-icon", null], [2, "application-menu-trigger", null], [1, "type", 0]], null, null, View_SohoToolbarFlexNavButtonComponent_0, RenderType_SohoToolbarFlexNavButtonComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoToolbarFlexNavButtonComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isIconButton; var currVal_1 = i0.ɵnov(_v, 1).isAppMenuTrigger; var currVal_2 = i0.ɵnov(_v, 1).typeAttr; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
    exports.View_SohoToolbarFlexNavButtonComponent_Host_0 = View_SohoToolbarFlexNavButtonComponent_Host_0;
    var SohoToolbarFlexNavButtonComponentNgFactory = i0.ɵccf("button[soho-toolbar-flex-nav-button]", i1.SohoToolbarFlexNavButtonComponent, View_SohoToolbarFlexNavButtonComponent_Host_0, {}, {}, ["*"]);
    exports.SohoToolbarFlexNavButtonComponentNgFactory = SohoToolbarFlexNavButtonComponentNgFactory;
    var styles_SohoToolbarFlexComponent = [];
    var RenderType_SohoToolbarFlexComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoToolbarFlexComponent, data: {} });
    exports.RenderType_SohoToolbarFlexComponent = RenderType_SohoToolbarFlexComponent;
    function View_SohoToolbarFlexComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoToolbarFlexComponent_0 = View_SohoToolbarFlexComponent_0;
    function View_SohoToolbarFlexComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-toolbar-flex", [], [[2, "flex-toolbar", null]], null, null, View_SohoToolbarFlexComponent_0, RenderType_SohoToolbarFlexComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoToolbarFlexComponent, [i0.ChangeDetectorRef, i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isToolbar; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoToolbarFlexComponent_Host_0 = View_SohoToolbarFlexComponent_Host_0;
    var SohoToolbarFlexComponentNgFactory = i0.ɵccf("soho-toolbar-flex, div[soho-toolbar-flex]", i1.SohoToolbarFlexComponent, View_SohoToolbarFlexComponent_Host_0, { moreMenuBeforeOpenFunction: "moreMenuBeforeOpenFunction" }, { selected: "selected" }, ["*"]);
    exports.SohoToolbarFlexComponentNgFactory = SohoToolbarFlexComponentNgFactory;
});
