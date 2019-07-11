(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-fileupload-advanced.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-fileupload-advanced.component");
    var styles_SohoFileUploadAdvancedComponent = [];
    var RenderType_SohoFileUploadAdvancedComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoFileUploadAdvancedComponent, data: {} });
    exports.RenderType_SohoFileUploadAdvancedComponent = RenderType_SohoFileUploadAdvancedComponent;
    function View_SohoFileUploadAdvancedComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoFileUploadAdvancedComponent_0 = View_SohoFileUploadAdvancedComponent_0;
    function View_SohoFileUploadAdvancedComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "soho-fileupload-advanced", [], [[2, "fileupload-advanced", null]], null, null, View_SohoFileUploadAdvancedComponent_0, RenderType_SohoFileUploadAdvancedComponent)), i0.ɵdid(1, 4374528, null, 0, i1.SohoFileUploadAdvancedComponent, [i0.ElementRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isFileUploadAdvanced; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoFileUploadAdvancedComponent_Host_0 = View_SohoFileUploadAdvancedComponent_Host_0;
    var SohoFileUploadAdvancedComponentNgFactory = i0.ɵccf("soho-fileupload-advanced,div[soho-fileupload-advanced]", i1.SohoFileUploadAdvancedComponent, View_SohoFileUploadAdvancedComponent_Host_0, { disabled: "disabled", isStandalone: "isStandalone", allowedTypes: "allowedTypes", send: "send", maxFilesInProcess: "maxFilesInProcess", maxFileSize: "maxFileSize", fileName: "fileName", showBrowseButton: "showBrowseButton", textDropArea: "textDropArea", textDropAreaWithBrowse: "textDropAreaWithBrowse", textBtnCancel: "textBtnCancel", textBtnCloseError: "textBtnCloseError", textBtnRemove: "textBtnRemove" }, { filesdragenter: "filesdragenter", filesdropped: "filesdropped", beforecreatestatus: "beforecreatestatus", aftercreatestatus: "aftercreatestatus", fileprogress: "fileprogress", fileaborted: "fileaborted", filecompleteduploading: "filecompleteduploading" }, ["*"]);
    exports.SohoFileUploadAdvancedComponentNgFactory = SohoFileUploadAdvancedComponentNgFactory;
});
