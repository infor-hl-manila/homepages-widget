import { Injectable } from "@angular/core";
import {
  IIonApiRequestOptions,
  IIonApiResponse,
  IWidgetContext
} from "lime";
import { Observable } from "rxjs/Observable";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { FormatterService } from "./formatter.service";
import { ExpenseItem } from "./expenseitem";
import { CurrencyItem } from "./currencyitem";
import { CommonService } from "./common.service";
import { IMyLanguage } from "./mylanguage";

@Injectable({
	providedIn: "root"
})
export class ExpenseService {
	private serviceUrl = "XM";
    private widgetContext: IWidgetContext;
    private pendingContextSubjectsCurrency: AsyncSubject<CurrencyItem[]>[];
    private pendingContextSubjectsExpense: AsyncSubject<ExpenseItem[]>[];

    private currencies: CurrencyItem[] = [];
    private expenses: ExpenseItem[] = [];

    constructor(private formatterService: FormatterService,
                private commonService: CommonService) {}

    init(widgetContext: IWidgetContext): void {
		this.widgetContext = widgetContext;
	}

	getExpenses(currencies: CurrencyItem[], language: IMyLanguage): Observable<ExpenseItem[]> {
		const subject = new AsyncSubject<ExpenseItem[]>();

		if (this.expenses.length > 0) {
			subject.next(this.expenses);
			subject.complete();
		} else {
			const pending = this.pendingContextSubjectsExpense;

			if (pending && pending.length) {
				pending.push(subject);
			} else {
				this.pendingContextSubjectsExpense = [subject];
				this.loadExpenses(currencies, language);
			}
		}

		return subject.asObservable();
    }

    loadExpenses(currencies: CurrencyItem[], language: IMyLanguage): void {
        const _this = this;
		this.currencies = [];

		const pending = this.pendingContextSubjectsExpense;

		const request = this.createRequest("xm-api/v1/application/ExpenseLineItem?unattachedCCT=true&reference=true");
		this.widgetContext.executeIonApiAsync(request).subscribe((response: IIonApiResponse<any>) => {
			const dataset = response.data as any[];
            const isoCode = dataset.length > 0 ? dataset[0].expenseItemAmtPaid.split(' ')[0] : '';

            dataset.map(function (item) {
                const newExpenseItem = _this.getNewExpenseItem(item, currencies, isoCode, language, _this.widgetContext.getWidgetInstanceId());

                _this.expenses.push(newExpenseItem);
			});

			_this.resolve(pending, _this.expenses);
		}, (e) => {
			_this.reject(pending, e);
		});
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
		_this.currencies = [];

		const pending = this.pendingContextSubjectsCurrency;

		const request = this.createRequest("xm-api/v1/application/ALCurrencyFormat");
		this.widgetContext.executeIonApiAsync(request).subscribe((response: IIonApiResponse<any>) => {
			const dataset = response.data as any[];
			dataset.map(function (item) {
				_this.currencies.push(new CurrencyItem(item));
			});

			_this.resolve(pending, _this.currencies);
		}, (e) => {
			_this.reject(pending, e);
		});
	}

    findCurrency(currencies: CurrencyItem[], isoCode: string): CurrencyItem {
        for (let i = 0; i < currencies.length; i++) {
            const item = currencies[i];

            if (item.isoCode === isoCode) {
                return item;
            }
        }

        return null;
    }

    getNewExpenseItem(item: any, currencies: CurrencyItem[], isoCode: string, language: IMyLanguage, widgetInstanceId: string): ExpenseItem {
        const currencySymbol = this.findCurrency(currencies, isoCode).currencySymbol;
        const isOverflown = this.commonService.isOverflown(`${currencySymbol}${this.formatterService.formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2))}`, widgetInstanceId);

        return new ExpenseItem({
            date: item.date,
            formatDate: this.formatterService.formatDate(item.date, language),
            hasVendor: item['-vendorName'],
            vendorName: item['-vendorName'] ? item['-vendorName'] : item['-reference'][item.expenseType] ? item['-reference'][item.expenseType]['-displayName'] : language.get('noExpenseType'),
            hasExpenseType: item['-reference'][item.expenseType],
            expenseType: item['-reference'][item.expenseType] ? item['-reference'][item.expenseType]['-displayName'] : language.get('noExpenseType'),
            amount: this.formatterService.formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2)),
            currency: item.expenseItemAmtPaid.split(' ')[0],
            currencyAmount: isOverflown ? `${currencySymbol}${this.commonService.shortenAmountString(parseFloat((item.expenseItemAmtPaid).split(' ')[1]), currencySymbol, true)}` : `${currencySymbol}${this.formatterService.formatAmount(parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2))}`,
            currencyAmountDecimal: isOverflown ? '' : `.${parseFloat((item.expenseItemAmtPaid).split(' ')[1]).toFixed(2).split('.')[1]}`,
            expenseStatus: 'good-text', // good-text, error-text, waiting-text
            isOverflown: isOverflown
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