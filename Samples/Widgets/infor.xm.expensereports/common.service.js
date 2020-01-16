var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommonService = /** @class */ (function () {
        function CommonService() {
        }
        CommonService.prototype.formatAmount = function (amount, hasCurrency, hasDecimal) {
            var currency = '';
            var amountVal = '';
            if (hasCurrency) {
                currency = amount.split(' ')[0];
                amountVal = amount.split(' ')[1];
            }
            else {
                amountVal = amount.split(' ')[0];
            }
            var formattedAmount = '';
            if (hasDecimal) {
                formattedAmount = parseFloat(amountVal).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            else {
                formattedAmount = parseFloat(amountVal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            var newVal = hasCurrency ? currency + "formattedAmount" : formattedAmount;
            return newVal;
        };
        CommonService.prototype.formatDate = function (date, language) {
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
            var newDate = new Date(date);
            var formatDate = monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear();
            return formatDate;
        };
        CommonService.prototype.launchUrl = function (url, widgetContext) {
            widgetContext.launch({ url: url });
        };
        CommonService.prototype.goToCoreProduct = function (widgetContext) {
            this.launchUrl('?favoriteContext=xm_MyDocuments&LogicalId={logicalId}', widgetContext);
        };
        CommonService.prototype.goToAppleStore = function (widgetContext) {
            this.launchUrl('https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8', widgetContext);
        };
        CommonService.prototype.goToPlayStore = function (widgetContext) {
            this.launchUrl('https://play.google.com/store/apps/details?id=com.infor.xm.android.activity&hl=en_US', widgetContext);
        };
        CommonService.prototype.createNewReportCoreProduct = function (widgetContext) {
            this.launchUrl('?favoriteContext=xm_ExpenseReport%7C100&LogicalId={logicalId}', widgetContext);
        };
        CommonService.prototype.editInWebApplication = function (widgetContext, trackingNumber) {
            this.launchUrl("?favoriteContext=xm_ExpenseReport%7C100%7C" + trackingNumber + "&LogicalId={logicalId}", widgetContext);
        };
        CommonService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            })
        ], CommonService);
        return CommonService;
    }());
    exports.CommonService = CommonService;
});
//# sourceMappingURL=common.service.js.map