import { CommonModule } from "@angular/common";
import { Component, Inject, NgModule, OnInit, Injectable, ViewChild } from "@angular/core";
import { IWidgetAction, IWidgetContext, IWidgetInstance, WidgetState, widgetContextInjectionToken, widgetInstanceInjectionToken, Log } from "lime";
import { HttpClientModule } from "@angular/common/http";
import { SohoListViewModule, SohoTooltipDirective, SohoTooltipModule, SohoEmptyMessageModule } from "@infor/sohoxi-angular";
import { ExpenseService } from "./expense.service";
import { CommonService } from "./common.service";
import { ExpenseItem } from "./expenseitem";
import { CurrencyItem } from "./currencyitem";
import { IMyLanguage } from "./mylanguage";

@Component({
	template: `
		<div [hidden]="!isShowBanner">
			<div class='expense-download text-small'>
			<a href='https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8' target='_blank'>{{ language.get("appStore") }}</a>
			 {{ language.get("downloadFrom") }}
			</div>
			<button type="button" class="btn-icon expense-download-close" (click)="closeBanner()" [hidden]='isShowCover'>
				<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
					<use xlink:href="#icon-close"></use>
				</svg>
			</button>
		</div>
		<div class='expense-content-container expense-content-container-{{widgetInstanceId}} row no-indent'>
			<div class='expense-ob-container {{leftPanelClass}}' [ngClass]='{hidden:(!expenseData.length && !dueExpenseData.length) || hasError}'>
				<div class='expense-ob'>
					<div class='expense-ob-label text-base text-descriptive'>{{ language.get("unsubmittedTotal") }}</div>
					<div class='expense-ob-value text-strong'>{{ currencySymbol }}{{ outstandingBalance }}</div>
					<div class='expense-ob-currency-label text-small text-descriptive'>{{currencyCode}}</div>
				</div>
				<div>
					<button class='btn-primary' (click)='startExpensing()'>
						{{ language.get("outstandingBalance") }}
					</button>
				</div>
			</div>
			<div class='expense-list {{rightPanelClass}}' [ngClass]='{\"hidden\":(!expenseData.length && !dueExpenseData.length) || hasError}'>
				<soho-listview [selectable]='false'>
					<li soho-listview-item class='expense-list-header'><span class='text-small text-descriptive'>{{ language.get('due') }} ({{ dueExpenseData.length }})</span></li>
					<li soho-listview-item class='expense-list-item' *ngFor=\"let item of dueExpenseData; let i = index\" [ngClass]='{\"expense-list-item-last\":i === dueExpenseData.length - 1}'>
						<div>
							<div class='white-block'></div>
							<div class='expense-panel-left'>
								<div #refEl class='nobreak expense-vendor text-base' [ngClass]='{\"expense-vendor-empty\":!item.hasVendor && !item.hasExpenseType}' soho-tooltip [title]='item.vendorName' placement='top'>
									<span>{{ item.vendorName }}</span>
								</div>
								<div class='expense-date nobreak text-small'>
									{{ item.formatDate }}
								</div>
							</div>
							<div class='expense-panel-right'>
								<span class='expense-amount'>{{ item.currencyAmount }}</span>
								<span class='expense-amount-decimal text-small'>{{ item.currencyAmountDecimal }}</span>
							</div>
						</div>
					</li>
					<li soho-listview-item class='expense-list-header'><span class='text-small text-descriptive'>{{ language.get('otherExpenses') }} ({{ expenseData.length }})</span></li>
					<li soho-listview-item class='expense-list-item' *ngFor=\"let item of expenseData\">
						<div>
							<div class='white-block'></div>
							<div class='expense-panel-left'>
								<div #refEl class='nobreak expense-vendor text-base' [ngClass]='{\"expense-vendor-empty\":!item.hasVendor && !item.hasExpenseType}' soho-tooltip [title]='item.vendorName' placement='top'>
									<span>{{ item.vendorName }}</span>
								</div>
								<div class='expense-date nobreak text-small'>
									{{ item.formatDate }}
								</div>
							</div>
							<div class='expense-panel-right'>
								<span class='expense-amount'>{{ item.currencyAmount }}</span>
								<span class='expense-amount-decimal text-small'>{{ item.currencyAmountDecimal }}</span>
							</div>
						</div>
					</li>
				</soho-listview>
			</div>
			<div class="row" [hidden]="(expenseData.length || dueExpenseData.length) || hasError">
				<div class="twelve columns er-empty-state">
					<div soho-emptymessage
					[title]="language.get('allSet')"
					[info]="language.get('noUnsubmittedRequest')"
					[icon]="'icon-empty-no-tasks'"
					[color]="'azure'"
					></div>
					<button soho-button="primary" (click)="startExpensing()">{{ language.get('createANewReport') }}</button>
				</div>
			</div>
			<div class="row" [hidden]="!hasError">
				<div class="twelve columns er-empty-state">
					<div soho-emptymessage
					[title]="language.get('somethingWentWrong')"
					[info]="language.get('checkConnectionTryAgain')"
					[icon]="'icon-empty-error-loading'"
					[color]="'azure'"
					></div>
				</div>
			</div>
			<div class='blank-cover' [hidden]='!isShowCover'></div>
			<div id='{{ strMeasurerId }}' class='expense-amount expense-panel-right string-measurer'></div>
		</div>`,
	styles: [`
		.expense-download { background-color: #f0f0f0; color: black; padding: 13px 16px 13px 22px; text-align: left; border-bottom: 1px solid #bdbdbd; }
		.expense-download > a { color: black; font-weight: bold; }
		.expense-download-close { background-color: #f0f0f0; position: absolute; border: none; height: 38px; min-width: 30px; padding: 0; right: 14px; top: 0px; width: 30px; }
		.expense-ob-container { display: inline-block; text-align: center; padding-left: 20px !important; }
		.expense-ob { font-size: 36px; margin-bottom: 16px; }
		.expense-ob-label { margin-bottom: 6px; }
		.expense-ob-value { margin-bottom: -12px; }
		.expense-ob-currency-label { border: 1px solid #979797; display: inline-block; padding: 5px; }
		.expense-currency-code { color:#BDBDBD; font-weight:bold; }
		.completed-state-container { color: #1A1A1A; letter-spacing: 0; margin: auto; text-align: center; width: 315px; }
		.error-state-container { color: #1A1A1A; letter-spacing: 0; margin: auto; text-align: center; width: 315px; }
		.blank-cover { background-color: white; height: calc(100% - 91px); left: 0; top: 91px; position: absolute; width: 100%; }
		.er-empty-state { padding-left: 10px !important; }
		.error-state-container > p:first-child { padding-bottom: 5px; }
		.error-state-container button { margin-top: 20px; }
		.completed-state { height: 70px; width: 70px; margin-bottom: 10px; }
		.expense-list { display: inline-block; float: right; width: 341px; }
		.expense-list-header { border-bottom: 1px solid #CBCBCB; border-top: 1px solid #CBCBCB; height: 32px; padding: 9px 16px 9px 13px; }
		.expense-list-item { border-bottom-color: #F0F0F0; height: 72px; padding: 16px 16px 16px 13px; }
		.expense-list-item-last { border-bottom: 0; }
		.expense-status-panel { display: inline-block; height: 32px; padding-top: 7px; vertical-align: bottom; width: 23px; }
		.good-text::before { background-color: #80ce4d; }
		.waiting-text::before { background-color: #bdbdbd; }
		.expense-panel-left { display: inline-block; height: 32px; max-width: 40%; width: auto; }
		.expense-date { color: #5C5C5C; letter-spacing: 0; margin-top: 6px; }
		.expense-vendor { color: #1A1A1A; letter-spacing: 0; }
		.expense-vendor-empty { color: #999999 }
		.expense-expense-type { color: #454545; letter-spacing:0; }
		.expense-expense-type-empty { color: #BDBDBD; }
		.expense-panel-right { display: inline-block; float: right; font-size: 20px; height: 32px; text-align: right; width: calc(60% - 36px); }
		.expense-amount { color: #1A1A1A; letter-spacing: 0; line-height: 38px; text-align: right; }
		.expense-amount-decimal { color: #999999; line-height: 16px; vertical-align: text-top; }
		.nobreak { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
		.white-block { border-bottom: 1px solid #ffffff; left: 0px; padding-top: 54px; position: absolute; width: 13px; z-index: 90; }
		.string-measurer { height: auto; left: 0; position: absolute; top: 100px; visibility: hidden; width: auto; white-space: nowrap; }
		.row { max-width: 1500px }
		.row:last-child { margin-bottom: 0 }
		li.is-selected .white-block { display: none; }
		li:focus .white-block { display: none; }
		.listview { overflow: hidden !important; cursor: default; }
		.listview li:hover { background-color: transparent !important; }
		li:first-child { border-top: 0; }
		.card-empty-info { color: #5C5C5C; }
		`]
})
@Injectable()
export class ExpenseComponent implements OnInit {
	language: IMyLanguage;

