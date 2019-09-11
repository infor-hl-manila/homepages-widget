(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-expandablearea.component", "@angular/common"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-expandablearea.component");
    var i2 = require("@angular/common");
    var styles_ExpandableHeaderComponent = [];
    var RenderType_ExpandableHeaderComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ExpandableHeaderComponent, data: {} });
    exports.RenderType_ExpandableHeaderComponent = RenderType_ExpandableHeaderComponent;
    function View_ExpandableHeaderComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_ExpandableHeaderComponent_0 = View_ExpandableHeaderComponent_0;
    function View_ExpandableHeaderComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-expandable-header", [], null, null, null, View_ExpandableHeaderComponent_0, RenderType_ExpandableHeaderComponent)), i0.ɵdid(1, 49152, null, 0, i1.ExpandableHeaderComponent, [], null, null)], null, null); }
    exports.View_ExpandableHeaderComponent_Host_0 = View_ExpandableHeaderComponent_Host_0;
    var ExpandableHeaderComponentNgFactory = i0.ɵccf("soho-expandable-header", i1.ExpandableHeaderComponent, View_ExpandableHeaderComponent_Host_0, {}, {}, ["*"]);
    exports.ExpandableHeaderComponentNgFactory = ExpandableHeaderComponentNgFactory;
    var styles_ExpandablePaneComponent = [];
    var RenderType_ExpandablePaneComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ExpandablePaneComponent, data: {} });
    exports.RenderType_ExpandablePaneComponent = RenderType_ExpandablePaneComponent;
    function View_ExpandablePaneComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_ExpandablePaneComponent_0 = View_ExpandablePaneComponent_0;
    function View_ExpandablePaneComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-expandable-pane", [], [[1, "fixed", 0]], null, null, View_ExpandablePaneComponent_0, RenderType_ExpandablePaneComponent)), i0.ɵdid(1, 49152, null, 0, i1.ExpandablePaneComponent, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).fixed; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_ExpandablePaneComponent_Host_0 = View_ExpandablePaneComponent_Host_0;
    var ExpandablePaneComponentNgFactory = i0.ɵccf("soho-expandable-pane", i1.ExpandablePaneComponent, View_ExpandablePaneComponent_Host_0, { fixed: "fixed" }, {}, ["*"]);
    exports.ExpandablePaneComponentNgFactory = ExpandablePaneComponentNgFactory;
    var styles_ExpandableFooterComponent = [];
    var RenderType_ExpandableFooterComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ExpandableFooterComponent, data: {} });
    exports.RenderType_ExpandableFooterComponent = RenderType_ExpandableFooterComponent;
    function View_ExpandableFooterComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_ExpandableFooterComponent_0 = View_ExpandableFooterComponent_0;
    function View_ExpandableFooterComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-expandable-footer", [], null, null, null, View_ExpandableFooterComponent_0, RenderType_ExpandableFooterComponent)), i0.ɵdid(1, 49152, null, 0, i1.ExpandableFooterComponent, [], null, null)], null, null); }
    exports.View_ExpandableFooterComponent_Host_0 = View_ExpandableFooterComponent_Host_0;
    var ExpandableFooterComponentNgFactory = i0.ɵccf("soho-expandable-footer", i1.ExpandableFooterComponent, View_ExpandableFooterComponent_Host_0, {}, {}, ["*"]);
    exports.ExpandableFooterComponentNgFactory = ExpandableFooterComponentNgFactory;
    var styles_ExpandableAreaComponent = [""];
    var RenderType_ExpandableAreaComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_ExpandableAreaComponent, data: {} });
    exports.RenderType_ExpandableAreaComponent = RenderType_ExpandableAreaComponent;
    function View_ExpandableAreaComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headerClasses; _ck(_v, 2, 0, currVal_0); }, null); }
    function View_ExpandableAreaComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), i0.ɵncd(null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.visiblePaneClasses; _ck(_v, 2, 0, currVal_0); }, null); }
    function View_ExpandableAreaComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), i0.ɵncd(null, 3)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.footerClasses; _ck(_v, 2, 0, currVal_0); }, null); }
    function View_ExpandableAreaComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ExpandableAreaComponent_1)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ExpandableAreaComponent_2)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(7, 0, null, null, 4, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(9, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), i0.ɵncd(null, 2), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ExpandableAreaComponent_3)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.expandableAreaClasses; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.header; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.hasFixedPane; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.paneClasses; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.footer; _ck(_v, 13, 0, currVal_4); }, null); }
    exports.View_ExpandableAreaComponent_0 = View_ExpandableAreaComponent_0;
    function View_ExpandableAreaComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "soho-expandable-area", [], null, null, null, View_ExpandableAreaComponent_0, RenderType_ExpandableAreaComponent)), i0.ɵdid(1, 4374528, null, 3, i1.ExpandableAreaComponent, [i0.ElementRef, i0.ChangeDetectorRef, i0.NgZone], null, null), i0.ɵqud(603979776, 1, { header: 0 }), i0.ɵqud(603979776, 2, { panes: 1 }), i0.ɵqud(603979776, 3, { footer: 0 })], null, null); }
    exports.View_ExpandableAreaComponent_Host_0 = View_ExpandableAreaComponent_Host_0;
    var ExpandableAreaComponentNgFactory = i0.ɵccf("soho-expandable-area", i1.ExpandableAreaComponent, View_ExpandableAreaComponent_Host_0, { id: "soho-expandable-area", disabled: "disabled", closed: "closed", toggle: "toggle" }, { beforeexpand: "beforeexpand", beforecollapse: "beforecollapse", expand: "expand", collapse: "collapse", afterexpand: "afterexpand", aftercollapse: "aftercollapse" }, ["soho-expandable-header", "soho-expandable-pane[fixed=true]", "soho-expandable-pane", "soho-expandable-footer"]);
    exports.ExpandableAreaComponentNgFactory = ExpandableAreaComponentNgFactory;
});
