import { Injectable } from "@angular/core";
import {
    IIonApiRequestOptions,
    IIonApiResponse,
    IWidgetContext
} from "lime";
import { Observable } from "rxjs/Observable";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { IMyLanguage } from "./mylanguage";
import { ExpenseReportItem } from "./expensereportitem";
import { ExpenseReportDetail } from "./expensereportdetail";
import { CommonService } from "./common.service";
import { CurrencyItem } from "./currencyitem";
import { ExpenseItem } from "./expenseitem";
import { ReceiptItem } from "./receiptitem";
import { NoteItem } from "./noteitem";

@Injectable({
    providedIn: "root"
})
export class ExpenseService {
    private serviceUrl = "XM";
	private widgetContext: IWidgetContext;
	private pendingContextSubjectsCurrency: AsyncSubject<CurrencyItem[]>[];
	private pendingContextSubjectsExpenseReport: AsyncSubject<ExpenseReportItem[]>[];

	private currencies: CurrencyItem[] = [];
	private expenseReports: ExpenseReportItem[] = [];

	constructor(private commonService: CommonService) {}

	init(widgetContext: IWidgetContext): void {
		this.widgetContext = widgetContext;
	}

	getExpenseReports(currencies: CurrencyItem[], language: IMyLanguage, isForce: boolean): Observable<ExpenseReportItem[]> {
		const subject = new AsyncSubject<ExpenseReportItem[]>();

		if (this.expenseReports.length > 0 && !isForce) {
			subject.next(this.expenseReports);
			subject.complete();
		} else {
			const pending = this.pendingContextSubjectsExpenseReport;

			if (pending && pending.length) {
				pending.push(subject);
			} else {
				this.pendingContextSubjectsExpenseReport = [subject];
				this.loadExpenseReports(currencies, language);
			}
		}

		return subject.asObservable();
	}

	loadExpenseReports(currencies: CurrencyItem[], language: IMyLanguage): void {
		const _this = this;
		this.expenseReports = [];

		const pending = this.pendingContextSubjectsExpenseReport;

		const request = this.createRequest("xm-api/v1/application/WorkItem/MyDocuments?reference=1");
		this.widgetContext.executeIonApiAsync(request).subscribe((response: IIonApiResponse<any>) => {
			const dataset = response.data as any[];
			dataset.map(function (item) {
				if (item['procName'] === 'Expense Report') {
					_this.expenseReports.push(_this.getNewExpenseReportItem(item, currencies, language));
				}
			});

			this.resolve(pending, _this.expenseReports);
		}, (e) => {
			this.reject(pending, e);
		});
	}

	getExpenseReportDetails(trackingNumber: string): Observable<IIonApiResponse<any>> {
		const request = this.createRequest(`xm-api/v1/application/ExpenseReport?trackingNumber=${trackingNumber}&includeReceipts=true`);
		return this.widgetContext.executeIonApiAsync<any>(request);
	}

	getCurrency(): Observable<CurrencyItem[]> {
		const subject = new AsyncSubject<CurrencyItem[]>();

		if (this.currencies.length > 0) {
			subject.next(this.currencies);
			subject.complete();
		} else {
			const pending = this.pendingContextSubjectsCurrency;

			if (pending && pending.length) {
				pending.push(subject);
			} else {
				this.pendingContextSubjectsCurrency = [subject];
				this.loadCurrency();
			}
		}

		return subject.asObservable();
	}

	loadCurrency(): void {
		const _this = this;
		this.currencies = [];

		const pending = this.pendingContextSubjectsCurrency;

		const request = this.createRequest("xm-api/v1/application/ALCurrencyFormat");
		this.widgetContext.executeIonApiAsync(request).subscribe((response: IIonApiResponse<any>) => {
			const dataset = response.data as any[];
			dataset.map(function (item) {
				_this.currencies.push(new CurrencyItem(item));
			});

			this.resolve(pending, this.currencies);
		}, (e) => {
			this.reject(pending, e);
		});
	}

