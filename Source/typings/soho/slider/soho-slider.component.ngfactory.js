(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-slider.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-slider.component");
    var styles_SohoSliderComponent = [];
    var RenderType_SohoSliderComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSliderComponent, data: {} });
    exports.RenderType_SohoSliderComponent = RenderType_SohoSliderComponent;
    function View_SohoSliderComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSliderComponent_0 = View_SohoSliderComponent_0;
    function View_SohoSliderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "input", [["soho-slider", ""]], [[2, "slider", null], [2, "vertical", null], [1, "type", 0]], null, null, View_SohoSliderComponent_0, RenderType_SohoSliderComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoSliderComponent]), i0.ɵdid(2, 12763136, null, 0, i2.SohoSliderComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isSlider; var currVal_1 = i0.ɵnov(_v, 2).isVerticalSlider; var currVal_2 = i0.ɵnov(_v, 2).sliderType; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
    exports.View_SohoSliderComponent_Host_0 = View_SohoSliderComponent_Host_0;
    var SohoSliderComponentNgFactory = i0.ɵccf("input[soho-slider]", i2.SohoSliderComponent, View_SohoSliderComponent_Host_0, { min: "min", max: "max", step: "step", value: "value", range: "range", ticks: "ticks", persistTooltip: "persistTooltip", tooltipContent: "tooltipContent", vertical: "vertical", disabled: "disabled", readonly: "readonly" }, { change: "change", updated: "updated" }, ["*"]);
    exports.SohoSliderComponentNgFactory = SohoSliderComponentNgFactory;
});
