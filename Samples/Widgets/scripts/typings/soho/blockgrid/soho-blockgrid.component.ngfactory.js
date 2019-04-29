(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-blockgrid.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-blockgrid.component");
    var styles_SohoBlockGridComponent = [];
    var RenderType_SohoBlockGridComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoBlockGridComponent, data: {} });
    exports.RenderType_SohoBlockGridComponent = RenderType_SohoBlockGridComponent;
    function View_SohoBlockGridComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoBlockGridComponent_0 = View_SohoBlockGridComponent_0;
    function View_SohoBlockGridComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-blockgrid", ""]], [[2, "blockgrid", null]], null, null, View_SohoBlockGridComponent_0, RenderType_SohoBlockGridComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoBlockGridComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isBlockGrid; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoBlockGridComponent_Host_0 = View_SohoBlockGridComponent_Host_0;
    var SohoBlockGridComponentNgFactory = i0.ɵccf("[soho-blockgrid]", i1.SohoBlockGridComponent, View_SohoBlockGridComponent_Host_0, { dataset: "dataset", selectable: "selectable" }, { selected: "selected", deselected: "deselected", activated: "activated", deactivated: "deactivated" }, ["*"]);
    exports.SohoBlockGridComponentNgFactory = SohoBlockGridComponentNgFactory;
});
