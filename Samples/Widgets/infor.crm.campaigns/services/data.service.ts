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

@Injectable({
  providedIn: "root"
})
export class DataService {
  mongooseConfig: any;
  private widgetContext: IWidgetContext;
  private tenant = "CRMCE";
  private mongooseConfigUrl = "/CRMCE/IDORequestService/MGRestService.svc/json/configurations?configgroup";

  constructor(private messageService: SohoMessageService) {}

  init(widgetContext: IWidgetContext): void {
    this.widgetContext = widgetContext;
  }

  getMongooseConfig(): void {
    let configGroup: any = null;
    const tenantId = this.widgetContext.getTenantId();
    if (typeof tenantId === "string" && tenantId.length > 0 && tenantId.indexOf("_") >= 0) {
      const split = tenantId.split("_");
      const customerId = split[0];
      const env = split[1];
      configGroup = `${customerId}_CRM_${env}`;
    }
    const request = this.createRequest(`${this.mongooseConfigUrl}=${configGroup}`);
    this.widgetContext.executeIonApiAsync(request).subscribe(
      response => {
        this.mongooseConfig = response.data;
      }, (error: HttpErrorResponse) => this.showErrorResponse(error)
    );
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
