define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpenseItem = /** @class */ (function () {
        function ExpenseItem(item) {
            this.centsAmount = item.centsAmount;
            this.currency = item.currency;
            this.date = item.date;
            this.vendorName = item.vendorName;
            this.wholeAmount = item.wholeAmount;
        }
        return ExpenseItem;
    }());
    exports.ExpenseItem = ExpenseItem;
});
//# sourceMappingURL=expenseitem.js.map