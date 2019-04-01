import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoButtonModule, SohoListViewModule } from "@infor/sohoxi-angular";
import { ArrayUtil, ILanguage, IWidgetAction, IWidgetComponent, IWidgetContext, IWidgetInstance } from "lime";

@Component({
	template: `
	<div class="row lm-padding-sm-b lm-padding-sm-t">
		<div class="eight columns">
			<input type="text" [(ngModel)]="text">
		</div>
		<div class="four columns">
			<button soho-button="tertiary" [disabled]="!text" (click)="addNote(text)">{{lang?.add}}</button>
		</div>
	</div>
	<soho-listview>
		<li soho-listview-item *ngFor="let item of items">
			<p soho-listview-header>{{item}}</p>
		</li>
	</soho-listview>`
})
export class QuicknoteComponent implements AfterViewInit, IWidgetComponent {
	@Input()
	widgetContext: IWidgetContext;
	@Input()
	widgetInstance: IWidgetInstance;
	text: string;
	items: string[] = [];
	lang: ILanguage;

	private settingsKeyItems = "items";

	ngAfterViewInit() {
		this.lang = this.widgetContext.getLanguage();
		const settings = this.widgetContext.getSettings();

		// Set custom title
		this.widgetContext.setTitle("QuickNote");
		const savedItems = settings.get<string[]>(this.settingsKeyItems);
		if (savedItems) {
			this.items = savedItems;
		} else {
			settings.set(this.settingsKeyItems, this.items);
		}

		// Add custom widget action to widget instance
		// Perhaps there is a better way but extend doesn't exist in Angular 2 and icon must be set earlier
		const customAction = this.widgetInstance.actions[0];
		customAction.execute = () => { this.clear(); };
		customAction.isEnabled = this.items.length ? true : false;
		customAction.text = this.lang.get("clear");
	}

	addNote(value: string): void {
		if (value) {
			if (ArrayUtil.contains(this.items, value)) {
				ArrayUtil.remove(this.items, value);
			}
			this.items.unshift(value);
			this.widgetInstance.actions[0].isEnabled = true;
			this.widgetContext.save();
		}
		this.text = null;
	}

	// Clear is used from Widget header
	clear(): void {
		this.items.length = 0;
		this.widgetInstance.actions[0].isEnabled = false;
		this.widgetContext.save();
	}
}

@NgModule({
	imports: [CommonModule, FormsModule, SohoListViewModule, SohoButtonModule],
	declarations: [QuicknoteComponent],
	entryComponents: [QuicknoteComponent]
})
export class QuicknoteModule {
}

export const getActions = (): IWidgetAction[] => {
	return [{ isPrimary: true, standardIconName: "#icon-delete" }];
};
