import { Component, ViewChild } from "@angular/core";
import { ILanguage } from "lime";
import { SohoContextualActionPanelRef, SohoPopDownDirective, SohoToastService, SohoBusyIndicatorDirective, SohoModalDialogService } from "@infor/sohoxi-angular";
import { ITicket } from "./ticket";
import { IAssignee } from "./assignee";

import { DataService } from "./data.service";
import { SortFilterService } from "./sort-filter.service";

interface IMyLanguage extends ILanguage {
	widgetText?: string;
}

@Component({
    template: `
        <div class="{{ !isMobileView ? 'ticket-detail-workspace' : '' }}"
        soho-busyindicator
        text="Loading..."
        blockUI="true"
        displayDelay="0">
            <div class="ticket-detail-header header-section">
                <div class="ticket-detail-top-info">
                    <div class="left-section">
                        <div class="urgency-bar-container {{ ticket.UrgencyClass }}">
                            <div class="urgency-bar"></div>
                            <div class="urgency-bar"></div>
                            <div class="urgency-bar"></div>
                            <div class="urgency-bar"></div>
                            <div class="urgency-bar"></div>
                            <div class="text-small urgency-bar-label">{{ ticket.Urgency }}</div>
                        </div>
                    </div>
                    <div class="right-section">
                        <div [hidden]="!ticket.AssignedToID || ticket.Status === 'Solved' || ticket.AssignedToID != currentUser.CRMUserID">
                            <button soho-button="secondary" soho-popdown [keepOpen]="true" #markAsPopDown>Mark As</button>
                            <soho-popdown-contents class="markas-popdown">
                                <div class="widget">
                                    <div class="widget-header">
                                        <h2 class="widget-title">Mark As</h2>
                                    </div>
                                    <div class="widget-content" style="overflow: hidden;">
                                        <div class="listview is-selectable" tabindex="-1" role="listbox" aria-label="Mark As">
                                            <ul role="presentation">
                                                <li tabindex="0" role="option" aria-posinset="1" aria-setsize="8">
                                                    <input soho-radiobutton
                                                    soho-trackdirty
                                                    id="optionPending" type="radio" name="ogMarkAs" value="1" checked
                                                    (click)="setStatus('Pending')" />
                                                    <label soho-label for="optionPending" [forRadioButton]="true">Pending</label>

                                                    <br>

                                                    <input soho-radiobutton
                                                    soho-trackdirty
                                                    id="optionSolved" type="radio" name="ogMarkAs" value="2"
                                                    (click)="setStatus('Solved')" />
                                                    <label soho-label for="optionSolved" [forRadioButton]="true">Solved</label>
                                                </li>
                                                <li role="option" aria-posinset="2" aria-setsize="8">
                                                    <div class="ticket-detail-modal-reason-block" (click)="fixDropdown()">
                                                        <div [hidden]="tmpModalStatus != 'Pending' && tmpModalStatus != ''">
                                                            <label for="pending_reason" class="label">Reason</label>
                                                            <select soho-dropdown name="pending_reason" [(ngModel)]="tmpModalPendingReason">
                                                                <option value="">Please Select</option>
                                                                <option value="Information from caller">Information from caller</option>
                                                                <option value="Information from another department">Information from another department</option>
                                                            </select>
                                                        </div>

                                                        <div [hidden]="tmpModalStatus != 'Solved'">
                                                            <label for="urgency_dd" class="label">Reason</label>
                                                            <select soho-dropdown name="urgency_dd" [(ngModel)]="tmpModalSolvedReason">
                                                                <option value="">Please Select</option>
                                                                <option value="Cancelled">Cancelled</option>
                                                                <option value="Credit/Dicount on Future Purchase">Credit/Dicount on Future Purchase</option>
                                                                <option value="Duplicate">Duplicate</option>
                                                                <option value="Full Refund">Full Refund</option>
                                                                <option value="Functions as Designed">Functions as Designed</option>
                                                                <option value="Partial Refund">Partial Refund</option>
                                                                <option value="Product Replaced">Product Replaced</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="ticket-detail-modal-buttonset">
                                        <button type="button" class="btn-modal-secondary" (click)="closePopdown()">Cancel</button>
                                        <button type="button" class="btn-modal-primary" (click)="applyChanges()">Apply</button>
                                    </div>
                                </div>
                            </soho-popdown-contents>
                        </div>
                        <div [hidden]="ticket.Status != 'Solved' || ticket.AssignedToID != currentUser.CRMUserID">
                            <button soho-button="primary" class="btn-primary" (click)="reopenTicket()">
                                Reopen
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row no-indent ticket-detail-next-header">
                    <div class="twelve columns">
                        <div class="text-secondary text-strong nowrap">
                            {{ ticket.TicketNumber }} {{ ticket.Type ? ": " + ticket.Type : "" }}
                        </div>
                        <div class="text-base">
                            {{ ticket.AccountName }}
                        </div>
                    </div>
                </div>
                <div class="row no-indent ticket-detail-next-header">
                    <div class="twelve columns text-small">
                        <div>
                            {{ ticket.Status === 'New' ? 'Unassigned' : ticket.Status }}
                        </div>
                        <div [hidden]="ticket.Status != 'New' || ticket.AssignedToID">
                            Created: {{ (ticket.StatusDateLastUpdated | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "N/A" }}
                        </div>
                        <div [hidden]="ticket.Status != 'Open' && !ticket.AssignedToID">
                            Opened: {{ (ticket.StatusDateLastUpdated | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "N/A" }}
                        </div>
                        <div [hidden]="ticket.Status != 'Pending'">
                            Reason: {{ ticket.PendingReason }}
                        </div>
                        <div [hidden]="ticket.Status != 'Solved'">
                            Reason: {{ ticket.SolvedReason }}
                        </div>
                    </div>
                </div>
            </div>
            <div class='detail-section ticket-detail-content'>
                <!--<div soho-tabs registerForEvents="activated" class="expense-report-tab-list">
                    <div soho-tab-list-container>
                        <ul soho-tab-list>
                            <li soho-tab selected="true"><a soho-tab-title tabId="ticket-detail-details">Details</a></li>
                            <li soho-tab><a soho-tab-title tabId="ticket-detail-activities">Activities</a></li>
                            <li soho-tab><a soho-tab-title tabId="ticket-detail-comments">Comments</a></li>
                        </ul>
                    </div>
                </div>
                <div soho-tab-panel-container>
                    <div soho-tab-panel tabId="ticket-detail-details">
                        <div class="row">
                            <div class="twelve columns info-block">
                                <div class="text-small text-descriptive">
                                    Summary
                                </div>
                                <div class="text-small text-descriptive" [hidden]="!ticket.Summary">
                                    {{ ticket.Summary || "N/A" }}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="four columns info-block">
                                <div class="text-small text-descriptive">
                                    <div [hidden]="!ticket.DerPrimaryFormattedContactName">
                                        <svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
                                            <use xlink:href="#icon-profile"></use>
                                        </svg>
                                        {{ ticket.DerPrimaryFormattedContactName }}
                                    </div>
                                </div>
                                <div class="text-small text-descriptive">
                                    <div [hidden]="!ticket.DerFormattedContactPhoneNumber">
                                        <svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
                                            <use xlink:href="#icon-phone"></use>
                                        </svg>
                                        {{ ticket.DerFormattedContactPhoneNumber }}
                                    </div>
                                </div>
                            </div>
                            <div class="six columns info-block" [hidden]="!ticket.PrimaryTicketContactEmail">
                                <div class="text-small text-descriptive">
                                    <div [hidden]="!ticket.PrimaryTicketContactEmail">
                                        <svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
                                            <use xlink:href="#icon-mail"></use>
                                        </svg>
                                        <a href="#">{{ ticket.PrimaryTicketContactEmail }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="four columns info-block">
                                <div class="text-small text-descriptive">
                                    <div>
                                        <div>
                                            Date Needed
                                        </div>
                                        <div class="text-strong" [hidden]="!ticket.DateNeeded">
                                            {{ (ticket.DateNeeded | dateTimeFormat | date: "medium") || "N/A" }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="four columns info-block">
                                <div class="text-small text-descriptive">
                                    <div>
                                        Severity
                                    </div>
                                    <div class="text-base text-strong">
                                        {{ ticket.Severity }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="four columns info-block">
                                <div>
                                    <div class="text-small text-descriptive">
                                        Area
                                    </div>
                                    <div class="text-base text-descriptive" [hidden]="!ticket.Area">
                                        {{ ticket.Area || "N/A" }}
                                    </div>
                                </div>
                            </div>
                            <div class="four columns info-block">
                                <div>
                                    <div class="text-small text-descriptive">
                                        Category
                                    </div>
                                    <div class="text-base text-descriptive" [hidden]="!ticket.Category">
                                        {{ ticket.Category || "N/A" }}
                                    </div>
                                </div>
                            </div>
                            <div class="four columns info-block">
                                <div>
                                    <div class="text-small text-descriptive">
                                        Issue
                                    </div>
                                    <div class="text-small text-descriptive" [hidden]="!ticket.Issue">
                                        {{ ticket.Issue || "N/A" }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info-separator"></div>
                        <div class="row">
                            <div class="twelve columns info-block">
                                <div class="text-small text-descriptive">
                                    Description
                                </div>
                                <div class="text-small text-descriptive" [hidden]="!ticket.Description">
                                    {{ ticket.Description || "N/A" }}
                                </div>
                            </div>
                        </div>
                        <div class="info-separator"></div>
                        <div class="row">
                            <div class="twelve columns info-block">
                                <label soho-label for="assignee_lu">Assigned To</label>
                                <input soho-lookup
                                [columns]="assigneeColumns"
                                [dataset]="assigneeList"
                                (change)="setAssignee($event)"
                                field="CRMName"
                                name="assignee_lu" [(ngModel)]="tmpAssignedToName"
                                [attr.readonly]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID) ? 'true' : null" />
                            </div>
                        </div>
                        <div class="row" [hidden]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID)">
                            <div class="twelve columns info-block">
                                <input soho-checkbox type="checkbox" id="assignToMeCB" name="checkbox1" [(ngModel)]="isAssignToMe" (click)="setAssigneeToMe()">
                                <label soho-label for="assignToMeCB" [forCheckBox]="true">Assign To Me</label>
                            </div>
                        </div>
                        <div class="info-separator" [hidden]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID)"></div>
                        <div class="row" [hidden]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID)">
                            <div class="twelve columns info-block align-r">
                                <button soho-button="secondary" class="btn-secondary" (click)="openConfirmationModal()">Cancel</button>
                                <button soho-button="primary" class="btn-primary" (click)="updateTicket()">Save</button>
                            </div>
                        </div>
                    </div>
                    <div soho-tab-panel tabId="ticket-detail-activities">
                        activities
                    </div>
                    <div soho-tab-panel tabId="ticket-detail-comments">
                        comments
                    </div>
                </div>-->
                <div class="row margin-bottom-8">
                    <div class="twelve columns info-block">
                        <div class="text-small text-descriptive">
                            Summary
                        </div>
                        <div class="text-base" [hidden]="!ticket.Summary">
                            {{ ticket.Summary || "N/A" }}
                        </div>
                    </div>
                </div>
                <div class="info-separator"></div>
                <div class="row">
                    <div class="four columns info-block">
                        <div class="text-small text-descriptive">
                            <div [hidden]="!ticket.DerPrimaryFormattedContactName">
                                <svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-profile"></use>
                                </svg>
                                {{ ticket.DerPrimaryFormattedContactName }}
                            </div>
                        </div>
                        <div class="text-small text-descriptive">
                            <div [hidden]="!ticket.DerFormattedContactPhoneNumber">
                                <svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-phone"></use>
                                </svg>
                                {{ ticket.DerFormattedContactPhoneNumber }}
                            </div>
                        </div>
                    </div>
                    <div class="six columns info-block" [hidden]="!ticket.PrimaryTicketContactEmail">
                        <div class="text-small text-descriptive">
                            <div [hidden]="!ticket.PrimaryTicketContactEmail">
                                <svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-mail"></use>
                                </svg>
                                {{ ticket.PrimaryTicketContactEmail }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-separator"></div>
                <div class="row margin-bottom-24">
                    <div class="four columns info-block">
                        <div class="text-descriptive">
                            <div>
                                <div class="text-small">
                                    Date Needed
                                </div>
                                <div class="text-base text-strong" [hidden]="!ticket.DateNeeded">
                                    {{ (ticket.DateNeeded | dateTimeFormat | date: "medium") || "N/A" }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="four columns info-block">
                        <div class="text-small text-descriptive">
                            <div class="text-small">
                                Severity
                            </div>
                            <div class="text-base text-strong" [hidden]="!ticket.Severity">
                                {{ ticket.Severity }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row margin-bottom-8">
                    <div class="four columns info-block">
                        <div>
                            <div class="text-small text-descriptive">
                                Area
                            </div>
                            <div class="text-base text-descriptive" [hidden]="!ticket.Area">
                                {{ ticket.Area || "N/A" }}
                            </div>
                        </div>
                    </div>
                    <div class="four columns info-block">
                        <div>
                            <div class="text-small text-descriptive">
                                Category
                            </div>
                            <div class="text-base text-descriptive" [hidden]="!ticket.Category">
                                {{ ticket.Category || "N/A" }}
                            </div>
                        </div>
                    </div>
                    <!--<div class="four columns info-block">
                        <div>
                            <div class="text-small text-descriptive">
                                Issue
                            </div>
                            <div class="text-base text-descriptive" [hidden]="!ticket.Issue">
                                {{ ticket.Issue || "N/A" }}
                            </div>
                        </div>
                    </div>-->
                </div>
                <div class="info-separator"></div>
                <div class="row margin-bottom-8">
                    <div class="twelve columns info-block">
                        <div class="text-small text-descriptive">
                            Description
                        </div>
                        <div class="text-base text-descriptive" [hidden]="!ticket.Description">
                            {{ ticket.Description || "N/A" }}
                        </div>
                    </div>
                </div>
                <div class="info-separator"></div>
                <div class="row">
                    <div class="twelve columns info-block" [hidden]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID)">
                        <label soho-label for="assignee_lu">Assigned To</label>
                        <input soho-lookup
                        id="assigneeLU"
                        [columns]="assigneeColumns"
                        [dataset]="assigneeList"
                        [editable]="false"
                        (change)="setAssignee($event)"
                        field="CRMName"
                        name="assignee_lu" [(ngModel)]="tmpAssignedToName"
                        [attr.readonly]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID) ? 'true' : null" />
                    </div>

                    <div class="twelve columns info-block" [hidden]="ticket.Status !== 'Solved' && (!ticket.AssignedToID || ticket.AssignedToID === currentUser.CRMUserID)">
                        <label soho-label for="assignee_lu">Assigned To</label>
                        <input soho-lookup
                        id="assigneeLU"
                        [columns]="assigneeColumns"
                        [dataset]="assigneeList"
                        (change)="setAssignee($event)"
                        field="CRMName"
                        name="assignee_lu" [(ngModel)]="tmpAssignedToName"
                        [attr.readonly]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID) ? 'true' : null" />
                    </div>
                </div>
                <div class="row" [hidden]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID)">
                    <div class="twelve columns info-block">
                        <input soho-checkbox type="checkbox" id="assignToMeCB" name="checkbox1" [(ngModel)]="isAssignToMe" (click)="setAssigneeToMe()">
                        <label soho-label for="assignToMeCB" [forCheckBox]="true">Assign To Me</label>
                    </div>
                </div>
                <div class="info-separator-full" [hidden]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID)"></div>
                <div class="row" [hidden]="ticket.Status === 'Solved' || (ticket.AssignedToID && ticket.AssignedToID != currentUser.CRMUserID)">
                    <div class="twelve columns info-block align-r">
                        <button soho-button="secondary" class="btn-secondary" (click)="openConfirmationModal()">Cancel</button>
                        <button soho-button="primary" class="btn-primary" (click)="updateTicket()"  [attr.disabled]="!tmpStatus && tmpAssignedToID == ticket.AssignedToID ? 'true' : null">Save</button>
                    </div>
                </div>
            </div>
        </div>
	`,
    styles: [`
        .ticket-detail-workspace { width: 600px; }
        .ticket-detail-header { overflow: hidden; position: relative; padding: 20px 20px 24px 20px; }
        .ticket-detail-content { padding-top: 16px; }
        .ticket-detail-top-info { position: absolute; top: 20px; width: calc(100% - 21px); }
		.ticket-detail-top-info > .left-section { float: left; }
		.ticket-detail-top-info > .right-section { float: right; padding-right: 20px; }

        .urgency-bar-container > div { display: inline-block; font-size: 11px; }
        .urgency-bar { background-color: transparent; border: 1px solid #888B94; height: 6px; width: 6px; margin-right: 2px; }
        .urgency-bar-label { padding-left: 5px; }

		.urgency-bar-container.h > .urgency-bar { background-color: #fb3e47; border: none; }

		.urgency-bar-container.mh > .urgency-bar:nth-child(1),
		.urgency-bar-container.mh > .urgency-bar:nth-child(2),
		.urgency-bar-container.mh > .urgency-bar:nth-child(3),
		.urgency-bar-container.mh > .urgency-bar:nth-child(4) { background-color: #f6600c; border: none; }

		.urgency-bar-container.m > .urgency-bar:nth-child(1),
		.urgency-bar-container.m > .urgency-bar:nth-child(2),
		.urgency-bar-container.m > .urgency-bar:nth-child(3) { background-color: #ff8e00; border: none; }

		.urgency-bar-container.ml > .urgency-bar:nth-child(1),
		.urgency-bar-container.ml > .urgency-bar:nth-child(2) { background-color: #ffd600; border: none; }

		.urgency-bar-container.l > .urgency-bar:first-child { background-color: #54a1d3; border: none; }

        .ticket-detail-modal-buttonset { border-top: 1px solid #bdbdbd; text-align: center; width: 100%; }
        .ticket-detail-modal-buttonset > button { display: inline-block; height: 46px; line-height: 46px; width: 50%; margin-right: 0px; }
        .ticket-detail-modal-buttonset > button.btn-modal-secondary { border-right: 1px solid #bdbdbd; color: #5c5c5c; }
        .ticket-detail-modal-buttonset > button.btn-modal-primary { color: #2578a9; }
        .ticket-detail-modal-reason-block { height: 70px; }

        .ticket-detail-next-header { margin-top: 24px; margin-bottom: 0px !important; }

        .info-block > div { line-height: 25px; }
        .info-icon { height: 14px !important; top: 2px; }
        .info-separator { border-bottom: 1px solid #dedede; margin: 16px 0 16px 16px; }
        .info-separator-full { border-bottom: 1px solid #bdbdbd; margin: 16px 0 16px 0px; }

        .align-r { text-align: right; }
        .margin-bottom-24 { margin-bottom: 24px; }
        .margin-bottom-8 { margin-bottom: 8px; }
        .nowrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .markas-popdown { z-index: 1500 !important; }
        .ticket-detail-content > .row:last-child { margin-bottom: 0px !important; }
    `]
})
export class TicketDetailWorkspaceComponent {
	language: IMyLanguage;

