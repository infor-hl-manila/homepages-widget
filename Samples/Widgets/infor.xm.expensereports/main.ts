import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit, Inject, Injectable, ViewChild, ViewContainerRef} from "@angular/core";
import { IWidgetAction, IWidgetContext, IWidgetInstance, WidgetState, widgetContextInjectionToken, widgetInstanceInjectionToken, Log } from "lime";
import { HttpClientModule } from "@angular/common/http";
import { SohoListViewModule, SohoToolbarModule, SohoButtonModule, SohoMenuButtonModule, SohoPopupMenuModule, SohoPopDownModule, SohoContextualActionPanelRef, SohoContextualActionPanelService, SohoTabsModule, SohoEmptyMessageModule } from "@infor/sohoxi-angular";
import { ExpenseService } from "./expense.service";
import { NotificationItem } from "./notificationitem";
import { ExpenseReportItem } from "./expensereportitem";
import { CurrencyItem } from "./currencyitem";
import { ERWorkspaceComponent } from "./er-workspace.component";
import { IMyLanguage } from "./mylanguage";
import { CommonService } from "./common.service";

@Component({
	template: `
		<div [hidden]="!isShowNotification1">
			<div class="expense-report-notification text-small nobreak" [ngClass]="notificationList.length ? notificationList[0].notificationClass : ''">
				{{ notificationList[0].message }}
			</div>
			<button type="button" class="btn-icon expense-report-notification-close" (click)="closeNotification1()" [hidden]="isShowCover || (notificationList.length && notificationList[0].priorityLevel === 3)">
				<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
					<use xlink:href="#icon-close"></use>
				</svg>
			</button>
		</div>
		<div [hidden]='!isShowNotification2'>
			<div class='expense-report-notification text-small nobreak' [ngClass]='notificationList.length ? notificationList[1].notificationClass : ""'>
				{{ notificationList[1].message }}
			</div>
			<button type="button" class="btn-icon expense-report-notification-close" (click)="closeNotification2()" [hidden]="isShowCover || (notificationList.length && notificationList[1].priorityLevel === 3)">
				<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
					<use xlink:href="#icon-close"></use>
				</svg>
			</button>
		</div>
		<div [hidden]="!isShowBanner">
			<div class='expense-report-download text-small'>
				<a href='https://itunes.apple.com/us/app/infor-expense/id1401347288?mt=8' target='_blank'>{{ language.get("inforExpenseForiPhone") }}</a>
				{{ language.get("nowAvailable") }}
			</div>
			<button type="button" class="btn-icon expense-report-download-close" (click)="closeBanner()" [hidden]='isShowCover'>
				<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
					<use xlink:href="#icon-close"></use>
				</svg>
			</button>
		</div>
		<div class="expense-report-toolbar-container" [hidden]="!isShowToolBar">
			<div class="expense-report-toolbar-item">
				<button soho-menu-button class="btn-menu" (selected)="onFilterSelected($event)">
					<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
						<use xlink:href="#icon-filter"></use>
					</svg>
					{{ language.get("filterBy") }}
				</button>
				<ul class="popupmenu is-multiselectable">
					<li [ngClass]="{'is-checked': isFilterSelectAll}">
						<a filterType="select-all">{{ language.get("selectAll") }} {{ expenseReportData.length ? '(' + expenseReportData.length + ')' : '' }}</a>
					</li>
					<li [ngClass]="{'is-checked': isFilterRejected, 'is-disabled': isFilterRejectedDisabled}">
						<a filterType="rejected"> {{ language.get("rejected") }} {{ rejectedCount ? '(' + rejectedCount + ')' : '' }}</a>
					</li>
					<li [ngClass]="{'is-checked': isFilterNeedsReview}">
						<a filterType="needs-review">{{ language.get("needsReview") }}  {{ needsReviewCount ? '(' + needsReviewCount + ')' : '' }}</a>
					</li>
					<li [ngClass]="{'is-checked': isFilterDraft}">
						<a filterType="draft">{{ language.get("draft") }} {{ draftCount ? '(' + draftCount + ')' : '' }}</a>
					</li>
					<li [ngClass]="{'is-checked': isFilterInReview}">
						<a filterType="in-review">{{ language.get("inReview") }} {{ inReviewCount ? '(' + inReviewCount + ')' : '' }}</a>
					</li>
				</ul>

				<button soho-menu-button class="btn-menu" (selected)="onSortSelected($event)">{{ language.get("sortBy") }}</button>
				<ul class="popupmenu is-selectable">
					<li class='is-checked'>
						<a sortType="status">{{ language.get("status") }}</a>
					</li>
					<li>
						<a sortType="trackingNumber"> {{ language.get("trackingNumber") }}</a>
					</li>
					<li>
						<a sortType="dateCreated">{{ language.get("dateCreated") }}</a>
					</li>
					<li>
						<a sortType="reportName">{{ language.get("reportName") }}</a>
					</li>
					<li>
						<a sortType="purpose">{{ language.get("purpose") }}</a>
					</li>
					<li>
						<a sortType="amount">{{ language.get("amount") }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div soho-blockgrid class="expense-report-block-container" [hidden]="isShowCompletedState || isShowErrorState">
			<ng-container *ngFor=\"let item of expenseReportData\">
				<div class="block is-selectable expense-report-block" role="listitem" [ngClass]='blockWidth' *ngIf="!item.isFiltered" (click)="openDetails(item)">
					<div class="expense-report-block-status">
						<small class="alert-text" [ngClass]="item.statusClass"></small>
					</div>
					<div class="expense-report-block-header">
						<div class="expense-report-block-id text-small text-descriptive">
							{{ item.trackingNumber }}
						</div>
						<div class="expense-report-block-date text-small text-descriptive">
							{{ item.date }}
						</div>
					</div>
					<div class="text-base expense-report-block-report-name nobreak">{{ item.description }}</div>
					<div class="text-small text-descriptive expense-report-block-purpose">{{ item.purpose }}</div>
					<div class="text-small text-strong">{{ item.currency }}{{ item.amount }}</div>
					<div class="expense-report-due-indicator" [hidden]='!item.hasDue'>
						<svg class="icon icon-alert" focusable="false" aria-hidden="true" role="presentation"><use xlink:href="#icon-alert"></use></svg>
				 	</div>
				</div>
			</ng-container>
		</div>
		<div #panelPlaceholder></div>
		<div class="row er-empty-state" [hidden]="!isShowErrorState">
			<div class="twelve columns">
				<div soho-emptymessage
				[title]="language.get('somethingWentWrong')"
				[info]="language.get('checkConnection')"
				[icon]="'icon-empty-error-loading'"
				[color]="'azure'"
				></div>
			</div>
		</div>
		<div class="row er-empty-state" [hidden]="!isShowCompletedState">
			<div class="twelve columns">
				<div soho-emptymessage
				[title]="language.get('noData')"
				[info]="language.get('noExpenseReportsToView')"
				[icon]="'icon-empty-no-tasks'"
				[color]="'azure'"
				></div>
				<button soho-button="primary" (click)="createInWebApplication()">{{ language.get('createANewReport') }}</button>
			</div>
		</div>
		<div class='blank-cover' [hidden]='!isShowCover'></div>
		`,
	styles: [`
		.expense-report-notification { background-color: #f0f0f0; color: black; padding: 13px 16px 13px 22px; text-align: left; border-bottom: 1px solid #bdbdbd; }
		.expense-report-notification-approved { background-color: rgba(213, 246, 192, 0.8); }
		.expense-report-notification-rejected { background-color: rgba(244, 188, 188, 0.6); }
		.expense-report-notification-pending {background-color: rgba(251, 233, 191, 0.8); }
		.expense-report-notification-info { background-color: rgba(203, 235, 244, 0.6); }
		.expense-report-notification > a { color: black; font-weight: bold; }
		.expense-report-notification-close { background-color: transparent; position: absolute; border: none; height: 40px; min-width: 30px; padding: 0; right: 14px; top: 0px; width: 30px; }
		.expense-report-download { background-color: #f0f0f0; color: black; padding: 13px 16px 13px 22px; text-align: left; border-bottom: 1px solid #bdbdbd; }
		.expense-report-download > a { color: black; font-weight: bold; }
		.expense-report-download-close { background-color: transparent; position: absolute; border: none; height: 40px; min-width: 30px; padding: 0; right: 14px; top: 41px; width: 30px; }
		.expense-report-toolbar-container { background-color: #f0f0f0; border-bottom: 1px solid #bdbdbd; height: 40px; line-height: 40px; padding-left: 4px; }
		.expense-report-toolbar-item { display: inline-block; margin-right: 10px; }
		.expense-report-toolbar-list-item { padding: 0 0 0 15px; }
		.expense-report-toolbar-button { margin: 0; }
		.expense-report-status-count { float: right; margin-right: 5px; margin-top: -23px; }
		.expense-report-block-container { height: 196px; overflow-y: scroll; padding: 16px 0 0 16px; width: 100%; }
		.expense-report-block { border: 1px solid #D8D8D8; cursor: pointer; display: inline-block; height: auto; margin: 0 16px 16px 0; padding: 16px 16px 16px 29px; position: relative; }
		.expense-report-block-1-col { width: 309px; }
		.expense-report-block-2-col { width: 336px; }
		.expense-report-block-3-col { width: 345px; }
		.expense-report-block-4-col { width: 350px; }
		.expense-report-block-status { float: left; height: 97px; margin-left: -17px; padding-top: 44px; }
		.expense-report-status::before { margin-top: 1px; }
		.expense-report-status-rejected::before { background-color: #E84F4F; }
		.expense-report-status-needs-review::before { background-color: transparent; border: 1px solid #E84F4F; height: 7px; width: 7px; }
		.expense-report-status-approved::before { background-color: #80CE4D; }
		.expense-report-status-in-review::before { background-color: #368AC0; }
		.expense-report-status-draft::before { background-color: #999999; }
		.expense-report-block-id { float: left; margin-bottom: 16px; width: 50%; }
		.expense-report-block-date { float: right; margin-bottom: 16px; text-align: right; width: 50%; }
		.expense-report-block-report-name { margin-bottom: 8px; width: 100% }
		.expense-report-block-purpose { margin-bottom: 16px; }
		.expense-report-due-indicator { position: absolute; top: 45px; right: 16px; }
		.er-is-filtered { color: #368ac0 !important; }
		.er-empty-state { text-align: center; }
		.nobreak { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
		.blank-cover { background-color: white; height: calc(100% - 50px); left: 0; top: 50px; position: absolute; width: 100%; }
		`]
})

