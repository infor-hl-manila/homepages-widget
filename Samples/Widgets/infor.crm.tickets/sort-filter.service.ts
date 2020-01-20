import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class SortFilterService {
	sortArray(array: any[], field: string, dataType?: string, order?: string, dateField?: string): any[] {
        if (dataType === 'default') {
            array.sort((a: any, b: any) => {
                if (a[dateField] && b[dateField]) {
                    if (order === 'desc') {
                        return ((new Date(a[dateField]) < new Date(b[dateField])) ? 1 : -1);
                    } else {
                        return ((new Date(a[dateField]) > new Date(b[dateField])) ? 1 : -1);
                    }
                } else if (!a[dateField] && b[dateField]) {
                    if (order === 'desc') {
                        return -1;
                    } else {
                        return 1;
                    }
                } else if (a[dateField] && !b[dateField]) {
                    if (order === 'desc') {
                        return 1;
                    } else {
                        return -1;
                    }
                } else {
                    return 0;
                }
            });

            if (order === 'desc') {
                array.sort((a: any, b: any) => (parseInt(a[field]) < parseInt(b[field]) ? 1 : -1));
            } else {
                array.sort((a: any, b: any) => (parseInt(a[field]) > parseInt(b[field]) ? 1 : -1));
            }
        } else if (dataType === 'datetime') {
            array.sort((a: any, b: any) => {
                if (a[field] && b[field]) {
                    if (order === 'desc') {
                        return ((new Date(a[field]) < new Date(b[field])) ? 1 : -1);
                    } else {
                        return ((new Date(a[field]) > new Date(b[field])) ? 1 : -1);
                    }
                } else if (!a[field] && b[field]) {
                    if (order === 'desc') {
                        return 1;
                    } else {
                        return -1;
                    }
                } else if (a[field] && !b[field]) {
                    if (order === 'desc') {
                        return -1;
                    } else {
                        return 1;
                    }
                } else {
                    return 0;
                }
            });
        } else if (dataType === 'string') {
            array.sort((a: any, b: any) => {
                if (a[field] && b[field]) {
                    if (order === 'desc') {
                        return ((a[field].toLowerCase() < b[field].toLowerCase()) ? 1 : -1);
                    } else {
                        return ((a[field].toLowerCase() > b[field].toLowerCase()) ? 1 : -1);
                    }
                } else if (!a[field] && b[field]) {
                    if (order === 'desc') {
                        return -1;
                    } else {
                        return 1;
                    }
                } else if (a[field] && !b[field]) {
                    if (order === 'desc') {
                        return 1;
                    } else {
                        return -1;
                    }
                } else {
                    return 0;
                }
            });
        } else if (dataType === 'number') {
            if (order === 'desc') {
                array.sort((a: any, b: any) => ((parseFloat(a[field]) < parseFloat(b[field])) ? 1 : -1));
            } else {
                array.sort((a: any, b: any) => ((parseFloat(a[field]) > parseFloat(b[field])) ? 1 : -1));
            }
        } else {
            if (order === 'desc') {
                array.sort((a: any, b: any) => ((a[field] < b[field]) ? 1 : -1));
            } else {
                array.sort((a: any, b: any) => ((a[field] > b[field]) ? 1 : -1));
            }
        }

        return array;
    }

    filterArray(array: any[], field: string, val: any, exField?: string, exVal?: any): any[] {
        if (!field && !val) {
            this.clearFilter(array);
        } else {
            for (let i = 0; i < array.length; i++) {
                const item = array[i];

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
    }

    clearFilter(array: any[]) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];

            item.IsHidden = false;
            item.IsFiltered = false;
        }
    }

    flexibleSearch(array: any[], val: string, searchFields: string[]) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];

            if (!item.IsFiltered) {
                if (val === '') {
                    item.IsHidden = false;
                    continue;
                }

                let isNotFound = true;
                for (let ii = 0; ii < searchFields.length; ii++) {
                    const field = searchFields[ii]
                    if (item[field] && item[field].toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        isNotFound = false;
                        continue;
                    }
                }

                item.IsHidden = isNotFound;
            }
        }
    }

    findItem(array: any[], field: string, val: any): any {
        return array.find(x => x[field] === val);
    }

    trimEmptyField(array: any[], field: string): any[] {
        const trimmedArray: any[] = [];
        const clonedArray = array.slice();

        for (let i = 0; i < clonedArray.length; i++) {
            const item = clonedArray[i];

            if (item[field] && item[field].toString() !== "") {
                trimmedArray.push(item);
            }
        }

        return trimmedArray;
    }

    trimDuplicateField(array: any[], field: string): any[] {
        const trimmedArray: any[] = [];
        const clonedArray = array.slice();

        const isExist = (val: string) => {
            let isFound = false;

            for(let i = 0; i < trimmedArray.length; i++) {
                let trimmedItem = trimmedArray[i];

                if (trimmedItem[field] === val) {
                    isFound = true;
                    break;
                }
            }

            return isFound;
        }

        for (let i = 0; i < clonedArray.length; i++) {
            const item = clonedArray[i];

            if (!isExist(item[field])) {
                trimmedArray.push(item);
            }
        }

        return trimmedArray;
    }

    trimByGroup(array: any[], field: string, val: string) {
        const trimmedArray: any[] = [];
        const clonedArray = array.slice();

        for (let i = 0; i < clonedArray.length; i++) {
            const item = clonedArray[i];

            if (item[field].toString() === val) {
                trimmedArray.push(item);
            }
        }

        return trimmedArray;
    }
}