(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-colorpicker.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-colorpicker.component");
    var styles_SohoColorPickerComponent = [];
    var RenderType_SohoColorPickerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoColorPickerComponent, data: {} });
    exports.RenderType_SohoColorPickerComponent = RenderType_SohoColorPickerComponent;
    function View_SohoColorPickerComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoColorPickerComponent_0 = View_SohoColorPickerComponent_0;
    function View_SohoColorPickerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input", [["soho-colorpicker", ""]], [[2, "colorpicker", null]], null, null, View_SohoColorPickerComponent_0, RenderType_SohoColorPickerComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoColorPickerComponent, [i0.ElementRef, i0.NgZone, [8, null], i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isColorpicker; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoColorPickerComponent_Host_0 = View_SohoColorPickerComponent_Host_0;
    var SohoColorPickerComponentNgFactory = i0.ɵccf("input[soho-colorpicker]", i1.SohoColorPickerComponent, View_SohoColorPickerComponent_Host_0, { colors: "colors", disabled: "disabled", editable: "editable", uppercase: "uppercase", clearable: "clearable", customColors: "customColors", colorOnly: "colorOnly", clearableText: "clearableText", readonly: "readonly", showLabel: "showLabel" }, { change: "change", updatedEvent: "updated" }, ["*"]);
    exports.SohoColorPickerComponentNgFactory = SohoColorPickerComponentNgFactory;
});