@Injectable()
export class ExpenseReportComponent implements OnInit {
	language: IMyLanguage;

	@ViewChild('panelPlaceholder', { read: ViewContainerRef, static: true })
	panelPlaceholder: ViewContainerRef;

	@ViewChild(ERWorkspaceComponent, { static: true }) dialog: ERWorkspaceComponent;

	currencies: CurrencyItem[] = [];
	daysBeforeDue: number = 23; // 1 week before 1month
	expenseReportData: ExpenseReportItem[] = [];
	isShowNotification1: boolean = false;
	isShowNotification2: boolean = false;
	isShowBanner: boolean = true;
	isShowToolBar: boolean = true;
	isShowCover: boolean = true;
	isShowCompletedState: boolean = false;
	isShowErrorState: boolean = false;
	blockWidth: string = '';
	isFilterSelectAll: boolean = true;
	isFilterRejected: boolean = true;
	isFilterNeedsReview: boolean = true;
	isFilterApproved: boolean = true;
	isFilterInReview: boolean = true;
	isFilterDraft: boolean = true;
	isFilterRejectedDisabled: boolean = false;
	sortType: string = 'status';
	panelRef: SohoContextualActionPanelRef<ERWorkspaceComponent> = null;
	previousExpenseReportData: ExpenseReportItem[];
	pollingInterval: number = 600000; // 10mins default
	isUpdateCheckerStarted: boolean = false;
	notificationList: NotificationItem[] = [
		new NotificationItem({}),
		new NotificationItem({})
	];
	isInitialLoad: boolean = true;
	rejectedCount: number = 0;
	needsReviewCount: number = 0;
	approvedCount: number = 0;
	inReviewCount: number = 0;
	draftCount: number = 0;
	isMobileView: boolean = false;
	pollingObj: number = 0;
	logPrefix: string = '[infor.xm.myexpensereports]';
	userId: any;

