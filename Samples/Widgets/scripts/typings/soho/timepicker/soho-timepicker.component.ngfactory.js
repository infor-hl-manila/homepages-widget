(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-timepicker.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-timepicker.component");
    var styles_SohoTimePickerComponent = [];
    var RenderType_SohoTimePickerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTimePickerComponent, data: {} });
    exports.RenderType_SohoTimePickerComponent = RenderType_SohoTimePickerComponent;
    function View_SohoTimePickerComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTimePickerComponent_0 = View_SohoTimePickerComponent_0;
    function View_SohoTimePickerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "input", [["soho-timepicker", ""]], [[2, "timepicker", null]], null, null, View_SohoTimePickerComponent_0, RenderType_SohoTimePickerComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoTimePickerComponent]), i0.ɵdid(2, 12763136, null, 0, i2.SohoTimePickerComponent, [i0.ElementRef, i0.NgZone, i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isTimepicker; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoTimePickerComponent_Host_0 = View_SohoTimePickerComponent_Host_0;
    var SohoTimePickerComponentNgFactory = i0.ɵccf("input[soho-timepicker]", i2.SohoTimePickerComponent, View_SohoTimePickerComponent_Host_0, { mode: "mode", timeFormat: "timeFormat", minuteInterval: "minuteInterval", roundToInterval: "roundToInterval", disabled: "disabled", readonly: "readonly" }, { change: "change" }, ["*"]);
    exports.SohoTimePickerComponentNgFactory = SohoTimePickerComponentNgFactory;
});