    @ViewChild('markAsPopDown', { read: SohoPopDownDirective, static: true })
    private markAsPopDown: SohoPopDownDirective;
    @ViewChild(SohoBusyIndicatorDirective, { static: true })
    private busyIndicator: SohoBusyIndicatorDirective;

    isMobileView: boolean = false;

    dialog: SohoContextualActionPanelRef<TicketDetailWorkspaceComponent>;
    ticket: ITicket;
    allAssignees: IAssignee[];

    assigneeList: IAssignee[] = [];

    currentUser: IAssignee;

    oldStatus: string;
    oldAssignedToID: string;
    oldAssignedToName: string;
    tmpStatus: string = "";
    tmpAssignedToID: string;
    tmpAssignedToName: string;
    tmpPendingReason: string = "";
    tmpSolvedReason: string = "";

    tmpModalStatus: string = "Pending";
    tmpModalPendingReason: string = "";
    tmpModalSolvedReason: string = "";

    isAssignToMe: boolean = false;

    initCallback: any;
    handleError: any;

    assigneeColumns = [
        {
            id: 'CRMName',
            name: 'Name',
            field: 'CRMName',
            formatter: Soho.Formatters.Readonly
        }];

    constructor(private dataService: DataService, private toastService: SohoToastService, private modalService: SohoModalDialogService, private sortFilterService: SortFilterService) {}

