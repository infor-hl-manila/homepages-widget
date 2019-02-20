var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/common/http", "@infor/sohoxi-angular"], function (require, exports, common_1, core_1, http_1, sohoxi_angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseItem = /** @class */ (function () {
        function ExpenseItem(item) {
            this.date = item.date;
            this.hasVendor = item.hasVendor;
            this.vendorName = item.vendorName;
            this.hasExpenseType = item.hasExpenseType;
            this.expenseType = item.expenseType;
            this.amount = item.amount;
            this.currency = item.currency;
            this.currencyAmount = item.currencyAmount;
        }
        return ExpenseItem;
    }());
    var ExpenseComponent = /** @class */ (function () {
        function ExpenseComponent(_http) {
            this._http = _http;
            this.objectKeys = Object.keys;
            this.expenseData = [];
            this.isExpenseClear = true;
            this.outstandingBalance = '0.00';
            this.currencyCode = '';
            this.serverAddress = 'https://xm10.xm.awsdev.infor.com:443/xm-api/v1/application';
            this.userId = 'XMQA_AX1.jsmith';
            this.password = 'InforExpense';
            this.shortenAmountString = function (amount) {
                var newAmount = amount.toString();
                function formatAmount(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }
                if (amount >= 100000) {
                    if (amount >= 1000000000000) { // T
                        newAmount = (amount / 1000000000000).toFixed(2) + 'T';
                    }
                    else if (amount >= 1000000000) { // B
                        newAmount = (amount / 1000000000).toFixed(2) + 'B';
                    }
                    else if (amount >= 1000000) { // M
                        newAmount = (amount / 1000000).toFixed(2) + 'M';
                    }
                    else { // K
                        newAmount = (amount / 1000).toFixed(2) + 'K';
                    }
                }
                else {
                    newAmount = formatAmount(amount % 1 != 0 ? amount.toFixed(2) : amount);
                }
                return newAmount.toString();
            };
            this._http = _http;
        }
        ExpenseComponent.prototype.ngOnInit = function () {
            this.language = this.widgetContext.getLanguage();
            // this.getToken();
            this.getdummyData();
            this.recomputeSize(this.widgetContext.getElement());
        };
        ExpenseComponent.prototype.recomputeSize = function (element) {
            var leftPanel = element[0].children[0].children[0].children[1].children[0];
            var rightPanel = element[0].children[0].children[0].children[1].children[1];
            var containerWidth = element[0].offsetWidth;
            var containerHeight = element[0].offsetHeight - 30; //deduct height of banner
            if (containerWidth > 400 && containerHeight > 400) {
                leftPanel.setAttribute('style', 'margin-top:200px');
            }
            else {
                if (containerWidth > 400) {
                    leftPanel.setAttribute('style', 'margin-top:30px');
                }
                else {
                    leftPanel.setAttribute('style', 'margin-top:20px');
                }
            }
            if (containerWidth > 800) {
                rightPanel.setAttribute('style', 'height:' + containerHeight + 'px;overflow-y:scroll;width:775px;border-left:1px solid #BDBDBD;');
            }
            else if (containerWidth > 400) {
                rightPanel.setAttribute('style', 'height:' + containerHeight + 'px;overflow-y:scroll;width:380px;border-left:1px solid #BDBDBD;');
            }
            else {
                rightPanel.setAttribute('style', 'height:auto;overflow-y:hidden;width:100%;border-left:0;');
            }
        };
        ;
        ExpenseComponent.prototype.getToken = function () {
            var _this = this;
            _this._http.post(_this.serverAddress + '/Token', { 'xmenv': 'true', 'userId': _this.userId, 'password': _this.password })
                .subscribe(function (data) {
                console.log(data); //map first
                var tokenData = data;
                _this.getExpenseData(tokenData.token);
            });
        };
        ;
        ExpenseComponent.prototype.getExpenseData = function (token) {
            console.log(token);
            var _this = this;
            _this._http.get(_this.serverAddress + '/ExpenseLineItem?xmenv=true&userId=' + _this.userId + '&unattachedCCT=true&reference=true&token=' + token)
                .subscribe(function (dataObj) {
                var outstandingBalance = 0;
                var currencyCode = '';
                _this.expenseData = [];
                var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                var getFormatDate = function (d) {
                    var dateToday = new Date();
                    var oldDate = new Date(d);
                    var timeDiff = dateToday.getTime() - oldDate.getTime();
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    var dayText = diffDays === -1 ? 'Yesterday' : diffDays === 0 ? 'Today' : null;
                    var formatDate = monthNames[oldDate.getMonth()] + ' ' + oldDate.getDate() + ', ' + oldDate.getFullYear() + ' (' + (dayText || dayNames[oldDate.getDay()]) + ')';
                    return formatDate;
                };
                function formatAmount(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                var dataset = dataObj;
                dataset.forEach(function (item) {
                    _this.expenseData.push(new ExpenseItem({
                        date: getFormatDate(item.date),
                        hasVendor: item['-vendorName'],
                        vendorName: item['-vendorName'] ? item['-vendorName'] : 'No Vendor',
                        hasExpenseType: item['-reference'][item.expenseType],
                        expenseType: item['-reference'][item.expenseType] ? item['-reference'][item.expenseType]['-displayName'] : 'No Expense Type',
                        amount: formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2)),
                        currency: item.expenseItemAmtPaid.split(' ')[0],
                        currencyAmount: item.expenseItemAmtPaid.split(' ')[0] + ' ' + formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2))
                    }));
                    outstandingBalance += parseFloat((item.expenseItemAmtPaid).split(' ')[1]);
                    currencyCode = item.expenseItemAmtPaid.split(' ')[0];
                });
                _this.outstandingBalance = _this.shortenAmountString(outstandingBalance);
                _this.currencyCode = currencyCode;
                _this.isExpenseClear = outstandingBalance === 0;
            });
        };
        ;
        ExpenseComponent.prototype.getdummyData = function () {
            var _this = this;
            var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var getFormatDate = function (d) {
                var dateToday = new Date();
                var oldDate = new Date(d);
                var timeDiff = dateToday.getTime() - oldDate.getTime();
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                var dayText = diffDays === -1 ? 'Yesterday' : diffDays === 0 ? 'Today' : null;
                var formatDate = monthNames[oldDate.getMonth()] + ' ' + oldDate.getDate() + ', ' + oldDate.getFullYear() + ' (' + (dayText || dayNames[oldDate.getDay()]) + ')';
                return formatDate;
            };
            this.expenseData = [
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: true,
                    vendorName: 'Hotel 1',
                    hasExpenseType: true,
                    expenseType: 'Hotel',
                    amount: '123456.00',
                    currency: 'USD',
                    currencyAmount: 'USD 12,345.00'
                }),
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: true,
                    vendorName: 'Restaurant 2',
                    hasExpenseType: false,
                    expenseType: 'No Expense Type',
                    amount: '234.00',
                    currency: 'USD',
                    currencyAmount: 'USD 234.00'
                }),
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: false,
                    vendorName: 'No Vendor',
                    hasExpenseType: true,
                    expenseType: 'Flight',
                    amount: '345.00',
                    currency: 'USD',
                    currencyAmount: 'USD 345.00'
                }),
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: true,
                    vendorName: 'Restaurant 4',
                    hasExpenseType: true,
                    expenseType: 'Meal - Group or Travel',
                    amount: '456.00',
                    currency: 'USD',
                    currencyAmount: 'USD 456.00'
                }),
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: true,
                    vendorName: 'Hotel 1',
                    hasExpenseType: true,
                    expenseType: 'Hotel',
                    amount: '123.00',
                    currency: 'USD',
                    currencyAmount: 'USD 123.00'
                }),
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: true,
                    vendorName: 'Restaurant 2',
                    hasExpenseType: false,
                    expenseType: 'No Expense Type',
                    amount: '234.00',
                    currency: 'USD',
                    currencyAmount: 'USD 234.00'
                }),
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: false,
                    vendorName: 'No Vendor',
                    hasExpenseType: true,
                    expenseType: 'Flight',
                    amount: '345.00',
                    currency: 'USD',
                    currencyAmount: 'USD 345.00'
                }),
                new ExpenseItem({
                    date: getFormatDate(new Date()),
                    hasVendor: true,
                    vendorName: 'Restaurant 4',
                    hasExpenseType: true,
                    expenseType: 'Meal - Group or Travel',
                    amount: '456.00',
                    currency: 'USD',
                    currencyAmount: 'USD 456.00'
                })
            ];
            this.outstandingBalance = '0';
            this.currencyCode = 'USD';
            this.expenseData.forEach(function (item) {
                _this.outstandingBalance = (parseInt(_this.outstandingBalance) + parseInt(item.amount)).toString();
            });
            _this.outstandingBalance = this.shortenAmountString(parseInt(_this.outstandingBalance));
            _this.isExpenseClear = parseInt(_this.outstandingBalance) === 0;
        };
        ;
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], ExpenseComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], ExpenseComponent.prototype, "widgetInstance", void 0);
        ExpenseComponent = __decorate([
            core_1.Component({
                template: "\n\t\t<div>\n\t\t\t<div class='expense-download'>\n\t\t\t\tManage your expenses easily, use <a href='https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8'>\n\t\t\tInfor Expense Mobile</a>\n\t\t\t</div>\n\t\t<div>\n\t\t<div class='expense-ob-container'>\n\t\t\t<div [ngClass]='{\"expense-ob\": true,\"expense-ob-clear\":isExpenseClear}'>\n\t\t\t\t<span>{{ outstandingBalance }}</span>\n\t\t\t\t<br />\n\t\t\t\t<span class='text-small text-strong text-muted'>{{currencyCode}}</span>\n\t\t\t</div>\n\t\t\t<div [ngClass]='{\"expense-ob-label\":true,\"expense-ob-label-clear\":isExpenseClear,\"text-secondary\":true}'>\n\t\t\t\tOutstanding Balance\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='expense-list'>\n\t\t\t<soho-listview>\n\t\t\t\t<li soho-listview-item *ngFor=\"let item of expenseData\">\n\t\t\t\t\t<div class='expense-panel-left'>\n\t\t\t\t\t\t<div class='expense-date nobreak text-base'>\n\t\t\t\t\t\t\t{{ item.date }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div [ngClass]='{\"nobreak\":true,\"expense-vendor\":true,\"expense-vendor-empty\":!item.hasVendor, \"text-primary\": true}'>\n\t\t\t\t\t\t\t{{item.vendorName}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div [ngClass]='{\"nobreak\":true,\"expense-expense-type\":true,\"expense-expense-type-empty\":!item.hasExpenseType,\"text-secondary\":true}'>\n\t\t\t\t\t\t\t{{item.expenseType}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='expense-panel-right nobreak data-large' [attr.title]='item.currencyAmount'>\n\t\t\t\t\t\t<span class='expense-amount'>{{item.currencyAmount}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</soho-listview>\n\t\t</div>",
                styles: ["\n\t\t.expense-download {\n\t\t\ttext-align: left;\n\t\t\tpadding: 9px;\n\t\t\tbackground-color: black;\n\t\t\tcolor: white;\n\t\t}\n\t\t\n\t\t.expense-download > a {\n\t\t\tcolor:white;\n\t\t}\n\t\t\n\t\t.expense-ob-container {\n\t\t\ttext-align: center;\n\t\t\twidth: 343px;\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-top:30px;\n\t\t}\n\t\t\n\t\t.expense-ob {\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-top: 20px;\n\t\t\tmargin-bottom: 10px;\n\t\t\tpadding-top: 50px;\n\t\t\tborder: 2px solid black;\n\t\t\theight: 150px;\n\t\t\twidth: 150px;\n\t\t\t-webkit-border-radius: 150px;\n\t\t\t-moz-border-radius: 150px;\n\t\t\tborder-radius: 150px;\n\t\t\tfont-family: HelveticaNeue;\n\t\t\tfont-size: 28px;\n\t\t\tcolor: #1A1A1A;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align:center;\n\t\t}\n\t\t\n\t\t.expense-ob-clear {\n\t\t\tborder-color:#7ED321;\n\t\t}\n\t\t\n\t\t.expense-currency-code {\n\t\t\tcolor:#BDBDBD;\n\t\t\tfont-weight:bold;\n\t\t}\n\n\t\t.expense-ob-label {\n\t\t\tfont-family: HelveticaNeue-Bold;\n\t\t\tcolor: #1A1A1A;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align: center;\n\t\t}\n\t\t\n\t\t.expense-ob-label-clear {\n\t\t\tcolor: #7ED321;\n\t\t}\n\t\t\n\t\t.expense-list {\n\t\t\twidth: 380px;\n\t\t\tdisplay: inline-block;\n\t\t\tfloat: right;\n\t\t}\n\t\t\n\t\t.expense-panel-left {\n\t\t\tdisplay: inline-block;\n\t\t\theight: 68px;\n\t\t\twidth: 49%;\n\t\t}\n\t\t\n\t\t.expense-date {\n\t\t\tfont-family: HelveticaNeue;\n\t\t\tcolor: #999999;\n\t\t\tletter-spacing: 0;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t\n\t\t.expense-vendor {\n\t\t\tfont-family: HelveticaNeue;\n\t\t\tcolor: #1A1A1A;\n\t\t\tletter-spacing: 0;\n\t\t}\n\t\t\n\t\t.expense-vendor-empty {\n\t\t\tcolor:#BDBDBD\n\t\t}\n\t\t\n\t\t.expense-expense-type {\n\t\t\tfont-family: HelveticaNeue;\n\t\t\tcolor: #454545;\n\t\t\tletter-spacing:0;\n\t\t}\n\t\t\n\t\t.expense-expense-type-empty {\n\t\t\tcolor: #BDBDBD\n\t\t}\n\t\t\n\t\t.expense-panel-right {\n\t\t\tdisplay: inline-block;\n\t\t\theight: 68px;\n\t\t\twidth: 49%;\n\t\t\tline-height: 68px;\n\t\t\ttext-align: right;\n\t\t}\n\t\t\n\t\t.expense-amount {\n\t\t\tfont-family: HelveticaNeue;\n\t\t\tcolor: #1A1A1A;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align: right;\n\t\t}\n\t\t\n\t\t.nobreak {\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t\t\n\t\tli:last-child {\n\t\t\tborder-bottom: 0;\n\t\t}"]
            }),
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], ExpenseComponent);
        return ExpenseComponent;
    }());
    exports.ExpenseComponent = ExpenseComponent;
    var ExpenseModule = /** @class */ (function () {
        function ExpenseModule() {
        }
        ExpenseModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, http_1.HttpClientModule, sohoxi_angular_1.SohoListViewModule],
                declarations: [ExpenseComponent],
                entryComponents: [ExpenseComponent]
            })
        ], ExpenseModule);
        return ExpenseModule;
    }());
    exports.ExpenseModule = ExpenseModule;
});
//# sourceMappingURL=main.js.map