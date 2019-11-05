var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SortByPipe = /** @class */ (function () {
        function SortByPipe() {
        }
        SortByPipe.prototype.transform = function (items, sortOrder) {
            return items.sort(function (a, b) {
                var titleA = a.title;
                var titleB = b.title;
                return sortOrder === "asc" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
            });
        };
        SortByPipe = __decorate([
            core_1.Pipe({ name: "sortBy" })
        ], SortByPipe);
        return SortByPipe;
    }());
    exports.SortByPipe = SortByPipe;
});
//# sourceMappingURL=pipes.js.map