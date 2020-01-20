import { Component, ViewChild, ViewChildren, QueryList, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { ILanguage } from "lime";
import { SohoContextualActionPanelRef, SohoToastService, SohoBusyIndicatorDirective, SohoInputValidateDirective, SohoModalDialogService } from "@infor/sohoxi-angular";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITicket } from "./ticket";
import { IAssignee } from "./assignee";
import { IContact } from "./contact";
import { IDepartment } from "./department";

import { DataService } from "./data.service";
import { SortFilterService } from "./sort-filter.service";

interface IMyLanguage extends ILanguage {
	widgetText?: string;
}

@Component({
    template: `
        <div class="{{ !isMobileView ? 'create-ticket-workspace' : ''"
        soho-busyindicator
        text="Loading..."
        blockUI="true"
        displayDelay="0">
            <form [formGroup]="createTicketForm">
                <div class="row create-ticket-title">
                    <div class="twelve columns">
                        <h3>Requestor Information</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="six columns">
                        <div class="field">
                            <label soho-label for="contacts_lu">Contact Name<span class="required-field">*</span></label>
                            <input soho-lookup
                            [columns]="contactColumns"
                            [dataset]="contactNameList"
                            [editable]="false"
                            field="DerFirstNameLastName"
                            name="contacts_lu"
                            [(ngModel)]="selectedContact.DerFirstNameLastName"
                            (change)="setContact($event, 'contactName')"
                            data-validate="required" formControlName="contact" />
                        </div>
                        <div class="field">
                            <!--<label soho-label for="phoneNumbers_lu">Phone Number<span class="required-field">*</span></label>
                            <input soho-lookup
                            [columns]="phoneNumberColumns"
                            [dataset]="allContacts"
                            field="PrimaryPhoneNumber"
                            name="phoneNumbers_lu"
                            [(ngModel)]="selectedContact.PrimaryPhoneNumber"
                            (change)="setContact($event)"
                            data-validate="required" formControlName="phoneNumber" />-->

                            <label soho-label for="phoneNumbers_tb">Phone Number<span class="required-field">*</span></label>
                            <input
                            name="phoneNumbers_tb"
                            [(ngModel)]="selectedContact.PrimaryPhoneNumber"
                            (keydown)="setContact($event, 'phoneNumber')"
                            (change)="setContact($event, 'email')"
                            data-validate="required" formControlName="phoneNumber" />
                        </div>
                    </div>
                    <div class="six columns">
                        <div class="field">
                            <label soho-label for="accounts_lu">Account Name<span class="required-field">*</span></label>
                            <input soho-lookup
                            [columns]="accountColumns"
                            [dataset]="accountList"
                            [editable]="false"
                            field="AccountName"
                            name="accounts_lu"
                            [(ngModel)]="selectedContact.AccountName"
                            (change)="setContact($event, 'accountName')"
                            data-validate="required" formControlName="account" />
                        </div>
                        <div class="field">
                            <!--<label soho-label for="emails_lu">Email<span class="required-field">*</span></label>
                            <input soho-lookup
                            [columns]="emailColumns"
                            [dataset]="allContacts"
                            field="PrimaryEmail"
                            name="emails_lu"
                            [(ngModel)]="selectedContact.PrimaryEmail"
                            (change)="setContact($event)"
                            data-validate="required email" formControlName="email" />-->

                            <label soho-label for="emails_tb">Email<span class="required-field">*</span></label>
                            <input
                            name="emails_tb"
                            [(ngModel)]="selectedContact.PrimaryEmail"
                            (keydown)="setContact($event, 'email')"
                            (change)="setContact($event, 'email')"
                            data-validate="required email" formControlName="email" />
                        </div>
                    </div>
                </div>
                <!--<div class="row">
                    <div class="twelve columns">
                        <input soho-checkbox type="checkbox" id='addContactCB' name="checkbox1" [(ngModel)]="isAddContact" [ngModelOptions]="{standalone: true}">
                        <label soho-label for='addContactCB' [forCheckBox]="true">Add Contact</label>
                    </div>
                </div>-->
                <div class="info-separator"></div>
                <div class="row">
                    <div class="six columns">
                        <div>
                            <label for="urgency_dd" class="label">Urgency</label>
                            <select soho-dropdown name="urgency_dd" [(ngModel)]="urgency" [ngModelOptions]="{standalone: true}">
                                <option value="High">High</option>
                                <option value="MediumHigh">Medium - High</option>
                                <option value="Medium">Medium</option>
                                <option value="MediumLow">Medium - Low</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        <div>
                            <label for="severity_dd" class="label">Severity</label>
                            <select soho-dropdown name="severity_dd" [(ngModel)]="severity" [ngModelOptions]="{standalone: true}">
                                <option value="">Please Select</option>
                                <option value="Blocker">Blocker</option>
                                <option value="Critical">Critical</option>
                                <option value="Major">Major</option>
                                <option value="Minor">Minor</option>
                            </select>
                        </div>
                    </div>
                    <div class="six columns">
                        <div class="field">
                            <label for="required" class="label required">Summary</label>
                            <textarea soho-textarea name="required" data-validate="required" formControlName="summary" [(ngModel)]="summary"></textarea>
                        </div>
                    </div>
                </div>
                <div class="info-separator"></div>
                <div class="row">
                    <div class="six columns">
                        <label for="department_dd" class="label">Department</label>
                        <select soho-dropdown name="department_dd" [(ngModel)]="department" [ngModelOptions]="{standalone: true}">
                            <option value="">Please Select</option>
                            <option *ngFor="let department of allDepartments" value="{{ department.Name }}">{{ department.Name }}</option>
                        </select>
                    </div>
                    <div class="six columns">
                        <label soho-label for="assignedTo_lu">Assigned To</label>
                        <input soho-lookup
                        [columns]="assigneeColumns"
                        [dataset]="assigneeList"
                        [editable]="false"
                        field="CRMName"
                        name="assignedTo_lu"
                        (change)="setAssignee($event)"
                        [(ngModel)]="assignedToName"
                        [ngModelOptions]="{standalone: true}"/>
                    </div>
                </div>
                <div class="row">
                    <div class="twelve columns">
                        <input soho-checkbox type="checkbox" id="assignToMeCB" name="checkbox1" [(ngModel)]="isAssignToMe" [ngModelOptions]="{standalone: true}" (click)="setAssigneeToMe()">
                        <label soho-label for="assignToMeCB" [forCheckBox]="true">Assign To Me</label>
                    </div>
                </div>
                <div class="info-separator"></div>
                <div class="row">
                    <div class="twelve columns align-r">
                        <button soho-button="secondary" class="btn-secondary" (click)="openConfirmationModal()">Cancel</button>
                        <button soho-button="primary" class="btn-primary" (click)="addNewTicket()" [attr.disabled]="!isContactValid || !summary ? 'true' : null">Save</button>
                    </div>
                </div>
            </form>
        </div>
        <div #createCancelConfirmation></div>
	`,
    styles: [`
        .create-ticket-workspace { width: 600px; }

        .info-separator { width: calc(100% - 30px); border-bottom: 1px solid #bdbdbd; margin: 15px; }

        .required-field { color: red; }

        .align-r { text-align: right; }
    `]
})
export class CreateTicketWorkspaceComponent {
	language: IMyLanguage;

