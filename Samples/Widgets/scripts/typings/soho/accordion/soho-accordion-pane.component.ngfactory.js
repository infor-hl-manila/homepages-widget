(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-accordion-pane.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-accordion-pane.component");
    var styles_SohoAccordionPaneComponent = [];
    var RenderType_SohoAccordionPaneComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoAccordionPaneComponent, data: {} });
    exports.RenderType_SohoAccordionPaneComponent = RenderType_SohoAccordionPaneComponent;
    function View_SohoAccordionPaneComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoAccordionPaneComponent_0 = View_SohoAccordionPaneComponent_0;
    function View_SohoAccordionPaneComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-accordion-pane", [], [[2, "accordion-pane", null]], null, null, View_SohoAccordionPaneComponent_0, RenderType_SohoAccordionPaneComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoAccordionPaneComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isAccordionPane; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoAccordionPaneComponent_Host_0 = View_SohoAccordionPaneComponent_Host_0;
    var SohoAccordionPaneComponentNgFactory = i0.ɵccf("soho-accordion-pane", i1.SohoAccordionPaneComponent, View_SohoAccordionPaneComponent_Host_0, {}, {}, ["*"]);
    exports.SohoAccordionPaneComponentNgFactory = SohoAccordionPaneComponentNgFactory;
});
