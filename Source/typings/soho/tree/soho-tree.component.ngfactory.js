(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-tree.component", "./soho-tree.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-tree.component");
    var i2 = require("./soho-tree.service");
    var styles_SohoTreeComponent = [];
    var RenderType_SohoTreeComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoTreeComponent, data: {} });
    exports.RenderType_SohoTreeComponent = RenderType_SohoTreeComponent;
    function View_SohoTreeComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoTreeComponent_0 = View_SohoTreeComponent_0;
    function View_SohoTreeComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ul", [["soho-tree", ""]], [[2, "is-disabled", null], [2, "tree", null], [1, "role", 0]], null, null, View_SohoTreeComponent_0, RenderType_SohoTreeComponent)), i0.ɵdid(1, 4440064, null, 0, i1.SohoTreeComponent, [i0.ElementRef, [2, i2.SohoTreeService]], { sohoTree: [0, "sohoTree"] }, null)], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isDisabled; var currVal_1 = i0.ɵnov(_v, 1).treeClass; var currVal_2 = i0.ɵnov(_v, 1).treeRole; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
    exports.View_SohoTreeComponent_Host_0 = View_SohoTreeComponent_Host_0;
    var SohoTreeComponentNgFactory = i0.ɵccf("ul[soho-tree]", i1.SohoTreeComponent, View_SohoTreeComponent_Host_0, { dataset: "dataset", sohoTree: "soho-tree", selectable: "selectable", hideCheckboxes: "hideCheckboxes", source: "source", folderIconOpen: "folderIconOpen", folderIconClosed: "folderIconClosed" }, { expand: "expand", collapse: "collapse", selected: "selected", sortstart: "sortstart", sortend: "sortend", menuselect: "menuselect", menuopen: "menuopen" }, ["*"]);
    exports.SohoTreeComponentNgFactory = SohoTreeComponentNgFactory;
});
