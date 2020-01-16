export class ExpenseItem {
	centsAmount: string;
	currency: string;
	date: string;
    vendorName: string;
	wholeAmount: string;

	constructor(item: any) {
		this.centsAmount = item.centsAmount;
		this.currency = item.currency
		this.date = item.date;
		this.vendorName = item.vendorName;
		this.wholeAmount = item.wholeAmount;
	}
}