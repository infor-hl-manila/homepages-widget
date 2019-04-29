(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-hyperlink.module", "@angular/common", "../icon/soho-icon.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-hyperlink.module");
    var i2 = require("@angular/common");
    var i3 = require("../icon/soho-icon.module");
    var SohoHyperlinkModuleNgFactory = i0.ɵcmf(i1.SohoHyperlinkModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.SohoIconModule, i3.SohoIconModule, []), i0.ɵmpd(1073742336, i1.SohoHyperlinkModule, i1.SohoHyperlinkModule, [])]); });
    exports.SohoHyperlinkModuleNgFactory = SohoHyperlinkModuleNgFactory;
});
