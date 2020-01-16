var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "rxjs/AsyncSubject", "./expensereportitem", "./expensereportdetail", "./common.service", "./currencyitem", "./expenseitem", "./receiptitem", "./noteitem"], function (require, exports, core_1, AsyncSubject_1, expensereportitem_1, expensereportdetail_1, common_service_1, currencyitem_1, expenseitem_1, receiptitem_1, noteitem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseService = /** @class */ (function () {
        function ExpenseService(commonService) {
            this.commonService = commonService;
            this.serviceUrl = "XM";
            this.currencies = [];
            this.expenseReports = [];
        }
        ExpenseService.prototype.init = function (widgetContext) {
            this.widgetContext = widgetContext;
        };
        ExpenseService.prototype.getExpenseReports = function (currencies, language, isForce) {
            var subject = new AsyncSubject_1.AsyncSubject();
            if (this.expenseReports.length > 0 && !isForce) {
                subject.next(this.expenseReports);
                subject.complete();
            }
            else {
                var pending = this.pendingContextSubjectsExpenseReport;
                if (pending && pending.length) {
                    pending.push(subject);
                }
                else {
                    this.pendingContextSubjectsExpenseReport = [subject];
                    this.loadExpenseReports(currencies, language);
                }
            }
            return subject.asObservable();
        };
        ExpenseService.prototype.loadExpenseReports = function (currencies, language) {
            var _this_1 = this;
            var _this = this;
            this.expenseReports = [];
            var pending = this.pendingContextSubjectsExpenseReport;
            var request = this.createRequest("xm-api/v1/application/WorkItem/MyDocuments?reference=1");
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                var dataset = response.data;
                dataset.map(function (item) {
                    if (item['procName'] === 'Expense Report') {
                        _this.expenseReports.push(_this.getNewExpenseReportItem(item, currencies, language));
                    }
                });
                _this_1.resolve(pending, _this.expenseReports);
            }, function (e) {
                _this_1.reject(pending, e);
            });
        };
        ExpenseService.prototype.getExpenseReportDetails = function (trackingNumber) {
            var request = this.createRequest("xm-api/v1/application/ExpenseReport?trackingNumber=" + trackingNumber + "&includeReceipts=true");
            return this.widgetContext.executeIonApiAsync(request);
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
            var _this_1 = this;
            var _this = this;
            this.currencies = [];
            var pending = this.pendingContextSubjectsCurrency;
            var request = this.createRequest("xm-api/v1/application/ALCurrencyFormat");
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                var dataset = response.data;
                dataset.map(function (item) {
                    _this.currencies.push(new currencyitem_1.CurrencyItem(item));
                });
                _this_1.resolve(pending, _this_1.currencies);
            }, function (e) {
                _this_1.reject(pending, e);
            });
        };
        ExpenseService.prototype.getStatusClass = function (item) {
            switch (item['-docStatus']) {
                case 'submitted':
                    return 'expense-report-status expense-report-status-in-review';
                case 'rejected':
                    return 'expense-report-status expense-report-status-rejected';
                case 'created':
                    return 'expense-report-status expense-report-status-draft';
                case 'returnedForMoreInfo':
                    return 'expense-report-status expense-report-status-needs-review';
                default:
                    return 'expense-report-status expense-report-status-in-review';
            }
        };
        ExpenseService.prototype.getStatusName = function (item, language) {
            switch (item['-docStatus']) {
                case 'submitted':
                    return language.get('inReview');
                case 'rejected':
                    return language.get('rejected');
                case 'created':
                    return language.get('draft');
                case 'returnedForMoreInfo':
                    return language.get('needsReview');
                default:
                    return language.get('inReview');
            }
        };
        ExpenseService.prototype.getStatusLevel = function (item) {
            switch (item['-docStatus']) {
                case 'rejected':
                    return 1;
                case 'returnedForMoreInfo':
                    return 2;
                case 'submitted':
                    return 4;
                case 'created':
                    return 3;
                default:
                    return 1;
            }
        };
        ExpenseService.prototype.getPriorityLevel = function (status) {
            switch (status) {
                case 'submitted':
                    return 0;
                case 'rejected':
                    return 3;
                case 'created':
                    return 2;
                case 'returnedForMoreInfo':
                    return 3;
                case 'draft':
                    return 2;
                default:
                    return 1;
            }
        };
        ExpenseService.prototype.getNotificationClass = function (status) {
            switch (status) {
                case 'rejected':
                    return 'expense-report-notification-rejected';
                case 'created':
                    return 'expense-report-notification-pending';
                case 'returnedForMoreInfo':
                    return 'expense-report-notification-rejected';
                case 'draft':
                    return 'expense-report-notification-info';
                default:
                    return 'expense-report-notification-rejected';
            }
        };
        ExpenseService.prototype.getNotificationMessage = function (status) {
            switch (status) {
                case 'submitted':
                    return ' has been submitted';
                case 'rejected':
                    return ' has been rejected';
                case 'created':
                    return ' has been created';
                case 'returnedForMoreInfo':
                    return ' has been returned for more info';
                case 'draft':
                    return ' is due soon';
                default:
                    return ' has been rejected';
            }
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
        ExpenseService.prototype.getNewExpenseReportItem = function (item, currencies, language) {
            return new expensereportitem_1.ExpenseReportItem({
                trackingNumber: item['-displayName'] || 'No Tracking Number',
                date: this.commonService.formatDate(item['dateCreated'], language) || 'No Date Created',
                description: item['description'] || 'No Description',
                purpose: item['docPurpose'] || 'No Purpose',
                currency: item['docSpecificAmount'] ? this.findCurrency(currencies, item['docSpecificAmount'].split(' ')[0]).currencySymbol : ' ',
                amount: item['docSpecificAmount'] ? this.commonService.formatAmount(item['docSpecificAmount'].split(' ')[1], false, true) : 'N/A',
                currencyAmount: item['docSpecificAmount'] ? this.commonService.formatAmount(item['docSpecificAmount'], true, true) : ' ',
                status: item['-docStatus'] || 'No Status',
                statusClass: this.getStatusClass(item) || ' ',
                statusName: this.getStatusName(item, language) || 'No Status',
                statusLevel: this.getStatusLevel(item),
                isFiltered: false,
                acyivityId: item['activityId'] || 0,
                activityName: item['activityName'] || 'No Activity',
                activityOwner: item['-docStatus'] === 'created' ? item['creatorName'] : item['inboxReviewerList'] || 'No Activity Owner',
                creatorName: item['creatorName'],
                submitDate: item['submitDate'] || 'No Submit Date',
                dateModified: item['dateModified'] || 'No Date Modified'
            });
        };
        ExpenseService.prototype.getNewExpenseReportDetailItem = function (expenseReportItem, item, currencies, isoCode, language) {
            var _this = this;
            var newExpenseReportDetail = new expensereportdetail_1.ExpenseReportDetail({
                status: item['-expenseReport']['-docStatus'],
                statusName: expenseReportItem.statusName,
                description: expenseReportItem.description,
                amount: this.commonService.formatAmount(item['-expenseReport']['totalExpense'].split(' ')[1], false, true),
                creatorName: language.get('by') + ": " + expenseReportItem.creatorName,
                currency: this.findCurrency(currencies, item['-expenseReport']['totalExpense'].split(' ')[0]).currencySymbol,
                trackingNumber: expenseReportItem.trackingNumber,
                dateCreated: this.commonService.formatDate(item['-expenseReport']['createDate'], language),
                purpose: expenseReportItem.purpose,
                statusClass: expenseReportItem.statusClass,
                statusLevel: expenseReportItem.statusLevel,
                expenseList: [],
                receiptList: [],
                activityName: expenseReportItem.activityName,
                activityOwner: language.get('by') + ": " + expenseReportItem.activityOwner,
                submitDate: this.commonService.formatDate(expenseReportItem.submitDate, language),
                dateModified: this.commonService.formatDate(expenseReportItem.dateModified, language),
                notes: this.getNotes(item['-expenseReport']['-notes'], language),
                personalAmount: item['-expenseReport']['amtDueEmp'] ? this.findCurrency(currencies, item['-expenseReport']['amtDueEmp'].split(' ')[0]).currencySymbol + this.commonService.formatAmount(item['-expenseReport']['amtDueEmp'].split(' ')[1], false, true) : ' ',
                businessAmount: item['-expenseReport']['amtDueCo'] ? this.findCurrency(currencies, item['-expenseReport']['amtDueCo'].split(' ')[0]).currencySymbol + this.commonService.formatAmount(item['-expenseReport']['amtDueCo'].split(' ')[1], false, true) : ' '
            });
            if (item['-expenseReport']['-lineItems']) {
                item['-expenseReport']['-lineItems'].map(function (item) {
                    newExpenseReportDetail.expenseList.push(new expenseitem_1.ExpenseItem({
                        vendorName: item['-vendorName'] ? item['-vendorName'] : language.get('noVendor'),
                        date: _this.commonService.formatDate(item.date, language),
                        currency: _this.findCurrency(currencies, isoCode).currencySymbol,
                        wholeAmount: _this.commonService.formatAmount(item.expenseItemAmtPaid.split(' ')[1].split('.')[0], false, false),
                        centsAmount: "." + item.expenseItemAmtPaid.split('.')[1].substring(0, 2)
                    }));
                });
            }
            if (item['-expenseReport']['-receipts']) {
                item['-expenseReport']['-receipts'].map(function (item) {
                    newExpenseReportDetail.receiptList.push(new receiptitem_1.ReceiptItem({
                        receiptID: item['id'],
                        receiptSource: "data:image/png;base64," + item['image']
                    }));
                });
            }
            return newExpenseReportDetail;
        };
        ExpenseService.prototype.getExpenseReportReceipt = function () {
        };
        ExpenseService.prototype.getNotes = function (items, language) {
            var _this = this;
            var notes = [];
            if (!items || items.length === 0) {
                return [];
            }
            items.map(function (item) {
                notes.push(_this.getNewNote(item, language));
            });
            notes.sort(function (a, b) { return (new Date(a.date) > new Date(b.date)) ? -1 : 1; });
            return notes;
        };
        ExpenseService.prototype.getNewNote = function (item, language) {
            var _this = this;
            return new noteitem_1.NoteItem({
                date: _this.commonService.formatDate(item.date, language),
                noteMessage: item.message,
                noteOwner: ""
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
            __metadata("design:paramtypes", [common_service_1.CommonService])
        ], ExpenseService);
        return ExpenseService;
    }());
    exports.ExpenseService = ExpenseService;
});
//# sourceMappingURL=expense.service.js.map