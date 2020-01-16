var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormatterService = /** @class */ (function () {
        function FormatterService() {
        }
        FormatterService.prototype.formatDate = function (d, language) {
            var dateToday = new Date();
            var oldDate = new Date(d);
            var timeDiff = dateToday.getTime() - oldDate.getTime();
            var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
            var monthNames = [
                language.get('jan'),
                language.get('feb'),
                language.get('mar'),
                language.get('apr'),
                language.get('may'),
                language.get('jun'),
                language.get('jul'),
                language.get('aug'),
                language.get('sep'),
                language.get('oct'),
                language.get('nov'),
                language.get('dec'),
            ];
            var formatDate = monthNames[oldDate.getMonth()] + "  " + oldDate.getDate() + ", " + oldDate.getFullYear();
            if (diffDays >= 60) {
                formatDate = "" + Math.floor(diffDays / 30) + language.get('monthsAgo');
            }
            else if (diffDays >= 30) {
                formatDate = language.get('aMonthAgo');
            }
            else if (diffDays === 0) {
                formatDate = language.get('today');
            }
            return formatDate;
        };
        FormatterService.prototype.formatAmount = function (val) {
            var formattedVal = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            formattedVal = formattedVal.split('.')[0];
            return formattedVal;
        };
        FormatterService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            })
        ], FormatterService);
        return FormatterService;
    }());
    exports.FormatterService = FormatterService;
});
//# sourceMappingURL=formatter.service.js.map