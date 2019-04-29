(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./soho-editor.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("@angular/forms");
    var i2 = require("./soho-editor.component");
    var styles_SohoEditorComponent = [];
    var RenderType_SohoEditorComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoEditorComponent, data: {} });
    exports.RenderType_SohoEditorComponent = RenderType_SohoEditorComponent;
    function View_SohoEditorComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoEditorComponent_0 = View_SohoEditorComponent_0;
    function View_SohoEditorComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["soho-editor", ""]], [[2, "editor", null]], null, null, View_SohoEditorComponent_0, RenderType_SohoEditorComponent)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SohoEditorComponent]), i0.ɵdid(2, 12763136, null, 0, i2.SohoEditorComponent, [i0.ElementRef, i0.NgZone, i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).isEditor; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoEditorComponent_Host_0 = View_SohoEditorComponent_Host_0;
    var SohoEditorComponentNgFactory = i0.ɵccf("[soho-editor]", i2.SohoEditorComponent, View_SohoEditorComponent_Host_0, { disabled: "disabled", readonly: "readonly", delay: "delay", firstHeader: "firstHeader", secondHeader: "secondHeader", placeholder: "placeholder", anchor: "anchor", image: "image", buttons: "buttons", onLinkClick: "onLinkClick", showHtmlView: "showHtmlView", preview: "preview" }, { change: "change", updated: "updated" }, ["*"]);
    exports.SohoEditorComponentNgFactory = SohoEditorComponentNgFactory;
});
