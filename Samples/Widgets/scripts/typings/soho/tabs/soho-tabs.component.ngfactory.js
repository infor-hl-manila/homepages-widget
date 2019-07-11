(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-tabs.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-tabs.component");
    var styles_SohoTabTitleComponent = [];
    var RenderType_SohoTabTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabTitleComponent, data: {} });
    exports.RenderType_SohoTabTitleComponent = RenderType_SohoTabTitleComponent;
    function View_SohoTabTitleComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabTitleComponent_0 = View_SohoTabTitleComponent_0;
    function View_SohoTabTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["soho-tab-title", ""]], [[1, "href", 4]], null, null, View_SohoTabTitleComponent_0, RenderType_SohoTabTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).hrefAttr; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoTabTitleComponent_Host_0 = View_SohoTabTitleComponent_Host_0;
    var SohoTabTitleComponentNgFactory = i0.ɵccf("a[soho-tab-title]", i1.SohoTabTitleComponent, View_SohoTabTitleComponent_Host_0, { tabId: "tabId" }, {}, ["*"]);
    exports.SohoTabTitleComponentNgFactory = SohoTabTitleComponentNgFactory;
    var styles_SohoTabCountComponent = [];
    var RenderType_SohoTabCountComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabCountComponent, data: {} });
    exports.RenderType_SohoTabCountComponent = RenderType_SohoTabCountComponent;
    function View_SohoTabCountComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabCountComponent_0 = View_SohoTabCountComponent_0;
    function View_SohoTabCountComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["soho-tab-count", ""]], null, null, null, View_SohoTabCountComponent_0, RenderType_SohoTabCountComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabCountComponent, [i0.ElementRef], null, null)], null, null); }
    exports.View_SohoTabCountComponent_Host_0 = View_SohoTabCountComponent_Host_0;
    var SohoTabCountComponentNgFactory = i0.ɵccf("span[soho-tab-count]", i1.SohoTabCountComponent, View_SohoTabCountComponent_Host_0, {}, {}, ["*"]);
    exports.SohoTabCountComponentNgFactory = SohoTabCountComponentNgFactory;
    var styles_SohoTabSeparatorComponent = [];
    var RenderType_SohoTabSeparatorComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabSeparatorComponent, data: {} });
    exports.RenderType_SohoTabSeparatorComponent = RenderType_SohoTabSeparatorComponent;
    function View_SohoTabSeparatorComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabSeparatorComponent_0 = View_SohoTabSeparatorComponent_0;
    function View_SohoTabSeparatorComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [["soho-tab-separator", ""]], null, null, null, View_SohoTabSeparatorComponent_0, RenderType_SohoTabSeparatorComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabSeparatorComponent, [i0.ElementRef], null, null)], null, null); }
    exports.View_SohoTabSeparatorComponent_Host_0 = View_SohoTabSeparatorComponent_Host_0;
    var SohoTabSeparatorComponentNgFactory = i0.ɵccf("li[soho-tab-separator]", i1.SohoTabSeparatorComponent, View_SohoTabSeparatorComponent_Host_0, {}, {}, ["*"]);
    exports.SohoTabSeparatorComponentNgFactory = SohoTabSeparatorComponentNgFactory;
    var styles_SohoTabPanelContainerComponent = [];
    var RenderType_SohoTabPanelContainerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabPanelContainerComponent, data: {} });
    exports.RenderType_SohoTabPanelContainerComponent = RenderType_SohoTabPanelContainerComponent;
    function View_SohoTabPanelContainerComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabPanelContainerComponent_0 = View_SohoTabPanelContainerComponent_0;
    function View_SohoTabPanelContainerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-tab-panel-container", ""]], [[2, "scrollable-y", null]], null, null, View_SohoTabPanelContainerComponent_0, RenderType_SohoTabPanelContainerComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabPanelContainerComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).verticalScrolling; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoTabPanelContainerComponent_Host_0 = View_SohoTabPanelContainerComponent_Host_0;
    var SohoTabPanelContainerComponentNgFactory = i0.ɵccf("div[soho-tab-panel-container]", i1.SohoTabPanelContainerComponent, View_SohoTabPanelContainerComponent_Host_0, { verticalScrolling: "verticalScrolling" }, {}, ["*"]);
    exports.SohoTabPanelContainerComponentNgFactory = SohoTabPanelContainerComponentNgFactory;
    var styles_SohoTabPanelComponent = [];
    var RenderType_SohoTabPanelComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabPanelComponent, data: {} });
    exports.RenderType_SohoTabPanelComponent = RenderType_SohoTabPanelComponent;
    function View_SohoTabPanelComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabPanelComponent_0 = View_SohoTabPanelComponent_0;
    function View_SohoTabPanelComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-tab-panel", ""]], [[1, "id", 0], [1, "contained", 0]], null, null, View_SohoTabPanelComponent_0, RenderType_SohoTabPanelComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabPanelComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).tabId; var currVal_1 = i0.ɵnov(_v, 1).contained; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoTabPanelComponent_Host_0 = View_SohoTabPanelComponent_Host_0;
    var SohoTabPanelComponentNgFactory = i0.ɵccf("div[soho-tab-panel]", i1.SohoTabPanelComponent, View_SohoTabPanelComponent_Host_0, { tabId: "tabId", contained: "contained" }, {}, ["*"]);
    exports.SohoTabPanelComponentNgFactory = SohoTabPanelComponentNgFactory;
    var styles_SohoTabComponent = [];
    var RenderType_SohoTabComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabComponent, data: {} });
    exports.RenderType_SohoTabComponent = RenderType_SohoTabComponent;
    function View_SohoTabComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabComponent_0 = View_SohoTabComponent_0;
    function View_SohoTabComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "li", [["soho-tab", ""]], [[2, "dismissible", null], [2, "is-selected", null], [2, "is-disabled", null], [2, "hidden", null], [2, "has-popupmenu", null]], null, null, View_SohoTabComponent_0, RenderType_SohoTabComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).dismissible; var currVal_1 = i0.ɵnov(_v, 1).selected; var currVal_2 = i0.ɵnov(_v, 1).disabled; var currVal_3 = i0.ɵnov(_v, 1).hidden; var currVal_4 = i0.ɵnov(_v, 1).hasPopupMenu; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    exports.View_SohoTabComponent_Host_0 = View_SohoTabComponent_Host_0;
    var SohoTabComponentNgFactory = i0.ɵccf("li[soho-tab]", i1.SohoTabComponent, View_SohoTabComponent_Host_0, { dismissible: "dismissible", selected: "selected", disabled: "disabled", hidden: "hidden", hasPopupMenu: "hasPopupMenu" }, {}, ["*"]);
    exports.SohoTabComponentNgFactory = SohoTabComponentNgFactory;
    var styles_SohoTabListComponent = [];
    var RenderType_SohoTabListComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabListComponent, data: {} });
    exports.RenderType_SohoTabListComponent = RenderType_SohoTabListComponent;
    function View_SohoTabListComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabListComponent_0 = View_SohoTabListComponent_0;
    function View_SohoTabListComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ul", [["soho-tab-list", ""]], null, null, null, View_SohoTabListComponent_0, RenderType_SohoTabListComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabListComponent, [i0.ElementRef], null, null)], null, null); }
    exports.View_SohoTabListComponent_Host_0 = View_SohoTabListComponent_Host_0;
    var SohoTabListComponentNgFactory = i0.ɵccf("ul[soho-tab-list]", i1.SohoTabListComponent, View_SohoTabListComponent_Host_0, {}, {}, ["*"]);
    exports.SohoTabListComponentNgFactory = SohoTabListComponentNgFactory;
    var styles_SohoTabListContainerComponent = [];
    var RenderType_SohoTabListContainerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabListContainerComponent, data: {} });
    exports.RenderType_SohoTabListContainerComponent = RenderType_SohoTabListContainerComponent;
    function View_SohoTabListContainerComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabListContainerComponent_0 = View_SohoTabListContainerComponent_0;
    function View_SohoTabListContainerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-tab-list-container", ""]], [[2, "scrollable-y", null]], null, null, View_SohoTabListContainerComponent_0, RenderType_SohoTabListContainerComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoTabListContainerComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).verticalScrolling; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoTabListContainerComponent_Host_0 = View_SohoTabListContainerComponent_Host_0;
    var SohoTabListContainerComponentNgFactory = i0.ɵccf("div[soho-tab-list-container]", i1.SohoTabListContainerComponent, View_SohoTabListContainerComponent_Host_0, { verticalScrolling: "verticalScrolling" }, {}, ["*"]);
    exports.SohoTabListContainerComponentNgFactory = SohoTabListContainerComponentNgFactory;
    var styles_SohoTabsComponent = [];
    var RenderType_SohoTabsComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTabsComponent, data: {} });
    exports.RenderType_SohoTabsComponent = RenderType_SohoTabsComponent;
    function View_SohoTabsComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTabsComponent_0 = View_SohoTabsComponent_0;
    function View_SohoTabsComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-tabs", ""]], [[2, "vertical", null], [2, "module-tabs", null], [2, "header-tabs", null], [2, "alternate", null]], null, null, View_SohoTabsComponent_0, RenderType_SohoTabsComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoTabsComponent, [i0.ChangeDetectorRef, i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isVertical; var currVal_1 = i0.ɵnov(_v, 1).isModuleTabs; var currVal_2 = i0.ɵnov(_v, 1).isHeaderTabs; var currVal_3 = i0.ɵnov(_v, 1).isAlternate; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoTabsComponent_Host_0 = View_SohoTabsComponent_Host_0;
    var SohoTabsComponentNgFactory = i0.ɵccf("div[soho-tabs]", i1.SohoTabsComponent, View_SohoTabsComponent_Host_0, { alternate: "alternate", vertical: "vertical", moduleTabs: "moduleTabs", headerTabs: "headerTabs", beforeCloseCallback: "beforeCloseCallback", tabsOptions: "tabsOptions", addTabButton: "addTabButton", addTabButtonCallback: "addTabButtonCallback", containerElement: "containerElement", changeTabOnHashChange: "changeTabOnHashChange", hashChangeCallback: "hashChangeCallback", tabCounts: "tabCounts", verticalResponsive: "verticalResponsive", disableAutoUpdatedCall: "disableAutoUpdatedCall" }, { beforeActivated: "beforeActivated", beforeActivate: "beforeActivate", activated: "activated", afterActivated: "afterActivated", beforeClose: "beforeClose", close: "close", afterClose: "afterClose", tabAdded: "tabAdded" }, ["*"]);
    exports.SohoTabsComponentNgFactory = SohoTabsComponentNgFactory;
});
