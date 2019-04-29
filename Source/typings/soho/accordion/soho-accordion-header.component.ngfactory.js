(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-accordion-header.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-accordion-header.component");
    var styles_SohoAccordionHeaderComponent = [];
    var RenderType_SohoAccordionHeaderComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoAccordionHeaderComponent, data: {} });
    exports.RenderType_SohoAccordionHeaderComponent = RenderType_SohoAccordionHeaderComponent;
    function View_SohoAccordionHeaderComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "a", [["aria-haspopup", "true"], ["href", "#"], ["role", "button"]], [[1, "aria-expanded", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isExpanded; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoAccordionHeaderComponent_0 = View_SohoAccordionHeaderComponent_0;
    function View_SohoAccordionHeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-accordion-header", [], [[2, "is-disabled", null], [4, "display", null], [2, "accordion-header", null], [2, "is-expanded", null]], null, null, View_SohoAccordionHeaderComponent_0, RenderType_SohoAccordionHeaderComponent)), i0.ɵdid(1, 4243456, null, 0, i1.SohoAccordionHeaderComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isDisabled; var currVal_1 = i0.ɵnov(_v, 1).isBlockDisplay; var currVal_2 = i0.ɵnov(_v, 1).isAccordionHeader; var currVal_3 = i0.ɵnov(_v, 1).isExpanded; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoAccordionHeaderComponent_Host_0 = View_SohoAccordionHeaderComponent_Host_0;
    var SohoAccordionHeaderComponentNgFactory = i0.ɵccf("soho-accordion-header", i1.SohoAccordionHeaderComponent, View_SohoAccordionHeaderComponent_Host_0, { isExpanded: "isExpanded" }, {}, ["*"]);
    exports.SohoAccordionHeaderComponentNgFactory = SohoAccordionHeaderComponentNgFactory;
});
