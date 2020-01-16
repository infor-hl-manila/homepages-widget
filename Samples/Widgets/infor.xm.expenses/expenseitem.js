define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseItem = /** @class */ (function () {
        function ExpenseItem(item) {
            this.amount = item.amount;
            this.currency = item.currency;
            this.currencyAmount = item.currencyAmount;
            this.currencyAmountDecimal = item.currencyAmountDecimal;
            this.date = item.date;
            this.expenseStatus = item.expenseStatus;
            this.expenseType = item.expenseType;
            this.formatDate = item.formatDate;
            this.hasVendor = item.hasVendor;
            this.hasExpenseType = item.hasExpenseType;
            this.isOverflown = item.isOverflown;
            this.vendorName = item.vendorName;
        }
        return ExpenseItem;
    }());
    exports.ExpenseItem = ExpenseItem;
});
//# sourceMappingURL=expenseitem.js.map