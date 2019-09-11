(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../searchfield/soho-searchfield.component.ngfactory", "../searchfield/soho-searchfield.component", "@angular/common", "./soho-listview.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("../searchfield/soho-searchfield.component.ngfactory");
    var i2 = require("../searchfield/soho-searchfield.component");
    var i3 = require("@angular/common");
    var i4 = require("./soho-listview.component");
    var styles_SohoListViewSearchComponent = [];
    var RenderType_SohoListViewSearchComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoListViewSearchComponent, data: {} });
    exports.RenderType_SohoListViewSearchComponent = RenderType_SohoListViewSearchComponent;
    function View_SohoListViewSearchComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input", [["soho-searchfield", ""]], [[2, "searchfield", null]], null, null, i1.View_SohoSearchFieldComponent_0, i1.RenderType_SohoSearchFieldComponent)), i0.ɵdid(1, 4374528, null, 0, i2.SohoSearchFieldComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSearchField; _ck(_v, 0, 0, currVal_0); }); }
    function View_SohoListViewSearchComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_SohoListViewSearchComponent_1)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0), i0.ɵncd(null, 1), i0.ɵncd(null, 2)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.buildSearch; _ck(_v, 1, 0, currVal_0); }, null); }
    exports.View_SohoListViewSearchComponent_0 = View_SohoListViewSearchComponent_0;
    function View_SohoListViewSearchComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-listview-search", ""]], [[2, "listview-search", null]], null, null, View_SohoListViewSearchComponent_0, RenderType_SohoListViewSearchComponent)), i0.ɵdid(1, 49152, null, 0, i4.SohoListViewSearchComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isListviewSearch; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoListViewSearchComponent_Host_0 = View_SohoListViewSearchComponent_Host_0;
    var SohoListViewSearchComponentNgFactory = i0.ɵccf("[soho-listview-search]", i4.SohoListViewSearchComponent, View_SohoListViewSearchComponent_Host_0, { buildSearch: "buildSearch" }, {}, ["span[soho-searchfield-wrapper]", "input[soho-searchfield]", "*"]);
    exports.SohoListViewSearchComponentNgFactory = SohoListViewSearchComponentNgFactory;
    var styles_SohoListViewItemComponent = [];
    var RenderType_SohoListViewItemComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoListViewItemComponent, data: {} });
    exports.RenderType_SohoListViewItemComponent = RenderType_SohoListViewItemComponent;
    function View_SohoListViewItemComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoListViewItemComponent_0 = View_SohoListViewItemComponent_0;
    function View_SohoListViewItemComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-listview-item", ""]], [[2, "is-disabled", null], [2, "is-selected", null]], null, null, View_SohoListViewItemComponent_0, RenderType_SohoListViewItemComponent)), i0.ɵdid(1, 4243456, null, 0, i4.SohoListViewItemComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).disabled; var currVal_1 = i0.ɵnov(_v, 1).selected; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoListViewItemComponent_Host_0 = View_SohoListViewItemComponent_Host_0;
    var SohoListViewItemComponentNgFactory = i0.ɵccf("[soho-listview-item]", i4.SohoListViewItemComponent, View_SohoListViewItemComponent_Host_0, { disabled: "disabled", selected: "selected" }, {}, ["*"]);
    exports.SohoListViewItemComponentNgFactory = SohoListViewItemComponentNgFactory;
    var styles_SohoListViewHeaderComponent = [];
    var RenderType_SohoListViewHeaderComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoListViewHeaderComponent, data: {} });
    exports.RenderType_SohoListViewHeaderComponent = RenderType_SohoListViewHeaderComponent;
    function View_SohoListViewHeaderComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoListViewHeaderComponent_0 = View_SohoListViewHeaderComponent_0;
    function View_SohoListViewHeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-listview-header", ""]], [[2, "listview-heading", null]], null, null, View_SohoListViewHeaderComponent_0, RenderType_SohoListViewHeaderComponent)), i0.ɵdid(1, 49152, null, 0, i4.SohoListViewHeaderComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isHeading; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoListViewHeaderComponent_Host_0 = View_SohoListViewHeaderComponent_Host_0;
    var SohoListViewHeaderComponentNgFactory = i0.ɵccf("[soho-listview-header]", i4.SohoListViewHeaderComponent, View_SohoListViewHeaderComponent_Host_0, {}, {}, ["*"]);
    exports.SohoListViewHeaderComponentNgFactory = SohoListViewHeaderComponentNgFactory;
    var styles_SohoListViewSubHeaderComponent = [];
    var RenderType_SohoListViewSubHeaderComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoListViewSubHeaderComponent, data: {} });
    exports.RenderType_SohoListViewSubHeaderComponent = RenderType_SohoListViewSubHeaderComponent;
    function View_SohoListViewSubHeaderComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoListViewSubHeaderComponent_0 = View_SohoListViewSubHeaderComponent_0;
    function View_SohoListViewSubHeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-listview-subheader", ""]], [[2, "listview-subheading", null]], null, null, View_SohoListViewSubHeaderComponent_0, RenderType_SohoListViewSubHeaderComponent)), i0.ɵdid(1, 49152, null, 0, i4.SohoListViewSubHeaderComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSubHeading; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoListViewSubHeaderComponent_Host_0 = View_SohoListViewSubHeaderComponent_Host_0;
    var SohoListViewSubHeaderComponentNgFactory = i0.ɵccf("[soho-listview-subheader]", i4.SohoListViewSubHeaderComponent, View_SohoListViewSubHeaderComponent_Host_0, {}, {}, ["*"]);
    exports.SohoListViewSubHeaderComponentNgFactory = SohoListViewSubHeaderComponentNgFactory;
    var styles_SohoListViewMicroComponent = [];
    var RenderType_SohoListViewMicroComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoListViewMicroComponent, data: {} });
    exports.RenderType_SohoListViewMicroComponent = RenderType_SohoListViewMicroComponent;
    function View_SohoListViewMicroComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoListViewMicroComponent_0 = View_SohoListViewMicroComponent_0;
    function View_SohoListViewMicroComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-listview-micro", ""]], [[2, "listview-micro", null]], null, null, View_SohoListViewMicroComponent_0, RenderType_SohoListViewMicroComponent)), i0.ɵdid(1, 49152, null, 0, i4.SohoListViewMicroComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isMicro; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoListViewMicroComponent_Host_0 = View_SohoListViewMicroComponent_Host_0;
    var SohoListViewMicroComponentNgFactory = i0.ɵccf("[soho-listview-micro]", i4.SohoListViewMicroComponent, View_SohoListViewMicroComponent_Host_0, {}, {}, ["*"]);
    exports.SohoListViewMicroComponentNgFactory = SohoListViewMicroComponentNgFactory;
    var styles_SohoListViewComponent = [".smaller[_ngcontent-%COMP%] {\n      width: 50%;\n    }"];
    var RenderType_SohoListViewComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SohoListViewComponent, data: {} });
    exports.RenderType_SohoListViewComponent = RenderType_SohoListViewComponent;
    function View_SohoListViewComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-listview-search", ""]], [[2, "listview-search", null]], null, null, View_SohoListViewSearchComponent_0, RenderType_SohoListViewSearchComponent)), i0.ɵdid(1, 49152, null, 0, i4.SohoListViewSearchComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isListviewSearch; _ck(_v, 0, 0, currVal_0); }); }
    function View_SohoListViewComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["soho-listview-search", ""]], [[2, "listview-search", null]], null, null, View_SohoListViewSearchComponent_0, RenderType_SohoListViewSearchComponent)), i0.ɵdid(1, 49152, null, 0, i4.SohoListViewSearchComponent, [], { buildSearch: [0, "buildSearch"] }, null), i0.ɵncd(2, 0)], function (_ck, _v) { var currVal_1 = false; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isListviewSearch; _ck(_v, 0, 0, currVal_0); }); }
    function View_SohoListViewComponent_0(_l) { return i0.ɵvid(2, [i0.ɵqud(671088640, 1, { listViewRef: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SohoListViewComponent_1)), i0.ɵdid(2, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SohoListViewComponent_2)), i0.ɵdid(4, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 1), i0.ɵncd(null, 2), (_l()(), i0.ɵeld(7, 0, [[1, 0], ["listview", 1]], null, 3, "div", [], [[8, "className", 0], [1, "id", 0]], null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "ul", [], null, null, null, null, null)), i0.ɵncd(null, 3), i0.ɵncd(null, 4)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.searchable && !_co.searchfieldRef); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.searchable && _co.searchfieldRef); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.listClass; var currVal_3 = _co.sohoListviewElementId; _ck(_v, 7, 0, currVal_2, currVal_3); }); }
    exports.View_SohoListViewComponent_0 = View_SohoListViewComponent_0;
    function View_SohoListViewComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "soho-listview", [], null, null, null, View_SohoListViewComponent_0, RenderType_SohoListViewComponent)), i0.ɵdid(1, 12763136, null, 2, i4.SohoListViewComponent, [i0.NgZone, i0.ElementRef], null, null), i0.ɵqud(603979776, 1, { items: 1 }), i0.ɵqud(603979776, 2, { searchfieldRef: 0 })], null, null); }
    exports.View_SohoListViewComponent_Host_0 = View_SohoListViewComponent_Host_0;
    var SohoListViewComponentNgFactory = i0.ɵccf("soho-listview", i4.SohoListViewComponent, View_SohoListViewComponent_Host_0, { class: "class", sohoListviewElementId: "sohoListviewElementId", dataset: "dataset", description: "description", pagesize: "pagesize", paging: "paging", searchable: "searchable", selectable: "selectable", selectOnFocus: "selectOnFocus", emptyMessage: "emptyMessage", source: "source", template: "template", disableItemDeactivation: "disableItemDeactivation", selectedItems: "selectedItems" }, { rendered: "rendered", selected: "selected", unselected: "unselected", deselected: "deselected", itemactivated: "itemactivated", itemdeactivated: "itemdeactivated", click: "click", dblclick: "dblclick", contextmenu: "contextmenu", sorted: "sorted" }, ["input[soho-searchfield]", "div.[soho-listview-search]", "soho-toolbar.contextual-toolbar,div.[soho-toolbar].contextual-toolbar", "li[soho-listview-item]", "[soho-emptymessage]"]);
    exports.SohoListViewComponentNgFactory = SohoListViewComponentNgFactory;
});
