var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@infor/sohoxi-angular", "lime", "./ticket.service"], function (require, exports, core_1, sohoxi_angular_1, lime_1, ticket_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = /** @class */ (function () {
        function DataService(messageService, ticketService) {
            this.messageService = messageService;
            this.ticketService = ticketService;
            this.tenant = "CRMCE";
            this.dataTicketReqUrl = "IDORequestService/MGRestService.svc/json/CRMTicket";
            this.dataAssigneesReqUrl = "IDORequestService/MGRestService.svc/json/CRMUsernames";
            this.dataDepartmentsReqUrl = "IDORequestService/MGRestService.svc/json/CRMDepartment";
            this.dataContactsReqUrl = "IDORequestService/MGRestService.svc/json/CRMContact";
        }
        DataService.prototype.init = function (widgetContext) {
            this.widgetContext = widgetContext;
        };
        DataService.prototype.getMongooseConfig = function (callback, handleError) {
            var _this_1 = this;
            var tenantId = this.widgetContext.getTenantId();
            var mongooseConfigUrl = "IDORequestService/MGRestService.svc/json/configurations?configgroup=" + tenantId;
            var request = this.createRequest(encodeURI(mongooseConfigUrl));
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                _this_1.mongooseConfig = response.data[0];
                callback();
            }, function (error) {
                handleError(error, 'Unable to get Mongoose Config');
            });
        };
        DataService.prototype.getTickets = function () {
            var request = this.getRequest(encodeURI(this.dataTicketReqUrl) + "/adv?rowcap=0&props=DerAccountName,DateNeeded,DerAlternateKey,Summary,Severity,Type,Urgency,AssignedToID,Status,DerPrimaryFormattedContactName,PrimaryTicketContactPhoneNumber,StatusDateLastUpdated,Description,Area,Category,Issue,PrimaryTicketContactEmail,AssignedToName,DerDaysOpen,DerIsManagedByCurrentUser,ID,AccountID,PrimaryTicketContactID,PrimaryTicketContactPhoneNumber,PrimaryContactID,PendingReason,SolvedReason");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.parseTicketData = function (ticketData) {
            var _this = this;
            var formattedTickets = [];
            for (var i = 0; i < ticketData.Items.length; i++) {
                var ticketItem = ticketData.Items[i];
                formattedTickets.push({
                    AccountName: ticketItem[0].Value,
                    DateNeeded: ticketItem[1].Value ? new Date(ticketItem[1].Value.slice(0, 4) + "-" + ticketItem[1].Value.slice(4, 6) + "-" + ticketItem[1].Value.slice(6, 8)).toString() : null,
                    TicketNumber: ticketItem[2].Value,
                    Summary: ticketItem[3].Value,
                    Severity: ticketItem[4].Value,
                    SeverityLevel: _this.ticketService.getSeverityLevel(ticketItem[4].Value),
                    Type: ticketItem[5].Value,
                    Urgency: _this.ticketService.getUrgency(ticketItem[6].Value),
                    UrgencyClass: _this.ticketService.getUrgencyClass(ticketItem[6].Value),
                    UrgencyLevel: _this.ticketService.getUrgencyLevel(ticketItem[6].Value),
                    AssignedToID: ticketItem[7].Value,
                    Status: ticketItem[8].Value,
                    DerPrimaryFormattedContactName: ticketItem[9].Value,
                    DerFormattedContactPhoneNumber: ticketItem[10].Value,
                    StatusDateLastUpdated: ticketItem[11].Value,
                    Description: ticketItem[12].Value,
                    Area: ticketItem[13].Value,
                    Category: ticketItem[14].Value,
                    Issue: ticketItem[15].Value,
                    PrimaryTicketContactEmail: ticketItem[16].Value,
                    AssignedToName: ticketItem[17].Value,
                    DaysOpen: ticketItem[18].Value,
                    IsHidden: false,
                    DerIsManagedByCurrentUser: ticketItem[19].Value,
                    IsFiltered: false,
                    ID: ticketItem[20].Value,
                    AccountID: ticketItem[21].Value,
                    PrimaryTicketContactID: ticketItem[22].Value,
                    PrimaryTicketContactPhoneNumber: ticketItem[23].Value,
                    PrimaryContactID: ticketItem[24].Value,
                    PendingReason: ticketItem[25].Value,
                    SolvedReason: ticketItem[26].Value,
                    ItemID: ticketItem[27].Value,
                    IsDue: false
                });
            }
            return formattedTickets;
        };
        DataService.prototype.getAssignees = function () {
            var request = this.getRequest(encodeURI(this.dataAssigneesReqUrl) + "/adv?rowcap=0&props=CRMUserID,CRMName");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.parseAssigneeData = function (assigneeData) {
            var formattedAssignees = [];
            for (var i = 0; i < assigneeData.Items.length; i++) {
                var assigneeItem = assigneeData.Items[i];
                formattedAssignees.push({
                    CRMUserID: assigneeItem[0].Value,
                    CRMName: assigneeItem[1].Value
                });
            }
            return formattedAssignees;
        };
        DataService.prototype.getDepartments = function () {
            var request = this.getRequest(encodeURI(this.dataDepartmentsReqUrl) + "/adv?rowcap=0&props=ID,Name");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.parseDepartmentData = function (departmentData) {
            var formattedDepartments = [];
            for (var i = 0; i < departmentData.Items.length; i++) {
                var departmentItem = departmentData.Items[i];
                formattedDepartments.push({
                    ID: departmentItem[0].Value,
                    Name: departmentItem[1].Value
                });
            }
            return formattedDepartments;
        };
        DataService.prototype.getContacts = function () {
            var request = this.getRequest(encodeURI(this.dataContactsReqUrl) + "/adv?rowcap=0&props=DerFirstNameLastName,ID,AccountName,PrimaryPhoneNumber,PrimaryEmail,AccountID");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.parseContactData = function (departmentData) {
            var formattedContacts = [];
            for (var i = 0; i < departmentData.Items.length; i++) {
                var contactItem = departmentData.Items[i];
                formattedContacts.push({
                    DerFirstNameLastName: contactItem[0].Value,
                    ID: contactItem[1].Value,
                    AccountName: contactItem[2].Value,
                    PrimaryPhoneNumber: contactItem[3].Value,
                    PrimaryEmail: contactItem[4].Value,
                    AccountID: contactItem[5].Value
                });
            }
            return formattedContacts;
        };
        DataService.prototype.postTicket = function (ticket, addedProps) {
            var data = {
                Action: 1,
                ItemId: "PBT=[CRMTICKET]",
                ItemNo: 0,
                Properties: this.buildAddPayload(ticket, addedProps)
            };
            var request = this.postRequest(encodeURI(this.dataTicketReqUrl) + "/additem", data);
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.buildAddPayload = function (ticket, addedProps) {
            var payloadProps = [];
            for (var i = 0; i < addedProps.length; i++) {
                var propName = addedProps[i];
                payloadProps.push({
                    IsNull: false,
                    Modified: true,
                    Name: propName,
                    Value: ticket[propName]
                });
            }
            return payloadProps;
        };
        DataService.prototype.putTicket = function (ticket, modifiedProps) {
            var data = {
                Action: 2,
                ItemId: ticket.ItemID,
                ItemNo: 0,
                Properties: this.buildUpdatePayload(ticket, modifiedProps)
            };
            var request = this.putRequest(encodeURI(this.dataTicketReqUrl) + "/updateitem", data);
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.buildUpdatePayload = function (ticket, modifiedProps) {
            var payloadProps = [];
            for (var i = 0; i < modifiedProps.length; i++) {
                var propName = modifiedProps[i];
                payloadProps.push({
                    IsNull: false,
                    Modified: true,
                    Name: propName,
                    Value: ticket[propName]
                });
            }
            return payloadProps;
        };
        DataService.prototype.showErrorResponse = function (error) {
            lime_1.Log.error("ION API Error: " + JSON.stringify(error));
            this.messageService.error({
                title: "Error " + error.status,
                message: "Failed to call ION API",
                buttons: [{
                        text: "Close",
                        isDefault: true
                    }]
            }).open();
        };
        DataService.prototype.getRequest = function (relativeUrl, headers) {
            if (!headers) {
                headers = {
                    Accept: "application/json",
                    "X-Infor-MongooseSessionType": "CustomUser",
                    "X-Infor-MongooseConfig": this.mongooseConfig
                };
            }
            var url = this.tenant + "/" + relativeUrl;
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: headers
            };
            return request;
        };
        DataService.prototype.postRequest = function (relativeUrl, data, headers) {
            if (!headers) {
                headers = {
                    Accept: "application/json",
                    "X-Infor-MongooseSessionType": "CustomUser",
                    "X-Infor-MongooseConfig": this.mongooseConfig
                };
            }
            var url = this.tenant + "/" + relativeUrl;
            var request = {
                method: "POST",
                url: url,
                cache: false,
                headers: headers,
                data: data
            };
            return request;
        };
        DataService.prototype.putRequest = function (relativeUrl, data, headers) {
            if (!headers) {
                headers = {
                    Accept: "application/json",
                    "X-Infor-MongooseSessionType": "CustomUser",
                    "X-Infor-MongooseConfig": this.mongooseConfig
                };
            }
            var url = this.tenant + "/" + relativeUrl;
            var request = {
                method: "PUT",
                url: url,
                cache: false,
                headers: headers,
                data: data
            };
            return request;
        };
        DataService.prototype.createRequest = function (relativeUrl, headers) {
            if (!headers) {
                headers = {
                    Accept: "application/json",
                    "X-Infor-MongooseSessionType": "CustomUser",
                    "X-Infor-MongooseConfig": this.mongooseConfig
                };
            }
            var url = this.tenant + "/" + relativeUrl;
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: headers
            };
            return request;
        };
        DataService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoMessageService, ticket_service_1.TicketService])
        ], DataService);
        return DataService;
    }());
    exports.DataService = DataService;
});
//# sourceMappingURL=data.service.js.map