    updateTicket() {
        this.busyIndicator.activated = true;

        let toastTitle = 'Ticket Assigned';
        let toastMessage = `Ticket ${this.ticket.TicketNumber} has been assigned to you.`;
        if (this.tmpStatus === "Open") {
            toastTitle = 'Status Changed';
            toastMessage = `Ticket ${this.ticket.TicketNumber} has been reopened.`;
        } else if (this.tmpStatus != "") {
            toastTitle = 'Ticket Status Changed';
            toastMessage = `Your changes to ticket ${this.ticket.TicketNumber} have been saved.`;
        } else if(this.tmpAssignedToID !== this.currentUser.CRMUserID) {
            toastTitle = 'Ticket Assignment Changed';
            toastMessage = `Ticket ${this.ticket.TicketNumber} has been assigned to ${this.tmpAssignedToName}.`;
        }

        this.ticket.Status = this.tmpStatus || this.ticket.Status;
        this.ticket.AssignedToID = this.tmpAssignedToID;
        this.ticket.AssignedToName = this.tmpAssignedToName;
        this.ticket.PendingReason = this.tmpPendingReason;
        this.ticket.SolvedReason = this.tmpSolvedReason;

        const fieldsToUpdate = ['AssignedToID', 'AssignedToName', 'Status'];

        if (this.ticket.Status === 'Pending') {
            fieldsToUpdate.push('PendingReason');
        } else if (this.ticket.Status === 'Solved') {
            fieldsToUpdate.push('SolvedReason');
        }

        this.dataService.putTicket(this.ticket, fieldsToUpdate)
        .subscribe((response) => {
            this.closeWorkspace();

            this.toastService.show({
                title: toastTitle,
                message: toastMessage,
                timeout: 4000
            });

            this.initCallback();
        }, (error) => { this.handleError(error, 'Unable to update ticket') });
    }

