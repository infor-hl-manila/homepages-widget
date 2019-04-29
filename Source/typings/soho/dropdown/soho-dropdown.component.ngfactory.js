(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-dropdown.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-dropdown.component");
    var styles_SohoDropDownComponent = [];
    var RenderType_SohoDropDownComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoDropDownComponent, data: {} });
    exports.RenderType_SohoDropDownComponent = RenderType_SohoDropDownComponent;
    function View_SohoDropDownComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoDropDownComponent_0 = View_SohoDropDownComponent_0;
    function View_SohoDropDownComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "select", [["soho-dropdown", ""]], [[8, "id", 0], [1, "multiple", 0], [2, "dropdown", null], [2, "multiselect", null]], null, null, View_SohoDropDownComponent_0, RenderType_SohoDropDownComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoDropDownComponent, [i0.ElementRef, i0.NgZone, [8, null], i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).id; var currVal_1 = i0.ɵnov(_v, 1).isMultiple; var currVal_2 = i0.ɵnov(_v, 1).isDropdown; var currVal_3 = i0.ɵnov(_v, 1).isMultiSelect; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoDropDownComponent_Host_0 = View_SohoDropDownComponent_Host_0;
    var SohoDropDownComponentNgFactory = i0.ɵccf("select[soho-dropdown]", i1.SohoDropDownComponent, View_SohoDropDownComponent_Host_0, { closeOnSelect: "closeOnSelect", cssClass: "cssClass", delay: "delay", empty: "empty", maxSelected: "maxSelected", moveSelectedToTop: "moveSelectedToTop", moveSelected: "moveSelected", showEmptyGroupHeaders: "showEmptyGroupHeaders", sourceArguments: "sourceArguments", reloadSourceOnOpen: "reloadSourceOnOpen", reload: "reload", maxWidth: "maxWidth", filterMode: "filterMode", multiple: "multiple", name: "name", noSearch: "noSearch", source: "source", showSelectAll: "showSelectAll", disabled: "disabled", readonly: "readonly" }, { change: "change", updatedEvent: "updated" }, ["*"]);
    exports.SohoDropDownComponentNgFactory = SohoDropDownComponentNgFactory;
});
