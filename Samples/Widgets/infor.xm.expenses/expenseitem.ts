export class ExpenseItem {
	amount: string;
	currency: string;
	currencyAmount: string;
	currencyAmountDecimal: string;
	date: Date;
	expenseStatus: string;
	expenseType: string;
	formatDate: string;
	hasExpenseType: boolean;
	hasVendor: boolean;
	isOverflown: boolean;
	vendorName: string;

	constructor(item: any) {
		this.amount = item.amount;
		this.currency = item.currency;
		this.currencyAmount = item.currencyAmount;
		this.currencyAmountDecimal = item.currencyAmountDecimal;
		this.date = item.date;
		this.expenseStatus = item.expenseStatus;
		this.expenseType = item.expenseType;
		this.formatDate = item.formatDate;
		this.hasVendor = item.hasVendor;
		this.hasExpenseType = item.hasExpenseType;
		this.isOverflown = item.isOverflown;
		this.vendorName = item.vendorName;
	}
}