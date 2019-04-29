(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-header.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-header.component");
    var styles_SohoHeaderComponent = [];
    var RenderType_SohoHeaderComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoHeaderComponent, data: {} });
    exports.RenderType_SohoHeaderComponent = RenderType_SohoHeaderComponent;
    function View_SohoHeaderComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoHeaderComponent_0 = View_SohoHeaderComponent_0;
    function View_SohoHeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-header", [], [[2, "header", null], [2, "is-personalizable", null], [2, "has-toolbar", null], [2, "has-tabs", null]], null, null, View_SohoHeaderComponent_0, RenderType_SohoHeaderComponent)), i0.ɵdid(1, 4243456, null, 0, i1.SohoHeaderComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isHeader; var currVal_1 = i0.ɵnov(_v, 1).isPersonalizable; var currVal_2 = i0.ɵnov(_v, 1).hasToolbar; var currVal_3 = i0.ɵnov(_v, 1).hasTabs; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
    exports.View_SohoHeaderComponent_Host_0 = View_SohoHeaderComponent_Host_0;
    var SohoHeaderComponentNgFactory = i0.ɵccf("soho-header", i1.SohoHeaderComponent, View_SohoHeaderComponent_Host_0, { hasToolbar: "hasToolbar", hasTabs: "hasTabs" }, { updated: "updated" }, ["*"]);
    exports.SohoHeaderComponentNgFactory = SohoHeaderComponentNgFactory;
});
