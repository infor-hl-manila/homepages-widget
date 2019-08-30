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
  private mongooseConfig: any;
  private widgetContext: IWidgetContext;
  private tenant = "CRMCE";
  private dataCampaignReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type";
  private dataCampaignStageReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaignStage";
  private dataCampaignStepReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaignStep";

  constructor(private messageService: SohoMessageService) {}

  init(widgetContext: IWidgetContext): void {
    this.widgetContext = widgetContext;
  }

  getMongooseConfig(): void {
    let configGroup: string = null;
    const tenantId = "CRMCEFEAT01_AX2"; //will change to dynamic once we deploy to ADE this.widgetContext.getTenantId();

    if (typeof tenantId === "string" && tenantId.length > 0 && tenantId.indexOf("_") >= 0) {
      const split = tenantId.split("_");
      const customerId = split[0];
      const env = split[1];
      configGroup = `${customerId}_CRM_${env}_DEFAULT`;
    }

    const mongooseConfigUrl = `IDORequestService/MGRestService.svc/json/configurations?configgroup=${configGroup}`;

    const request = this.createRequest(encodeURI(mongooseConfigUrl));

    console.log("request", request);

    this.widgetContext.executeIonApiAsync(request).subscribe(
      (response: any) => {
        console.log("response", response);
        this.mongooseConfig = response.data[0];
      }, (error: HttpErrorResponse) => {
        // this.showErrorResponse(error);
      }
    );
  }

  getCampaigns(): Observable<IIonApiResponse<ICampaign[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignReqUrl)}`);
    return this.widgetContext.executeIonApiAsync<ICampaign[]>(request);
  }

  getCampaign(ID: string): Observable<IIonApiResponse<ICampaign[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignReqUrl)}&filter=ID='${ID}'`);
    return this.widgetContext.executeIonApiAsync<ICampaign[]>(request);
  }

  getCampaignStages(): Observable<IIonApiResponse<ICampaignStage[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignStageReqUrl)}/adv?props=ID,CampaignID,Description,Status,DerCampaignTaskCount,StartDate,EndDate`);
    return this.widgetContext.executeIonApiAsync<ICampaignStage[]>(request);
  }

  getCampaignSteps(): Observable<IIonApiResponse<ICampaignStep[]>> {
    const request = this.createRequest(`${encodeURI(this.dataCampaignStepReqUrl)}/adv?props=ID,CampaignID,Description,Status,DueDate,DateAssigned`);
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
      console.log("===>", this);
      headers = {
        Accept: "application/json",
        "X-Infor-MongooseConfig": "CRMCEFEAT01_CRM_AX2_DEFAULT",
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

  private createMongooseConfigRequest(relativeUrl: string, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "X-Infor-MongooseConfig": "CRMCEFEAT01_CRM_AX2_DEFAULT",
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