    @ViewChild(SohoBusyIndicatorDirective, { static: true })
    private busyIndicator: SohoBusyIndicatorDirective;
    @ViewChildren(SohoInputValidateDirective)
    validateDirectives: QueryList<SohoInputValidateDirective>;

    @ViewChild('ticketDetailsPlaceholder', { read: ViewContainerRef })
	ticketDetailsPlaceholder: ViewContainerRef;

    isMobileView: boolean = false;

    dialog: SohoContextualActionPanelRef<CreateTicketWorkspaceComponent>;

    currentUser: IAssignee;

    createTicketForm: FormGroup;

    contactNameList: IContact[] = [];
    accountList: IContact[] = [];
    assigneeList: IAssignee[] = [];

    urgency: string = "Medium";
    severity: string = "";
    summary: string = "";
    department: string = "";
    assignedToID: string;
    assignedToName: string;

    isAddContact: boolean;
    isAssignToMe: boolean;

    selectedContact: any = {};
    isContactValid: boolean = false;

    allAssignees: IAssignee[];
    allContacts: IContact[];
    allDepartments: IDepartment[];

    initCallback: any;
    handleError: any;

    contactColumns = [{
        id: 'DerFirstNameLastName',
        name: 'Name',
        field: 'DerFirstNameLastName',
        formatter: Soho.Formatters.Readonly
    }];

    accountColumns = [{
        id: 'AccountName',
        name: 'Account Name',
        field: 'AccountName',
        formatter: Soho.Formatters.Readonly
    }];

    phoneNumberColumns = [{
        id: 'PrimaryPhoneNumber',
        name: 'Phone Number',
        field: 'PrimaryPhoneNumber',
        formatter: Soho.Formatters.Readonly
    }];

    emailColumns = [{
        id: 'PrimaryEmail',
        name: 'Email',
        field: 'PrimaryEmail',
        formatter: Soho.Formatters.Readonly
    }];

    assigneeColumns = [{
        id: 'CRMName',
        name: 'Name',
        field: 'CRMName',
        formatter: Soho.Formatters.Readonly
    }];

    constructor(private dataService: DataService, private toastService: SohoToastService, private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef, private modalService: SohoModalDialogService, private sortFilterService: SortFilterService) {
        this.createForm();
    }

    createForm() {
        this.createTicketForm = this.formBuilder.group({
            contact: [this.selectedContact.DerFirstNameLastName, [Validators.required]],
            phoneNumber: [this.selectedContact.PrimaryTicketContactPhoneNumber, [Validators.required]],
            account: [this.selectedContact.AccountName, [Validators.required]],
            email: [this.selectedContact.PrimaryEmail, [Validators.required]],
            summary: [this.summary, [Validators.required]]
        });
    }

