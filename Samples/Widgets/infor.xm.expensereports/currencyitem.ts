export class CurrencyItem {
	currencySymbol: string;
	isoCode: string;

	constructor(item: any) {
		this.currencySymbol = item.currencySymbol;
		this.isoCode = item.isoCode;
	}
}