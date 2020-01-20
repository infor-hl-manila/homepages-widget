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
        SortFilterService.prototype.sortArray = function (array, field, dataType, order, dateField) {
            if (dataType === 'default') {
                array.sort(function (a, b) {
                    if (a[dateField] && b[dateField]) {
                        if (order === 'desc') {
                            return ((new Date(a[dateField]) < new Date(b[dateField])) ? 1 : -1);
                        }
                        else {
                            return ((new Date(a[dateField]) > new Date(b[dateField])) ? 1 : -1);
                        }
                    }
                    else if (!a[dateField] && b[dateField]) {
                        if (order === 'desc') {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    }
                    else if (a[dateField] && !b[dateField]) {
                        if (order === 'desc') {
                            return 1;
                        }
                        else {
                            return -1;
                        }
                    }
                    else {
                        return 0;
                    }
                });
                if (order === 'desc') {
                    array.sort(function (a, b) { return (parseInt(a[field]) < parseInt(b[field]) ? 1 : -1); });
                }
                else {
                    array.sort(function (a, b) { return (parseInt(a[field]) > parseInt(b[field]) ? 1 : -1); });
                }
            }
            else if (dataType === 'datetime') {
                array.sort(function (a, b) {
                    if (a[field] && b[field]) {
                        if (order === 'desc') {
                            return ((new Date(a[field]) < new Date(b[field])) ? 1 : -1);
                        }
                        else {
                            return ((new Date(a[field]) > new Date(b[field])) ? 1 : -1);
                        }
                    }
                    else if (!a[field] && b[field]) {
                        if (order === 'desc') {
                            return 1;
                        }
                        else {
                            return -1;
                        }
                    }
                    else if (a[field] && !b[field]) {
                        if (order === 'desc') {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    }
                    else {
                        return 0;
                    }
                });
            }
            else if (dataType === 'string') {
                array.sort(function (a, b) {
                    if (a[field] && b[field]) {
                        if (order === 'desc') {
                            return ((a[field].toLowerCase() < b[field].toLowerCase()) ? 1 : -1);
                        }
                        else {
                            return ((a[field].toLowerCase() > b[field].toLowerCase()) ? 1 : -1);
                        }
                    }
                    else if (!a[field] && b[field]) {
                        if (order === 'desc') {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    }
                    else if (a[field] && !b[field]) {
                        if (order === 'desc') {
                            return 1;
                        }
                        else {
                            return -1;
                        }
                    }
                    else {
                        return 0;
                    }
                });
            }
            else if (dataType === 'number') {
                if (order === 'desc') {
                    array.sort(function (a, b) { return ((parseFloat(a[field]) < parseFloat(b[field])) ? 1 : -1); });
                }
                else {
                    array.sort(function (a, b) { return ((parseFloat(a[field]) > parseFloat(b[field])) ? 1 : -1); });
                }
            }
            else {
                if (order === 'desc') {
                    array.sort(function (a, b) { return ((a[field] < b[field]) ? 1 : -1); });
                }
                else {
                    array.sort(function (a, b) { return ((a[field] > b[field]) ? 1 : -1); });
                }
            }
            return array;
        };
        SortFilterService.prototype.filterArray = function (array, field, val, exField, exVal) {
            if (!field && !val) {
                this.clearFilter(array);
            }
            else {
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    item.IsHidden = true;
                    item.IsFiltered = true;
                    if (item[field] && item[field] === val) {
                        item.IsHidden = false;
                        item.IsFiltered = false;
                        continue;
                    }
                    if (exField && item[exField] === exVal) {
                        item.IsHidden = false;
                        item.IsFiltered = false;
                        continue;
                    }
                }
            }
            return array;
        };
        SortFilterService.prototype.clearFilter = function (array) {
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                item.IsHidden = false;
                item.IsFiltered = false;
            }
        };
        SortFilterService.prototype.flexibleSearch = function (array, val, searchFields) {
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                if (!item.IsFiltered) {
                    if (val === '') {
                        item.IsHidden = false;
                        continue;
                    }
                    var isNotFound = true;
                    for (var ii = 0; ii < searchFields.length; ii++) {
                        var field = searchFields[ii];
                        if (item[field] && item[field].toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
                            isNotFound = false;
                            continue;
                        }
                    }
                    item.IsHidden = isNotFound;
                }
            }
        };
        SortFilterService.prototype.findItem = function (array, field, val) {
            return array.find(function (x) { return x[field] === val; });
        };
        SortFilterService.prototype.trimEmptyField = function (array, field) {
            var trimmedArray = [];
            var clonedArray = array.slice();
            for (var i = 0; i < clonedArray.length; i++) {
                var item = clonedArray[i];
                if (item[field] && item[field].toString() !== "") {
                    trimmedArray.push(item);
                }
            }
            return trimmedArray;
        };
        SortFilterService.prototype.trimDuplicateField = function (array, field) {
            var trimmedArray = [];
            var clonedArray = array.slice();
            var isExist = function (val) {
                var isFound = false;
                for (var i = 0; i < trimmedArray.length; i++) {
                    var trimmedItem = trimmedArray[i];
                    if (trimmedItem[field] === val) {
                        isFound = true;
                        break;
                    }
                }
                return isFound;
            };
            for (var i = 0; i < clonedArray.length; i++) {
                var item = clonedArray[i];
                if (!isExist(item[field])) {
                    trimmedArray.push(item);
                }
            }
            return trimmedArray;
        };
        SortFilterService.prototype.trimByGroup = function (array, field, val) {
            var trimmedArray = [];
            var clonedArray = array.slice();
            for (var i = 0; i < clonedArray.length; i++) {
                var item = clonedArray[i];
                if (item[field].toString() === val) {
                    trimmedArray.push(item);
                }
            }
            return trimmedArray;
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