    addNewTicket() {
        this.busyIndicator.activated = true;

        const newTicket: ITicket = {
            DerPrimaryFormattedContactName: this.selectedContact.DerFirstNameLastName,
            PrimaryContactID: this.selectedContact.ID,
            AccountName: this.selectedContact.AccountName,
            AccountID: this.selectedContact.AccountID,
            PrimaryTicketContactPhoneNumber: this.selectedContact.PrimaryPhoneNumber,
            PrimaryTicketContactEmail: this.selectedContact.PrimaryEmail,
            Urgency: this.urgency,
            Severity: this.severity,
            Summary: this.summary,
            AssignedToID: this.assignedToID,
            AssignedToName: this.assignedToName,
            DerFormattedContactPhoneNumber: null,
            TicketNumber: null,
            UrgencyClass: null,
            UrgencyLevel: null,
            IsFiltered: false,
            IsHidden: false,
            DerIsManagedByCurrentUser: null,
            Issue: null,
            ID: null,
            ItemID: null,
            DaysOpen: null,
            Area: null,
            DateNeeded: null,
            Description: null,
            StatusDateLastUpdated: null,
            SeverityLevel: null,
            Category: null,
            Status: null,
            Type: null,
            PrimaryTicketContactID: null,
            IsDue: false,
            PendingReason: null,
            SolvedReason: null
        }

        this.dataService.postTicket(newTicket, ["AccountID", "PrimaryContactID", "PrimaryTicketContactPhoneNumber", "PrimaryTicketContactEmail", "Urgency", "Summary", "Severity", "AssignedToID", "AssignedToName"])
        .subscribe((response) => {
            this.dialog.close();

            this.toastService.show({
                title: 'New Ticket',
                message: `Ticket was successfully created.`,
                timeout: 4000
            });

            this.initCallback();
        }, (error) => { this.handleError(error, 'Unable to create ticket') });
    }

    setContact(e: any, changeMade?: string) {
        if (e && e[0]) {
            this.selectedContact = {
                AccountName: e[0].data.AccountName,
                AccountID: e[0].data.AccountID,
                DerFirstNameLastName: e[0].data.DerFirstNameLastName,
                ID: e[0].data.ID,
                PrimaryPhoneNumber: e[0].data.PrimaryPhoneNumber,
                PrimaryEmail: e[0].data.PrimaryEmail
            } as IContact;

            if(!this.selectedContact.DerFirstNameLastName || !this.selectedContact.AccountName || !this.selectedContact.PrimaryPhoneNumber || !this.selectedContact.PrimaryEmail) {
                this.isContactValid = false;
            } else {
                this.isContactValid = true;
            }

            this.validateDirectives.forEach(item => {
                item.validate(e);
            });
        } else if (changeMade == 'phoneNumber' || changeMade == 'email') {
            if(!this.selectedContact.DerFirstNameLastName || !this.selectedContact.AccountName || !this.selectedContact.PrimaryPhoneNumber || !this.selectedContact.PrimaryEmail) {
                this.isContactValid = false;
            } else {
                this.isContactValid = true;
            }

            this.validateDirectives.forEach(item => {
                item.validate(e);
            });
        }
    }

    setAssignee(e: any) {
        if (e && e[0] && e[0].data) {
            this.assignedToID = e[0].data.CRMUserID;
            this.assignedToName = e[0].data.CRMName;

            if(this.assignedToID != this.currentUser.CRMUserID) {
                this.isAssignToMe = false;
            } else {
                this.isAssignToMe = true;
            }
        }
    }

    setAssigneeToMe() {
        if (this.isAssignToMe) {
            this.assignedToID = "";
            this.assignedToName = "";
        } else {
            this.assignedToID = this.currentUser.CRMUserID;
            this.assignedToName = this.currentUser.CRMName;
        }
    }

    closeWorkspace() {
        this.dialog.close();
    }

    openConfirmationModal() {
        if (this.selectedContact.DerFirstNameLastName || this.selectedContact.PrimaryTicketContactPhoneNumber || this.selectedContact.AccountName || this.selectedContact.PrimaryEmail ||
            this.urgency !== 'Medium' || this.severity || this.summary || this.department || this.assignedToID || this.assignedToName || this.isAddContact || this.isAssignToMe) {
            const dialogRef = this.modalService
            .message('<span class="text-base">Your ticket will be canceled and unsaved work will not be saved.</span>')
            .buttons(
            [
            { text: 'No', click: () => { dialogRef.close(); } },
            { text: 'Yes', click: () => {
                    dialogRef.close();
                    this.dialog.close();
                }, isDefault: true
            }
            ])
            .title('Cancel Ticket?')
            .open();
        } else {
            this.dialog.close();
        }
    }

    setWorkspaceData() {
        this.assigneeList = this.sortFilterService.trimEmptyField(this.allAssignees, "CRMName");
        this.contactNameList = this.sortFilterService.trimEmptyField(this.allContacts, "DerFirstNameLastName");
        this.accountList = this.sortFilterService.trimDuplicateField(this.allContacts, "AccountName");
    }
}