	getStatusClass(item: any) {
		switch (item['-docStatus']) {
			case 'submitted':
				return 'expense-report-status expense-report-status-in-review';
			case 'rejected':
				return 'expense-report-status expense-report-status-rejected';
			case 'created':
				return 'expense-report-status expense-report-status-draft';
			case 'returnedForMoreInfo':
				return 'expense-report-status expense-report-status-needs-review';
			default:
				return 'expense-report-status expense-report-status-in-review';
		}
	}

	getStatusName(item: any, language: IMyLanguage) {
		switch (item['-docStatus']) {
			case 'submitted':
				return language.get('inReview');
			case 'rejected':
				return language.get('rejected');
			case 'created':
				return language.get('draft');
			case 'returnedForMoreInfo':
				return language.get('needsReview');
			default:
				return language.get('inReview');
		}
	}

	getStatusLevel(item: any) {
		switch (item['-docStatus']) {
			case 'rejected':
				return 1;
			case 'returnedForMoreInfo':
				return 2;
			case 'submitted':
				return 4;
			case 'created':
				return 3;
			default:
				return 1;
		}
	}

	getPriorityLevel(status: string) {
		switch (status) {
			case 'submitted':
				return 0;
			case 'rejected':
				return 3
			case 'created':
				return 2;
			case 'returnedForMoreInfo':
				return 3;
			case 'draft':
				return 2;
			default:
				return 1;
		}
	}

	getNotificationClass(status: string) {
		switch (status) {
			case 'rejected':
				return 'expense-report-notification-rejected';
			case 'created':
				return 'expense-report-notification-pending';
			case 'returnedForMoreInfo':
				return 'expense-report-notification-rejected';
			case 'draft':
				return 'expense-report-notification-info';
			default:
				return 'expense-report-notification-rejected';
		}
	}

	getNotificationMessage(status: string) {
		switch (status) {
			case 'submitted':
				return ' has been submitted';
			case 'rejected':
				return ' has been rejected';
			case 'created':
				return ' has been created';
			case 'returnedForMoreInfo':
				return ' has been returned for more info';
			case 'draft':
				return ' is due soon';
			default:
				return ' has been rejected';
		}
	}

	findCurrency(currencies: CurrencyItem[], isoCode: string) {
		for (let i = 0; i < currencies.length; i++) {
			const item = currencies[i];

			if (item.isoCode === isoCode) {
				return item;
			}
		}

		return null;
	}

	getNewExpenseReportItem(item: any, currencies: CurrencyItem[], language: IMyLanguage) {
		return new ExpenseReportItem({
			trackingNumber: item['-displayName'] || 'No Tracking Number',
			date: this.commonService.formatDate(item['dateCreated'], language) || 'No Date Created',
			description: item['description'] || 'No Description',
			purpose: item['docPurpose'] || 'No Purpose',
			currency: item['docSpecificAmount'] ? this.findCurrency(currencies, item['docSpecificAmount'].split(' ')[0]).currencySymbol : ' ',
			amount: item['docSpecificAmount'] ? this.commonService.formatAmount(item['docSpecificAmount'].split(' ')[1], false, true) : 'N/A',
			currencyAmount: item['docSpecificAmount'] ? this.commonService.formatAmount(item['docSpecificAmount'], true, true) : ' ',
			status: item['-docStatus'] || 'No Status',
			statusClass: this.getStatusClass(item) || ' ',
			statusName: this.getStatusName(item, language) || 'No Status',
			statusLevel: this.getStatusLevel(item),
			isFiltered: false,
			acyivityId: item['activityId'] || 0,
			activityName: item['activityName'] || 'No Activity',
			activityOwner: item['-docStatus'] === 'created' ? item['creatorName'] : item['inboxReviewerList'] || 'No Activity Owner',
			creatorName: item['creatorName'],
			submitDate: item['submitDate'] || 'No Submit Date',
			dateModified: item['dateModified'] || 'No Date Modified'
		});
	}

