import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import {
	IIonApiRequestOptions,
	IIonApiResponse,
	IWidgetComponent,
	IWidgetContext,
	IWidgetInstance,
	WidgetMessageType,
	WidgetState
} from "lime";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { Observable } from "rxjs/Observable";

// Prerequisites
// =============
// The following steps are required before testing this sample widget.
// - Aquire the server and port number for the ION API server to test with.
// - Configure and start a localhost proxy with the ION API server and port number.
// - Example: node proxy.js 8083 "yourservername" 443
// - Example: \Samples\StartIonApiProxy.cmd
//
// - Set the ionApiUrl property in the configuration.json file to the URL of the localhost proxy.
// - The configuration.json file is located in the root of the Widgets sample project by default.
// - The URL should include the tenant to test with.
// - Example: "ionApiUrl": "http://localhost:8083/tenantid"
//
// - Acquire an OAuth token string.
// - Log on to Ming.le.
// - Example: https://yourservername/tenantid/
// - Open a new tab in the same browser and navigate to the Grid SAML Session Provider OAuth resource
// - The Grid must be version 2.0 or later with a SAML Session Provider configured for the same IFS as Ming.le.
// - Example: https://yourservernameandport/grid/rest/security/sessions/oauth
// - Copy the the OAuth token string from the browser window.
//
// - If there are issues you can verify if your user has access to the grid by navigating to the Grid user page.
// - Note that you must be logged on to Ming.le before doing this.
// - Example: https://yourservernameandport/grid/user
//
// - Set the ionApiToken property in the configuration.json file to the OAuth token string.
// - Example: "ionApiToken": "V9k5niTDR1kq6RuYlEq3N3HxGq8u"
//
// - Set the devConfiguration attribute on the lm-page-container to the name of the configuration.json file
// - Example:
//   <lm-page-container devWidget="infor.sample.ionapi.m3" devConfiguration="configuration.json"></lm-page-container>
//
//
// Developing and debugging
// ========================
// A widget using the ION API can be developed and debugged like any other widget.
// Just remember to start the proxy and configure the configuration.json file.
// The OAuth token will time out and when that happens you must acquire a new token and update
// the configuration.json file.

interface ISocialUser {
	FirstName: string;
	LastName: string;
	Email: string;
	Title: string;
	UserGUID: string;
}

interface IUserDetailResponse {
	UserDetailList: ISocialUser[];
	Status: number;
	ErrorList: {}[];
}

export class DataService {
	private userSubject: AsyncSubject<IIonApiResponse<IUserDetailResponse>>;
	private serviceUrl = "Mingle/SocialService.Svc";
	private widgetContext: IWidgetContext;

	init(widgetContext: IWidgetContext): void {
		this.widgetContext = widgetContext;

		this.preLoadUser();
	}

	loadUser(): Observable<IIonApiResponse<IUserDetailResponse>> {
		// Use the preloaded data if it exists the first time
		const subject = this.userSubject;
		if (subject) {
			const observable = subject.asObservable();
			this.userSubject = null;
			return observable;
		}

		return this.loadUserInternal();
	}

	loadPhoto(userGuid: string): Observable<IIonApiResponse<Blob>> {
		const relativeUrl = "User/" + userGuid + "/ProfilePhoto?thumbnailType=3";
		const request = this.createRequest(relativeUrl, { Accept: "image/png, image/jpeg" });
		request.responseType = "blob";
		return this.widgetContext.executeIonApiAsync<Blob>(request);
	}

	preLoadUser(): void {
		const subject = new AsyncSubject<IIonApiResponse<IUserDetailResponse>>();
		this.userSubject = subject;

		this.loadUserInternal().subscribe(response => {
			subject.next(response);
			subject.complete();
		}, (error) => {
			subject.error(error);
		});
	}

	private loadUserInternal(): Observable<IIonApiResponse<IUserDetailResponse>> {
		const request = this.createRequest("User/Detail");
		return this.widgetContext.executeIonApiAsync<IUserDetailResponse>(request);
	}

	private createRequest(relativeUrl: string, headers?: object): IIonApiRequestOptions {
		if (!headers) {
			// Create default headers
			headers = { Accept: "application/json" };
		}

		// Create the relative URL to the ION API
		const url = this.serviceUrl + "/" + relativeUrl;

		// Create HTTP GET request object
		const request: IIonApiRequestOptions = {
			method: "GET",
			url: url,
			cache: false,
			headers: headers
		};

		return request;
	}
}

// Create a single instance of the service
export const dataService = new DataService();

@Component({
	template: `
	<div class="lm-padding-md">
		<h3>Name</h3>
		<p>{{fullName}}</p>

		<h3>Email</h3>
		<p>{{user?.Email}}</p>

		<p><img src="{{photoUrl}}" /></p>
	</div>
	`
})
export class IonApiSocialComponent implements IWidgetComponent, OnInit {
	@Input() widgetContext: IWidgetContext;
	@Input() widgetInstance: IWidgetInstance;

	fullName: string;
	photoUrl: string;
	user: ISocialUser;

	ngOnInit(): void {
		this.setBusy(true);
		this.loadUser();
	}

	private setBusy(isBusy: boolean): void {
		// Show the indeterminate progress indicator when the widget is busy by changing the widget state.
		this.widgetContext.setState(isBusy ? WidgetState.busy : WidgetState.running);
	}

	private loadUser(): void {
		dataService.loadUser().subscribe(response => {
			this.updateUser(response.data);
		}, (error) => {
			this.onRequestError(error);
		});
	}

	private updateUser(response: IUserDetailResponse): void {
		const user = response.UserDetailList[0];
		this.user = user;
		this.fullName = user.FirstName + " " + user.LastName;
		this.loadPhoto();
	}

	private loadPhoto(): void {
		dataService.loadPhoto(this.user.UserGUID).subscribe(response => {
			this.updatePhoto(response.data);
		}, (error) => {
			this.onRequestError(error);
		});
	}

	private updatePhoto(response: Blob): void {
		const reader = new FileReader();
		reader.onload = () => {
			this.photoUrl = reader.result as string;
			this.setBusy(false);
		};
		reader.readAsDataURL(response);
	}

	private onRequestError(error: {}): void {
		this.widgetContext.showWidgetMessage({
			message: "Failed to call ION API: " + JSON.stringify(error),
			type: WidgetMessageType.Error
		});
		this.setBusy(false);
	}
}

@NgModule({
	imports: [CommonModule],
	declarations: [IonApiSocialComponent],
	entryComponents: [IonApiSocialComponent]
})
export class IonApiSocialModule {
}
