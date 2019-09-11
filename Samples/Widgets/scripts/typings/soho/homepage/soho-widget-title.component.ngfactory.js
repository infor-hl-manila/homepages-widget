(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-widget-title.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-widget-title.component");
    var styles_SohoWidgetTitleComponent = [];
    var RenderType_SohoWidgetTitleComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoWidgetTitleComponent, data: {} });
    exports.RenderType_SohoWidgetTitleComponent = RenderType_SohoWidgetTitleComponent;
    function View_SohoWidgetTitleComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoWidgetTitleComponent_0 = View_SohoWidgetTitleComponent_0;
    function View_SohoWidgetTitleComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-widget-title", ""]], [[1, "tabindex", 0], [2, "widget-title", null]], null, null, View_SohoWidgetTitleComponent_0, RenderType_SohoWidgetTitleComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoWidgetTitleComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).tabIndex; var currVal_1 = i0.ɵnov(_v, 1).isWidgetTitle; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoWidgetTitleComponent_Host_0 = View_SohoWidgetTitleComponent_Host_0;
    var SohoWidgetTitleComponentNgFactory = i0.ɵccf("div[soho-widget-title]", i1.SohoWidgetTitleComponent, View_SohoWidgetTitleComponent_Host_0, { tabIndex: "tabIndex" }, {}, ["*"]);
    exports.SohoWidgetTitleComponentNgFactory = SohoWidgetTitleComponentNgFactory;
});