	constructor(
		@Inject(widgetContextInjectionToken) private readonly widgetContext: IWidgetContext,
		@Inject(widgetInstanceInjectionToken) private readonly widgetInstance: IWidgetInstance,
		private sohoModalDialogService: SohoContextualActionPanelService,
		private dataService: ExpenseService,
		private commonService: CommonService) {
			this.dataService.init(widgetContext);
		}

	ngOnInit() {
		const _this = this;

		this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;

		this.recomputeSize();

		// Create new report
		this.widgetInstance.actions[0].execute = () => {
			_this.createInWebApplication();
		};

		// Launch XM Web App
		this.widgetInstance.actions[1].execute = () => {
			_this.launchXMWebApp();
		};

		// View in iPhone
		this.widgetInstance.actions[2].execute = () => {
			_this.viewIniPhone();
		};

		this.widgetInstance.activated = () => {
			if (!this.isInitialLoad) {
				this.startUpdateChecker();
			}
		};

		this.widgetInstance.deactivated = () => {
			this.stopUpdateChecker();
		}

		this.getData(false);

		this.language = this.widgetContext.getLanguage();
	}

	recomputeSize() {
		const element = this.widgetContext.getElement();
		const notif1Height = this.isShowNotification1 ? 41 : 0;
		const notif2Height = this.isShowNotification2 ? 41 : 0;
		const bannerHeight = this.isShowBanner ? 41 : 0;
		const toolbarHeight = this.isShowToolBar ? 41 : 0;

		if (element[0].children.length > 0) {
			const elementHeight = element[0].parentElement.className.indexOf('double-height') >= 0 ? 708 : 318;
			const blockgridContainer = element[0].children[0].children[4];
			const containerHeight = elementHeight - notif1Height - notif2Height - bannerHeight - toolbarHeight - 1;
			const notif2CloseBtn = element[0].children[0].children[1].children[1];
			const bannerCloseBtn = element[0].children[0].children[2].children[1];
			const errorState = element[0].children[0].children[6];
			const completedState = element[0].children[0].children[7];
			const errorStateHeight = 208;
			const completedStateHeight = 246;
			const isCol2 = element[0].parentElement.className.indexOf('double-width') >= 0;
			const isCol3 = element[0].parentElement.className.indexOf('triple-width') >= 0;
			const isCol4 = element[0].parentElement.className.indexOf('quad-width') >= 0;

			blockgridContainer.setAttribute('style', `height:${containerHeight - 1}px;`);

			if (isCol4) {
				this.blockWidth = 'expense-report-block-4-col';
			} else if (isCol3) {
				this.blockWidth = 'expense-report-block-3-col';
			} else if (isCol2) {
				this.blockWidth = 'expense-report-block-2-col';
			} else {
				this.blockWidth = 'expense-report-block-1-col';
			}

			if (this.isShowNotification1 && this.isShowNotification2) {
				bannerCloseBtn.setAttribute('style', 'top: 82px');
			} else if (this.isShowNotification1 || this.isShowNotification2) {
				bannerCloseBtn.setAttribute('style', 'top: 41px');
			} else {
				bannerCloseBtn.setAttribute('style', 'top: 0px');
			}

			if (this.isShowNotification1) {
				notif2CloseBtn.setAttribute('style', 'top: 41px');
			} else {
				notif2CloseBtn.setAttribute('style', 'top: 0px');
			}

			if (containerHeight > completedStateHeight) {
				completedState.setAttribute('style', `margin-top:${(containerHeight - completedStateHeight)/2}px`);
			}

			if (containerHeight > errorStateHeight) {
				errorState.setAttribute('style', `margin-top:${(containerHeight - errorStateHeight)/2}px`);
			}
		}
	};

