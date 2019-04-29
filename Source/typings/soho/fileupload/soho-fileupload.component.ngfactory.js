(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-fileupload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-fileupload.component");
    var styles_SohoFileUploadComponent = [];
    var RenderType_SohoFileUploadComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoFileUploadComponent, data: {} });
    exports.RenderType_SohoFileUploadComponent = RenderType_SohoFileUploadComponent;
    function View_SohoFileUploadComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoFileUploadComponent_0 = View_SohoFileUploadComponent_0;
    function View_SohoFileUploadComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input", [["soho-fileupload", ""]], [[2, "fileupload", null], [1, "type", 0]], null, null, View_SohoFileUploadComponent_0, RenderType_SohoFileUploadComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoFileUploadComponent, [i0.ElementRef, i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isFileUpload; var currVal_1 = i0.ɵnov(_v, 1).isFileUploadType; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_SohoFileUploadComponent_Host_0 = View_SohoFileUploadComponent_Host_0;
    var SohoFileUploadComponentNgFactory = i0.ɵccf("input[soho-fileupload]", i1.SohoFileUploadComponent, View_SohoFileUploadComponent_Host_0, { disabled: "disabled", readonly: "readonly" }, { change: "change" }, ["*"]);
    exports.SohoFileUploadComponentNgFactory = SohoFileUploadComponentNgFactory;
});
