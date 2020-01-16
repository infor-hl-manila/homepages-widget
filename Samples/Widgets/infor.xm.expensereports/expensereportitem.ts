import { ExpenseReportDetail } from "./expensereportdetail";

export class ExpenseReportItem {
	activityId: number;
	activityName: string;
	activityOwner: string;
	amount: string;
	creatorName: string;
	currency: string;
	currencyAmount: string;
	date: Date;
	dateModified: string;
	description: string;
	expenseReportDetail: ExpenseReportDetail;
	hasDue: boolean;
	isFiltered: boolean;
	purpose: string;
	status: string;
	statusClass: string;
	statusLevel: number;
	statusName: string;
	submitDate: string;
	trackingNumber: string;

	constructor(item: any) {
		this.activityId = item.activityId;
		this.activityName = item.activityName;
		this.activityOwner = item.activityOwner;
		this.amount = item.amount;
		this.creatorName = item.creatorName;
		this.currency = item.currency;
		this.currencyAmount = item.currencyAmount;
		this.date = item.date;
		this.dateModified = item.dateModified;
		this.description = item.description;
		this.expenseReportDetail = item.expenseReportDetail;
		this.hasDue = item.hasDue;
		this.isFiltered = item.isFiltered;
		this.purpose = item.purpose;
		this.status = item.status;
		this.statusClass = item.statusClass;
		this.statusLevel = item.statusLevel;
		this.statusName = item.statusName;
		this.submitDate = item.submitDate;
		this.trackingNumber = item.trackingNumber;
	}
}
