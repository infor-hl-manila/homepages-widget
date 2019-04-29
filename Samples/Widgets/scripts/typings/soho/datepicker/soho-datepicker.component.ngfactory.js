(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-datepicker.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-datepicker.component");
    var styles_SohoDatePickerComponent = [];
    var RenderType_SohoDatePickerComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoDatePickerComponent, data: {} });
    exports.RenderType_SohoDatePickerComponent = RenderType_SohoDatePickerComponent;
    function View_SohoDatePickerComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoDatePickerComponent_0 = View_SohoDatePickerComponent_0;
    function View_SohoDatePickerComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "input", [["soho-datepicker", ""]], [[2, "datepicker", null], [2, "timepicker", null]], null, null, View_SohoDatePickerComponent_0, RenderType_SohoDatePickerComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoDatePickerComponent]), i0.ɵdid(2, 12763136, null, 0, i2.SohoDatePickerComponent, [i0.ElementRef, i0.NgZone, i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isDatepicker; var currVal_1 = i0.ɵnov(_v, 2).isTimepicker; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoDatePickerComponent_Host_0 = View_SohoDatePickerComponent_Host_0;
    var SohoDatePickerComponentNgFactory = i0.ɵccf("input[soho-datepicker]", i2.SohoDatePickerComponent, View_SohoDatePickerComponent_Host_0, { showTime: "showTime", useCurrentTime: "useCurrentTime", timeFormat: "timeFormat", minuteInterval: "minuteInterval", secondInterval: "secondInterval", firstDayOfWeek: "firstDayOfWeek", mode: "mode", range: "range", roundToInterval: "roundToInterval", dateFormat: "dateFormat", placeholder: "placeholder", disable: "disable", showLegend: "showLegend", showMonthYearPicker: "showMonthYearPicker", hideDays: "hideDays", advanceMonths: "advanceMonths", legend: "legend", calendarName: "calendarName", useUTC: "useUTC", options: "options", disabled: "disabled", readonly: "readonly" }, { change: "change" }, ["*"]);
    exports.SohoDatePickerComponentNgFactory = SohoDatePickerComponentNgFactory;
});
