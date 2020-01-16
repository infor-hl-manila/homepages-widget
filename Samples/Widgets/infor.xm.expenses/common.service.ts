import { Injectable } from "@angular/core";
import { IWidgetContext } from "lime";

@Injectable({
	providedIn: "root"
})
export class CommonService {
    isOverflown(str: string, widgetInstanceId: string): boolean {
			const strMeasurer = document.getElementById(`string-measurer-${widgetInstanceId}`);
			strMeasurer.innerHTML = str;

			const expenseListPanel = document.getElementsByClassName(`expense-content-container-${widgetInstanceId}`)[0];
			const containerWidth = expenseListPanel.clientWidth;

			// 29 is the padding on both left and right
			// .6 is 60% of the expense list width
			// 36 is the space defined between the 2 panels
			let columnCount = 1;
			if (containerWidth > 1200) {
				columnCount = 4;
			} else if (containerWidth > 800) {
				columnCount = 3;
			} else if (containerWidth > 400) {
				columnCount = 2;
			}

			const maxWidth = (((containerWidth/columnCount) - 29) * .6) - 36;

			// 17 is decimal container width
			return strMeasurer.clientWidth + 17 > maxWidth;
    }

    shortenAmountString(amount: number, currencySymbol: string, isForce: boolean) {
			let newAmount = amount.toString();

			function formatAmount(x: any) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			}

			if ((currencySymbol + formatAmount(amount % 1 != 0 ? amount.toFixed(2) : amount)).toString().length >= 16 || isForce) {
				if (amount >= 1000000000000) { // T
					newAmount = `${(amount/1000000000000).toFixed(2)}T`;
				} else if (amount >= 1000000000) { // B
					newAmount = `${(amount/1000000000).toFixed(2)}B`;
				} else if (amount >= 1000000) { // M
					newAmount = `${(amount/1000000).toFixed(2)}M`;
				} else { // K
					newAmount = `${(amount/1000).toFixed(2)}K`;
				}
			} else {
				newAmount = formatAmount(amount % 1 != 0 ? amount.toFixed(2) : amount);
			}

			return newAmount.toString();
    };

    goToCoreProduct(widgetContext: IWidgetContext): void {
			widgetContext.launch({ url: "?favoriteContext=xm_MyDocuments&LogicalId={logicalId}'" });
    }

    goToAppleStore(widgetContext: IWidgetContext): void {
			widgetContext.launch({ url: "https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8" });
		}

		createNewReport(widgetContext: IWidgetContext): void {
			widgetContext.launch({ url: "?favoriteContext=xm_ExpenseReport%7C100&LogicalId={logicalId}" });
		}
}
