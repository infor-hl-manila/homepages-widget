define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseReportDetail = /** @class */ (function () {
        function ExpenseReportDetail(item) {
            this.activityName = item.activityName;
            this.activityOwner = item.activityOwner;
            this.amount = item.amount;
            this.businessAmount = item.businessAmount;
            this.creatorName = item.creatorName;
            this.currency = item.currency;
            this.dateCreated = item.dateCreated;
            this.dateModified = item.dateModified;
            this.description = item.description;
            this.expenseList = item.expenseList;
            this.notes = item.notes;
            this.personalAmount = item.personalAmount;
            this.purpose = item.purpose;
            this.receiptList = item.receiptList;
            this.status = item.status;
            this.statusClass = item.statusClass;
            this.statusLevel = item.statusLevel;
            this.statusName = item.statusName;
            this.submitDate = item.submitDate;
            this.trackingNumber = item.trackingNumber;
        }
        return ExpenseReportDetail;
    }());
    exports.ExpenseReportDetail = ExpenseReportDetail;
});
//# sourceMappingURL=expensereportdetail.js.map