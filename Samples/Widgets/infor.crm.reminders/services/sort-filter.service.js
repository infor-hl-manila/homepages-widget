var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SortFilterService = /** @class */ (function () {
        function SortFilterService() {
        }
        SortFilterService.prototype.filterAllDay = function (arrayToFilter, dateProp1, dateProp2, dateFilter1, dateFilter2) {
            if (this.checkIfFilterValid(arrayToFilter, dateProp1, dateFilter1)) {
                var filteredArr = arrayToFilter.filter(function (x) {
                    var datePropValue1 = new Date(x[dateProp1].replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
                    var datePropValue2 = new Date(x[dateProp2].replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
                    var startOfDay = new Date(new Date().setHours(0, 0, 0, 0));
                    var endOfDay = new Date(new Date().setHours(23, 59, 0, 0));
                    if (datePropValue1.getTime() === startOfDay.getTime() && datePropValue2.getTime() === endOfDay.getTime()) {
                        return x;
                    }
                });
                return filteredArr;
            }
        };
        SortFilterService.prototype.filterByDate = function (arrayToFilter, dateProp, dateFilter, reverse) {
            if (this.checkIfFilterValid(arrayToFilter, dateProp, dateFilter)) {
                var filteredArray = arrayToFilter.filter(function (d) {
                    var datePropVal = d[dateProp];
                    if (datePropVal) {
                        var formattedDate = new Date(datePropVal.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
                        var offset = 480;
                        var now = new Date();
                        var newOffset = now.getTimezoneOffset();
                        var estDate = new Date(formattedDate.getTime() + newOffset / 60 * 1000);
                        switch (reverse) {
                            case true:
                                if (dateFilter < estDate.getTime()) {
                                    return d;
                                }
                                break;
                            case false:
                            default:
                                if (dateFilter > estDate.getTime()) {
                                    return d;
                                }
                        }
                    }
                });
                return filteredArray;
            }
            return arrayToFilter;
        };
        SortFilterService.prototype.filterWithRange = function (arrayToFilter, dateProp, dateFilter, reverse, rangeFilter) {
            var enddateFiltered = this.filterByDate(arrayToFilter, dateProp, dateFilter, reverse);
            var startdateFiltered = this.filterByDate(enddateFiltered, dateProp, rangeFilter, !reverse);
            return startdateFiltered;
        };
        SortFilterService.prototype.sortByDate = function (arrayToSort, dateProp, reverse) {
            if (this.checkIfValid(arrayToSort, dateProp)) {
                var sortedArr = this.sort(arrayToSort, dateProp, reverse);
                return sortedArr;
            }
            return arrayToSort;
        };
        SortFilterService.prototype.checkIfValid = function (arrayToCheck, prop) {
            return (prop && arrayToCheck && arrayToCheck.length > 0);
        };
        SortFilterService.prototype.checkIfFilterValid = function (arrayToCheck, prop, filter) {
            return (filter && this.checkIfValid(arrayToCheck, prop));
        };
        SortFilterService.prototype.sort = function (arrayToSort, dateProp, reverse) {
            var sortedArray = arrayToSort.sort(function (a, b) {
                var dateA = new Date(a[dateProp]).getTime();
                var dateB = new Date(b[dateProp]).getTime();
                return !reverse ? dateA - dateB : dateB - dateA;
            });
            return sortedArray;
        };
        SortFilterService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            })
        ], SortFilterService);
        return SortFilterService;
    }());
    exports.SortFilterService = SortFilterService;
});
//# sourceMappingURL=sort-filter.service.js.map