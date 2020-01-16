var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "rxjs/AsyncSubject", "./formatter.service", "./expenseitem", "./currencyitem", "./common.service"], function (require, exports, core_1, AsyncSubject_1, formatter_service_1, expenseitem_1, currencyitem_1, common_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseService = /** @class */ (function () {
        function ExpenseService(formatterService, commonService) {
            this.formatterService = formatterService;
            this.commonService = commonService;
            this.serviceUrl = "XM";
            this.currencies = [];
            this.expenses = [];
        }
        ExpenseService.prototype.init = function (widgetContext) {
            this.widgetContext = widgetContext;
        };
        ExpenseService.prototype.getExpenses = function (currencies, language) {
            var subject = new AsyncSubject_1.AsyncSubject();
            if (this.expenses.length > 0) {
                subject.next(this.expenses);
                subject.complete();
            }
            else {
                var pending = this.pendingContextSubjectsExpense;
                if (pending && pending.length) {
                    pending.push(subject);
                }
                else {
                    this.pendingContextSubjectsExpense = [subject];
                    this.loadExpenses(currencies, language);
                }
            }
            return subject.asObservable();
        };
        ExpenseService.prototype.loadExpenses = function (currencies, language) {
            var _this = this;
            this.currencies = [];
            var pending = this.pendingContextSubjectsExpense;
            var request = this.createRequest("xm-api/v1/application/ExpenseLineItem?unattachedCCT=true&reference=true");
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                var dataset = response.data;
                var isoCode = dataset.length > 0 ? dataset[0].expenseItemAmtPaid.split(' ')[0] : '';
                dataset.map(function (item) {
                    var newExpenseItem = _this.getNewExpenseItem(item, currencies, isoCode, language, _this.widgetContext.getWidgetInstanceId());
                    _this.expenses.push(newExpenseItem);
                });
                _this.resolve(pending, _this.expenses);
            }, function (e) {
                _this.reject(pending, e);
            });
        };
        ExpenseService.prototype.getCurrency = function () {
            var subject = new AsyncSubject_1.AsyncSubject();
            if (this.currencies.length > 0) {
                subject.next(this.currencies);
                subject.complete();
            }
            else {
                var pending = this.pendingContextSubjectsCurrency;
                if (pending && pending.length) {
                    pending.push(subject);
                }
                else {
                    this.pendingContextSubjectsCurrency = [subject];
                    this.loadCurrency();
                }
            }
            return subject.asObservable();
        };
        ExpenseService.prototype.loadCurrency = function () {
            var _this = this;
            _this.currencies = [];
            var pending = this.pendingContextSubjectsCurrency;
            var request = this.createRequest("xm-api/v1/application/ALCurrencyFormat");
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                var dataset = response.data;
                dataset.map(function (item) {
                    _this.currencies.push(new currencyitem_1.CurrencyItem(item));
                });
                _this.resolve(pending, _this.currencies);
            }, function (e) {
                _this.reject(pending, e);
            });
        };
        ExpenseService.prototype.findCurrency = function (currencies, isoCode) {
            for (var i = 0; i < currencies.length; i++) {
                var item = currencies[i];
                if (item.isoCode === isoCode) {
                    return item;
                }
            }
            return null;
        };
        ExpenseService.prototype.getNewExpenseItem = function (item, currencies, isoCode, language, widgetInstanceId) {
            var currencySymbol = this.findCurrency(currencies, isoCode).currencySymbol;
            var isOverflown = this.commonService.isOverflown("" + currencySymbol + this.formatterService.formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2)), widgetInstanceId);
            return new expenseitem_1.ExpenseItem({
                date: item.date,
                formatDate: this.formatterService.formatDate(item.date, language),
                hasVendor: item['-vendorName'],
                vendorName: item['-vendorName'] ? item['-vendorName'] : item['-reference'][item.expenseType] ? item['-reference'][item.expenseType]['-displayName'] : language.get('noExpenseType'),
                hasExpenseType: item['-reference'][item.expenseType],
                expenseType: item['-reference'][item.expenseType] ? item['-reference'][item.expenseType]['-displayName'] : language.get('noExpenseType'),
                amount: this.formatterService.formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2)),
                currency: item.expenseItemAmtPaid.split(' ')[0],
                currencyAmount: isOverflown ? "" + currencySymbol + this.commonService.shortenAmountString(parseFloat((item.expenseItemAmtPaid).split(' ')[1]), currencySymbol, true) : "" + currencySymbol + this.formatterService.formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2)),
                currencyAmountDecimal: isOverflown ? '' : "." + parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2).split('.')[1],
                expenseStatus: 'good-text',
                isOverflown: isOverflown
            });
        };
        ExpenseService.prototype.createRequest = function (relativeUrl, headers) {
            if (!headers) {
                // Create default headers
                headers = { Accept: "application/json" };
            }
            // Create the relative URL to the ION API
            var url = this.serviceUrl + "/" + relativeUrl;
            // Create HTTP GET request object
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: headers
            };
            return request;
        };
        ExpenseService.prototype.reject = function (subjects, reason) {
            for (var _i = 0, subjects_1 = subjects; _i < subjects_1.length; _i++) {
                var subject = subjects_1[_i];
                subject.error(reason);
            }
            subjects.splice(0, subjects.length);
        };
        ExpenseService.prototype.resolve = function (subjects, value) {
            for (var _i = 0, subjects_2 = subjects; _i < subjects_2.length; _i++) {
                var subject = subjects_2[_i];
                subject.next(value);
                subject.complete();
            }
            subjects.splice(0, subjects.length);
        };
        ExpenseService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [formatter_service_1.FormatterService,
                common_service_1.CommonService])
        ], ExpenseService);
        return ExpenseService;
    }());
    exports.ExpenseService = ExpenseService;
});
//# sourceMappingURL=expense.service.js.map