	getNewExpenseReportDetailItem(expenseReportItem: ExpenseReportItem, item: any, currencies: CurrencyItem[], isoCode: string, language: IMyLanguage) {
		const _this = this;
		const newExpenseReportDetail = new ExpenseReportDetail({
			status: item['-expenseReport']['-docStatus'],
			statusName: expenseReportItem.statusName,
			description: expenseReportItem.description,
			amount: this.commonService.formatAmount(item['-expenseReport']['totalExpense'].split(' ')[1], false, true),
			creatorName: `${language.get('by')}: ${expenseReportItem.creatorName}`,
			currency: this.findCurrency(currencies, item['-expenseReport']['totalExpense'].split(' ')[0]).currencySymbol,
			trackingNumber: expenseReportItem.trackingNumber,
			dateCreated: this.commonService.formatDate(item['-expenseReport']['createDate'], language),
			purpose: expenseReportItem.purpose,
			statusClass: expenseReportItem.statusClass,
			statusLevel: expenseReportItem.statusLevel,
			expenseList: [],
			receiptList: [],
			activityName: expenseReportItem.activityName,
			activityOwner: `${language.get('by')}: ${expenseReportItem.activityOwner}`,
			submitDate: this.commonService.formatDate(expenseReportItem.submitDate, language),
			dateModified: this.commonService.formatDate(expenseReportItem.dateModified, language),
			notes: this.getNotes(item['-expenseReport']['-notes'], language),
			personalAmount: item['-expenseReport']['amtDueEmp'] ? this.findCurrency(currencies, item['-expenseReport']['amtDueEmp'].split(' ')[0]).currencySymbol + this.commonService.formatAmount(item['-expenseReport']['amtDueEmp'].split(' ')[1], false, true) : ' ',
			businessAmount: item['-expenseReport']['amtDueCo'] ? this.findCurrency(currencies, item['-expenseReport']['amtDueCo'].split(' ')[0]).currencySymbol + this.commonService.formatAmount(item['-expenseReport']['amtDueCo'].split(' ')[1], false, true) : ' '
		});

		if (item['-expenseReport']['-lineItems']) {
			item['-expenseReport']['-lineItems'].map(function (item: any) {
				newExpenseReportDetail.expenseList.push(new ExpenseItem({
					vendorName: item['-vendorName'] ? item['-vendorName'] : language.get('noVendor'),
					date: _this.commonService.formatDate(item.date, language),
					currency: _this.findCurrency(currencies, isoCode).currencySymbol,
					wholeAmount: _this.commonService.formatAmount(item.expenseItemAmtPaid.split(' ')[1].split('.')[0], false, false),
					centsAmount: `.${item.expenseItemAmtPaid.split('.')[1].substring(0, 2)}`
				}));
			});
		}

		if (item['-expenseReport']['-receipts']) {
			item['-expenseReport']['-receipts'].map(function (item: any) {
				newExpenseReportDetail.receiptList.push(new ReceiptItem({
					receiptID: item['id'],
					receiptSource: `data:image/png;base64,${item['image']}`
				}));
			});
		}

		return newExpenseReportDetail;
	}

	getExpenseReportReceipt(): void {

	}

	getNotes(items: any[], language: IMyLanguage) {
		const _this = this;
		const notes: NoteItem[] = [];

		if (!items || items.length === 0) {
			return [];
		}

		items.map(function(item) {
			notes.push(_this.getNewNote(item, language));
		});

		notes.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? -1 : 1);

		return notes;
	}

	getNewNote(item: any, language: IMyLanguage) {
		const _this = this;
		return new NoteItem({
			date: _this.commonService.formatDate(item.date, language),
			noteMessage: item.message,
			noteOwner: ""
		});
	}

	private createRequest(relativeUrl: string, headers?: object): IIonApiRequestOptions {
		if (!headers) {
			// Create default headers
			headers = { Accept: "application/json" };
		}

		// Create the relative URL to the ION API
		const url = `${this.serviceUrl}/${relativeUrl}`;

		// Create HTTP GET request object
		const request: IIonApiRequestOptions = {
			method: "GET",
			url: url,
			cache: false,
			headers: headers
		};

		return request;
	}

	private reject(subjects: AsyncSubject<any>[], reason: {}): void {
		for (const subject of subjects) {
			subject.error(reason);
		}

		subjects.splice(0, subjects.length);
	}

	private resolve(subjects: AsyncSubject<any>[], value?: any): void {
		for (const subject of subjects) {
			subject.next(value);
			subject.complete();
		}

		subjects.splice(0, subjects.length);
	}
}