(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-progress.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-progress.component");
    var styles_SohoProgressComponent = [];
    var RenderType_SohoProgressComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoProgressComponent, data: {} });
    exports.RenderType_SohoProgressComponent = RenderType_SohoProgressComponent;
    function View_SohoProgressComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [], [[2, "progress-bar", null], [1, "data-value", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = _co.value; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoProgressComponent_0 = View_SohoProgressComponent_0;
    function View_SohoProgressComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-progress", [], [[2, "progress", null], [4, "display", null]], null, null, View_SohoProgressComponent_0, RenderType_SohoProgressComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoProgressComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).progressClass; var currVal_1 = i0.ɵnov(_v, 1).dispType; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoProgressComponent_Host_0 = View_SohoProgressComponent_Host_0;
    var SohoProgressComponentNgFactory = i0.ɵccf("soho-progress", i1.SohoProgressComponent, View_SohoProgressComponent_Host_0, { progressValue: "progressValue" }, { change: "change" }, []);
    exports.SohoProgressComponentNgFactory = SohoProgressComponentNgFactory;
});
