var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@infor/sohoxi-angular", "@angular/forms", "./data.service", "./sort-filter.service"], function (require, exports, core_1, sohoxi_angular_1, forms_1, data_service_1, sort_filter_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CreateTicketWorkspaceComponent = /** @class */ (function () {
        function CreateTicketWorkspaceComponent(dataService, toastService, formBuilder, changeDetector, modalService, sortFilterService) {
            this.dataService = dataService;
            this.toastService = toastService;
            this.formBuilder = formBuilder;
            this.changeDetector = changeDetector;
            this.modalService = modalService;
            this.sortFilterService = sortFilterService;
            this.isMobileView = false;
            this.contactNameList = [];
            this.accountList = [];
            this.assigneeList = [];
            this.urgency = "Medium";
            this.severity = "";
            this.summary = "";
            this.department = "";
            this.selectedContact = {};
            this.isContactValid = false;
            this.contactColumns = [{
                    id: 'DerFirstNameLastName',
                    name: 'Name',
                    field: 'DerFirstNameLastName',
                    formatter: Soho.Formatters.Readonly
                }];
            this.accountColumns = [{
                    id: 'AccountName',
                    name: 'Account Name',
                    field: 'AccountName',
                    formatter: Soho.Formatters.Readonly
                }];
            this.phoneNumberColumns = [{
                    id: 'PrimaryPhoneNumber',
                    name: 'Phone Number',
                    field: 'PrimaryPhoneNumber',
                    formatter: Soho.Formatters.Readonly
                }];
            this.emailColumns = [{
                    id: 'PrimaryEmail',
                    name: 'Email',
                    field: 'PrimaryEmail',
                    formatter: Soho.Formatters.Readonly
                }];
            this.assigneeColumns = [{
                    id: 'CRMName',
                    name: 'Name',
                    field: 'CRMName',
                    formatter: Soho.Formatters.Readonly
                }];
            this.createForm();
        }
        CreateTicketWorkspaceComponent.prototype.createForm = function () {
            this.createTicketForm = this.formBuilder.group({
                contact: [this.selectedContact.DerFirstNameLastName, [forms_1.Validators.required]],
                phoneNumber: [this.selectedContact.PrimaryTicketContactPhoneNumber, [forms_1.Validators.required]],
                account: [this.selectedContact.AccountName, [forms_1.Validators.required]],
                email: [this.selectedContact.PrimaryEmail, [forms_1.Validators.required]],
                summary: [this.summary, [forms_1.Validators.required]]
            });
        };
        CreateTicketWorkspaceComponent.prototype.addNewTicket = function () {
            var _this = this;
            this.busyIndicator.activated = true;
            var newTicket = {
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
            };
            this.dataService.postTicket(newTicket, ["AccountID", "PrimaryContactID", "PrimaryTicketContactPhoneNumber", "PrimaryTicketContactEmail", "Urgency", "Summary", "Severity", "AssignedToID", "AssignedToName"])
                .subscribe(function (response) {
                _this.dialog.close();
                _this.toastService.show({
                    title: 'New Ticket',
                    message: "Ticket was successfully created.",
                    timeout: 4000
                });
                _this.initCallback();
            }, function (error) { _this.handleError(error, 'Unable to create ticket'); });
        };
        CreateTicketWorkspaceComponent.prototype.setContact = function (e, changeMade) {
            if (e && e[0]) {
                this.selectedContact = {
                    AccountName: e[0].data.AccountName,
                    AccountID: e[0].data.AccountID,
                    DerFirstNameLastName: e[0].data.DerFirstNameLastName,
                    ID: e[0].data.ID,
                    PrimaryPhoneNumber: e[0].data.PrimaryPhoneNumber,
                    PrimaryEmail: e[0].data.PrimaryEmail
                };
                if (!this.selectedContact.DerFirstNameLastName || !this.selectedContact.AccountName || !this.selectedContact.PrimaryPhoneNumber || !this.selectedContact.PrimaryEmail) {
                    this.isContactValid = false;
                }
                else {
                    this.isContactValid = true;
                }
                this.validateDirectives.forEach(function (item) {
                    item.validate(e);
                });
            }
            else if (changeMade == 'phoneNumber' || changeMade == 'email') {
                if (!this.selectedContact.DerFirstNameLastName || !this.selectedContact.AccountName || !this.selectedContact.PrimaryPhoneNumber || !this.selectedContact.PrimaryEmail) {
                    this.isContactValid = false;
                }
                else {
                    this.isContactValid = true;
                }
                this.validateDirectives.forEach(function (item) {
                    item.validate(e);
                });
            }
        };
        CreateTicketWorkspaceComponent.prototype.setAssignee = function (e) {
            if (e && e[0] && e[0].data) {
                this.assignedToID = e[0].data.CRMUserID;
                this.assignedToName = e[0].data.CRMName;
                if (this.assignedToID != this.currentUser.CRMUserID) {
                    this.isAssignToMe = false;
                }
                else {
                    this.isAssignToMe = true;
                }
            }
        };
        CreateTicketWorkspaceComponent.prototype.setAssigneeToMe = function () {
            if (this.isAssignToMe) {
                this.assignedToID = "";
                this.assignedToName = "";
            }
            else {
                this.assignedToID = this.currentUser.CRMUserID;
                this.assignedToName = this.currentUser.CRMName;
            }
        };
        CreateTicketWorkspaceComponent.prototype.closeWorkspace = function () {
            this.dialog.close();
        };
        CreateTicketWorkspaceComponent.prototype.openConfirmationModal = function () {
            var _this = this;
            if (this.selectedContact.DerFirstNameLastName || this.selectedContact.PrimaryTicketContactPhoneNumber || this.selectedContact.AccountName || this.selectedContact.PrimaryEmail ||
                this.urgency !== 'Medium' || this.severity || this.summary || this.department || this.assignedToID || this.assignedToName || this.isAddContact || this.isAssignToMe) {
                var dialogRef_1 = this.modalService
                    .message('<span class="text-base">Your ticket will be canceled and unsaved work will not be saved.</span>')
                    .buttons([
                    { text: 'No', click: function () { dialogRef_1.close(); } },
                    { text: 'Yes', click: function () {
                            dialogRef_1.close();
                            _this.dialog.close();
                        }, isDefault: true
                    }
                ])
                    .title('Cancel Ticket?')
                    .open();
            }
            else {
                this.dialog.close();
            }
        };
        CreateTicketWorkspaceComponent.prototype.setWorkspaceData = function () {
            this.assigneeList = this.sortFilterService.trimEmptyField(this.allAssignees, "CRMName");
            this.contactNameList = this.sortFilterService.trimEmptyField(this.allContacts, "DerFirstNameLastName");
            this.accountList = this.sortFilterService.trimDuplicateField(this.allContacts, "AccountName");
        };
        __decorate([
            core_1.ViewChild(sohoxi_angular_1.SohoBusyIndicatorDirective, { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoBusyIndicatorDirective)
        ], CreateTicketWorkspaceComponent.prototype, "busyIndicator", void 0);
        __decorate([
            core_1.ViewChildren(sohoxi_angular_1.SohoInputValidateDirective),
            __metadata("design:type", core_1.QueryList)
        ], CreateTicketWorkspaceComponent.prototype, "validateDirectives", void 0);
        __decorate([
            core_1.ViewChild('ticketDetailsPlaceholder', { read: core_1.ViewContainerRef }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], CreateTicketWorkspaceComponent.prototype, "ticketDetailsPlaceholder", void 0);
        CreateTicketWorkspaceComponent = __decorate([
            core_1.Component({
                template: "\n        <div class=\"{{ !isMobileView ? 'create-ticket-workspace' : ''\"\n        soho-busyindicator\n        text=\"Loading...\"\n        blockUI=\"true\"\n        displayDelay=\"0\">\n            <form [formGroup]=\"createTicketForm\">\n                <div class=\"row create-ticket-title\">\n                    <div class=\"twelve columns\">\n                        <h3>Requestor Information</h3>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"six columns\">\n                        <div class=\"field\">\n                            <label soho-label for=\"contacts_lu\">Contact Name<span class=\"required-field\">*</span></label>\n                            <input soho-lookup\n                            [columns]=\"contactColumns\"\n                            [dataset]=\"contactNameList\"\n                            [editable]=\"false\"\n                            field=\"DerFirstNameLastName\"\n                            name=\"contacts_lu\"\n                            [(ngModel)]=\"selectedContact.DerFirstNameLastName\"\n                            (change)=\"setContact($event, 'contactName')\"\n                            data-validate=\"required\" formControlName=\"contact\" />\n                        </div>\n                        <div class=\"field\">\n                            <!--<label soho-label for=\"phoneNumbers_lu\">Phone Number<span class=\"required-field\">*</span></label>\n                            <input soho-lookup\n                            [columns]=\"phoneNumberColumns\"\n                            [dataset]=\"allContacts\"\n                            field=\"PrimaryPhoneNumber\"\n                            name=\"phoneNumbers_lu\"\n                            [(ngModel)]=\"selectedContact.PrimaryPhoneNumber\"\n                            (change)=\"setContact($event)\"\n                            data-validate=\"required\" formControlName=\"phoneNumber\" />-->\n\n                            <label soho-label for=\"phoneNumbers_tb\">Phone Number<span class=\"required-field\">*</span></label>\n                            <input\n                            name=\"phoneNumbers_tb\"\n                            [(ngModel)]=\"selectedContact.PrimaryPhoneNumber\"\n                            (keydown)=\"setContact($event, 'phoneNumber')\"\n                            (change)=\"setContact($event, 'email')\"\n                            data-validate=\"required\" formControlName=\"phoneNumber\" />\n                        </div>\n                    </div>\n                    <div class=\"six columns\">\n                        <div class=\"field\">\n                            <label soho-label for=\"accounts_lu\">Account Name<span class=\"required-field\">*</span></label>\n                            <input soho-lookup\n                            [columns]=\"accountColumns\"\n                            [dataset]=\"accountList\"\n                            [editable]=\"false\"\n                            field=\"AccountName\"\n                            name=\"accounts_lu\"\n                            [(ngModel)]=\"selectedContact.AccountName\"\n                            (change)=\"setContact($event, 'accountName')\"\n                            data-validate=\"required\" formControlName=\"account\" />\n                        </div>\n                        <div class=\"field\">\n                            <!--<label soho-label for=\"emails_lu\">Email<span class=\"required-field\">*</span></label>\n                            <input soho-lookup\n                            [columns]=\"emailColumns\"\n                            [dataset]=\"allContacts\"\n                            field=\"PrimaryEmail\"\n                            name=\"emails_lu\"\n                            [(ngModel)]=\"selectedContact.PrimaryEmail\"\n                            (change)=\"setContact($event)\"\n                            data-validate=\"required email\" formControlName=\"email\" />-->\n\n                            <label soho-label for=\"emails_tb\">Email<span class=\"required-field\">*</span></label>\n                            <input\n                            name=\"emails_tb\"\n                            [(ngModel)]=\"selectedContact.PrimaryEmail\"\n                            (keydown)=\"setContact($event, 'email')\"\n                            (change)=\"setContact($event, 'email')\"\n                            data-validate=\"required email\" formControlName=\"email\" />\n                        </div>\n                    </div>\n                </div>\n                <!--<div class=\"row\">\n                    <div class=\"twelve columns\">\n                        <input soho-checkbox type=\"checkbox\" id='addContactCB' name=\"checkbox1\" [(ngModel)]=\"isAddContact\" [ngModelOptions]=\"{standalone: true}\">\n                        <label soho-label for='addContactCB' [forCheckBox]=\"true\">Add Contact</label>\n                    </div>\n                </div>-->\n                <div class=\"info-separator\"></div>\n                <div class=\"row\">\n                    <div class=\"six columns\">\n                        <div>\n                            <label for=\"urgency_dd\" class=\"label\">Urgency</label>\n                            <select soho-dropdown name=\"urgency_dd\" [(ngModel)]=\"urgency\" [ngModelOptions]=\"{standalone: true}\">\n                                <option value=\"High\">High</option>\n                                <option value=\"MediumHigh\">Medium - High</option>\n                                <option value=\"Medium\">Medium</option>\n                                <option value=\"MediumLow\">Medium - Low</option>\n                                <option value=\"Low\">Low</option>\n                            </select>\n                        </div>\n                        <div>\n                            <label for=\"severity_dd\" class=\"label\">Severity</label>\n                            <select soho-dropdown name=\"severity_dd\" [(ngModel)]=\"severity\" [ngModelOptions]=\"{standalone: true}\">\n                                <option value=\"\">Please Select</option>\n                                <option value=\"Blocker\">Blocker</option>\n                                <option value=\"Critical\">Critical</option>\n                                <option value=\"Major\">Major</option>\n                                <option value=\"Minor\">Minor</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"six columns\">\n                        <div class=\"field\">\n                            <label for=\"required\" class=\"label required\">Summary</label>\n                            <textarea soho-textarea name=\"required\" data-validate=\"required\" formControlName=\"summary\" [(ngModel)]=\"summary\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"info-separator\"></div>\n                <div class=\"row\">\n                    <div class=\"six columns\">\n                        <label for=\"department_dd\" class=\"label\">Department</label>\n                        <select soho-dropdown name=\"department_dd\" [(ngModel)]=\"department\" [ngModelOptions]=\"{standalone: true}\">\n                            <option value=\"\">Please Select</option>\n                            <option *ngFor=\"let department of allDepartments\" value=\"{{ department.Name }}\">{{ department.Name }}</option>\n                        </select>\n                    </div>\n                    <div class=\"six columns\">\n                        <label soho-label for=\"assignedTo_lu\">Assigned To</label>\n                        <input soho-lookup\n                        [columns]=\"assigneeColumns\"\n                        [dataset]=\"assigneeList\"\n                        [editable]=\"false\"\n                        field=\"CRMName\"\n                        name=\"assignedTo_lu\"\n                        (change)=\"setAssignee($event)\"\n                        [(ngModel)]=\"assignedToName\"\n                        [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"twelve columns\">\n                        <input soho-checkbox type=\"checkbox\" id=\"assignToMeCB\" name=\"checkbox1\" [(ngModel)]=\"isAssignToMe\" [ngModelOptions]=\"{standalone: true}\" (click)=\"setAssigneeToMe()\">\n                        <label soho-label for=\"assignToMeCB\" [forCheckBox]=\"true\">Assign To Me</label>\n                    </div>\n                </div>\n                <div class=\"info-separator\"></div>\n                <div class=\"row\">\n                    <div class=\"twelve columns align-r\">\n                        <button soho-button=\"secondary\" class=\"btn-secondary\" (click)=\"openConfirmationModal()\">Cancel</button>\n                        <button soho-button=\"primary\" class=\"btn-primary\" (click)=\"addNewTicket()\" [attr.disabled]=\"!isContactValid || !summary ? 'true' : null\">Save</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div #createCancelConfirmation></div>\n\t",
                styles: ["\n        .create-ticket-workspace { width: 600px; }\n\n        .info-separator { width: calc(100% - 30px); border-bottom: 1px solid #bdbdbd; margin: 15px; }\n\n        .required-field { color: red; }\n\n        .align-r { text-align: right; }\n    "]
            }),
            __metadata("design:paramtypes", [data_service_1.DataService, sohoxi_angular_1.SohoToastService, forms_1.FormBuilder, core_1.ChangeDetectorRef, sohoxi_angular_1.SohoModalDialogService, sort_filter_service_1.SortFilterService])
        ], CreateTicketWorkspaceComponent);
        return CreateTicketWorkspaceComponent;
    }());
    exports.CreateTicketWorkspaceComponent = CreateTicketWorkspaceComponent;
});
//# sourceMappingURL=create-ticket-workspace.component.js.map