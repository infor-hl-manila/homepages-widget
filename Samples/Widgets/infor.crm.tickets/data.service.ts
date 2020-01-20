import {
  HttpErrorResponse
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";
import {
  SohoMessageService
} from "@infor/sohoxi-angular";
import {
  IIonApiRequestOptions,
  IIonApiResponse,
  IWidgetContext,
  Log
} from "lime";
import {
  Observable
} from "rxjs/Observable";
import {
  ITicket
} from "./ticket";
import {
  IAssignee
} from "./assignee";
import {
  IDepartment
} from "./department";
import {
  IContact
} from "./contact";
import {
  TicketService
} from "./ticket.service";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private mongooseConfig: any;
  private widgetContext: IWidgetContext;
  private tenant = "CRMCE";
  private dataTicketReqUrl = "IDORequestService/MGRestService.svc/json/CRMTicket";
  private dataAssigneesReqUrl = "IDORequestService/MGRestService.svc/json/CRMUsernames";
  private dataDepartmentsReqUrl = "IDORequestService/MGRestService.svc/json/CRMDepartment";
  private dataContactsReqUrl = "IDORequestService/MGRestService.svc/json/CRMContact";

  constructor(private messageService: SohoMessageService, private ticketService: TicketService) {}

  init(widgetContext: IWidgetContext): void {
    this.widgetContext = widgetContext;
  }

  getMongooseConfig(callback: any, handleError: any): void {
    const tenantId = this.widgetContext.getTenantId();

    const mongooseConfigUrl = `IDORequestService/MGRestService.svc/json/configurations?configgroup=${tenantId}`;

    const request = this.createRequest(encodeURI(mongooseConfigUrl));

    this.widgetContext.executeIonApiAsync(request).subscribe(
      (response: any) => {
        this.mongooseConfig = response.data[0];

        callback();
      }, (error: HttpErrorResponse) => {
        handleError(error, 'Unable to get Mongoose Config');
      }
    );
  }

  getTickets(): Observable<IIonApiResponse<ITicket[]>> {
    const request = this.getRequest(`${encodeURI(this.dataTicketReqUrl)}/adv?rowcap=0&props=DerAccountName,DateNeeded,DerAlternateKey,Summary,Severity,Type,Urgency,AssignedToID,Status,DerPrimaryFormattedContactName,PrimaryTicketContactPhoneNumber,StatusDateLastUpdated,Description,Area,Category,Issue,PrimaryTicketContactEmail,AssignedToName,DerDaysOpen,DerIsManagedByCurrentUser,ID,AccountID,PrimaryTicketContactID,PrimaryTicketContactPhoneNumber,PrimaryContactID,PendingReason,SolvedReason`);
    return this.widgetContext.executeIonApiAsync<ITicket[]>(request);
  }

  parseTicketData(ticketData: any): ITicket[] {
    const _this = this;
    const formattedTickets: ITicket[] = [];

    for (let i = 0; i < ticketData.Items.length; i++) {
      const ticketItem = ticketData.Items[i];

      formattedTickets.push({
        AccountName: ticketItem[0].Value,
        DateNeeded: ticketItem[1].Value ? new Date(`${ticketItem[1].Value.slice(0, 4)}-${ticketItem[1].Value.slice(4, 6)}-${ticketItem[1].Value.slice(6, 8)}`).toString() : null,
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
  }

  getAssignees(): Observable<IIonApiResponse<IAssignee[]>> {
    const request = this.getRequest(`${encodeURI(this.dataAssigneesReqUrl)}/adv?rowcap=0&props=CRMUserID,CRMName`);
    return this.widgetContext.executeIonApiAsync<IAssignee[]>(request);
  }

  parseAssigneeData(assigneeData: any): IAssignee[] {
    const formattedAssignees: IAssignee[] = [];

    for (let i = 0; i < assigneeData.Items.length; i++) {
      const assigneeItem = assigneeData.Items[i];

      formattedAssignees.push({
        CRMUserID: assigneeItem[0].Value,
        CRMName: assigneeItem[1].Value
      });
    }

    return formattedAssignees;
  }

  getDepartments(): Observable<IIonApiResponse<IDepartment[]>> {
    const request = this.getRequest(`${encodeURI(this.dataDepartmentsReqUrl)}/adv?rowcap=0&props=ID,Name`);
    return this.widgetContext.executeIonApiAsync<IDepartment[]>(request);
  }

  parseDepartmentData(departmentData: any): IDepartment[] {
    const formattedDepartments: IDepartment[] = [];

    for (let i = 0; i < departmentData.Items.length; i++) {
      const departmentItem = departmentData.Items[i];

      formattedDepartments.push({
        ID: departmentItem[0].Value,
        Name: departmentItem[1].Value
      });
    }

    return formattedDepartments;
  }

  getContacts(): Observable<IIonApiResponse<IContact[]>> {
    const request = this.getRequest(`${encodeURI(this.dataContactsReqUrl)}/adv?rowcap=0&props=DerFirstNameLastName,ID,AccountName,PrimaryPhoneNumber,PrimaryEmail,AccountID`);
    return this.widgetContext.executeIonApiAsync<IContact[]>(request);
  }

  parseContactData(departmentData: any): IContact[] {
    const formattedContacts: IContact[] = [];

    for (let i = 0; i < departmentData.Items.length; i++) {
      const contactItem = departmentData.Items[i];

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
  }

  postTicket(ticket: ITicket, addedProps: string[]): Observable<IIonApiResponse<ITicket[]>> {
    const data = {
      Action: 1,
      ItemId: "PBT=[CRMTICKET]",
      ItemNo: 0,
      Properties: this.buildAddPayload(ticket, addedProps)
    };

    const request = this.postRequest(`${encodeURI(this.dataTicketReqUrl)}/additem`, data);
    return this.widgetContext.executeIonApiAsync<ITicket[]>(request);
  }

  private buildAddPayload(ticket: any, addedProps: string[]): any[] {
    const payloadProps: any[] = [];

    for (let i = 0; i < addedProps.length; i++) {
      const propName = addedProps[i];

      payloadProps.push({
        IsNull: false,
        Modified: true,
        Name: propName,
        Value: ticket[propName]
      });
    }

    return payloadProps;
  }

  putTicket(ticket: ITicket, modifiedProps: string[]): Observable<IIonApiResponse<ITicket[]>> {
    const data = {
      Action: 2,
      ItemId: ticket.ItemID,
      ItemNo: 0,
      Properties: this.buildUpdatePayload(ticket, modifiedProps)
    };

    const request = this.putRequest(`${encodeURI(this.dataTicketReqUrl)}/updateitem`, data);
    return this.widgetContext.executeIonApiAsync<ITicket[]>(request);
  }

  private buildUpdatePayload(ticket: any, modifiedProps: string[]): any[] {
    const payloadProps = [];

    for (let i = 0; i < modifiedProps.length; i++) {
      const propName = modifiedProps[i];

      payloadProps.push({
        IsNull: false,
        Modified: true,
        Name: propName,
        Value: ticket[propName]
      });
    }

    return payloadProps;
  }

  private showErrorResponse(error: HttpErrorResponse): void {
    Log.error(`ION API Error: ${JSON.stringify(error)}`);
    this.messageService.error({
      title: `Error ${error.status}`,
      message: "Failed to call ION API",
      buttons: [{
        text: "Close",
        isDefault: true
      }]
    }).open();
  }

  private getRequest(relativeUrl: string, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "X-Infor-MongooseSessionType": "CustomUser",
        "X-Infor-MongooseConfig": this.mongooseConfig
      };
    }

    const url = this.tenant + "/" + relativeUrl;

    const request: IIonApiRequestOptions = {
      method: "GET",
      url: url,
      cache: false,
      headers: headers
    };

    return request;
  }

  private postRequest(relativeUrl: string, data: any, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "X-Infor-MongooseSessionType": "CustomUser",
        "X-Infor-MongooseConfig": this.mongooseConfig
      };
    }

    const url = this.tenant + "/" + relativeUrl;

    const request: IIonApiRequestOptions = {
      method: "POST",
      url: url,
      cache: false,
      headers: headers,
      data: data
    };

    return request;
  }

  private putRequest(relativeUrl: string, data: any, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "X-Infor-MongooseSessionType": "CustomUser",
        "X-Infor-MongooseConfig": this.mongooseConfig
      };
    }

    const url = this.tenant + "/" + relativeUrl;

    const request: IIonApiRequestOptions = {
      method: "PUT",
      url: url,
      cache: false,
      headers: headers,
      data: data
    };

    return request;
  }

  private createRequest(relativeUrl: string, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "X-Infor-MongooseSessionType": "CustomUser",
        "X-Infor-MongooseConfig": this.mongooseConfig
      };
    }

    const url = this.tenant + "/" + relativeUrl;

    const request: IIonApiRequestOptions = {
      method: "GET",
      url: url,
      cache: false,
      headers: headers
    };

    return request;
  }
}
