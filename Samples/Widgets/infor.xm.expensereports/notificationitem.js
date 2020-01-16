define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotificationItem = /** @class */ (function () {
        function NotificationItem(item) {
            this.message = item.message;
            this.notificationClass = item.notificationClass;
            this.priorityLevel = item.priorityLevel;
        }
        return NotificationItem;
    }());
    exports.NotificationItem = NotificationItem;
});
//# sourceMappingURL=notificationitem.js.map