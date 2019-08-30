import {
  Pipe,
  PipeTransform
} from "@angular/core";

@Pipe({
  name: "dateTimeFormat"
})
export class DateTimePipe implements PipeTransform {
  transform(dateTime: string): Date {
    if (dateTime) {

      const formattedDate: any = dateTime.slice(0, 4) + "-" + dateTime.slice(4, 6) + "-" + dateTime.slice(6);

      const fDate = formattedDate.split(" ").join("T");

      return fDate;
    }

    return null;
  }
}
