(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-checkbox.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-checkbox.component");
    var styles_SohoCheckBoxComponent = [];
    var RenderType_SohoCheckBoxComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoCheckBoxComponent, data: {} });
    exports.RenderType_SohoCheckBoxComponent = RenderType_SohoCheckBoxComponent;
    function View_SohoCheckBoxComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoCheckBoxComponent_0 = View_SohoCheckBoxComponent_0;
    function View_SohoCheckBoxComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-checkbox", ""]], [[1, "type", 0], [2, "checkbox", null], [2, "partial", null], [1, "aria-checked", 0], [1, "checked", 0]], null, null, View_SohoCheckBoxComponent_0, RenderType_SohoCheckBoxComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoCheckBoxComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isCheckBoxType; var currVal_1 = i0.ɵnov(_v, 1).isCheckBox; var currVal_2 = i0.ɵnov(_v, 1).isPartialCheckBox; var currVal_3 = i0.ɵnov(_v, 1).isPartialAriaChecked; var currVal_4 = i0.ɵnov(_v, 1).checked; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    exports.View_SohoCheckBoxComponent_Host_0 = View_SohoCheckBoxComponent_Host_0;
    var SohoCheckBoxComponentNgFactory = i0.ɵccf("[soho-checkbox]", i1.SohoCheckBoxComponent, View_SohoCheckBoxComponent_Host_0, { partial: "partial", checked: "checked" }, { changeEvent: "changeEvent", updateEvent: "updateEvent" }, ["*"]);
    exports.SohoCheckBoxComponentNgFactory = SohoCheckBoxComponentNgFactory;
});
