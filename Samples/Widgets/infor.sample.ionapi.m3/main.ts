import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, Injectable, NgModule } from "@angular/core";
import { SohoListViewModule } from "@infor/sohoxi-angular";
import { IIonApiRequestOptions, IWidgetContext, Log, widgetContextInjectionToken, WidgetMessageType, WidgetState } from "lime";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

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
// - Set the devConfiguration attribute on the <lm-page-container> to the name of the configuration.json file
// - Example:
// - <lm-page-container devWidget="infor.sample.ionapi.m3" devConfiguration="configuration.json"></lm-page-container>
//
//
// Developing and debugging
// ========================
// A widget using the ION API can be developed and debugged like any other widget.
// Just remember to start the proxy and configure the configuration.json file.
// The OAuth token will time out and when that happens you must acquire a new token and update the configuration.json
// file.

interface IMIResponse {
	Program: string;
	Transaction: string;
	MIRecord: IMIRecord[];
}

interface IMIRecord {
	RowIndex: number;
	NameValue: INameValue[];
}

interface INameValue {
	Name: string;
	Value: string;
}

interface IListItem {
	title: string;
	description: string;
}

@Injectable()
export class M3Service {
	private logPrefix = "[IonApiM3Sample] ";

	constructor(@Inject(widgetContextInjectionToken) private readonly widgetContext: IWidgetContext) { }

	getCustomerData(): Observable<IListItem[]> {
		this.setBusy(true);
		const request = this.createRequest();

		return this.widgetContext.executeIonApiAsync<IMIResponse>(request).pipe(
			map(response => this.getParsedRecords(response.data.MIRecord)),
			tap(() => this.setBusy(false)),
			catchError((error: HttpErrorResponse) => {
				this.showErrorMessage(error);
				return of([]);
			})
		);
	}

	private createRequest(): IIonApiRequestOptions {
		return {
			method: "GET",
			url: "/M3/m3api-rest/execute/CRS610MI/LstByName",
			cache: false,
			headers: {
				Accept: "application/json"
			}
		};
	}

	private setBusy(isBusy: boolean): void {
		this.widgetContext.setState(isBusy ? WidgetState.busy : WidgetState.running);
	}

	private getParsedRecords(records: IMIRecord[]) {
		return records.map((record): IListItem => ({
			title: this.getValue(record.NameValue, "CUNO"),
			description: this.getValue(record.NameValue, "CUNM"),
		}));
	}

	private getValue(nameValues: INameValue[], name: string): string {
		const nameValueWithMatchingName = nameValues.find((nameValue) => nameValue.Name === name);
		if (nameValueWithMatchingName) {
			return nameValueWithMatchingName.Value.trim();
		} else {
			return null;
		}
	}

	private showErrorMessage(error: HttpErrorResponse): void {
		Log.error(this.logPrefix + "ION API Error: " + JSON.stringify(error));
		this.widgetContext.showWidgetMessage({
			type: WidgetMessageType.Error,
			message: "Unable to load customer data"
		});
		this.setBusy(false);
	}
}

@Component({
	providers: [M3Service],
	template: `
	<soho-listview>
		<li soho-listview-item *ngFor="let item of customerItems$ | async">
			<p soho-listview-header>{{item.title}}</p>
			<p soho-listview-subheader>{{item.description}}</p>
		</li>
	</soho-listview>
	`,
})
export class IonApiM3Component {
	customerItems$: Observable<IListItem[]>;

	constructor(private m3Service: M3Service) {
		this.customerItems$ = this.m3Service.getCustomerData();
	}
}

@NgModule({
	imports: [
		SohoListViewModule,
		CommonModule
	],
	declarations: [IonApiM3Component],
	entryComponents: [IonApiM3Component],
})
export class IonApiM3Module { }
