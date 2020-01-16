define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReceiptItem = /** @class */ (function () {
        function ReceiptItem(item) {
            this.fileName = item.fileName;
            this.receiptId = item.receiptId;
            this.receiptSource = item.receiptSource;
        }
        return ReceiptItem;
    }());
    exports.ReceiptItem = ReceiptItem;
});
//# sourceMappingURL=receiptitem.js.map