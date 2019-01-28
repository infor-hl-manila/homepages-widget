import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule } from "@angular/core";
import { SohoComponentsModule } from "@infor/sohoxi-angular";
import { IWidgetComponent,
	IWidgetContext2,
	IWidgetInstance2,
	IWidgetSettingMetadata,
	IWidgetSettingsArg,
	Log,
	WidgetSettingsType,
} from "lime";

class CardItem {
	isError?: boolean;
	title: string;
	description: string;
	category: string;
}

@Component({
	template: `
	<div class="card-content">
	<!-- Cardgroup Action with filter menu -->
		<div class="card-group-action">
				<soho-toolbar>
					<soho-toolbar-title>
					Category
					</soho-toolbar-title>
					<soho-toolbar-button-set>
					<button soho-menu-button icon="filter" menu="filtermenu" (selected)="onSelected($event)"></button>
					<ul soho-popupmenu id="filtermenu">
						<li soho-popupmenu-item *ngFor="let item of category"><a soho-popupmenu-label>{{item}}</a></li>
					</ul>
					</soho-toolbar-button-set>
				</soho-toolbar>
		</div>
	<!-- Listview with items to filter -->
		<soho-listview id="listview"
			(rendered)="onRendered($event)"
			(sorted)="onSorted($event)">
			<li soho-listview-item *ngFor="let item of sortedItems">
				<p soho-listview-header>{{item.title}}</p>
				<p soho-listview-subheader>{{item.description}}</p>
			</li>
		</soho-listview>
	</div>`,
		styles: [`
		.card-content {
			overflow: hidden;
			display: flex;
			flex-direction: column;
		}
		.card-group-action {
			flex: 0 0 auto;
		}
		#listview {
			overflow: auto;
			flex: 0 1 auto;
		}
		`]
})
export class CardGroupActionComponent implements AfterViewInit, IWidgetComponent {
	@Input() widgetContext: IWidgetContext2;
	@Input() widgetInstance: IWidgetInstance2;
	originalItems: CardItem[] = [];
	sortedItems: CardItem[] = [];
	category = ["All", "Customer", "Warehouse"];

	private logPrefix = "[CardGroupActionComponent] ";
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
				description: "Stocklevel has reached 100 items",
				category: "Warehouse"
			},
			{
				title: "Customer returns",
				description: "Customer returns has increased with 10%",
				category: "Customer"
			},
			{
				title: "Customer approved",
				description: "Customer Hulk Holding has been approved.",
				category: "Customer"
			},
			{
				title: "Stock level Chair-3",
				description: "WHLO 200 has 500 items",
				category: "Warehouse"
			},
			{
				title: "Planned machine maintenance",
				description: "Planned time",
				category: "Warehouse"
			}
		];

		// Check order by and create the filtered collection
		// Create a new sorted array
		this.originalItems = items;
		this.sortedItems = this.sortCollection(items, this.reverse);
		
	}

	onRendered(event: Event) {
		this.logInfo("Rendered listview: " + event);
	}
	onSelected(event: SohoPopupMenuEvent) {
		const filterChoice = $(event.args).text().trim();
		if(filterChoice !== this.category[0]) {
			const filterItems = this.originalItems.filter(item => item.category === filterChoice);
			this.sortedItems = this.sortCollection(filterItems, this.reverse);
		} else {
			this.sortedItems = this.sortCollection(this.originalItems, this.reverse);
		}
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
	imports: [CommonModule, SohoComponentsModule],
	declarations: [CardGroupActionComponent],
	entryComponents: [CardGroupActionComponent]
})
export class CardGroupActionModule {
}

// Widget factory function
export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: CardGroupActionModule,
			componentType: CardGroupActionComponent
		}
	};
};
