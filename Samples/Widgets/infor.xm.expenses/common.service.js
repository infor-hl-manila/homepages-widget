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
        CommonService.prototype.isOverflown = function (str, widgetInstanceId) {
            var strMeasurer = document.getElementById("string-measurer-" + widgetInstanceId);
            strMeasurer.innerHTML = str;
            var expenseListPanel = document.getElementsByClassName("expense-content-container-" + widgetInstanceId)[0];
            var containerWidth = expenseListPanel.clientWidth;
            // 29 is the padding on both left and right
            // .6 is 60% of the expense list width
            // 36 is the space defined between the 2 panels
            var columnCount = 1;
            if (containerWidth > 1200) {
                columnCount = 4;
            }
            else if (containerWidth > 800) {
                columnCount = 3;
            }
            else if (containerWidth > 400) {
                columnCount = 2;
            }
            var maxWidth = (((containerWidth / columnCount) - 29) * .6) - 36;
            // 17 is decimal container width
            return strMeasurer.clientWidth + 17 > maxWidth;
        };
        CommonService.prototype.shortenAmountString = function (amount, currencySymbol, isForce) {
            var newAmount = amount.toString();
            function formatAmount(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            if ((currencySymbol + formatAmount(amount % 1 != 0 ? amount.toFixed(2) : amount)).toString().length >= 16 || isForce) {
                if (amount >= 1000000000000) { // T
                    newAmount = (amount / 1000000000000).toFixed(2) + "T";
                }
                else if (amount >= 1000000000) { // B
                    newAmount = (amount / 1000000000).toFixed(2) + "B";
                }
                else if (amount >= 1000000) { // M
                    newAmount = (amount / 1000000).toFixed(2) + "M";
                }
                else { // K
                    newAmount = (amount / 1000).toFixed(2) + "K";
                }
            }
            else {
                newAmount = formatAmount(amount % 1 != 0 ? amount.toFixed(2) : amount);
            }
            return newAmount.toString();
        };
        ;
        CommonService.prototype.goToCoreProduct = function (widgetContext) {
            widgetContext.launch({ url: "?favoriteContext=xm_MyDocuments&LogicalId={logicalId}'" });
        };
        CommonService.prototype.goToAppleStore = function (widgetContext) {
            widgetContext.launch({ url: "https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8" });
        };
        CommonService.prototype.createNewReport = function (widgetContext) {
            widgetContext.launch({ url: "?favoriteContext=xm_ExpenseReport%7C100&LogicalId={logicalId}" });
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