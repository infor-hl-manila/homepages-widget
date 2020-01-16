define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseReportItem = /** @class */ (function () {
        function ExpenseReportItem(item) {
            this.activityId = item.activityId;
            this.activityName = item.activityName;
            this.activityOwner = item.activityOwner;
            this.amount = item.amount;
            this.creatorName = item.creatorName;
            this.currency = item.currency;
            this.currencyAmount = item.currencyAmount;
            this.date = item.date;
            this.dateModified = item.dateModified;
            this.description = item.description;
            this.expenseReportDetail = item.expenseReportDetail;
            this.hasDue = item.hasDue;
            this.isFiltered = item.isFiltered;
            this.purpose = item.purpose;
            this.status = item.status;
            this.statusClass = item.statusClass;
            this.statusLevel = item.statusLevel;
            this.statusName = item.statusName;
            this.submitDate = item.submitDate;
            this.trackingNumber = item.trackingNumber;
        }
        return ExpenseReportItem;
    }());
    exports.ExpenseReportItem = ExpenseReportItem;
});
//# sourceMappingURL=expensereportitem.js.map