	@ViewChild(SohoTooltipDirective, {static: true})
	tooltip: SohoTooltipDirective;

	isShowBanner: boolean = true;
	isShowCover: boolean = true;
	isShowCSButton: boolean = true;
	errorObj: any = null;
	hasError: boolean = false;
	expenseData: ExpenseItem[] = [];
	dueExpenseData: ExpenseItem[] = [];
	isExpenseClear: boolean = true;
	outstandingBalance: string = '0.00';
	currencyCode: string = '';
	currencySymbol: string = '';
	currencies: CurrencyItem[] = [];
	leftPanelClass: string = 'twelve columns';
	rightPanelClass: string = 'twelve columns';
	strMeasurerId: string = '';
	widgetInstanceId: string = '';
	logPrefix: string = '[infor.xm.myexpenses]';

	constructor(
		@Inject(widgetContextInjectionToken) private readonly widgetContext: IWidgetContext,
		@Inject(widgetInstanceInjectionToken) private readonly widgetInstance: IWidgetInstance,
		private dataService: ExpenseService,
		private commonService: CommonService) {
			this.dataService.init(widgetContext);
		}

	ngOnInit() {
		const _this = this;

		this.recomputeSize(this.widgetContext.getElement());

		// Show loader
		this.widgetContext.setState(WidgetState.busy);

		// Download App
		this.widgetInstance.actions[0].execute = () => {
			_this.commonService.goToAppleStore(_this.widgetContext);
		};

		// Launch App
		this.widgetInstance.actions[1].execute = () => {
			_this.commonService.goToCoreProduct(_this.widgetContext);
		};

		this.language = this.widgetContext.getLanguage();

		this.widgetInstanceId = this.widgetContext.getWidgetInstanceId();
		this.strMeasurerId = `string-measurer-${this.widgetInstanceId}`;

		// Pickup data
		this.getData();
	}

