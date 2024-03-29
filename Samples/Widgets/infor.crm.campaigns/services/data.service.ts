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
  ICampaign,
  ICampaignStage,
  ICampaignStep
} from "../model/campaigns";

@Injectable({
  providedIn: "root"
})
export class DataService {
  configGroup: string;
  private mongooseConfig: any;
  private widgetContext: IWidgetContext;
  private tenant = "CRMCE";
  private dataCampaignReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code";
  private dataCampaignStageReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaignStage";
  private dataCampaignStepReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaignStep";
  private allCampaigns = "/IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code";
  private myCampaigns = `${this.allCampaigns}&filter=DerIsManagedByCurrentUser = N'1'&orderby=StartDate DESC`;
  private openCampaigns = `${this.allCampaigns}&filter=Status <> N'Inactive'`;
  constructor(private messageService: SohoMessageService) {}

  init(widgetContext: IWidgetContext): void {
    this.widgetContext = widgetContext;
  }

  getMongooseConfig(): void {
    // let configGroup: string = null;
    const tenantId = "CRMCEQA30_AX1"; //will change to dynamic once we deploy to ADE this.widgetContext.getTenantId();
    // const tenantID = this.widgetContext.getTenantId();
    if (typeof tenantId === "string" && tenantId.length > 0 && tenantId.indexOf("_") >= 0) {
      const split = tenantId.split("_");
      const customerId = split[0];
      const env = split[1];
      this.configGroup = `${customerId}_CRM_${env}_DEFAULT`;
    }

    const mongooseConfigUrl = `IDORequestService/MGRestService.svc/json/configurations?configgroup=${tenantId}`;

    const request = this.createRequest(encodeURI(mongooseConfigUrl));

    this.widgetContext.executeIonApiAsync(request).subscribe(
      (response: any) => {
        this.mongooseConfig = response.data[0];
      }, (error: HttpErrorResponse) => {
        // this.showErrorResponse(error);
      }
    );
  }
  selectCampaigns(dataUrl: string): Observable<IIonApiResponse<ICampaign[]>> {
    const request = this.createRequest(`${encodeURI(dataUrl)}`);

    return this.widgetContext.executeIonApiAsync<ICampaign[]>(request);
  }
  getCampaigns(): Observable<IIonApiResponse<ICampaign[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignReqUrl)}&filter=DerIsManagedByCurrentUser = N'1'&orderby=StartDate DESC`);
    return this.widgetContext.executeIonApiAsync<ICampaign[]>(request);
  }

  getCampaign(ID: string): Observable<IIonApiResponse<ICampaign[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignReqUrl)}&filter=ID='${ID}'`);
    return this.widgetContext.executeIonApiAsync<ICampaign[]>(request);
  }

  getCampaignStages(): Observable<IIonApiResponse<ICampaignStage[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignStageReqUrl)}/adv?props=ID,CampaignID,Description,Status,DerCampaignTaskCount,StartDate,EndDate,Type`);
    return this.widgetContext.executeIonApiAsync<ICampaignStage[]>(request);
  }

  getCampaignSteps(): Observable<IIonApiResponse<ICampaignStep[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignStepReqUrl)}/adv?props=ID,CampaignID,Description,Status,DueDate,DateAssigned,CampaignStageID,PercentComplete,Priority,StepType`);
    return this.widgetContext.executeIonApiAsync<ICampaignStep[]>(request);
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

  private createRequest(relativeUrl: string, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "X-Infor-MongooseConfig": this.configGroup,
        "X-Infor-MongooseSessionType": "CustomUser"
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
