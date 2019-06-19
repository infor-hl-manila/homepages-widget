(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./version-initializer.module", "@angular/common", "./version-initializer.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./version-initializer.module");
    var i2 = require("@angular/common");
    var i3 = require("./version-initializer.service");
    var SohoVersionInitializerModuleNgFactory = i0.ɵcmf(i1.SohoVersionInitializerModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.APP_INITIALIZER, function (p0_0) { return [i1.ɵ0(p0_0)]; }, [i3.SohoVersionInitializerService]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.SohoVersionInitializerModule, i1.SohoVersionInitializerModule, [])]); });
    exports.SohoVersionInitializerModuleNgFactory = SohoVersionInitializerModuleNgFactory;
});
