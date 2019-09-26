define(["require", "exports", "lime"], function (require, exports, lime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Counter = /** @class */ (function () {
        function Counter(logPrefix) {
            this.logPrefix = logPrefix;
            this.internalCounter = 0;
            this.log("created");
        }
        Counter.prototype.ngOnDestroy = function () {
            this.log("destroyed");
        };
        Object.defineProperty(Counter.prototype, "count", {
            get: function () {
                return this.internalCounter;
            },
            enumerable: true,
            configurable: true
        });
        Counter.prototype.increment = function () {
            this.log("increment");
            this.internalCounter++;
        };
        Counter.prototype.decrement = function () {
            this.log("decrement");
            this.internalCounter--;
        };
        Counter.prototype.log = function (message) {
            lime_1.Log.debug("[infor.sample.angular.service] (" + this.logPrefix + ") " + message);
        };
        return Counter;
    }());
    exports.Counter = Counter;
});
//# sourceMappingURL=counter.js.map