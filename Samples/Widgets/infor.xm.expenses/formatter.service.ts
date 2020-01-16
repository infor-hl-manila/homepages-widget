import { Injectable } from "@angular/core";
import { IMyLanguage } from "./mylanguage";

@Injectable({
	providedIn: "root"
})
export class FormatterService {
    formatDate(d: Date, language: IMyLanguage): string {
        const dateToday = new Date();
        const oldDate = new Date(d);
        const timeDiff = dateToday.getTime() - oldDate.getTime();
        const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

        const monthNames = [
            language.get('jan'),
            language.get('feb'),
            language.get('mar'),
            language.get('apr'),
            language.get('may'),
            language.get('jun'),
            language.get('jul'),
            language.get('aug'),
            language.get('sep'),
            language.get('oct'),
            language.get('nov'),
            language.get('dec'),
        ];

        let formatDate = `${monthNames[oldDate.getMonth()]}  ${oldDate.getDate()}, ${oldDate.getFullYear()}`;

        if (diffDays >= 60) {
            formatDate = `${Math.floor(diffDays/30)}${language.get('monthsAgo')}`;
        } else if (diffDays >= 30) {
            formatDate = language.get('aMonthAgo');
        } else if (diffDays === 0) {
            formatDate = language.get('today');
        }

        return formatDate;
    }

    formatAmount(val: any): string {
        let formattedVal = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        formattedVal = formattedVal.split('.')[0];

        return formattedVal;
    }
}
