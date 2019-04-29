(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/common", "./soho-accordion.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/common");
    var i2 = require("./soho-accordion.component");
    var styles_SohoAccordionComponent = [];
    var RenderType_SohoAccordionComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoAccordionComponent, data: {} });
    exports.RenderType_SohoAccordionComponent = RenderType_SohoAccordionComponent;
    function View_SohoAccordionComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i1.ɵNgClassImpl, i1.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i1.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(3, { "accordion": 0, "panel": 1, "alternate": 2, "inverse": 3, "has-subheader-separators": 4 }), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, true, _co.hasPanels, _co.alternate, _co.inverse, _co.hasSubheaderSeparators); _ck(_v, 2, 0, currVal_0); }, null); }
    exports.View_SohoAccordionComponent_0 = View_SohoAccordionComponent_0;
    function View_SohoAccordionComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "soho-accordion", [], null, null, null, View_SohoAccordionComponent_0, RenderType_SohoAccordionComponent)), i0.ɵdid(1, 12763136, null, 2, i2.SohoAccordionComponent, [i0.ElementRef, i0.NgZone], null, null), i0.ɵqud(603979776, 1, { headers: 1 }), i0.ɵqud(603979776, 2, { panes: 1 })], null, null); }
    exports.View_SohoAccordionComponent_Host_0 = View_SohoAccordionComponent_Host_0;
    var SohoAccordionComponentNgFactory = i0.ɵccf("soho-accordion", i2.SohoAccordionComponent, View_SohoAccordionComponent_Host_0, { allowOnePane: "allowOnePane", displayChevron: "displayChevron", rerouteOnLinkClick: "rerouteOnLinkClick", source: "source", hasPanels: "hasPanels", inverse: "inverse", alternate: "alternate", enableTooltips: "enableTooltips", hasSubheaderSeparators: "hasSubheaderSeparators" }, { beforeexpandEvent: "beforeexpand", beforecollapseEvent: "beforecollapse", beforeselectEvent: "beforeselect", selectedEvent: "selected", followlinkEvent: "followlink", expandEvent: "expand", afterexpandEvent: "afterexpand", collapseEvent: "collapse", aftercollapseEvent: "aftercollapse" }, ["*"]);
    exports.SohoAccordionComponentNgFactory = SohoAccordionComponentNgFactory;
});
