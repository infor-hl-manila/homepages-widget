(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-splitter.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-splitter.component");
    var styles_SohoSplitterComponent = [];
    var RenderType_SohoSplitterComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoSplitterComponent, data: {} });
    exports.RenderType_SohoSplitterComponent = RenderType_SohoSplitterComponent;
    function View_SohoSplitterComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoSplitterComponent_0 = View_SohoSplitterComponent_0;
    function View_SohoSplitterComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-splitter", [], [[2, "splitter", null], [2, "splitter-right", null]], null, null, View_SohoSplitterComponent_0, RenderType_SohoSplitterComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoSplitterComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isSplitter; var currVal_1 = i0.ɵnov(_v, 1).isSplitterRight; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoSplitterComponent_Host_0 = View_SohoSplitterComponent_Host_0;
    var SohoSplitterComponentNgFactory = i0.ɵccf("soho-splitter", i1.SohoSplitterComponent, View_SohoSplitterComponent_Host_0, { axis: "axis", resize: "resize", containment: "containment", collapseButton: "collapseButton", save: "save", isSplitterRight: "isSplitterRight" }, { split: "split" }, ["*"]);
    exports.SohoSplitterComponentNgFactory = SohoSplitterComponentNgFactory;
});