	closeNotification1() {
		this.isShowNotification1 = false;

		this.recomputeSize();
	}

	closeNotification2() {
		this.isShowNotification2 = false;

		this.recomputeSize();
	}

	closeBanner() {
		this.isShowBanner = false;

		this.recomputeSize();
	};

	getData(isForce: boolean) {
		// Hide loader
		this.widgetContext.setState(WidgetState.busy);

		this.getCurrencies(isForce);
	}

	getCurrencies(isForce: boolean) {
		this.dataService.getCurrency().subscribe(response => {
			try {
				this.currencies = response;

				this.getExpenseReports(isForce);
			} catch (error) {
				this.handleError(error, 'Unable to get Currency Data');
			}
		}, (error) => {
			this.handleError(error, 'Unable to get Currency Data');
		});
	};

	getExpenseReports(isForce: boolean) {
		const _this = this;
		this.dataService.getExpenseReports(this.currencies, this.language, isForce).subscribe(response => {
			try {
				const tmpExpenseReportData: ExpenseReportItem[] = [];
				response.map(function (item) {
					tmpExpenseReportData.push(new ExpenseReportItem(item));
				});

				this.rejectedCount = 0;
				this.needsReviewCount = 0;
				this.draftCount = 0;
				this.inReviewCount = 0;
				this.approvedCount = 0;

				tmpExpenseReportData.map(function (item) {
					switch (item.statusLevel) {
						case 1:
							_this.rejectedCount++;
							break;

						case 2:
							_this.needsReviewCount++;
							break;

						case 3:
							_this.draftCount++;
							break;

						case 4:
							_this.inReviewCount++;
							break;

						case 5:
							_this.approvedCount++;
							break;
					}
				});

				this.previousExpenseReportData = this.expenseReportData.slice(0);
				this.expenseReportData = tmpExpenseReportData.slice(0);

				if (this.expenseReportData.length > 0) {
					this.getExpenseReportDetails(0);
				} else {
					this.generateNotifications();
				}

				if (!this.isUpdateCheckerStarted) {
					this.startUpdateChecker();
				}

				if (this.isInitialLoad) {
					this.isInitialLoad = false;
				}

				if (this.expenseReportData.length === 0) {
					this.isShowCompletedState = true;
					this.isShowToolBar = false;
					this.recomputeSize();
				} else {
					this.isShowCompletedState = false;
					this.isShowToolBar = true;
				}
			} catch (error) {
				this.handleError(error, 'Unable to get Expense Report Data');
			}
		}, (error) => {
			this.handleError(error, 'Unable to get Expense Report Data');
		});
	}