	recomputeSize(element: any) {
		const bannerHeight = this.isShowBanner ? 41 : 0;
		const panelContainer = element[0].children[0].children[1];
		const leftPanel = panelContainer.children[0];
		const rightPanel = panelContainer.children[1];
		const completedStatePanel = panelContainer.children[2];
		const errorStatePanel = panelContainer.children[3];
		const containerWidth = element[0].offsetWidth;
		const containerHeight = element[0].offsetHeight - bannerHeight - 1; //deduct height of banner

		const listViewContainer = rightPanel.children[0].children[0];
		listViewContainer.setAttribute('style', 'overflow: hidden;');

		if (containerHeight > 400) {
			if (containerWidth > 400) {
				leftPanel.setAttribute('style', `padding-top:${263 + (bannerHeight ? 0 : 20)}px; padding-left: 20px;`);
			} else {
				leftPanel.setAttribute('style', 'padding-top:24px; padding-bottom:24px; padding-left: 10px !important;');
			}

			if (this.hasError) {
				errorStatePanel.setAttribute('style', `padding-top:${238 + (bannerHeight ? 0 : 20)}px`);
			} else {
				completedStatePanel.setAttribute('style', `padding-top:${238 + (bannerHeight ? 0 : 20)}px`);
			}
		} else {
			if (containerWidth > 400) {
				leftPanel.setAttribute('style', `padding-top:${68 + (bannerHeight ? 0 : 20)}px; padding-bottom:0px`);

				if (this.hasError) {
					errorStatePanel.setAttribute('style', `padding-top:${43 + (bannerHeight ? 0 : 20)}px; padding-right: 0`);
				} else {
					completedStatePanel.setAttribute('style', `padding-top:${43 + (bannerHeight ? 0 : 20)}px; padding-right: 0`);
				}
			} else {
				leftPanel.setAttribute('style', 'padding-top:24px; padding-bottom:24px; padding-left: 10px !important;');

				if (this.hasError) {
					errorStatePanel.setAttribute('style', `padding-top:${43 + (bannerHeight ? 0 : 20)}px; padding-right: 0`);
				} else {
					completedStatePanel.setAttribute('style', `padding-top:${43 + (bannerHeight ? 0 : 20)}px; padding-right: 0`);
				}
			}
		}

		if (!this.hasError) {
			if (containerWidth > 1200) {
				rightPanel.setAttribute('style', `height:${containerHeight}px; overflow-y:scroll; border-left:1px solid #CBCBCB; border-top:0`);
				this.leftPanelClass = 'three columns';
				this.rightPanelClass = 'nine columns';
			} else if (containerWidth > 800) {
				rightPanel.setAttribute('style', `height:${containerHeight}px; overflow-y:scroll; border-left:1px solid #CBCBCB; border-top:0`);
				this.leftPanelClass = 'four columns';
				this.rightPanelClass = 'eight columns';
			} else if (containerWidth > 400) {
				rightPanel.setAttribute('style', `height:${containerHeight}px; overflow-y:scroll; border-left:1px solid #CBCBCB; border-top:0`);
				this.leftPanelClass = 'six columns';
				this.rightPanelClass = 'six columns';
			} else {
				if (containerHeight > 400) {
					panelContainer.setAttribute('style', 'height:666px; overflow-y:scroll');
				} else {
					panelContainer.setAttribute('style', 'height:276px; overflow-y:scroll');
				}

				rightPanel.setAttribute('style', 'height:auto; overflow-y:hidden; width:100%; border-left:0; border-top:1px solid #CBCBCB;');
			}
		}

		if (!this.isShowBanner) {
			if (containerHeight > 400) {
				panelContainer.style.height = "708px";
			} else {
				panelContainer.style.height = "318px";
			}
		}
	};

