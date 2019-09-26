import { CommonModule } from "@angular/common";
import { Component, Inject, NgModule, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoButtonModule, SohoInputValidateModule, SohoListViewModule, SohoModalDialogRef, SohoModalDialogService } from "@infor/sohoxi-angular";
import { ArrayUtil, CommonUtil, ITranslationResult, IWidgetContext, IWidgetInstance, TranslationService, widgetContextInjectionToken, widgetInstanceInjectionToken } from "lime";
import { IManifestLanguage } from "./manifest-types";

interface IListItemMap {
	[key: string]: ListItem;
}

class ListItem {
	title?: string;
	description?: string;
	translations?: IListItemMap;
}

interface IEditItemParameter {
	item: ListItem;
	lang: IManifestLanguage;
}

@Component({
	template: `
	<div #editItemView style="max-width: 390px">
		<div>
			<div class="field">
				<label class="required" for="sample-ct-edt-ttl">{{lang.title}}</label>
				<input id="sample-ct-edt-ttl" name="sample-ct-edt-ttl" type="text"
				[(ngModel)]="item.title"
				[maxlength]="maxTitle"
				data-validate="required" />
			</div>

			<div class="field">
				<label class="required" for="sample-ct-edt-desc">{{lang.description}}</label>
				<input id="sample-ct-edt-desc" type="text"
				[(ngModel)]="item.description"
				[maxlength]="maxDescription"
				data-validate="required" />
			</div>
		</div>

		<div *ngIf="isTranslation" class="field">
			<button class="btn-secondary" (click)="onTranslations()">{{lang.translations}}</button>
		</div>

		<div class="modal-buttonset">
			<button class="btn-modal" (click)="onClose()">{{lang.cancel}}</button>
			<button class="btn-modal-primary no-validation" [disabled]="!canSave()" (click)="onSave()">
				{{lang.save}}
			</button>
		</div>
	</div>`
})
export class EditItemComponent implements OnInit {
	@ViewChild("editItemView", { read: ViewContainerRef, static: true }) view: ViewContainerRef;

	dialog: SohoModalDialogRef<EditItemComponent>;
	parameter: IEditItemParameter;
	// tslint:disable-next-line:no-any
	lang: IManifestLanguage;
	item: ListItem = {};
	isTranslation: boolean;

	readonly maxTitle = 40;
	readonly maxDescription = 100;

	constructor(
		private readonly translationService: TranslationService) {
		this.isTranslation = translationService.isEnabled();
	}

	ngOnInit() {
		this.item = this.parameter.item;
		this.lang = this.parameter.lang;
	}

	onClose(): void {
		this.dialog.close();
	}

	onSave(): void {
		this.dialog.close(this.item);
	}

	canSave(): boolean {
		const item = this.item;
		return !!item.title && !!item.description;
	}

	onTranslations(): void {
		const item = this.item;
		const options = {
			view: this.view,
			data: item.translations || {},
			items: [
				{
					name: "title",
					label: this.lang.name,
					labelId: "sample-ct-tr-ttl-lbl",
					valueId: "sample-ct-tr-ttl-v",
					maxLength: this.maxTitle,
					isPrimary: true,
					defaultValue: item.title
				}, {
					name: "description",
					label: this.lang.description,
					labelId: "sample-ct-tr-desc-lbl",
					valueId: "sample-ct-tr-desc-v",
					maxLength: this.maxDescription,
					defaultValue: item.description
				}
			]
		};

		this.translationService.translate(options).subscribe((result: ITranslationResult) => {
			item.translations = result.data as IListItemMap;
		}, cancelResult => {
			// Handle cancel
		});
	}
}

@Component({
	template: `
	<div #contentTranslationView>
		<soho-listview>
			<li soho-listview-item *ngFor="let item of items">
				<p soho-listview-header>{{getTitle(item)}}
					<button class="lm-pull-right" soho-button="icon" icon="delete" (click)="onDelete(item)"></button>
					<button class="lm-pull-right" soho-button="icon" icon="edit" (click)="onEdit(item)"></button>
				</p>
				<p soho-listview-subheader>{{getDescription(item)}}</p>
			</li>
		</soho-listview>
	</div>`
})
export class ContentTranslationComponent {
	@ViewChild("contentTranslationView", { read: ViewContainerRef, static: true }) view: ViewContainerRef;

	items: ListItem[] = [];
	lang: IManifestLanguage;

	private itemKey = "items";
	private readonly languageCode: string;

	constructor(
		@Inject(widgetContextInjectionToken) private readonly widgetContext: IWidgetContext,
		@Inject(widgetInstanceInjectionToken) private readonly widgetInstance: IWidgetInstance,
		private readonly sohoModalDialogService: SohoModalDialogService,
		private readonly translationService: TranslationService) {

		this.lang = widgetContext.getLanguage<IManifestLanguage>();
		this.languageCode = translationService.getLanguage();
		this.items = widgetContext.getSettings().get<ListItem[]>(this.itemKey) || [];

		const lang = widgetContext.getLanguage();

		widgetInstance.actions = [{
			text: lang.get("add"),
			isPrimary: true,
			standardIconName: "#icon-add",
			execute: () => { this.onAdd(); }
		}];
	}

	getTitle(item: ListItem): string {
		return this.getItem(item).title;
	}

	getDescription(item: ListItem): string {
		return this.getItem(item).description;
	}

	onDelete(item: ListItem): void {
		ArrayUtil.remove(this.items, item);
		this.save();
	}

	onEdit(item: ListItem): void {
		this.openDialog(item);
	}

	private onAdd(): void {
		this.openDialog();
	}

	private getItem(item: ListItem): ListItem {
		const translationItem = item.translations ? item.translations[this.languageCode] : null;
		return translationItem || item;
	}

	private addItem(item: ListItem): void {
		this.items.push(item);
		this.save();
	}

	private updateItem(item: ListItem, index: number): void {
		this.items[index] = item;
		this.save();
	}

	private save(): void {
		this.widgetContext.getSettings().set(this.itemKey, this.items);
		this.widgetContext.save();
	}

	private openDialog(item?: ListItem): void {
		const isAdd = !item;
		let existingIndex: number;
		if (isAdd) {
			item = {};
		} else {
			existingIndex = ArrayUtil.indexOf(this.items, item);
			item = CommonUtil.copyJson(item);
		}

		const lang = this.lang;
		const dialog = this.sohoModalDialogService
			.modal(EditItemComponent, this.view)
			.title(lang.get("editItem"))
			.afterClose((editItem: ListItem) => {
				if (editItem) {
					if (isAdd) {
						this.addItem(editItem);
					} else {
						this.updateItem(editItem, existingIndex);
					}
				}
			});

		dialog.apply((component) => {
			component.dialog = dialog;
			component.parameter = {
				item: item,
				lang: lang
			};
		}).open();
	}
}

@NgModule({
	imports: [CommonModule, FormsModule, SohoListViewModule, SohoButtonModule, SohoInputValidateModule],
	declarations: [ContentTranslationComponent, EditItemComponent],
	entryComponents: [ContentTranslationComponent, EditItemComponent]
})
export class ContentTranslationModule { }
