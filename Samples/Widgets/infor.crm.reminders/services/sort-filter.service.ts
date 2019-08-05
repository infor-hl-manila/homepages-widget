import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SortFilterService {

  filterAllDay(arrayToFilter: any[], dateProp1: string, dateProp2: string, dateFilter1: any, dateFilter2: any) {
    if (this.checkIfFilterValid(arrayToFilter, dateProp1, dateFilter1)) {
      const filteredArr = arrayToFilter.filter(x => {
        const datePropValue1 = new Date(x[dateProp1].replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
        const datePropValue2 = new Date(x[dateProp2].replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));

        const startOfDay = new Date(new Date().setHours(0, 0, 0, 0));
        const endOfDay = new Date(new Date().setHours(23, 59, 0, 0));

        if (datePropValue1.getTime() === startOfDay.getTime() && datePropValue2.getTime() === endOfDay.getTime()) {
          return x;
        }
      });
      return filteredArr;
    }
  }

  filterByDate(arrayToFilter: any[], dateProp: string, dateFilter: any, reverse?: boolean) {
    if (this.checkIfFilterValid(arrayToFilter, dateProp, dateFilter)) {
      const filteredArray = arrayToFilter.filter(d => {
        const datePropVal = d[dateProp];

        if (datePropVal) {
          const formattedDate = new Date (datePropVal.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
          const offset = 480;

          const estDate = new Date(formattedDate.getTime() + offset * 60 * 1000);

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
  }

  filterWithRange(arrayToFilter: any[], dateProp: string, dateFilter: any, reverse?: boolean, rangeFilter?: any) {
    const enddateFiltered = this.filterByDate(arrayToFilter, dateProp, dateFilter, reverse);
    const startdateFiltered = this.filterByDate(enddateFiltered, dateProp, rangeFilter, !reverse);

    return startdateFiltered;
  }

  sortByDate(arrayToSort: any[], dateProp: string, reverse?: boolean) {
    if (this.checkIfValid(arrayToSort, dateProp)) {
      const sortedArr = this.sort(arrayToSort, dateProp, reverse);

      return sortedArr;
    }
    return arrayToSort;
  }

  private checkIfValid(arrayToCheck: any[], prop: string): boolean {
    return (prop && arrayToCheck && arrayToCheck.length > 0);
  }

  private checkIfFilterValid(arrayToCheck: any[], prop: string, filter: any) {
    return (filter && this.checkIfValid(arrayToCheck, prop));
  }

  private sort(arrayToSort: any[], dateProp: string, reverse?: boolean) {
    const sortedArray = arrayToSort.sort((a, b) => {
      const dateA = new Date(a[dateProp]).getTime();
      const dateB = new Date(b[dateProp]).getTime();

      return !reverse ? dateA - dateB : dateB - dateA;
    });

    return sortedArray;
  }

}
