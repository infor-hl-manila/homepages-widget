import { Injectable } from "@angular/core";
import {
  IIonApiRequestOptions,
  IIonApiResponse,
  IWidgetContext
} from "lime";
import { Observable } from "rxjs/Observable";
import { IActivity } from "../activity";
import { IPickLists } from "../activity";

@Injectable({
  providedIn: "root"
})
export class DataService {
  mongooseConfig: any;
  private endpointUrl = "v1/activities";
  private picklistEndpoint = "v1/picklists";
  private mongooseConfigUrl = "v1/mongoose/configurations";
  private activityResultsCode = "Activity Result Codes";
  private tenant = "CRMCE";
  private widgetContext: IWidgetContext;

  init(widgetContext: IWidgetContext): void {
    this.widgetContext = widgetContext;
  }

  getActivities(): Observable<IIonApiResponse<IActivity[]>> {
    const request = this.createRequest(`${this.endpointUrl}?filter=Result=null`);
    return this.widgetContext.executeIonApiAsync<IActivity[]>(request);
  }

  getActivity(ID: string, resource?: string): Observable<IIonApiResponse<IActivity>> {
    const requestUrl = resource ? `${this.endpointUrl}/${ID}/${resource}` : `${this.endpointUrl}/${ID}`;
    const request = this.createRequest(requestUrl);

    return this.widgetContext.executeIonApiAsync<IActivity>(request);
  }

  getPickLists(Type: string): Observable<IIonApiResponse<IPickLists[]>> {
    const request = this.createRequest(`${this.picklistEndpoint}/${this.activityResultsCode}?filter=Category='${Type}'&fields=Display,Value`);
    return this.widgetContext.executeIonApiAsync<IPickLists[]>(request);
  }

  createActivityNotes(RowPointer: string, newActivityNotes: object): Observable<IIonApiResponse<IActivity>> {
    const request = this.postRequest(`${this.endpointUrl}/${RowPointer}/notes`, newActivityNotes);
    return this.widgetContext.executeIonApiAsync<IActivity>(request);
  }

  getMongooseConfig(): void {
    const request = this.createRequest(`${this.mongooseConfigUrl}`);
    this.widgetContext.executeIonApiAsync(request).subscribe(
      response => {
        this.mongooseConfig = response.data;
      }
    );
  }

  updateActivity(ID: string, data: object): Observable<IIonApiResponse<IActivity>> {
    const request = this.updateRequest(`${this.endpointUrl}/${ID}`, data);
    return this.widgetContext.executeIonApiAsync<IActivity>(request);
  }

  private updateRequest(relativeUrl: string, data: object, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Infor-MongooseConfig": this.mongooseConfig[0]
      };
    }

    const url = this.tenant + "/" + relativeUrl;

    const request: IIonApiRequestOptions = {
      method: "PUT",
      data,
      url: url,
      cache: false,
      headers: headers
    };

    return request;
  }

  private postRequest(relativeUrl: string, data: string | any, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Infor-MongooseConfig": "CRMCEQA10_CRM_DEM_DEFAULT"
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

  private createRequest(relativeUrl: string, headers?: object): IIonApiRequestOptions {
    if (!headers) {
      headers = { Accept: "application/json" };
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
