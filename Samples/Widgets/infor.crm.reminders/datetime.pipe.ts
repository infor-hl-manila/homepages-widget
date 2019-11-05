import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "dateTimeFormat" })
export class DateTimePipe implements PipeTransform {
  transform(dateTime: string): Date {
    if (dateTime) {
      const formattedDate = new Date (dateTime.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));

      return formattedDate;
    }

    return null;
  }
}
