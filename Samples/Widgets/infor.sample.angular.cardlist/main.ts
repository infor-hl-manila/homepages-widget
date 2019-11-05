import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgModule, OnInit } from "@angular/core";
import { SohoListViewModule } from "@infor/sohoxi-angular";
import { IWidgetComponent, IWidgetContext, IWidgetInstance, IWidgetSettingMetadata, WidgetSettingsType } from "lime";
import { ICardItem, mockData } from "./core";
import { SortByPipe } from "./pipes";

@Component({
	template: `
		<soho-listview>
			<li soho-listview-item
				 *ngFor="let item of items | sortBy: sortOrder">
				<p soho-listview-header>{{item.title}}</p>
				<p soho-listview-subheader>{{item.description}}</p>
			</li>
		</soho-listview>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit, IWidgetComponent {
	@Input() widgetContext: IWidgetContext;
	@Input() widgetInstance: IWidgetInstance;

	items: ICardItem[] = [];
	sortOrder: string;

	constructor(private readonly changeDetectionRef: ChangeDetectorRef) { }

	ngOnInit() {
		const instance = this.widgetInstance;
		instance.settingsSaved = () => this.updateSortOrder();
		instance.getMetadata = () => this.getMetadata();
		this.items = mockData;
		this.updateSortOrder();
	}

	private updateSortOrder() {
		this.sortOrder = this.widgetContext.getSettings().get("order", "asc");
		this.changeDetectionRef.markForCheck();
	}

	private getMetadata(): IWidgetSettingMetadata[] {
		// Dynamically create metadata for the standard metadata controlled settings UI.
		// For dynamic settings / values that need to be resolved asynchronously,
		// implement IWidgetInstance getMetadataAsync() instead.
		// For known/hardcoded values, place the metadata in the manifest instead.

		return [{
			labelId: "order",
			type: WidgetSettingsType.selectorType,
			name: "order",
			defaultValue: this.items.length > 3 ? "asc" : "desc",
			values: [
				{ textId: "ascending", value: "asc" },
				{ textId: "descending", value: "desc" }
			]
		}];
	}
}

@NgModule({
	imports: [CommonModule, SohoListViewModule],
	declarations: [CardListComponent, SortByPipe],
	entryComponents: [CardListComponent]
})
export class CardListModule { }
