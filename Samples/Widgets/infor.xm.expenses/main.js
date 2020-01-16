var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/common", "@angular/core", "lime", "@angular/common/http", "@infor/sohoxi-angular", "./expense.service", "./common.service"], function (require, exports, common_1, core_1, lime_1, http_1, sohoxi_angular_1, expense_service_1, common_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseComponent = /** @class */ (function () {
        function ExpenseComponent(widgetContext, widgetInstance, dataService, commonService) {
            this.widgetContext = widgetContext;
            this.widgetInstance = widgetInstance;
            this.dataService = dataService;
            this.commonService = commonService;
            this.isShowBanner = true;
            this.isShowCover = true;
            this.isShowCSButton = true;
            this.errorObj = null;
            this.hasError = false;
            this.expenseData = [];
            this.dueExpenseData = [];
            this.isExpenseClear = true;
            this.outstandingBalance = '0.00';
            this.currencyCode = '';
            this.currencySymbol = '';
            this.currencies = [];
            this.leftPanelClass = 'twelve columns';
            this.rightPanelClass = 'twelve columns';
            this.strMeasurerId = '';
            this.widgetInstanceId = '';
            this.logPrefix = '[infor.xm.myexpenses]';
            this.dataService.init(widgetContext);
        }
        ExpenseComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.recomputeSize(this.widgetContext.getElement());
            // Show loader
            this.widgetContext.setState(lime_1.WidgetState.busy);
            // Download App
            this.widgetInstance.actions[0].execute = function () {
                _this.commonService.goToAppleStore(_this.widgetContext);
            };
            // Launch App
            this.widgetInstance.actions[1].execute = function () {
                _this.commonService.goToCoreProduct(_this.widgetContext);
            };
            this.language = this.widgetContext.getLanguage();
            this.widgetInstanceId = this.widgetContext.getWidgetInstanceId();
            this.strMeasurerId = "string-measurer-" + this.widgetInstanceId;
            // Pickup data
            this.getData();
        };
        ExpenseComponent.prototype.recomputeSize = function (element) {
            var bannerHeight = this.isShowBanner ? 41 : 0;
            var panelContainer = element[0].children[0].children[1];
            var leftPanel = panelContainer.children[0];
            var rightPanel = panelContainer.children[1];
            var completedStatePanel = panelContainer.children[2];
            var errorStatePanel = panelContainer.children[3];
            var containerWidth = element[0].offsetWidth;
            var containerHeight = element[0].offsetHeight - bannerHeight - 1; //deduct height of banner
            var listViewContainer = rightPanel.children[0].children[0];
            listViewContainer.setAttribute('style', 'overflow: hidden;');
            if (containerHeight > 400) {
                if (containerWidth > 400) {
                    leftPanel.setAttribute('style', "padding-top:" + (263 + (bannerHeight ? 0 : 20)) + "px; padding-left: 20px;");
                }
                else {
                    leftPanel.setAttribute('style', 'padding-top:24px; padding-bottom:24px; padding-left: 10px !important;');
                }
                if (this.hasError) {
                    errorStatePanel.setAttribute('style', "padding-top:" + (238 + (bannerHeight ? 0 : 20)) + "px");
                }
                else {
                    completedStatePanel.setAttribute('style', "padding-top:" + (238 + (bannerHeight ? 0 : 20)) + "px");
                }
            }
            else {
                if (containerWidth > 400) {
                    leftPanel.setAttribute('style', "padding-top:" + (68 + (bannerHeight ? 0 : 20)) + "px; padding-bottom:0px");
                    if (this.hasError) {
                        errorStatePanel.setAttribute('style', "padding-top:" + (43 + (bannerHeight ? 0 : 20)) + "px; padding-right: 0");
                    }
                    else {
                        completedStatePanel.setAttribute('style', "padding-top:" + (43 + (bannerHeight ? 0 : 20)) + "px; padding-right: 0");
                    }
                }
                else {
                    leftPanel.setAttribute('style', 'padding-top:24px; padding-bottom:24px; padding-left: 10px !important;');
                    if (this.hasError) {
                        errorStatePanel.setAttribute('style', "padding-top:" + (43 + (bannerHeight ? 0 : 20)) + "px; padding-right: 0");
                    }
                    else {
                        completedStatePanel.setAttribute('style', "padding-top:" + (43 + (bannerHeight ? 0 : 20)) + "px; padding-right: 0");
                    }
                }
            }
            if (!this.hasError) {
                if (containerWidth > 1200) {
                    rightPanel.setAttribute('style', "height:" + containerHeight + "px; overflow-y:scroll; border-left:1px solid #CBCBCB; border-top:0");
                    this.leftPanelClass = 'three columns';
                    this.rightPanelClass = 'nine columns';
                }
                else if (containerWidth > 800) {
                    rightPanel.setAttribute('style', "height:" + containerHeight + "px; overflow-y:scroll; border-left:1px solid #CBCBCB; border-top:0");
                    this.leftPanelClass = 'four columns';
                    this.rightPanelClass = 'eight columns';
                }
                else if (containerWidth > 400) {
                    rightPanel.setAttribute('style', "height:" + containerHeight + "px; overflow-y:scroll; border-left:1px solid #CBCBCB; border-top:0");
                    this.leftPanelClass = 'six columns';
                    this.rightPanelClass = 'six columns';
                }
                else {
                    if (containerHeight > 400) {
                        panelContainer.setAttribute('style', 'height:666px; overflow-y:scroll');
                    }
                    else {
                        panelContainer.setAttribute('style', 'height:276px; overflow-y:scroll');
                    }
                    rightPanel.setAttribute('style', 'height:auto; overflow-y:hidden; width:100%; border-left:0; border-top:1px solid #CBCBCB;');
                }
            }
            if (!this.isShowBanner) {
                if (containerHeight > 400) {
                    panelContainer.style.height = "708px";
                }
                else {
                    panelContainer.style.height = "318px";
                }
            }
        };
        ;
        ExpenseComponent.prototype.closeBanner = function () {
            this.isShowBanner = false;
            this.recomputeSize(this.widgetContext.getElement());
        };
        ;
        ExpenseComponent.prototype.getData = function () {
            this.getCurrencies();
        };
        ExpenseComponent.prototype.getCurrencies = function () {
            var _this_1 = this;
            var _this = this;
            _this.dataService.getCurrency().subscribe(function (response) {
                try {
                    _this.currencies = [];
                    _this.currencies = response;
                    _this.getExpenseData();
                }
                catch (error) {
                    _this_1.handleError(error, 'Unable to get Currency Data');
                }
            }, function (error) {
                _this_1.handleError(error, 'Unable to get Currency Data');
            });
        };
        ExpenseComponent.prototype.getExpenseData = function () {
            var _this_1 = this;
            var _this = this;
            this.dataService.getExpenses(this.currencies, this.language).subscribe(function (response) {
                try {
                    var outstandingBalance_1 = 0;
                    var currencyCode = '';
                    _this_1.expenseData = [];
                    var dataset = response;
                    dataset.map(function (item) {
                        // If more than 1 month: DUE
                        if (new Date().getTime() - new Date(item.date).getTime() > 1000 /*ms*/ * 60 /*s*/ * 60 /*min*/ * 24 /*h*/ * 30 /*days*/ * 1 /*months*/) {
                            _this.dueExpenseData.push(item);
                        }
                        else {
                            _this.expenseData.push(item);
                        }
                        outstandingBalance_1 += parseFloat("" + item.amount.replace(',', '') + item.currencyAmountDecimal);
                    });
                    if (dataset.length > 0) {
                        currencyCode = dataset[0].currency;
                        _this_1.currencySymbol = _this_1.dataService.findCurrency(_this_1.currencies, currencyCode).currencySymbol;
                    }
                    _this_1.sortExpenses();
                    _this_1.outstandingBalance = _this_1.commonService.shortenAmountString(outstandingBalance_1, _this_1.currencySymbol, false);
                    _this_1.currencyCode = currencyCode;
                    _this_1.isExpenseClear = outstandingBalance_1 === 0;
                    // Hide loader
                    _this_1.widgetContext.setState(lime_1.WidgetState.running);
                    // Hide cover
                    _this_1.isShowCover = false;
                }
                catch (error) {
                    _this_1.handleError(error, 'Unable to get Expense Data');
                }
            }, function (error) {
                _this_1.handleError(error, 'Unable to get Expense Data');
            });
        };
        ExpenseComponent.prototype.sortExpenses = function () {
            this.dueExpenseData.sort(function (a, b) { return (new Date(a.date) < new Date(b.date)) ? 1 : -1; });
            this.expenseData.sort(function (a, b) { return (new Date(a.date) < new Date(b.date)) ? 1 : -1; });
        };
        ExpenseComponent.prototype.startExpensing = function () {
            this.commonService.createNewReport(this.widgetContext);
        };
        ExpenseComponent.prototype.handleError = function (error, message) {
            this.hasError = true;
            lime_1.Log.error(this.logPrefix + " " + message + " " + JSON.stringify(error));
            this.recomputeSize(this.widgetContext.getElement());
            // Hide loader
            this.widgetContext.setState(lime_1.WidgetState.running);
            // Hide cover
            this.isShowCover = false;
        };
        __decorate([
            core_1.ViewChild(sohoxi_angular_1.SohoTooltipDirective, { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoTooltipDirective)
        ], ExpenseComponent.prototype, "tooltip", void 0);
        ExpenseComponent = __decorate([
            core_1.Component({
                template: "\n\t\t<div [hidden]=\"!isShowBanner\">\n\t\t\t<div class='expense-download text-small'>\n\t\t\t<a href='https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8' target='_blank'>{{ language.get(\"appStore\") }}</a>\n\t\t\t {{ language.get(\"downloadFrom\") }}\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn-icon expense-download-close\" (click)=\"closeBanner()\" [hidden]='isShowCover'>\n\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t<use xlink:href=\"#icon-close\"></use>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class='expense-content-container expense-content-container-{{widgetInstanceId}} row no-indent'>\n\t\t\t<div class='expense-ob-container {{leftPanelClass}}' [ngClass]='{hidden:(!expenseData.length && !dueExpenseData.length) || hasError}'>\n\t\t\t\t<div class='expense-ob'>\n\t\t\t\t\t<div class='expense-ob-label text-base text-descriptive'>{{ language.get(\"unsubmittedTotal\") }}</div>\n\t\t\t\t\t<div class='expense-ob-value text-strong'>{{ currencySymbol }}{{ outstandingBalance }}</div>\n\t\t\t\t\t<div class='expense-ob-currency-label text-small text-descriptive'>{{currencyCode}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button class='btn-primary' (click)='startExpensing()'>\n\t\t\t\t\t\t{{ language.get(\"outstandingBalance\") }}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='expense-list {{rightPanelClass}}' [ngClass]='{\"hidden\":(!expenseData.length && !dueExpenseData.length) || hasError}'>\n\t\t\t\t<soho-listview [selectable]='false'>\n\t\t\t\t\t<li soho-listview-item class='expense-list-header'><span class='text-small text-descriptive'>{{ language.get('due') }} ({{ dueExpenseData.length }})</span></li>\n\t\t\t\t\t<li soho-listview-item class='expense-list-item' *ngFor=\"let item of dueExpenseData; let i = index\" [ngClass]='{\"expense-list-item-last\":i === dueExpenseData.length - 1}'>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class='white-block'></div>\n\t\t\t\t\t\t\t<div class='expense-panel-left'>\n\t\t\t\t\t\t\t\t<div #refEl class='nobreak expense-vendor text-base' [ngClass]='{\"expense-vendor-empty\":!item.hasVendor && !item.hasExpenseType}' soho-tooltip [title]='item.vendorName' placement='top'>\n\t\t\t\t\t\t\t\t\t<span>{{ item.vendorName }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='expense-date nobreak text-small'>\n\t\t\t\t\t\t\t\t\t{{ item.formatDate }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='expense-panel-right'>\n\t\t\t\t\t\t\t\t<span class='expense-amount'>{{ item.currencyAmount }}</span>\n\t\t\t\t\t\t\t\t<span class='expense-amount-decimal text-small'>{{ item.currencyAmountDecimal }}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li soho-listview-item class='expense-list-header'><span class='text-small text-descriptive'>{{ language.get('otherExpenses') }} ({{ expenseData.length }})</span></li>\n\t\t\t\t\t<li soho-listview-item class='expense-list-item' *ngFor=\"let item of expenseData\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class='white-block'></div>\n\t\t\t\t\t\t\t<div class='expense-panel-left'>\n\t\t\t\t\t\t\t\t<div #refEl class='nobreak expense-vendor text-base' [ngClass]='{\"expense-vendor-empty\":!item.hasVendor && !item.hasExpenseType}' soho-tooltip [title]='item.vendorName' placement='top'>\n\t\t\t\t\t\t\t\t\t<span>{{ item.vendorName }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='expense-date nobreak text-small'>\n\t\t\t\t\t\t\t\t\t{{ item.formatDate }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='expense-panel-right'>\n\t\t\t\t\t\t\t\t<span class='expense-amount'>{{ item.currencyAmount }}</span>\n\t\t\t\t\t\t\t\t<span class='expense-amount-decimal text-small'>{{ item.currencyAmountDecimal }}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</soho-listview>\n\t\t\t</div>\n\t\t\t<div class=\"row\" [hidden]=\"(expenseData.length || dueExpenseData.length) || hasError\">\n\t\t\t\t<div class=\"twelve columns er-empty-state\">\n\t\t\t\t\t<div soho-emptymessage\n\t\t\t\t\t[title]=\"language.get('allSet')\"\n\t\t\t\t\t[info]=\"language.get('noUnsubmittedRequest')\"\n\t\t\t\t\t[icon]=\"'icon-empty-no-tasks'\"\n\t\t\t\t\t[color]=\"'azure'\"\n\t\t\t\t\t></div>\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"startExpensing()\">{{ language.get('createANewReport') }}</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" [hidden]=\"!hasError\">\n\t\t\t\t<div class=\"twelve columns er-empty-state\">\n\t\t\t\t\t<div soho-emptymessage\n\t\t\t\t\t[title]=\"language.get('somethingWentWrong')\"\n\t\t\t\t\t[info]=\"language.get('checkConnectionTryAgain')\"\n\t\t\t\t\t[icon]=\"'icon-empty-error-loading'\"\n\t\t\t\t\t[color]=\"'azure'\"\n\t\t\t\t\t></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='blank-cover' [hidden]='!isShowCover'></div>\n\t\t\t<div id='{{ strMeasurerId }}' class='expense-amount expense-panel-right string-measurer'></div>\n\t\t</div>",
                styles: ["\n\t\t.expense-download { background-color: #f0f0f0; color: black; padding: 13px 16px 13px 22px; text-align: left; border-bottom: 1px solid #bdbdbd; }\n\t\t.expense-download > a { color: black; font-weight: bold; }\n\t\t.expense-download-close { background-color: #f0f0f0; position: absolute; border: none; height: 38px; min-width: 30px; padding: 0; right: 14px; top: 0px; width: 30px; }\n\t\t.expense-ob-container { display: inline-block; text-align: center; padding-left: 20px !important; }\n\t\t.expense-ob { font-size: 36px; margin-bottom: 16px; }\n\t\t.expense-ob-label { margin-bottom: 6px; }\n\t\t.expense-ob-value { margin-bottom: -12px; }\n\t\t.expense-ob-currency-label { border: 1px solid #979797; display: inline-block; padding: 5px; }\n\t\t.expense-currency-code { color:#BDBDBD; font-weight:bold; }\n\t\t.completed-state-container { color: #1A1A1A; letter-spacing: 0; margin: auto; text-align: center; width: 315px; }\n\t\t.error-state-container { color: #1A1A1A; letter-spacing: 0; margin: auto; text-align: center; width: 315px; }\n\t\t.blank-cover { background-color: white; height: calc(100% - 91px); left: 0; top: 91px; position: absolute; width: 100%; }\n\t\t.er-empty-state { padding-left: 10px !important; }\n\t\t.error-state-container > p:first-child { padding-bottom: 5px; }\n\t\t.error-state-container button { margin-top: 20px; }\n\t\t.completed-state { height: 70px; width: 70px; margin-bottom: 10px; }\n\t\t.expense-list { display: inline-block; float: right; width: 341px; }\n\t\t.expense-list-header { border-bottom: 1px solid #CBCBCB; border-top: 1px solid #CBCBCB; height: 32px; padding: 9px 16px 9px 13px; }\n\t\t.expense-list-item { border-bottom-color: #F0F0F0; height: 72px; padding: 16px 16px 16px 13px; }\n\t\t.expense-list-item-last { border-bottom: 0; }\n\t\t.expense-status-panel { display: inline-block; height: 32px; padding-top: 7px; vertical-align: bottom; width: 23px; }\n\t\t.good-text::before { background-color: #80ce4d; }\n\t\t.waiting-text::before { background-color: #bdbdbd; }\n\t\t.expense-panel-left { display: inline-block; height: 32px; max-width: 40%; width: auto; }\n\t\t.expense-date { color: #5C5C5C; letter-spacing: 0; margin-top: 6px; }\n\t\t.expense-vendor { color: #1A1A1A; letter-spacing: 0; }\n\t\t.expense-vendor-empty { color: #999999 }\n\t\t.expense-expense-type { color: #454545; letter-spacing:0; }\n\t\t.expense-expense-type-empty { color: #BDBDBD; }\n\t\t.expense-panel-right { display: inline-block; float: right; font-size: 20px; height: 32px; text-align: right; width: calc(60% - 36px); }\n\t\t.expense-amount { color: #1A1A1A; letter-spacing: 0; line-height: 38px; text-align: right; }\n\t\t.expense-amount-decimal { color: #999999; line-height: 16px; vertical-align: text-top; }\n\t\t.nobreak { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\t\t.white-block { border-bottom: 1px solid #ffffff; left: 0px; padding-top: 54px; position: absolute; width: 13px; z-index: 90; }\n\t\t.string-measurer { height: auto; left: 0; position: absolute; top: 100px; visibility: hidden; width: auto; white-space: nowrap; }\n\t\t.row { max-width: 1500px }\n\t\t.row:last-child { margin-bottom: 0 }\n\t\tli.is-selected .white-block { display: none; }\n\t\tli:focus .white-block { display: none; }\n\t\t.listview { overflow: hidden !important; cursor: default; }\n\t\t.listview li:hover { background-color: transparent !important; }\n\t\tli:first-child { border-top: 0; }\n\t\t.card-empty-info { color: #5C5C5C; }\n\t\t"]
            }),
            core_1.Injectable(),
            __param(0, core_1.Inject(lime_1.widgetContextInjectionToken)),
            __param(1, core_1.Inject(lime_1.widgetInstanceInjectionToken)),
            __metadata("design:paramtypes", [Object, Object, expense_service_1.ExpenseService,
                common_service_1.CommonService])
        ], ExpenseComponent);
        return ExpenseComponent;
    }());
    exports.ExpenseComponent = ExpenseComponent;
    var ExpenseModule = /** @class */ (function () {
        function ExpenseModule() {
        }
        ExpenseModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, http_1.HttpClientModule, sohoxi_angular_1.SohoListViewModule, sohoxi_angular_1.SohoTooltipModule, sohoxi_angular_1.SohoEmptyMessageModule],
                declarations: [ExpenseComponent],
                entryComponents: [ExpenseComponent]
            })
        ], ExpenseModule);
        return ExpenseModule;
    }());
    exports.ExpenseModule = ExpenseModule;
    exports.getActions = function (context) {
        var language = context.getLanguage();
        return [{
                isSubmenu: false,
                text: language.get("downloadExpenseApp")
            }, {
                isPrimary: true,
                standardIconName: "#icon-launch",
                text: language.get("launchExpenseApp")
            }];
    };
});
//# sourceMappingURL=main.js.map