	getExpenseReportDetails(index: number) {
		const expenseReportItem = this.expenseReportData[index];
		this.dataService.getExpenseReportDetails(expenseReportItem.trackingNumber).subscribe(response => {
			try {
				const expenseReportDetail = response.data as any;
				const isoCode = expenseReportDetail['-expenseReport']['totalExpense'].split(' ')[0];
				const newExpenseReportDetail = this.dataService.getNewExpenseReportDetailItem(expenseReportItem, expenseReportDetail, this.currencies, isoCode, this.language)

				expenseReportItem.expenseReportDetail = newExpenseReportDetail;

				if (index === this.expenseReportData.length - 1) {
					this.generateNotifications();
				} else {
					this.getExpenseReportDetails(index + 1);
				}
			} catch (error) {
				this.handleError(error, 'Unable to get Expense Report Detail Data');
			}
		}, (error) => {
			this.handleError(error, 'Unable to get Expense Report Detail Data');
		});
	}

	onFilterSelected(event: any) {
		const nodeValue = event.args[0].attributes['filtertype'].nodeValue;
		if (nodeValue === 'rejected') {
			this.isFilterRejected = !this.isFilterRejected;
			this.isFilterSelectAll = false;
		}

		if (nodeValue === 'needs-review') {
			this.isFilterNeedsReview = !this.isFilterNeedsReview;
			this.isFilterSelectAll = false;
		}

		if (nodeValue === 'approved') {
			this.isFilterApproved = !this.isFilterApproved;
			this.isFilterSelectAll = false;
		}

		if (nodeValue === 'in-review') {
			this.isFilterInReview = !this.isFilterInReview;
			this.isFilterSelectAll = false;
		}

		if (nodeValue === 'draft') {
			this.isFilterDraft = !this.isFilterDraft;
			this.isFilterSelectAll = false;
		}

		if (nodeValue === 'select-all') {
			this.isFilterSelectAll = !this.isFilterSelectAll;

			if (this.isFilterSelectAll) {
				this.isFilterRejected = true;
				this.isFilterNeedsReview = true;
				this.isFilterApproved = true;
				this.isFilterInReview = true;
				this.isFilterDraft = true;
			} else {
				this.isFilterRejected = false;
				this.isFilterNeedsReview = false;
				this.isFilterApproved = false;
				this.isFilterInReview = false;
				this.isFilterDraft = false;
			}
		}

		// Check select all if all selected
		if (this.isFilterRejected && this.isFilterNeedsReview  && this.isFilterInReview && this.isFilterDraft) {
			this.isFilterSelectAll = true;
		}

		this.filterReports();
	}

