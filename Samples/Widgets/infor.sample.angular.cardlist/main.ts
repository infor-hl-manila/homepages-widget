import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule } from "@angular/core";
import { SohoListViewModule } from "@infor/sohoxi-angular";
import { IWidgetComponent, IWidgetContext, IWidgetInstance, IWidgetSettingMetadata, IWidgetSettingsArg, Log, WidgetSettingsType } from "lime";

class CardItem {
	isError?: boolean;
	title: string;
	description: string;
}

@Component({
	template: `
	<div>
		<soho-listview
			(rendered)="onRendered($event)"
			(selected)="onSelected($event)"
			(sorted)="onSorted($event)">
			<li soho-listview-item *ngFor="let item of sortedItems">
				<p soho-listview-header>{{item.title}}</p>
				<p soho-listview-subheader>{{item.description}}</p>
			</li>
		</soho-listview>
	</div>`
})
export class CardListComponent implements AfterViewInit, IWidgetComponent {
	@Input()
	widgetContext: IWidgetContext;
	@Input()
	widgetInstance: IWidgetInstance;
	sortedItems: CardItem[] = [];

	private logPrefix = "[CardListComponent] ";
	private reverseKey = "reverse";
	private reverse = false;

	ngAfterViewInit() {
		const settings = this.widgetContext.getSettings();
		let reverseSetting = settings.getString(this.reverseKey, null);
		if (reverseSetting == null) {
			// Store the default setting
			reverseSetting = "false";
			settings.set(this.reverseKey, reverseSetting);
		}
		if (reverseSetting.toLowerCase() === "true") {
			this.reverse = true;
		}

		const instance = this.widgetInstance;
		instance.settingsOpening = (options: IWidgetSettingsArg) => {
			this.logInfo("settingsOpening");
		};

		instance.getMetadata = () => {
			return this.createMetadata();
		};

		instance.settingsSaved = () => {
			// Handle when settings are saved to update internal state
			const reverseSettings = this.widgetContext.getSettings().getString(this.reverseKey, "false");
			this.reverse = reverseSettings === "true";
			this.sortedItems = this.sortCollection(this.sortedItems, this.reverse);
		};

		// Get items
		const items = [
			{
				isError: true,
				title: "Stock level 31-22",
				description: "Stocklevel has reached 100 items"
			},
			{
				title: "Customer returns",
				description: "Customer returns has increased with 10%"
			},
			{
				title: "Customer approved",
				description: "Customer Hulk Holding has been approved."
			},
			{
				title: "Stock level Chair-3",
				description: "WHLO 200 has 500 items"
			},
			{
				title: "Planned machine maintenance",
				description: "Planned time"
			}
		];

		// Check order by and create the filtered collection
		// Create a new sorted array
		this.sortedItems = this.sortCollection(items, this.reverse);
	}

	onRendered(event: Event) {
		this.logInfo("Rendered listview: " + event);
	}

	onSelected(event: Event) {
		this.logInfo("Selected item: " + event);
	}

	onSorted(event: Event) {
		this.logInfo("Sorted: " + event);
	}

	createMetadata(): IWidgetSettingMetadata[] {
		// Dynamically create meta data for the metadata controlled settings UI
		const metadata: IWidgetSettingMetadata[] = [];
		const widgetSetting: IWidgetSettingMetadata = {
			labelId: "order",
			type: WidgetSettingsType.selectorType,
			name: this.reverseKey,
			defaultValue: "false",
		};
		widgetSetting.values = [{ textId: "ascending", value: "false" }, { textId: "descending", value: "true" }];
		metadata.push(widgetSetting);
		return metadata;
	}

	private sortCollection(items: CardItem[], reverse: boolean): CardItem[] {
		return items.concat().sort((a: CardItem, b: CardItem) => {
			const s1 = a.title;
			const s2 = b.title;

			if (reverse) {
				return s2.localeCompare(s1);
			} else {
				return s1.localeCompare(s2);
			}
		});
	}

	private logInfo(message: string, ex?: {}): void {
		Log.info(this.logPrefix + message, ex);
	}
}

@NgModule({
	imports: [CommonModule, SohoListViewModule],
	declarations: [CardListComponent],
	entryComponents: [CardListComponent]
})
export class CardListModule { }