    setWorkspaceData() {
        this.oldStatus = this.ticket.Status;
        this.oldAssignedToID = this.ticket.AssignedToID;
        this.oldAssignedToName = this.ticket.AssignedToName;
        this.tmpAssignedToID = this.ticket.AssignedToID;
        this.tmpAssignedToName = this.ticket.AssignedToName;
        this.isAssignToMe = this.tmpAssignedToID === this.currentUser.CRMUserID;

        this.assigneeList = this.sortFilterService.trimEmptyField(this.allAssignees, "CRMName");
    }

    setStatus(status: string) {
        this.tmpModalStatus = status;
    }

    reopenTicket() {
        this.tmpStatus = "Open";

        this.updateTicket();
    }

    applyChanges() {
        this.closePopdown();

        this.tmpStatus = this.tmpModalStatus;
        this.tmpPendingReason = this.tmpModalPendingReason;
        this.tmpSolvedReason = this.tmpModalSolvedReason;
    }

    setAssignee(e: any) {
        if (e && e[0] && e[0].data) {
            this.tmpAssignedToID = e[0].data.CRMUserID;
            this.tmpAssignedToName = e[0].data.CRMName;

            if(this.tmpAssignedToID != this.currentUser.CRMUserID) {
                this.isAssignToMe = false;
            } else {
                this.isAssignToMe = true;
            }
        }
    }

