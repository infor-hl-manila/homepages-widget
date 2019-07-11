(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-tag.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-tag.component");
    var styles_SohoTagListComponent = [];
    var RenderType_SohoTagListComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTagListComponent, data: {} });
    exports.RenderType_SohoTagListComponent = RenderType_SohoTagListComponent;
    function View_SohoTagListComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTagListComponent_0 = View_SohoTagListComponent_0;
    function View_SohoTagListComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-tag-list", ""]], [[2, "tag-list", null]], null, null, View_SohoTagListComponent_0, RenderType_SohoTagListComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoTagListComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isTagList; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoTagListComponent_Host_0 = View_SohoTagListComponent_Host_0;
    var SohoTagListComponentNgFactory = i0.ɵccf("[soho-tag-list]", i1.SohoTagListComponent, View_SohoTagListComponent_Host_0, {}, { afterRemove: "afterRemove" }, ["*"]);
    exports.SohoTagListComponentNgFactory = SohoTagListComponentNgFactory;
    var styles_SohoTagComponent = [];
    var RenderType_SohoTagComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTagComponent, data: {} });
    exports.RenderType_SohoTagComponent = RenderType_SohoTagComponent;
    function View_SohoTagComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTagComponent_0 = View_SohoTagComponent_0;
    function View_SohoTagComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-tag", ""]], [[2, "tag", null], [2, "alert", null], [2, "good", null], [2, "secondary", null], [2, "error", null], [2, "is-clickable", null], [2, "is-dismissible", null]], null, null, View_SohoTagComponent_0, RenderType_SohoTagComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoTagComponent, [i0.ElementRef, i0.NgZone], { sohoTag: [0, "sohoTag"] }, null)], function (_ck, _v) { var currVal_7 = ""; _ck(_v, 1, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isTag; var currVal_1 = i0.ɵnov(_v, 1).alert; var currVal_2 = i0.ɵnov(_v, 1).good; var currVal_3 = i0.ɵnov(_v, 1).secondary; var currVal_4 = i0.ɵnov(_v, 1).error; var currVal_5 = i0.ɵnov(_v, 1).isClickable; var currVal_6 = i0.ɵnov(_v, 1).isDismissible; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
    exports.View_SohoTagComponent_Host_0 = View_SohoTagComponent_Host_0;
    var SohoTagComponentNgFactory = i0.ɵccf("[soho-tag]", i1.SohoTagComponent, View_SohoTagComponent_Host_0, { isClickable: "isClickable", isDismissible: "isDismissible", sohoTag: "soho-tag" }, { beforeRemove: "beforeRemove", click: "click" }, ["*"]);
    exports.SohoTagComponentNgFactory = SohoTagComponentNgFactory;
});
