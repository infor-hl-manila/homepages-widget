(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./soho-bullet.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./soho-bullet.component");
    var styles_SohoBulletComponent = [];
    var RenderType_SohoBulletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_SohoBulletComponent, data: {} });
    exports.RenderType_SohoBulletComponent = RenderType_SohoBulletComponent;
    function View_SohoBulletComponent_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0)], null, null); }
    exports.View_SohoBulletComponent_0 = View_SohoBulletComponent_0;
    function View_SohoBulletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["soho-bullet", ""]], [[2, "chart-container", null]], null, null, View_SohoBulletComponent_0, RenderType_SohoBulletComponent)), i0.ɵdid(1, 12763136, null, 0, i1.SohoBulletComponent, [i0.ElementRef, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).isBullet; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_SohoBulletComponent_Host_0 = View_SohoBulletComponent_Host_0;
    var SohoBulletComponentNgFactory = i0.ɵccf("[soho-bullet]", i1.SohoBulletComponent, View_SohoBulletComponent_Host_0, { dataset: "dataset", animate: "animate", redrawOnResize: "redrawOnResize" }, { rendered: "rendered" }, ["*"]);
    exports.SohoBulletComponentNgFactory = SohoBulletComponentNgFactory;
});
