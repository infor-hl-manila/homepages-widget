import { Injectable } from "@angular/core";
import { IMyLanguage } from "./mylanguage";
import { IWidgetContext } from "lime";

@Injectable({
    providedIn: "root"
})
export class CommonService {
    formatAmount(amount: string, hasCurrency: boolean, hasDecimal: boolean) {
		let currency = '';
		let amountVal = ''

		if (hasCurrency) {
			currency = amount.split(' ')[0];
			amountVal = amount.split(' ')[1];
		} else {
			amountVal = amount.split(' ')[0];
		}

		let formattedAmount = '';
		if (hasDecimal) {
			formattedAmount = parseFloat(amountVal).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} else {
			formattedAmount = parseFloat(amountVal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

		const newVal = hasCurrency ? `${currency}formattedAmount` : formattedAmount;

		return newVal;
	}

	formatDate(date: string, language: IMyLanguage) {
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

		const newDate = new Date(date);
		const formatDate = monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear();

		return formatDate;
	}

	launchUrl(url: string, widgetContext: IWidgetContext): void {
		widgetContext.launch({ url: url });
	}

    goToCoreProduct(widgetContext: IWidgetContext): void {
		this.launchUrl('?favoriteContext=xm_MyDocuments&LogicalId={logicalId}', widgetContext);
    }

    goToAppleStore(widgetContext: IWidgetContext): void {
        this.launchUrl('https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8', widgetContext);
    }

    goToPlayStore(widgetContext: IWidgetContext): void {
        this.launchUrl('https://play.google.com/store/apps/details?id=com.infor.xm.android.activity&hl=en_US', widgetContext);
	}

	createNewReportCoreProduct(widgetContext: IWidgetContext): void {
		this.launchUrl('?favoriteContext=xm_ExpenseReport%7C100&LogicalId={logicalId}', widgetContext);
	}

	editInWebApplication(widgetContext: IWidgetContext, trackingNumber: string): void {
		this.launchUrl(`?favoriteContext=xm_ExpenseReport%7C100%7C${trackingNumber}&LogicalId={logicalId}`, widgetContext);
	}
}
