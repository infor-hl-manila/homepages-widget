import { Component} from "@angular/core";
import { ILanguage } from "lime";
import { SohoContextualActionPanelRef } from "@infor/sohoxi-angular";
import { ExpenseReportDetail } from "./expensereportdetail";
import { CommonService } from "./common.service";

interface IMyLanguage extends ILanguage {
	widgetText?: string;
}

@Component({
	template: `
		<div [class.expense-report-workspace]="!isMobileView">
			<div class="expense-report-workspace-header header-section">
				<div class='expense-report-detail-header-row row no-indent'>
					<div class='twelve columns'>
						<div class="expense-report-workspace-status expense-report-workspace-header-row-left text-small">
							<small class="alert-text" [ngClass]='selectedExpenseReportDetail.statusClass'></small>
							{{ selectedExpenseReportDetail.statusName }}
						</div>
					</div>
				</div>
				<div class='expense-report-workspace-description expense-report-detail-header-row text-primary text-strong row no-indent'>
					<div class='twelve columns'>
						{{ selectedExpenseReportDetail.description }}
					</div>
				</div>
				<div class='expense-report-detail-header-row text-base row no-indent'>
					<div class='six columns bottom-15'>
						<span>{{ language.get('reportTotal') }}: </span><span class='text-strong'>{{ selectedExpenseReportDetail.currency }}{{ selectedExpenseReportDetail.amount }}</span>
					</div>
					<div class='six columns bottom-15'>
						<span>{{ selectedExpenseReportDetail.statusLevel === 3 ? language.get('dateCreated') : language.get('dateSubmitted') }}: </span><span>{{ selectedExpenseReportDetail.dateCreated }}</span>
					</div>
				</div>
				<div class='expense-report-detail-header-row text-base row no-bottom-margin no-indent'>
					<div class='six columns bottom-15'>
						<span>{{ language.get('trackingNumber') }}: </span><span>{{ selectedExpenseReportDetail.trackingNumber }}</span>
					</div>
					<div class='six columns bottom-15'>
						<span>{{ language.get('purpose') }}: </span><span>{{ selectedExpenseReportDetail.purpose }}</span>
					</div>
				</div>
			</div>
			<div class='expense-report-detail-tabs detail-section'>
				<div soho-tabs registerForEvents="activated" class="expense-report-tab-list">
					<div soho-tab-list-container>
						<ul soho-tab-list>
							<li soho-tab selected="true"><a soho-tab-title tabId="expense-report-detail-tab-summary">{{ language.get('summary') }}</a></li>
							<li soho-tab><a soho-tab-title tabId="expense-report-detail-tab-expenses">{{ language.get('expenses') }} ({{ selectedExpenseReportDetail.expenseList ? selectedExpenseReportDetail.expenseList.length : 0 }})</a></li>
							<li soho-tab><a soho-tab-title tabId="expense-report-detail-tab-myreceipts">{{ language.get('myReceipts') }} ({{ selectedExpenseReportDetail.receiptList ? selectedExpenseReportDetail.receiptList.length : 0 }})</a></li>
							<li soho-tab><a soho-tab-title tabId="expense-report-detail-tab-notes">{{ language.get('notes') }}</a></li>
						</ul>
					</div>
				</div>
				<div soho-tab-panel-container>
					<div soho-tab-panel tabId="expense-report-detail-tab-summary" class="expense-report-details-tab-panel side-padding">
						<div class='expense-report-timeline-header row no-indent'>
							<div class='text-primary twelve columns '>
								{{ language.get('financialOverview') }}
							</div>
							<div class='text-base text-descriptive expense-report-details-short-block row no-bottom-margin'>
								<div class='er-finance-info six columns'>
									<div>{{ language.get('dueEmployee') }}</div>
									<br />
									<div class="er-finance-info-value text-secondary text-default">{{ selectedExpenseReportDetail.personalAmount }}</div>
								</div>
								<div class='er-finance-info six columns'>
									<div>{{ language.get('dueCompany') }}</div>
									<br >
									<div class="er-finance-info-value text-secondary text-default">{{ selectedExpenseReportDetail.businessAmount }}</div>
								</div>
							</div>
						</div>
						<div class='expense-report-detail-divider'></div>
						<div class='expense-report-detail-timeline'>
							<div class='text-primary'>
								{{ language.get('docStatusDetails') }}
							</div>
							<div class="timeline">
								<div class="timeline-block">
									<div class="indicator-container">
										<div class="indicator complete"></div>
									</div>
									<div class="content">
										<div class="heading">Report Creation</div>
										<div class="sub-heading">{{ selectedExpenseReportDetail.creatorName }}</div>
									</div>
									<div class="date">
										<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
											<use xlink:href="#icon-datepicker"></use>
										</svg>
										<span>{{ selectedExpenseReportDetail.dateCreated }}</span>
									</div>
								</div>
								<div class="timeline-block">
									<div class="indicator-container">
										<div class="indicator processing"></div>
									</div>
									<div class="content">
										<div class="heading">{{ selectedExpenseReportDetail.activityName }}</div>
										<div class="sub-heading">{{ selectedExpenseReportDetail.activityOwner }}</div>
									</div>
									<div class="date">
										<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
										<use xlink:href="#icon-datepicker"></use>
										</svg>
										<span>{{ selectedExpenseReportDetail.dateModified }}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div soho-tab-panel tabId="expense-report-detail-tab-expenses" class="expense-report-details-tab-panel no-padding">
						<soho-listview [selectable]='false'>
							<li soho-listview-item class="expense-report-list-item" *ngFor="let item of selectedExpenseReportDetail.expenseList">
								<div>
									<div class='text-base'>
										{{ item.vendorName }}
									</div>
									<div class='text-small text-descriptive'>
										{{ item.date }}
									</div>
								</div>
								<div class='text-primary expense-report-detail-expense-amount'>
									{{ item.currency }}{{ item.wholeAmount }}<span class='expense-amount-decimal text-small'>{{ item.centsAmount }}</span>
								</div>
							</li>
						</soho-listview>
					</div>
					<div soho-tab-panel tabId="expense-report-detail-tab-myreceipts" class="expense-report-details-tab-panel">
						<div soho-blockgrid class="expense-report-detail-block-images">
							<ng-container>
								<div class="block is-selectable expense-report-block" role="listitem" *ngFor="let item of selectedExpenseReportDetail.receiptList">
									<img alt="{{ item.receiptId }}" [src]="item.receiptSource"/>
								</div>
							</ng-container>
						</div>
					</div>
					<div soho-tab-panel tabId="expense-report-detail-tab-notes" class="expense-report-details-tab-panel">
						<div soho-blockgrid class="expense-report-detail-notes" [hidden]="!selectedExpenseReportDetail.notes" *ngFor="let note of selectedExpenseReportDetail.notes">
							<div class='text-small'>
								<div class='er-block-label'>{{ language.get('date') }}</div>
								<!--<div>{{ language.get('author') }}</div>-->
							</div>
							<div class='text-base text-default'>
								<div class='er-block-value'>{{ note.date }}</div>
								<!--<div>{{ note.noteOwner }}</div>-->
							</div>
							<div class='text-base expense-report-detail-note-area'>
								{{ note.noteMessage }}
							</div>
							<div class='expense-report-detail-divider'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.expense-report-workspace { min-width: 700px; min-height: 456px; }
		.expense-report-workspace-header { color: #1A1A1A; padding: 24px; }
		.expense-report-workspace-header-row-left { float: left; width: 50%; }
		.expense-report-workspace-header-row-right { float: right; width: 50%; }
		.expense-report-workspace-description { margin-top: -6px; padding-bottom: 15px; }
		.expense-report-details-tab-panel.side-padding { padding-left: 24px; padding-right: 24px; }
		.expense-report-details-tab-panel.no-padding { padding-top: 0px; }
		.expense-report-list-item { border-bottom-color: #F0F0F0; height: 72px; padding: 22px 16px 16px 13px; }
		.expense-report-detail-header-row .bottom-15 { height: 26px; }
		.er-finance-info { padding-top: 20px !important }
		.er-finance-info-value { margin-top: -5px; }
		.expense-report-detail-timeline > div { padding-bottom: 24px; }
		.expense-report-detail-expense-amount { float: right; margin-top: -25px; }
		.expense-amount-decimal { color: #999999; line-height: 19px; vertical-align: text-top; }
		.expense-report-detail-block-images { padding: 0 24px 24px 24px; }
		.expense-report-detail-block-images > div { height: 150px; width: 150px; display: inline-block; float: left; margin-right: 20px; }
		.expense-report-detail-notes { padding: 0 24px 0 24px; }
		.expense-report-detail-note-area { color: #1A1A1A; margin-top: 24px; }
		.expense-report-detail-divider { margin: 24px 0 24px 0; height: 1px; background-color: #bdbdbd; }
		.expense-report-status::before { margin-top: 1px; }
		.expense-report-status-rejected::before { background-color: #E84F4F; }
		.expense-report-status-needs-review::before { background-color: transparent; border: 1px solid #E84F4F; height: 7px; width: 7px; }
		.expense-report-status-approved::before { background-color: #80CE4D; }
		.expense-report-status-in-review::before { background-color: #368AC0; }
		.expense-report-status-draft::before { background-color: #999999; }
		.no-bottom-margin { margin-bottom: 0 !important; }
	`]
})
export class ERWorkspaceComponent {
	language: IMyLanguage;

	dialog: SohoContextualActionPanelRef<ERWorkspaceComponent>;
	dialogParameter: string;
	selectedExpenseReportDetail: ExpenseReportDetail = new ExpenseReportDetail({});
	userName: string;
	editInWebApplication: any;
	isMobileView: boolean;
}