    closePopdown() {
        this.markAsPopDown.close();
    }

    cancelChanges() {
        this.tmpModalStatus = this.tmpStatus;
        this.tmpModalPendingReason = this.tmpPendingReason;
        this.tmpModalSolvedReason = this.tmpSolvedReason;

        this.closePopdown();
    }

    closeWorkspace() {
        this.closePopdown();

        $(`.markas-popdown`).remove();

        this.dialog.close();
    }

    fixDropdown() {
        setTimeout(function () {
            const dropdownPanel = document.getElementById("dropdown-list");

            if (dropdownPanel) {
                dropdownPanel.setAttribute('style', `z-index: 10000`);
            }
        }, 500);
    }

    bringAssigneeToTop() {
        this.bringToTop(this.allAssignees, 'CRMUserID', this.ticket.AssignedToID);
    }

    bringToTop(array: any[], field: string, val: any) {
        array.sort((a: any, b: any) => {
            return (a[field] === val) ? -1 : b[field] === val ? 1 : 0;
        });
    }

    setAssigneeToMe() {
        if (this.isAssignToMe) {
            this.tmpAssignedToID = "";
            this.tmpAssignedToName = "";
        } else {
            this.tmpAssignedToID = this.currentUser.CRMUserID;
            this.tmpAssignedToName = this.currentUser.CRMName;
        }
    }

    openConfirmationModal() {
        if (this.ticket.AssignedToID != this.tmpAssignedToID || this.tmpStatus) {
            const dialogRef = this.modalService
            .message(`<span class="text-base">You have unsaved changes to ticket ${this.ticket.TicketNumber}. Are you sure you want to discard these changes?</span>`)
            .buttons(
            [
            { text: 'No', click: () => { dialogRef.close(); } },
            { text: 'Yes', click: () => {
                    dialogRef.close();

                    this.closeWorkspace();
                }, isDefault: true
            }
            ])
            .title('Close Workspace?')
            .open();
        } else {
            this.closeWorkspace();
        }
    }
}