	filterReports() {
		const _this = this;
		this.expenseReportData.map(function (item: ExpenseReportItem) {
			item.isFiltered = true;

			if (_this.isFilterDraft && item.status === 'created') {
				item.isFiltered = false;
			}

			if (_this.isFilterRejected && item.status === 'rejected') {
				item.isFiltered = false;
			}

			if (_this.isFilterInReview && item.statusLevel === 4) {
				item.isFiltered = false;
			}

			if (_this.isFilterNeedsReview && item.status === 'returnedForMoreInfo') {
				item.isFiltered = false;
			}

			if (_this.isFilterSelectAll) {
				item.isFiltered = false;
			}
		});
	}

	onSortSelected(event: any) {
		if (this.sortType !== event.args[0].attributes['sortType'].nodeValue) {
			this.sortType = event.args[0].attributes['sortType'].nodeValue;
			this.sortReports();
		}
	}

	sortReports() {
		switch (this.sortType) {
			case 'status':
				this.expenseReportData.sort((a, b) => (a.trackingNumber.toLowerCase() > b.trackingNumber.toLowerCase()) ? 1 : -1);
				this.expenseReportData.sort((a, b) => (a.statusLevel > b.statusLevel) ? 1 : -1);
				break;

			case 'trackingNumber':
				this.expenseReportData.sort((a, b) => (a.trackingNumber.toLowerCase() > b.trackingNumber.toLowerCase()) ? 1 : -1);
				break;

			case 'dateCreated':
				this.expenseReportData.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1);
				break;
 
			case 'reportName':
				this.expenseReportData.sort((a, b) => (a.description.toLowerCase() > b.description.toLowerCase()) ? 1 : -1);
				break;

			case 'purpose':
				this.expenseReportData.sort((a, b) => (a.purpose.toLowerCase() > b.purpose.toLowerCase()) ? 1 : -1);
				break;

			case 'amount':
				this.expenseReportData.sort((a, b) => ((parseFloat(a.amount.replace(',', '')) > parseFloat(b.amount.replace(',', ''))) || b.amount === 'N/A') ? 1 : -1);
				break;

			default:
				break;
		}
	}

	openDetails(item: ExpenseReportItem) {
		this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;

		this.panelRef = this.sohoModalDialogService.contextualactionpanel(ERWorkspaceComponent, this.panelPlaceholder);
		this.panelRef.options({ centerTitle: true });
		this.panelRef.buttons([
			{
				text: this.language.get("close"),
				align: "left",
				click: () => { this.panelRef.close(); },
				cssClass: "btn"
			} as SohoContextualActionPanelButton, {
				text: item.statusName === "Approved" || item.statusName === "In Review" ? this.language.get("openInWeb") : this.language.get("editInWeb"),
				align: "right",
				click: () => {
					this.commonService.editInWebApplication(this.widgetContext, item.trackingNumber);
				},
				cssClass: this.isMobileView ? "btn-icon" : "btn",
				icon: '#icon-launch'
			} as SohoContextualActionPanelButton
		]);

		this.panelRef.apply(component => {});
		this.panelRef.title(item.trackingNumber)
		this.panelRef.componentPanel.language = this.language;
		this.panelRef.trigger('immediate');
		this.panelRef.initializeContent(true).open();

		function editInWebApplication(): void {
			this.commonService.editInWebApplication(this.widgetContext, item.expenseReportDetail.trackingNumber);
		}

		this.panelRef.componentPanel.selectedExpenseReportDetail = item.expenseReportDetail;
		this.panelRef.componentPanel.editInWebApplication = editInWebApplication;
		this.panelRef.componentPanel.isMobileView = this.isMobileView;
	}

	startUpdateChecker() {
		const _this = this;
		this.pollingObj = setInterval(function () {
			try {
				_this.isShowCover = true;
				_this.getData(true);
			} catch (error) {
				_this.handleError(error, 'Unable to get Updated Data');
			}
		}, _this.pollingInterval);

		this.isUpdateCheckerStarted = true;
	}

	stopUpdateChecker() {
		clearInterval(this.pollingObj);
		this.pollingObj = 0;
	}

	generateNotifications() {
		const rejectedList = [];
		const groupedList = [];
		const dueList = [];
		const approvedList = [];
		let dueCount = 0;

		for (let i = 0; i < this.previousExpenseReportData.length; i++) {
			const prevItem = this.previousExpenseReportData[i];

			for (let ii = 0; ii < this.expenseReportData.length; ii++) {
				const currItem = this.expenseReportData[ii];

				if (prevItem.trackingNumber === currItem.trackingNumber) {
					if (prevItem.statusName !== currItem.statusName && currItem.statusLevel === 5) {
						groupedList.push(currItem);
						approvedList.push(currItem);
					}
				}
			}
		}

		for (let i = 0; i < this.expenseReportData.length; i++) {
			const erItem = this.expenseReportData[i];

			if (erItem.statusLevel === 1 || erItem.statusLevel === 2) {
				rejectedList.push(erItem);
			}

			if (erItem.statusLevel === 3) {
				for (let ii = 0; ii < erItem.expenseReportDetail.expenseList.length; ii++) {
					const expenseItem = erItem.expenseReportDetail.expenseList[ii];

					const dateToday = new Date();
					const expenseDate = new Date(expenseItem.date);
					const diff = dateToday.getTime() - expenseDate.getTime();
					const diffDays = diff / (1000 * 60 * 60 * 24);

					if (diffDays >= this.daysBeforeDue) {
						dueList.push(erItem);
						groupedList.push(erItem);

						erItem.hasDue = true;

						dueCount++;
					}
				}
			}
		}

		// Rejected State
		this.notificationList = [];
		if (rejectedList.length > 0) {
			let rejectedMessage = '';
			let rejectedCount = 0;
			let needsReviewCount = 0;

			if (rejectedList.length > 1) {
				rejectedList.map(function (item) {
					if (item.statusLevel === 1) {
						rejectedCount++;
					} else {
						needsReviewCount++;
					}
				});

				if (rejectedCount > 1) {
					rejectedMessage += `${this.language.get('youHave')} ${rejectedCount} ${this.language.get('expenseReportsRejected')}`;
				} else if (rejectedCount === 1) {
					rejectedMessage += `${this.language.get('youHave')} ${rejectedCount} ${this.language.get('expenseReportRejected')}`;
				}

				if (rejectedCount > 0 && needsReviewCount > 0) {
					rejectedMessage += this.language.get('and');
				} else if (rejectedCount > 0) {
					rejectedMessage += '.';
				} else {
					rejectedMessage += `${this.language.get('youHave')} `;
				}

				if (needsReviewCount > 1) {
					rejectedMessage += `${needsReviewCount} ${this.language.get('expenseReportsNeedsReview')}`;
				} else if (needsReviewCount === 1) {
					rejectedMessage += `${needsReviewCount} ${this.language.get('expenseReportNeedsReview')}`;
				}
			} else {
				if (rejectedList[0].statusLevel === 1) {
					rejectedMessage = `${this.language.get('yourReport')} ${rejectedList[0].trackingNumber} ${this.language.get('hasBeenRejected')}`;
				} else {
					rejectedMessage = `${this.language.get('yourReport')} ${rejectedList[0].trackingNumber} ${this.language.get('needsReviewAppend')}`;
				}
			}

			this.notificationList.push(new NotificationItem({
				message: rejectedMessage,
				notificationClass: 'expense-report-notification-rejected',
				priorityLevel: 3
			}));
		}

		// Grouped State
		let approvedCount = 0;
		if (this.notificationList.length < 2 && groupedList.length > 1) {
			let groupedMessage = '';

			groupedList.map(function (item) {
				if (item.statusLevel === 5) {
					approvedCount++;
				}
			});

			if (approvedCount > 0) {
				if (approvedCount > 1) {
					groupedMessage += `${approvedCount} ${this.language.get('expenseReportsApproved')}`;
				} else {
					groupedMessage += `${approvedCount} ${this.language.get('expenseReportApproved')}`;
				}
			}

			if (approvedCount > 0 && dueCount > 0) {
				groupedMessage += ', ';
			}

			if (dueCount > 0) {
				if (dueCount > 1) {
					groupedMessage += `${this.language.get('youHave')} ${dueCount} ${this.language.get('expensesWillBeDueSoon')}`;
				} else {
					groupedMessage += `${dueCount} ${this.language.get('expenseWillBeDueSoon')}`;
				}
			}

			this.notificationList.push(new NotificationItem({
				message: groupedMessage,
				notificationClass: 'expense-report-notification-pending',
				priorityLevel: 2
			}));
		}

		// Due Expenses
		if (this.notificationList.length < 2 && dueList.length === 1 && groupedList.length <= 1) {
			if (dueCount === 1) {
				const dueMessage = `${this.language.get('youHaveAn')} ${this.language.get('expenseWillBeDueSoon')}`;

				this.notificationList.push(new NotificationItem({
					message: dueMessage,
					notificationClass: 'expense-report-notification-pending',
					priorityLevel: 2
				}));
			} else {
				const dueMessage = `${dueCount} ${this.language.get('expensesIn')} ${dueList[0].trackingNumber} ${this.language.get('willBeDueSoon')}`;

				this.notificationList.push(new NotificationItem({
					message: dueMessage,
					notificationClass: 'expense-report-notification-pending',
					priorityLevel: 2
				}));
			}
		}

		// Approved State
		if (this.notificationList.length < 2 && approvedList.length === 1 && groupedList.length <= 1) {
			const approvedMessage = `${approvedList[0].trackingNumber} ${this.language.get('hasBeenApproved')}`;

			this.notificationList.push(new NotificationItem({
				message: approvedMessage,
				notificationClass: 'expense-report-notification-approved',
				priorityLevel: 2
			}));
		}

		this.isShowNotification1 = this.notificationList.length > 0;
		this.isShowNotification2 = this.notificationList.length > 1;

		while(this.notificationList.length < 2) {
			this.notificationList.push(new NotificationItem({}));
		}

		this.filterReports();
		this.sortReports();
		this.recomputeSize();

		this.widgetContext.setState(WidgetState.running);

		// Hide cover
		this.isShowCover = false;
	}

	createInWebApplication() {
		this.commonService.createNewReportCoreProduct(this.widgetContext);
	}

	launchXMWebApp() {
		this.commonService.goToCoreProduct(this.widgetContext);
	}

	viewIniPhone() {
		this.commonService.goToAppleStore(this.widgetContext);
	}

	viewInAndroid() {
		this.commonService.goToPlayStore(this.widgetContext);
	}

	handleError(error: any, message: string) {
		this.isShowErrorState = true;
		this.isShowToolBar = false;

		Log.error(`${this.logPrefix} ${message} ${JSON.stringify(error)}`);

		this.recomputeSize();

		// Hide loader
		this.widgetContext.setState(WidgetState.running);

		// Hide cover
		this.isShowCover = false;
	}
}

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		SohoListViewModule,
		SohoToolbarModule,
		SohoButtonModule,
		SohoMenuButtonModule,
		SohoTabsModule,
		SohoPopupMenuModule,
		SohoPopDownModule,
		SohoEmptyMessageModule
	],
	declarations: [
		ExpenseReportComponent,
		ERWorkspaceComponent
	],
	entryComponents: [
		ExpenseReportComponent,
		ERWorkspaceComponent
	]
})
export class ExpenseReportModule {}

export const getActions = (context: IWidgetContext): IWidgetAction[] => {
	const language = context.getLanguage();
	return [{
		isPrimary: true,
		standardIconName: "#icon-add",
		text: language.get("createNewReport")
	}, {
		text: language.get("launchWebApp")
	}, {
		text: language.get("viewXMiPhone")
	}];
};
