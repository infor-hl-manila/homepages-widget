(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-popupmenu.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-popupmenu.component");
    var styles_SohoPopupMenuHeadingComponent = [];
    var RenderType_SohoPopupMenuHeadingComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPopupMenuHeadingComponent, data: {} });
    exports.RenderType_SohoPopupMenuHeadingComponent = RenderType_SohoPopupMenuHeadingComponent;
    function View_SohoPopupMenuHeadingComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPopupMenuHeadingComponent_0 = View_SohoPopupMenuHeadingComponent_0;
    function View_SohoPopupMenuHeadingComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [["soho-popupmenu-heading", ""]], [[2, "heading", null]], null, null, View_SohoPopupMenuHeadingComponent_0, RenderType_SohoPopupMenuHeadingComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoPopupMenuHeadingComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isHeading; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoPopupMenuHeadingComponent_Host_0 = View_SohoPopupMenuHeadingComponent_Host_0;
    var SohoPopupMenuHeadingComponentNgFactory = i0.ɵccf("li[soho-popupmenu-heading]", i1.SohoPopupMenuHeadingComponent, View_SohoPopupMenuHeadingComponent_Host_0, {}, {}, ["*"]);
    exports.SohoPopupMenuHeadingComponentNgFactory = SohoPopupMenuHeadingComponentNgFactory;
    var styles_SohoPopupMenuSeparatorComponent = [];
    var RenderType_SohoPopupMenuSeparatorComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPopupMenuSeparatorComponent, data: {} });
    exports.RenderType_SohoPopupMenuSeparatorComponent = RenderType_SohoPopupMenuSeparatorComponent;
    function View_SohoPopupMenuSeparatorComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPopupMenuSeparatorComponent_0 = View_SohoPopupMenuSeparatorComponent_0;
    function View_SohoPopupMenuSeparatorComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [["soho-popupmenu-separator", ""]], [[2, "separator", null], [2, "single-selectable-section", null]], null, null, View_SohoPopupMenuSeparatorComponent_0, RenderType_SohoPopupMenuSeparatorComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoPopupMenuSeparatorComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSeparator; var currVal_1 = i0.ɵnov(_v, 1).singleSelectableSection; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoPopupMenuSeparatorComponent_Host_0 = View_SohoPopupMenuSeparatorComponent_Host_0;
    var SohoPopupMenuSeparatorComponentNgFactory = i0.ɵccf("li[soho-popupmenu-separator]", i1.SohoPopupMenuSeparatorComponent, View_SohoPopupMenuSeparatorComponent_Host_0, { singleSelectableSection: "singleSelectableSection" }, {}, ["*"]);
    exports.SohoPopupMenuSeparatorComponentNgFactory = SohoPopupMenuSeparatorComponentNgFactory;
    var styles_SohoPopupMenuItemLabelComponent = [];
    var RenderType_SohoPopupMenuItemLabelComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPopupMenuItemLabelComponent, data: {} });
    exports.RenderType_SohoPopupMenuItemLabelComponent = RenderType_SohoPopupMenuItemLabelComponent;
    function View_SohoPopupMenuItemLabelComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPopupMenuItemLabelComponent_0 = View_SohoPopupMenuItemLabelComponent_0;
    function View_SohoPopupMenuItemLabelComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["soho-popupmenu-label", ""]], [[1, "href", 4]], null, null, View_SohoPopupMenuItemLabelComponent_0, RenderType_SohoPopupMenuItemLabelComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoPopupMenuItemLabelComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).hrefAttr; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoPopupMenuItemLabelComponent_Host_0 = View_SohoPopupMenuItemLabelComponent_Host_0;
    var SohoPopupMenuItemLabelComponentNgFactory = i0.ɵccf("a[soho-popupmenu-label]", i1.SohoPopupMenuItemLabelComponent, View_SohoPopupMenuItemLabelComponent_Host_0, { menuId: "menuId", menuUrl: "menuUrl" }, {}, ["*"]);
    exports.SohoPopupMenuItemLabelComponentNgFactory = SohoPopupMenuItemLabelComponentNgFactory;
    var styles_SohoPopupMenuItemComponent = [];
    var RenderType_SohoPopupMenuItemComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPopupMenuItemComponent, data: {} });
    exports.RenderType_SohoPopupMenuItemComponent = RenderType_SohoPopupMenuItemComponent;
    function View_SohoPopupMenuItemComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPopupMenuItemComponent_0 = View_SohoPopupMenuItemComponent_0;
    function View_SohoPopupMenuItemComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [["soho-popupmenu-item", ""]], [[2, "is-checked", null], [2, "is-selectable", null], [2, "is-disabled", null], [2, "submenu", null]], null, null, View_SohoPopupMenuItemComponent_0, RenderType_SohoPopupMenuItemComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoPopupMenuItemComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isChecked; var currVal_1 = i0.ɵnov(_v, 1).isSelectable; var currVal_2 = i0.ɵnov(_v, 1).isDisabled; var currVal_3 = i0.ɵnov(_v, 1).subMenu; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoPopupMenuItemComponent_Host_0 = View_SohoPopupMenuItemComponent_Host_0;
    var SohoPopupMenuItemComponentNgFactory = i0.ɵccf("li[soho-popupmenu-item]", i1.SohoPopupMenuItemComponent, View_SohoPopupMenuItemComponent_Host_0, { isChecked: "isChecked", isSelectable: "isSelectable", isDisabled: "isDisabled", subMenu: "subMenu" }, {}, ["*"]);
    exports.SohoPopupMenuItemComponentNgFactory = SohoPopupMenuItemComponentNgFactory;
    var styles_SohoPopupMenuComponent = [];
    var RenderType_SohoPopupMenuComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoPopupMenuComponent, data: {} });
    exports.RenderType_SohoPopupMenuComponent = RenderType_SohoPopupMenuComponent;
    function View_SohoPopupMenuComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoPopupMenuComponent_0 = View_SohoPopupMenuComponent_0;
    function View_SohoPopupMenuComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ul", [["soho-popupmenu", ""]], [[2, "popupmenu", null]], null, null, View_SohoPopupMenuComponent_0, RenderType_SohoPopupMenuComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoPopupMenuComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isPopupmenu; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoPopupMenuComponent_Host_0 = View_SohoPopupMenuComponent_Host_0;
    var SohoPopupMenuComponentNgFactory = i0.ɵccf("ul[soho-popupmenu]", i1.SohoPopupMenuComponent, View_SohoPopupMenuComponent_Host_0, { popupmenuOptions: "popupmenuOptions", menu: "menu", trigger: "trigger", autoFocus: "autoFocus", mouseFocus: "mouseFocus", attachToBody: "attachToBody", beforeOpen: "beforeOpen", ariaListbox: "ariaListbox", useCoordsForClick: "useCoordsForClick", eventObj: "eventObj", placementOpts: "placementOpts", offset: "offset" }, { selected: "selected", popupmenuafterplace: "popupmenuafterplace", beforeopen: "beforeopen", open: "open", afteropen: "afteropen", closeEvent: "close" }, ["*"]);
    exports.SohoPopupMenuComponentNgFactory = SohoPopupMenuComponentNgFactory;
});
