(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-hierarchy.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-hierarchy.component");
    var styles_SohoHierarchyLeafTemplateComponent = [];
    var RenderType_SohoHierarchyLeafTemplateComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoHierarchyLeafTemplateComponent, data: {} });
    exports.RenderType_SohoHierarchyLeafTemplateComponent = RenderType_SohoHierarchyLeafTemplateComponent;
    function View_SohoHierarchyLeafTemplateComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoHierarchyLeafTemplateComponent_0 = View_SohoHierarchyLeafTemplateComponent_0;
    function View_SohoHierarchyLeafTemplateComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-hierarchy-leaf-template", [], null, null, null, View_SohoHierarchyLeafTemplateComponent_0, RenderType_SohoHierarchyLeafTemplateComponent)), i0.ɵdid(1, 49152, null, 0, i1.SohoHierarchyLeafTemplateComponent, [], null, null)], null, null); }
    exports.View_SohoHierarchyLeafTemplateComponent_Host_0 = View_SohoHierarchyLeafTemplateComponent_Host_0;
    var SohoHierarchyLeafTemplateComponentNgFactory = i0.ɵccf("soho-hierarchy-leaf-template", i1.SohoHierarchyLeafTemplateComponent, View_SohoHierarchyLeafTemplateComponent_Host_0, {}, {}, ["*"]);
    exports.SohoHierarchyLeafTemplateComponentNgFactory = SohoHierarchyLeafTemplateComponentNgFactory;
    var styles_SohoHierarchyComponent = [];
    var RenderType_SohoHierarchyComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoHierarchyComponent, data: {} });
    exports.RenderType_SohoHierarchyComponent = RenderType_SohoHierarchyComponent;
    function View_SohoHierarchyComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoHierarchyComponent_0 = View_SohoHierarchyComponent_0;
    function View_SohoHierarchyComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "figure", [["soho-hierarchy", ""]], [[1, "class", 0]], null, null, View_SohoHierarchyComponent_0, RenderType_SohoHierarchyComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoHierarchyComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).hostClass; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoHierarchyComponent_Host_0 = View_SohoHierarchyComponent_Host_0;
    var SohoHierarchyComponentNgFactory = i0.ɵccf("figure[soho-hierarchy]", i1.SohoHierarchyComponent, View_SohoHierarchyComponent_Host_0, { dataset: "dataset", legend: "legend", legendKey: "legendKey", templateId: "templateId", paging: "paging", layout: "layout" }, { selected: "selected", doubleClick: "doubleClick" }, ["*"]);
    exports.SohoHierarchyComponentNgFactory = SohoHierarchyComponentNgFactory;
});
