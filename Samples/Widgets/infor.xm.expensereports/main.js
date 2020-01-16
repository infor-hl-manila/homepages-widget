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
define(["require", "exports", "@angular/common", "@angular/core", "lime", "@angular/common/http", "@infor/sohoxi-angular", "./expense.service", "./notificationitem", "./expensereportitem", "./er-workspace.component", "./common.service"], function (require, exports, common_1, core_1, lime_1, http_1, sohoxi_angular_1, expense_service_1, notificationitem_1, expensereportitem_1, er_workspace_component_1, common_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseReportComponent = /** @class */ (function () {
        function ExpenseReportComponent(widgetContext, widgetInstance, sohoModalDialogService, dataService, commonService) {
            this.widgetContext = widgetContext;
            this.widgetInstance = widgetInstance;
            this.sohoModalDialogService = sohoModalDialogService;
            this.dataService = dataService;
            this.commonService = commonService;
            this.currencies = [];
            this.daysBeforeDue = 23; // 1 week before 1month
            this.expenseReportData = [];
            this.isShowNotification1 = false;
            this.isShowNotification2 = false;
            this.isShowBanner = true;
            this.isShowToolBar = true;
            this.isShowCover = true;
            this.isShowCompletedState = false;
            this.isShowErrorState = false;
            this.blockWidth = '';
            this.isFilterSelectAll = true;
            this.isFilterRejected = true;
            this.isFilterNeedsReview = true;
            this.isFilterApproved = true;
            this.isFilterInReview = true;
            this.isFilterDraft = true;
            this.isFilterRejectedDisabled = false;
            this.sortType = 'status';
            this.panelRef = null;
            this.pollingInterval = 600000; // 10mins default
            this.isUpdateCheckerStarted = false;
            this.notificationList = [
                new notificationitem_1.NotificationItem({}),
                new notificationitem_1.NotificationItem({})
            ];
            this.isInitialLoad = true;
            this.rejectedCount = 0;
            this.needsReviewCount = 0;
            this.approvedCount = 0;
            this.inReviewCount = 0;
            this.draftCount = 0;
            this.isMobileView = false;
            this.pollingObj = 0;
            this.logPrefix = '[infor.xm.myexpensereports]';
            this.dataService.init(widgetContext);
        }
        ExpenseReportComponent.prototype.ngOnInit = function () {
            var _this_1 = this;
            var _this = this;
            this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;
            this.recomputeSize();
            // Create new report
            this.widgetInstance.actions[0].execute = function () {
                _this.createInWebApplication();
            };
            // Launch XM Web App
            this.widgetInstance.actions[1].execute = function () {
                _this.launchXMWebApp();
            };
            // View in iPhone
            this.widgetInstance.actions[2].execute = function () {
                _this.viewIniPhone();
            };
            this.widgetInstance.activated = function () {
                if (!_this_1.isInitialLoad) {
                    _this_1.startUpdateChecker();
                }
            };
            this.widgetInstance.deactivated = function () {
                _this_1.stopUpdateChecker();
            };
            this.getData(false);
            this.language = this.widgetContext.getLanguage();
        };
        ExpenseReportComponent.prototype.recomputeSize = function () {
            var element = this.widgetContext.getElement();
            var notif1Height = this.isShowNotification1 ? 41 : 0;
            var notif2Height = this.isShowNotification2 ? 41 : 0;
            var bannerHeight = this.isShowBanner ? 41 : 0;
            var toolbarHeight = this.isShowToolBar ? 41 : 0;
            if (element[0].children.length > 0) {
                var elementHeight = element[0].parentElement.className.indexOf('double-height') >= 0 ? 708 : 318;
                var blockgridContainer = element[0].children[0].children[4];
                var containerHeight = elementHeight - notif1Height - notif2Height - bannerHeight - toolbarHeight - 1;
                var notif2CloseBtn = element[0].children[0].children[1].children[1];
                var bannerCloseBtn = element[0].children[0].children[2].children[1];
                var errorState = element[0].children[0].children[6];
                var completedState = element[0].children[0].children[7];
                var errorStateHeight = 208;
                var completedStateHeight = 246;
                var isCol2 = element[0].parentElement.className.indexOf('double-width') >= 0;
                var isCol3 = element[0].parentElement.className.indexOf('triple-width') >= 0;
                var isCol4 = element[0].parentElement.className.indexOf('quad-width') >= 0;
                blockgridContainer.setAttribute('style', "height:" + (containerHeight - 1) + "px;");
                if (isCol4) {
                    this.blockWidth = 'expense-report-block-4-col';
                }
                else if (isCol3) {
                    this.blockWidth = 'expense-report-block-3-col';
                }
                else if (isCol2) {
                    this.blockWidth = 'expense-report-block-2-col';
                }
                else {
                    this.blockWidth = 'expense-report-block-1-col';
                }
                if (this.isShowNotification1 && this.isShowNotification2) {
                    bannerCloseBtn.setAttribute('style', 'top: 82px');
                }
                else if (this.isShowNotification1 || this.isShowNotification2) {
                    bannerCloseBtn.setAttribute('style', 'top: 41px');
                }
                else {
                    bannerCloseBtn.setAttribute('style', 'top: 0px');
                }
                if (this.isShowNotification1) {
                    notif2CloseBtn.setAttribute('style', 'top: 41px');
                }
                else {
                    notif2CloseBtn.setAttribute('style', 'top: 0px');
                }
                if (containerHeight > completedStateHeight) {
                    completedState.setAttribute('style', "margin-top:" + (containerHeight - completedStateHeight) / 2 + "px");
                }
                if (containerHeight > errorStateHeight) {
                    errorState.setAttribute('style', "margin-top:" + (containerHeight - errorStateHeight) / 2 + "px");
                }
            }
        };
        ;
        ExpenseReportComponent.prototype.closeNotification1 = function () {
            this.isShowNotification1 = false;
            this.recomputeSize();
        };
        ExpenseReportComponent.prototype.closeNotification2 = function () {
            this.isShowNotification2 = false;
            this.recomputeSize();
        };
        ExpenseReportComponent.prototype.closeBanner = function () {
            this.isShowBanner = false;
            this.recomputeSize();
        };
        ;
        ExpenseReportComponent.prototype.getData = function (isForce) {
            // Hide loader
            this.widgetContext.setState(lime_1.WidgetState.busy);
            this.getCurrencies(isForce);
        };
        ExpenseReportComponent.prototype.getCurrencies = function (isForce) {
            var _this_1 = this;
            this.dataService.getCurrency().subscribe(function (response) {
                try {
                    _this_1.currencies = response;
                    _this_1.getExpenseReports(isForce);
                }
                catch (error) {
                    _this_1.handleError(error, 'Unable to get Currency Data');
                }
            }, function (error) {
                _this_1.handleError(error, 'Unable to get Currency Data');
            });
        };
        ;
        ExpenseReportComponent.prototype.getExpenseReports = function (isForce) {
            var _this_1 = this;
            var _this = this;
            this.dataService.getExpenseReports(this.currencies, this.language, isForce).subscribe(function (response) {
                try {
                    var tmpExpenseReportData_1 = [];
                    response.map(function (item) {
                        tmpExpenseReportData_1.push(new expensereportitem_1.ExpenseReportItem(item));
                    });
                    _this_1.rejectedCount = 0;
                    _this_1.needsReviewCount = 0;
                    _this_1.draftCount = 0;
                    _this_1.inReviewCount = 0;
                    _this_1.approvedCount = 0;
                    tmpExpenseReportData_1.map(function (item) {
                        switch (item.statusLevel) {
                            case 1:
                                _this.rejectedCount++;
                                break;
                            case 2:
                                _this.needsReviewCount++;
                                break;
                            case 3:
                                _this.draftCount++;
                                break;
                            case 4:
                                _this.inReviewCount++;
                                break;
                            case 5:
                                _this.approvedCount++;
                                break;
                        }
                    });
                    _this_1.previousExpenseReportData = _this_1.expenseReportData.slice(0);
                    _this_1.expenseReportData = tmpExpenseReportData_1.slice(0);
                    if (_this_1.expenseReportData.length > 0) {
                        _this_1.getExpenseReportDetails(0);
                    }
                    else {
                        _this_1.generateNotifications();
                    }
                    if (!_this_1.isUpdateCheckerStarted) {
                        _this_1.startUpdateChecker();
                    }
                    if (_this_1.isInitialLoad) {
                        _this_1.isInitialLoad = false;
                    }
                    if (_this_1.expenseReportData.length === 0) {
                        _this_1.isShowCompletedState = true;
                        _this_1.isShowToolBar = false;
                        _this_1.recomputeSize();
                    }
                    else {
                        _this_1.isShowCompletedState = false;
                        _this_1.isShowToolBar = true;
                    }
                }
                catch (error) {
                    _this_1.handleError(error, 'Unable to get Expense Report Data');
                }
            }, function (error) {
                _this_1.handleError(error, 'Unable to get Expense Report Data');
            });
        };
        ExpenseReportComponent.prototype.getExpenseReportDetails = function (index) {
            var _this_1 = this;
            var expenseReportItem = this.expenseReportData[index];
            this.dataService.getExpenseReportDetails(expenseReportItem.trackingNumber).subscribe(function (response) {
                try {
                    var expenseReportDetail = response.data;
                    var isoCode = expenseReportDetail['-expenseReport']['totalExpense'].split(' ')[0];
                    var newExpenseReportDetail = _this_1.dataService.getNewExpenseReportDetailItem(expenseReportItem, expenseReportDetail, _this_1.currencies, isoCode, _this_1.language);
                    expenseReportItem.expenseReportDetail = newExpenseReportDetail;
                    if (index === _this_1.expenseReportData.length - 1) {
                        _this_1.generateNotifications();
                    }
                    else {
                        _this_1.getExpenseReportDetails(index + 1);
                    }
                }
                catch (error) {
                    _this_1.handleError(error, 'Unable to get Expense Report Detail Data');
                }
            }, function (error) {
                _this_1.handleError(error, 'Unable to get Expense Report Detail Data');
            });
        };
        ExpenseReportComponent.prototype.onFilterSelected = function (event) {
            var nodeValue = event.args[0].attributes['filtertype'].nodeValue;
            if (nodeValue === 'rejected') {
                this.isFilterRejected = !this.isFilterRejected;
                this.isFilterSelectAll = false;
            }
            if (nodeValue === 'needs-review') {
                this.isFilterNeedsReview = !this.isFilterNeedsReview;
                this.isFilterSelectAll = false;
            }
            if (nodeValue === 'approved') {
                this.isFilterApproved = !this.isFilterApproved;
                this.isFilterSelectAll = false;
            }
            if (nodeValue === 'in-review') {
                this.isFilterInReview = !this.isFilterInReview;
                this.isFilterSelectAll = false;
            }
            if (nodeValue === 'draft') {
                this.isFilterDraft = !this.isFilterDraft;
                this.isFilterSelectAll = false;
            }
            if (nodeValue === 'select-all') {
                this.isFilterSelectAll = !this.isFilterSelectAll;
                if (this.isFilterSelectAll) {
                    this.isFilterRejected = true;
                    this.isFilterNeedsReview = true;
                    this.isFilterApproved = true;
                    this.isFilterInReview = true;
                    this.isFilterDraft = true;
                }
                else {
                    this.isFilterRejected = false;
                    this.isFilterNeedsReview = false;
                    this.isFilterApproved = false;
                    this.isFilterInReview = false;
                    this.isFilterDraft = false;
                }
            }
            // Check select all if all selected
            if (this.isFilterRejected && this.isFilterNeedsReview && this.isFilterInReview && this.isFilterDraft) {
                this.isFilterSelectAll = true;
            }
            this.filterReports();
        };
        ExpenseReportComponent.prototype.filterReports = function () {
            var _this = this;
            this.expenseReportData.map(function (item) {
                item.isFiltered = true;
                if (_this.isFilterDraft && item.status === 'created') {
                    item.isFiltered = false;
                }
                if (_this.isFilterRejected && item.status === 'rejected') {
                    item.isFiltered = false;
                }
                if (_this.isFilterInReview && item.statusLevel === 4) {
                    item.isFiltered = false;
                }
                if (_this.isFilterNeedsReview && item.status === 'returnedForMoreInfo') {
                    item.isFiltered = false;
                }
                if (_this.isFilterSelectAll) {
                    item.isFiltered = false;
                }
            });
        };
        ExpenseReportComponent.prototype.onSortSelected = function (event) {
            if (this.sortType !== event.args[0].attributes['sortType'].nodeValue) {
                this.sortType = event.args[0].attributes['sortType'].nodeValue;
                this.sortReports();
            }
        };
        ExpenseReportComponent.prototype.sortReports = function () {
            switch (this.sortType) {
                case 'status':
                    this.expenseReportData.sort(function (a, b) { return (a.trackingNumber.toLowerCase() > b.trackingNumber.toLowerCase()) ? 1 : -1; });
                    this.expenseReportData.sort(function (a, b) { return (a.statusLevel > b.statusLevel) ? 1 : -1; });
                    break;
                case 'trackingNumber':
                    this.expenseReportData.sort(function (a, b) { return (a.trackingNumber.toLowerCase() > b.trackingNumber.toLowerCase()) ? 1 : -1; });
                    break;
                case 'dateCreated':
                    this.expenseReportData.sort(function (a, b) { return (new Date(a.date) > new Date(b.date)) ? 1 : -1; });
                    break;
                case 'reportName':
                    this.expenseReportData.sort(function (a, b) { return (a.description.toLowerCase() > b.description.toLowerCase()) ? 1 : -1; });
                    break;
                case 'purpose':
                    this.expenseReportData.sort(function (a, b) { return (a.purpose.toLowerCase() > b.purpose.toLowerCase()) ? 1 : -1; });
                    break;
                case 'amount':
                    this.expenseReportData.sort(function (a, b) { return ((parseFloat(a.amount.replace(',', '')) > parseFloat(b.amount.replace(',', ''))) || b.amount === 'N/A') ? 1 : -1; });
                    break;
                default:
                    break;
            }
        };
        ExpenseReportComponent.prototype.openDetails = function (item) {
            var _this_1 = this;
            this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;
            this.panelRef = this.sohoModalDialogService.contextualactionpanel(er_workspace_component_1.ERWorkspaceComponent, this.panelPlaceholder);
            this.panelRef.options({ centerTitle: true });
            this.panelRef.buttons([
                {
                    text: this.language.get("close"),
                    align: "left",
                    click: function () { _this_1.panelRef.close(); },
                    cssClass: "btn"
                }, {
                    text: item.statusName === "Approved" || item.statusName === "In Review" ? this.language.get("openInWeb") : this.language.get("editInWeb"),
                    align: "right",
                    click: function () {
                        _this_1.commonService.editInWebApplication(_this_1.widgetContext, item.trackingNumber);
                    },
                    cssClass: this.isMobileView ? "btn-icon" : "btn",
                    icon: '#icon-launch'
                }
            ]);
            this.panelRef.apply(function (component) { });
            this.panelRef.title(item.trackingNumber);
            this.panelRef.componentPanel.language = this.language;
            this.panelRef.trigger('immediate');
            this.panelRef.initializeContent(true).open();
            function editInWebApplication() {
                this.commonService.editInWebApplication(this.widgetContext, item.expenseReportDetail.trackingNumber);
            }
            this.panelRef.componentPanel.selectedExpenseReportDetail = item.expenseReportDetail;
            this.panelRef.componentPanel.editInWebApplication = editInWebApplication;
            this.panelRef.componentPanel.isMobileView = this.isMobileView;
        };
        ExpenseReportComponent.prototype.startUpdateChecker = function () {
            var _this = this;
            this.pollingObj = setInterval(function () {
                try {
                    _this.isShowCover = true;
                    _this.getData(true);
                }
                catch (error) {
                    _this.handleError(error, 'Unable to get Updated Data');
                }
            }, _this.pollingInterval);
            this.isUpdateCheckerStarted = true;
        };
        ExpenseReportComponent.prototype.stopUpdateChecker = function () {
            clearInterval(this.pollingObj);
            this.pollingObj = 0;
        };
        ExpenseReportComponent.prototype.generateNotifications = function () {
            var rejectedList = [];
            var groupedList = [];
            var dueList = [];
            var approvedList = [];
            var dueCount = 0;
            for (var i = 0; i < this.previousExpenseReportData.length; i++) {
                var prevItem = this.previousExpenseReportData[i];
                for (var ii = 0; ii < this.expenseReportData.length; ii++) {
                    var currItem = this.expenseReportData[ii];
                    if (prevItem.trackingNumber === currItem.trackingNumber) {
                        if (prevItem.statusName !== currItem.statusName && currItem.statusLevel === 5) {
                            groupedList.push(currItem);
                            approvedList.push(currItem);
                        }
                    }
                }
            }
            for (var i = 0; i < this.expenseReportData.length; i++) {
                var erItem = this.expenseReportData[i];
                if (erItem.statusLevel === 1 || erItem.statusLevel === 2) {
                    rejectedList.push(erItem);
                }
                if (erItem.statusLevel === 3) {
                    for (var ii = 0; ii < erItem.expenseReportDetail.expenseList.length; ii++) {
                        var expenseItem = erItem.expenseReportDetail.expenseList[ii];
                        var dateToday = new Date();
                        var expenseDate = new Date(expenseItem.date);
                        var diff = dateToday.getTime() - expenseDate.getTime();
                        var diffDays = diff / (1000 * 60 * 60 * 24);
                        if (diffDays >= this.daysBeforeDue) {
                            dueList.push(erItem);
                            groupedList.push(erItem);
                            erItem.hasDue = true;
                            dueCount++;
                        }
                    }
                }
            }
            // Rejected State
            this.notificationList = [];
            if (rejectedList.length > 0) {
                var rejectedMessage = '';
                var rejectedCount_1 = 0;
                var needsReviewCount_1 = 0;
                if (rejectedList.length > 1) {
                    rejectedList.map(function (item) {
                        if (item.statusLevel === 1) {
                            rejectedCount_1++;
                        }
                        else {
                            needsReviewCount_1++;
                        }
                    });
                    if (rejectedCount_1 > 1) {
                        rejectedMessage += this.language.get('youHave') + " " + rejectedCount_1 + " " + this.language.get('expenseReportsRejected');
                    }
                    else if (rejectedCount_1 === 1) {
                        rejectedMessage += this.language.get('youHave') + " " + rejectedCount_1 + " " + this.language.get('expenseReportRejected');
                    }
                    if (rejectedCount_1 > 0 && needsReviewCount_1 > 0) {
                        rejectedMessage += this.language.get('and');
                    }
                    else if (rejectedCount_1 > 0) {
                        rejectedMessage += '.';
                    }
                    else {
                        rejectedMessage += this.language.get('youHave') + " ";
                    }
                    if (needsReviewCount_1 > 1) {
                        rejectedMessage += needsReviewCount_1 + " " + this.language.get('expenseReportsNeedsReview');
                    }
                    else if (needsReviewCount_1 === 1) {
                        rejectedMessage += needsReviewCount_1 + " " + this.language.get('expenseReportNeedsReview');
                    }
                }
                else {
                    if (rejectedList[0].statusLevel === 1) {
                        rejectedMessage = this.language.get('yourReport') + " " + rejectedList[0].trackingNumber + " " + this.language.get('hasBeenRejected');
                    }
                    else {
                        rejectedMessage = this.language.get('yourReport') + " " + rejectedList[0].trackingNumber + " " + this.language.get('needsReviewAppend');
                    }
                }
                this.notificationList.push(new notificationitem_1.NotificationItem({
                    message: rejectedMessage,
                    notificationClass: 'expense-report-notification-rejected',
                    priorityLevel: 3
                }));
            }
            // Grouped State
            var approvedCount = 0;
            if (this.notificationList.length < 2 && groupedList.length > 1) {
                var groupedMessage = '';
                groupedList.map(function (item) {
                    if (item.statusLevel === 5) {
                        approvedCount++;
                    }
                });
                if (approvedCount > 0) {
                    if (approvedCount > 1) {
                        groupedMessage += approvedCount + " " + this.language.get('expenseReportsApproved');
                    }
                    else {
                        groupedMessage += approvedCount + " " + this.language.get('expenseReportApproved');
                    }
                }
                if (approvedCount > 0 && dueCount > 0) {
                    groupedMessage += ', ';
                }
                if (dueCount > 0) {
                    if (dueCount > 1) {
                        groupedMessage += this.language.get('youHave') + " " + dueCount + " " + this.language.get('expensesWillBeDueSoon');
                    }
                    else {
                        groupedMessage += dueCount + " " + this.language.get('expenseWillBeDueSoon');
                    }
                }
                this.notificationList.push(new notificationitem_1.NotificationItem({
                    message: groupedMessage,
                    notificationClass: 'expense-report-notification-pending',
                    priorityLevel: 2
                }));
            }
            // Due Expenses
            if (this.notificationList.length < 2 && dueList.length === 1 && groupedList.length <= 1) {
                if (dueCount === 1) {
                    var dueMessage = this.language.get('youHaveAn') + " " + this.language.get('expenseWillBeDueSoon');
                    this.notificationList.push(new notificationitem_1.NotificationItem({
                        message: dueMessage,
                        notificationClass: 'expense-report-notification-pending',
                        priorityLevel: 2
                    }));
                }
                else {
                    var dueMessage = dueCount + " " + this.language.get('expensesIn') + " " + dueList[0].trackingNumber + " " + this.language.get('willBeDueSoon');
                    this.notificationList.push(new notificationitem_1.NotificationItem({
                        message: dueMessage,
                        notificationClass: 'expense-report-notification-pending',
                        priorityLevel: 2
                    }));
                }
            }
            // Approved State
            if (this.notificationList.length < 2 && approvedList.length === 1 && groupedList.length <= 1) {
                var approvedMessage = approvedList[0].trackingNumber + " " + this.language.get('hasBeenApproved');
                this.notificationList.push(new notificationitem_1.NotificationItem({
                    message: approvedMessage,
                    notificationClass: 'expense-report-notification-approved',
                    priorityLevel: 2
                }));
            }
            this.isShowNotification1 = this.notificationList.length > 0;
            this.isShowNotification2 = this.notificationList.length > 1;
            while (this.notificationList.length < 2) {
                this.notificationList.push(new notificationitem_1.NotificationItem({}));
            }
            this.filterReports();
            this.sortReports();
            this.recomputeSize();
            this.widgetContext.setState(lime_1.WidgetState.running);
            // Hide cover
            this.isShowCover = false;
        };
        ExpenseReportComponent.prototype.createInWebApplication = function () {
            this.commonService.createNewReportCoreProduct(this.widgetContext);
        };
        ExpenseReportComponent.prototype.launchXMWebApp = function () {
            this.commonService.goToCoreProduct(this.widgetContext);
        };
        ExpenseReportComponent.prototype.viewIniPhone = function () {
            this.commonService.goToAppleStore(this.widgetContext);
        };
        ExpenseReportComponent.prototype.viewInAndroid = function () {
            this.commonService.goToPlayStore(this.widgetContext);
        };
        ExpenseReportComponent.prototype.handleError = function (error, message) {
            this.isShowErrorState = true;
            this.isShowToolBar = false;
            lime_1.Log.error(this.logPrefix + " " + message + " " + JSON.stringify(error));
            this.recomputeSize();
            // Hide loader
            this.widgetContext.setState(lime_1.WidgetState.running);
            // Hide cover
            this.isShowCover = false;
        };
        __decorate([
            core_1.ViewChild('panelPlaceholder', { read: core_1.ViewContainerRef, static: true }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], ExpenseReportComponent.prototype, "panelPlaceholder", void 0);
        __decorate([
            core_1.ViewChild(er_workspace_component_1.ERWorkspaceComponent, { static: true }),
            __metadata("design:type", er_workspace_component_1.ERWorkspaceComponent)
        ], ExpenseReportComponent.prototype, "dialog", void 0);
        ExpenseReportComponent = __decorate([
            core_1.Component({
                template: "\n\t\t<div [hidden]=\"!isShowNotification1\">\n\t\t\t<div class=\"expense-report-notification text-small nobreak\" [ngClass]=\"notificationList.length ? notificationList[0].notificationClass : ''\">\n\t\t\t\t{{ notificationList[0].message }}\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn-icon expense-report-notification-close\" (click)=\"closeNotification1()\" [hidden]=\"isShowCover || (notificationList.length && notificationList[0].priorityLevel === 3)\">\n\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t<use xlink:href=\"#icon-close\"></use>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</div>\n\t\t<div [hidden]='!isShowNotification2'>\n\t\t\t<div class='expense-report-notification text-small nobreak' [ngClass]='notificationList.length ? notificationList[1].notificationClass : \"\"'>\n\t\t\t\t{{ notificationList[1].message }}\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn-icon expense-report-notification-close\" (click)=\"closeNotification2()\" [hidden]=\"isShowCover || (notificationList.length && notificationList[1].priorityLevel === 3)\">\n\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t<use xlink:href=\"#icon-close\"></use>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</div>\n\t\t<div [hidden]=\"!isShowBanner\">\n\t\t\t<div class='expense-report-download text-small'>\n\t\t\t\t<a href='https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8' target='_blank'>{{ language.get(\"inforExpenseForiPhone\") }}</a>\n\t\t\t\t{{ language.get(\"nowAvailable\") }}\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn-icon expense-report-download-close\" (click)=\"closeBanner()\" [hidden]='isShowCover'>\n\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t<use xlink:href=\"#icon-close\"></use>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"expense-report-toolbar-container\" [hidden]=\"!isShowToolBar\">\n\t\t\t<div class=\"expense-report-toolbar-item\">\n\t\t\t\t<button soho-menu-button class=\"btn-menu\" (selected)=\"onFilterSelected($event)\">\n\t\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t<use xlink:href=\"#icon-filter\"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t{{ language.get(\"filterBy\") }}\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"popupmenu is-multiselectable\">\n\t\t\t\t\t<li [ngClass]=\"{'is-checked': isFilterSelectAll}\">\n\t\t\t\t\t\t<a filterType=\"select-all\">{{ language.get(\"selectAll\") }} {{ expenseReportData.length ? '(' + expenseReportData.length + ')' : '' }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li [ngClass]=\"{'is-checked': isFilterRejected, 'is-disabled': isFilterRejectedDisabled}\">\n\t\t\t\t\t\t<a filterType=\"rejected\"> {{ language.get(\"rejected\") }} {{ rejectedCount ? '(' + rejectedCount + ')' : '' }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li [ngClass]=\"{'is-checked': isFilterNeedsReview}\">\n\t\t\t\t\t\t<a filterType=\"needs-review\">{{ language.get(\"needsReview\") }}  {{ needsReviewCount ? '(' + needsReviewCount + ')' : '' }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li [ngClass]=\"{'is-checked': isFilterDraft}\">\n\t\t\t\t\t\t<a filterType=\"draft\">{{ language.get(\"draft\") }} {{ draftCount ? '(' + draftCount + ')' : '' }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li [ngClass]=\"{'is-checked': isFilterInReview}\">\n\t\t\t\t\t\t<a filterType=\"in-review\">{{ language.get(\"inReview\") }} {{ inReviewCount ? '(' + inReviewCount + ')' : '' }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<button soho-menu-button class=\"btn-menu\" (selected)=\"onSortSelected($event)\">{{ language.get(\"sortBy\") }}</button>\n\t\t\t\t<ul class=\"popupmenu is-selectable\">\n\t\t\t\t\t<li class='is-checked'>\n\t\t\t\t\t\t<a sortType=\"status\">{{ language.get(\"status\") }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a sortType=\"trackingNumber\"> {{ language.get(\"trackingNumber\") }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a sortType=\"dateCreated\">{{ language.get(\"dateCreated\") }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a sortType=\"reportName\">{{ language.get(\"reportName\") }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a sortType=\"purpose\">{{ language.get(\"purpose\") }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a sortType=\"amount\">{{ language.get(\"amount\") }}</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div soho-blockgrid class=\"expense-report-block-container\" [hidden]=\"isShowCompletedState || isShowErrorState\">\n\t\t\t<ng-container *ngFor=\"let item of expenseReportData\">\n\t\t\t\t<div class=\"block is-selectable expense-report-block\" role=\"listitem\" [ngClass]='blockWidth' *ngIf=\"!item.isFiltered\" (click)=\"openDetails(item)\">\n\t\t\t\t\t<div class=\"expense-report-block-status\">\n\t\t\t\t\t\t<small class=\"alert-text\" [ngClass]=\"item.statusClass\"></small>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"expense-report-block-header\">\n\t\t\t\t\t\t<div class=\"expense-report-block-id text-small text-descriptive\">\n\t\t\t\t\t\t\t{{ item.trackingNumber }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"expense-report-block-date text-small text-descriptive\">\n\t\t\t\t\t\t\t{{ item.date }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-base expense-report-block-report-name nobreak\">{{ item.description }}</div>\n\t\t\t\t\t<div class=\"text-small text-descriptive expense-report-block-purpose\">{{ item.purpose }}</div>\n\t\t\t\t\t<div class=\"text-small text-strong\">{{ item.currency }}{{ item.amount }}</div>\n\t\t\t\t\t<div class=\"expense-report-due-indicator\" [hidden]='!item.hasDue'>\n\t\t\t\t\t\t<svg class=\"icon icon-alert\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\"><use xlink:href=\"#icon-alert\"></use></svg>\n\t\t\t\t \t</div>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div #panelPlaceholder></div>\n\t\t<div class=\"row er-empty-state\" [hidden]=\"!isShowErrorState\">\n\t\t\t<div class=\"twelve columns\">\n\t\t\t\t<div soho-emptymessage\n\t\t\t\t[title]=\"language.get('somethingWentWrong')\"\n\t\t\t\t[info]=\"language.get('checkConnection')\"\n\t\t\t\t[icon]=\"'icon-empty-error-loading'\"\n\t\t\t\t[color]=\"'azure'\"\n\t\t\t\t></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row er-empty-state\" [hidden]=\"!isShowCompletedState\">\n\t\t\t<div class=\"twelve columns\">\n\t\t\t\t<div soho-emptymessage\n\t\t\t\t[title]=\"language.get('noData')\"\n\t\t\t\t[info]=\"language.get('noExpenseReportsToView')\"\n\t\t\t\t[icon]=\"'icon-empty-no-tasks'\"\n\t\t\t\t[color]=\"'azure'\"\n\t\t\t\t></div>\n\t\t\t\t<button soho-button=\"primary\" (click)=\"createInWebApplication()\">{{ language.get('createANewReport') }}</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='blank-cover' [hidden]='!isShowCover'></div>\n\t\t",
                styles: ["\n\t\t.expense-report-notification { background-color: #f0f0f0; color: black; padding: 13px 16px 13px 22px; text-align: left; border-bottom: 1px solid #bdbdbd; }\n\t\t.expense-report-notification-approved { background-color: rgba(213, 246, 192, 0.8); }\n\t\t.expense-report-notification-rejected { background-color: rgba(244, 188, 188, 0.6); }\n\t\t.expense-report-notification-pending {background-color: rgba(251, 233, 191, 0.8); }\n\t\t.expense-report-notification-info { background-color: rgba(203, 235, 244, 0.6); }\n\t\t.expense-report-notification > a { color: black; font-weight: bold; }\n\t\t.expense-report-notification-close { background-color: transparent; position: absolute; border: none; height: 40px; min-width: 30px; padding: 0; right: 14px; top: 0px; width: 30px; }\n\t\t.expense-report-download { background-color: #f0f0f0; color: black; padding: 13px 16px 13px 22px; text-align: left; border-bottom: 1px solid #bdbdbd; }\n\t\t.expense-report-download > a { color: black; font-weight: bold; }\n\t\t.expense-report-download-close { background-color: transparent; position: absolute; border: none; height: 40px; min-width: 30px; padding: 0; right: 14px; top: 41px; width: 30px; }\n\t\t.expense-report-toolbar-container { background-color: #f0f0f0; border-bottom: 1px solid #bdbdbd; height: 40px; line-height: 40px; padding-left: 4px; }\n\t\t.expense-report-toolbar-item { display: inline-block; margin-right: 10px; }\n\t\t.expense-report-toolbar-list-item { padding: 0 0 0 15px; }\n\t\t.expense-report-toolbar-button { margin: 0; }\n\t\t.expense-report-status-count { float: right; margin-right: 5px; margin-top: -23px; }\n\t\t.expense-report-block-container { height: 196px; overflow-y: scroll; padding: 16px 0 0 16px; width: 100%; }\n\t\t.expense-report-block { border: 1px solid #D8D8D8; cursor: pointer; display: inline-block; height: auto; margin: 0 16px 16px 0; padding: 16px 16px 16px 29px; position: relative; }\n\t\t.expense-report-block-1-col { width: 309px; }\n\t\t.expense-report-block-2-col { width: 336px; }\n\t\t.expense-report-block-3-col { width: 345px; }\n\t\t.expense-report-block-4-col { width: 350px; }\n\t\t.expense-report-block-status { float: left; height: 97px; margin-left: -17px; padding-top: 44px; }\n\t\t.expense-report-status::before { margin-top: 1px; }\n\t\t.expense-report-status-rejected::before { background-color: #E84F4F; }\n\t\t.expense-report-status-needs-review::before { background-color: transparent; border: 1px solid #E84F4F; height: 7px; width: 7px; }\n\t\t.expense-report-status-approved::before { background-color: #80CE4D; }\n\t\t.expense-report-status-in-review::before { background-color: #368AC0; }\n\t\t.expense-report-status-draft::before { background-color: #999999; }\n\t\t.expense-report-block-id { float: left; margin-bottom: 16px; width: 50%; }\n\t\t.expense-report-block-date { float: right; margin-bottom: 16px; text-align: right; width: 50%; }\n\t\t.expense-report-block-report-name { margin-bottom: 8px; width: 100% }\n\t\t.expense-report-block-purpose { margin-bottom: 16px; }\n\t\t.expense-report-due-indicator { position: absolute; top: 45px; right: 16px; }\n\t\t.er-is-filtered { color: #368ac0 !important; }\n\t\t.er-empty-state { text-align: center; }\n\t\t.nobreak { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\t\t.blank-cover { background-color: white; height: calc(100% - 50px); left: 0; top: 50px; position: absolute; width: 100%; }\n\t\t"]
            }),
            core_1.Injectable(),
            __param(0, core_1.Inject(lime_1.widgetContextInjectionToken)),
            __param(1, core_1.Inject(lime_1.widgetInstanceInjectionToken)),
            __metadata("design:paramtypes", [Object, Object, sohoxi_angular_1.SohoContextualActionPanelService,
                expense_service_1.ExpenseService,
                common_service_1.CommonService])
        ], ExpenseReportComponent);
        return ExpenseReportComponent;
    }());
    exports.ExpenseReportComponent = ExpenseReportComponent;
    var ExpenseReportModule = /** @class */ (function () {
        function ExpenseReportModule() {
        }
        ExpenseReportModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    http_1.HttpClientModule,
                    sohoxi_angular_1.SohoListViewModule,
                    sohoxi_angular_1.SohoToolbarModule,
                    sohoxi_angular_1.SohoButtonModule,
                    sohoxi_angular_1.SohoMenuButtonModule,
                    sohoxi_angular_1.SohoTabsModule,
                    sohoxi_angular_1.SohoPopupMenuModule,
                    sohoxi_angular_1.SohoPopDownModule,
                    sohoxi_angular_1.SohoEmptyMessageModule
                ],
                declarations: [
                    ExpenseReportComponent,
                    er_workspace_component_1.ERWorkspaceComponent
                ],
                entryComponents: [
                    ExpenseReportComponent,
                    er_workspace_component_1.ERWorkspaceComponent
                ]
            })
        ], ExpenseReportModule);
        return ExpenseReportModule;
    }());
    exports.ExpenseReportModule = ExpenseReportModule;
    exports.getActions = function (context) {
        var language = context.getLanguage();
        return [{
                isPrimary: true,
                standardIconName: "#icon-add",
                text: language.get("createNewReport")
            }, {
                text: language.get("launchWebApp")
            }, {
                text: language.get("viewXMiPhone")
            }];
    };
});
//# sourceMappingURL=main.js.map