(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-datagrid.component", "./soho-datagrid.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-datagrid.component");
    var i2 = require("./soho-datagrid.service");
    var styles_SohoDataGridComponent = [];
    var RenderType_SohoDataGridComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoDataGridComponent, data: {} });
    exports.RenderType_SohoDataGridComponent = RenderType_SohoDataGridComponent;
    function View_SohoDataGridComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoDataGridComponent_0 = View_SohoDataGridComponent_0;
    function View_SohoDataGridComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-datagrid", ""]], [[2, "is-disabled", null], [1, "role", 0]], null, null, View_SohoDataGridComponent_0, RenderType_SohoDataGridComponent)), i0.ɵdid(1, 12828672, null, 0, i1.SohoDataGridComponent, [i0.NgZone, i0.ElementRef, i0.ChangeDetectorRef, i0.ComponentFactoryResolver, i0.Injector, i0.ApplicationRef, [2, i2.SohoDataGridService]], { sohoDatagrid: [0, "sohoDatagrid"] }, null)], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isDisabled; var currVal_1 = i0.ɵnov(_v, 1).datagridRole; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoDataGridComponent_Host_0 = View_SohoDataGridComponent_Host_0;
    var SohoDataGridComponentNgFactory = i0.ɵccf("[soho-datagrid]", i1.SohoDataGridComponent, View_SohoDataGridComponent_Host_0, { gridOptions: "gridOptions", idProperty: "idProperty", frozenColumns: "frozenColumns", cellNavigation: "cellNavigation", rowNavigation: "rowNavigation", alternateRowShading: "alternateRowShading", dataset: "dataset", columnReorder: "columnReorder", disableClientSort: "disableClientSort", disableClientFilter: "disableClientFilter", editable: "editable", isList: "isList", menuId: "menuId", rowHeight: "rowHeight", selectable: "selectable", clickToSelect: "clickToSelect", toolbar: "toolbar", saveUserSettings: "saveUserSettings", paging: "paging", pagesize: "pagesize", pagesizes: "pagesizes", indeterminate: "indeterminate", actionableMode: "actionableMode", saveColumns: "saveColumns", source: "source", filterable: "filterable", treeGrid: "treeGrid", uniqueId: "uniqueId", rowReorder: "rowReorder", showDirty: "showDirty", disableRowDeactivation: "disableRowDeactivation", userObject: "userObject", groupable: "groupable", data: "data", columns: "columns", stretchColumn: "stretchColumn", showPageSizeSelector: "showPageSizeSelector", columnGroup: "columnGroup", emptyMessage: "emptyMessage", sohoDatagrid: "soho-datagrid" }, { selected: "selected", cellchange: "cellchange", rowRemove: "rowRemove", rowAdd: "rowAdd", filtered: "filtered", expandrow: "expandrow", exiteditmode: "exiteditmode", beforeentereditmode: "beforeentereditmode", entereditmode: "entereditmode", collapserow: "collapserow", sorted: "sorted", beforeRowActivated: "beforeRowActivated", rowActivated: "rowActivated", rowDeactivated: "rowDeactivated", rowClicked: "rowClicked", rowDoubleClicked: "rowDoubleClicked", contextMenu: "contextMenu", rowReordered: "rowReordered", openFilterRow: "openFilterRow", closeFilterRow: "closeFilterRow", settingsChanged: "settingsChanged", rendered: "rendered", afterRender: "afterRender" }, ["*"]);
    exports.SohoDataGridComponentNgFactory = SohoDataGridComponentNgFactory;
});