	closeBanner() {
		this.isShowBanner = false;

		this.recomputeSize(this.widgetContext.getElement());
	};

	getData() {
		this.getCurrencies();
	}

	getCurrencies() {
		const _this = this;
		_this.dataService.getCurrency().subscribe(response => {
			try {
				_this.currencies = [];

				_this.currencies = response;

				_this.getExpenseData();
			} catch (error) {
				this.handleError(error, 'Unable to get Currency Data');
			}
		}, (error) => {
            this.handleError(error, 'Unable to get Currency Data');
        });
	}

	getExpenseData() {
		const _this = this;
		this.dataService.getExpenses(this.currencies, this.language).subscribe(response => {
			try {
				let outstandingBalance = 0;
				let currencyCode = '';
				this.expenseData = [];

				const dataset = response as ExpenseItem[];
				dataset.map(function (item) {
					// If more than 1 month: DUE
					if (new Date().getTime() - new Date(item.date).getTime() > 1000/*ms*/ * 60/*s*/ * 60/*min*/ * 24/*h*/ * 30/*days*/ * 1/*months*/) {
						_this.dueExpenseData.push(item);
					} else {
						_this.expenseData.push(item);
					}

					outstandingBalance += parseFloat(`${item.amount.replace(',', '')}${item.currencyAmountDecimal}`);
				});

				if (dataset.length > 0) {
					currencyCode = dataset[0].currency;
					this.currencySymbol = this.dataService.findCurrency(this.currencies, currencyCode).currencySymbol;
				}

				this.sortExpenses();

				this.outstandingBalance = this.commonService.shortenAmountString(outstandingBalance, this.currencySymbol, false);
				this.currencyCode = currencyCode;
				this.isExpenseClear = outstandingBalance === 0;

				// Hide loader
				this.widgetContext.setState(WidgetState.running);

				// Hide cover
				this.isShowCover = false;
			} catch (error) {
				this.handleError(error, 'Unable to get Expense Data');
			}
		}, (error) => {
			this.handleError(error, 'Unable to get Expense Data');
        });
	}

	sortExpenses() {
		this.dueExpenseData.sort((a, b) => (new Date(a.date) < new Date(b.date)) ? 1 : -1);
		this.expenseData.sort((a, b) => (new Date(a.date) < new Date(b.date)) ? 1 : -1);
	}

	startExpensing() {
		this.commonService.createNewReport(this.widgetContext);
	}

	handleError(error: any, message: string) {
		this.hasError = true;

		Log.error(`${this.logPrefix} ${message} ${JSON.stringify(error)}`);

		this.recomputeSize(this.widgetContext.getElement());

		// Hide loader
		this.widgetContext.setState(WidgetState.running);

		// Hide cover
		this.isShowCover = false;
	}
}

@NgModule({
	imports: [CommonModule, HttpClientModule, SohoListViewModule, SohoTooltipModule, SohoEmptyMessageModule],
	declarations: [ExpenseComponent],
	entryComponents: [ExpenseComponent]
})
export class ExpenseModule {
}

export const getActions = (context: IWidgetContext): IWidgetAction[] => {
	const language = context.getLanguage();
	return [{
		isSubmenu: false,
		text: language.get("downloadExpenseApp")
	}, {
		isPrimary: true,
		standardIconName: "#icon-launch",
		text: language.get("launchExpenseApp")
	}];
};
