import { ExpenseItem } from "./expenseitem";
import { ReceiptItem } from "./receiptitem";
import { NoteItem } from "./noteitem";

export class ExpenseReportDetail {
	activityName: string;
	activityOwner: string;
	amount: string;
	businessAmount: string;
	creatorName: string;
	currency: string;
	dateCreated: string;
	dateModified: string;
	description: string;
	expenseList: ExpenseItem[];
	notes: NoteItem[];
	personalAmount: string;
	purpose: string;
	receiptList: ReceiptItem[];
	statusClass: string;
	submitDate: string;
	status: string;
	statusLevel: number;
	statusName: string;
	trackingNumber: string;

	constructor(item: any) {
		this.activityName = item.activityName;
		this.activityOwner = item.activityOwner;
		this.amount = item.amount;
		this.businessAmount = item.businessAmount;
		this.creatorName = item.creatorName;
		this.currency = item.currency;
		this.dateCreated = item.dateCreated;
		this.dateModified = item.dateModified;
		this.description = item.description;
		this.expenseList = item.expenseList;
		this.notes = item.notes;
		this.personalAmount = item.personalAmount;
		this.purpose = item.purpose;
		this.receiptList = item.receiptList;
		this.status = item.status;
		this.statusClass = item.statusClass;
		this.statusLevel = item.statusLevel;
		this.statusName = item.statusName;
		this.submitDate = item.submitDate;
		this.trackingNumber = item.trackingNumber;
	}
}
