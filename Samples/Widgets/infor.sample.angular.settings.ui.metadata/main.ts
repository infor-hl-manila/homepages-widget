/**
 * NOTE:
 * A custom settings UI shall only be implemented if settings are dynamic, for instance based on data
 * retrieved from a server. Or if the settings structure is complicated, and not possible to handle using
 * supported metadata setting types (string, boolean, number, selector). For other cases, use metadata settings
 * handled by the default settings UI.
 */

import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoBusyIndicatorDirective, SohoBusyIndicatorModule, SohoButtonModule, SohoColorPickerModule, SohoDropDownModule } from "@infor/sohoxi-angular";
import { IWidgetComponent, IWidgetContext, IWidgetInstance, IWidgetSettings, IWidgetSettingsComponent, IWidgetSettingsContext2, IWidgetSettingsInstance2 } from "lime";

interface ITextStyle {
	fontWeight?: string;
	fontStyle?: string;
	color?: string;
}

class SettingKeys {
	static textColor = "textColor";
	static textStyle = "textStyle";
}

@Component({
	template: `
	<div class="lm-text-align-c lm-padding-xl">
		<span class="label lm-margin-xl-b">
			This widget shows how to implement a Custom Settings UI using Angular.
			The Settings UI can be used to change the style and color of the text shown below.
		</span>
		<h1
			[style.color]="textStyle.color"
			[style.fontStyle]="textStyle.fontStyle"
			[style.fontWeight]="textStyle.fontWeight">
			Colored Text
		</h1>
	</div>
	`,
})
export class WidgetComponent implements IWidgetComponent, OnInit {
	@Input() widgetContext: IWidgetContext;
	@Input() widgetInstance: IWidgetInstance;

	textStyle: ITextStyle = {};

	ngOnInit(): void {
		this.setupWidgetInstanceListeners();
		this.updateFromSettings(this.widgetContext.getSettings());
	}

	private setupWidgetInstanceListeners() {
		this.widgetInstance.restored = () => this.widgetContext.setStandardTitle();
		this.widgetInstance.settingsSaved = (settingsArg) => this.updateFromSettings(settingsArg.settings);
		this.widgetInstance.widgetSettingsFactory = () => {
			return {
				angularConfig: {
					componentType: SettingsComponent,
				},
			};
		};
	}

	private updateFromSettings(settings: IWidgetSettings) {
		const color = settings.get<string>("textColor");
		const textStyle = settings.get<string>("textStyle").toLowerCase();

		this.textStyle.color = color;

		if (textStyle === "bold") {
			this.textStyle.fontWeight = textStyle;
		} else {
			this.textStyle.fontStyle = textStyle;
		}
	}
}

/**
 * This component can be used to display a Title setting field with a padlock.
 * It works with the given (required) widgetSettingContext to determine whether title should
 * be locked, unlocked, editable, unlockable etc.
 *
 * Call save() to commit the changes to the widget settings.
 */
@Component({
	selector: "infor-sample-setting-title-field",
	template: `
	<div class="field">
		<label *ngIf="label">{{label}}</label>
		<input [readOnly]="!isTitleEditEnabled || isTitleLocked" [(ngModel)]="title" />
		<button
			soho-button="icon"
			[icon]="lockIcon"
			[disabled]="!isTitleUnlockable"
			(click)="onLockClicked()">
		</button>
	</div>
	`,
})
export class TitleSettingComponent implements OnInit {
	@Input() widgetSettingsContext: IWidgetSettingsContext2;
	@Input() label: string;

	title: string;
	isTitleEditEnabled: boolean;
	isTitleUnlockable: boolean;
	isTitleLocked: boolean;

	ngOnInit(): void {
		if (!this.widgetSettingsContext) {
			throw new Error("Required input: widgetSettingsContext");
		}

		const widgetContext = this.widgetSettingsContext.getWidgetContext();
		this.isTitleEditEnabled = widgetContext.isTitleEditEnabled();
		this.isTitleLocked = widgetContext.isTitleLocked();
		this.title = widgetContext.getResolvedTitle(this.isTitleLocked);
		this.isTitleUnlockable = widgetContext.isTitleUnlockable();
	}

	get lockIcon(): string {
		return this.isTitleLocked ? "locked" : "unlocked";
	}

	/**
	 * Persist changes to the title and lock by saving to widget context.
	 */
	save(): void {
		const widgetContext = this.widgetSettingsContext.getWidgetContext();
		widgetContext.setTitleLocked(this.isTitleLocked);
		if (this.isTitleEditEnabled) {
			widgetContext.setTitle(this.title);
		}
	}

	onLockClicked(): void {
		this.isTitleLocked = !!!this.isTitleLocked;
		if (this.isTitleLocked) {
			const widgetContext = this.widgetSettingsContext.getWidgetContext();
			this.title = widgetContext.getResolvedTitle(this.isTitleLocked);
		}
	}
}

@Component({
	template: `
	<div soho-busyindicator blockUI="true" displayDelay="0">
		<infor-sample-setting-title-field
			[widgetSettingsContext]="widgetSettingsContext"
			label="Title">
		</infor-sample-setting-title-field>
		<div class="field" *ngIf="styleEditVisible">
			<label>{{styleEditLabel}}</label>
			<select soho-dropdown [(ngModel)]="textStyle" [disabled]="!styleEditEnabled" noSearch>
				<option *ngFor="let styleOption of textStyleOptions" [value]="styleOption">{{styleOption}}</option>
			</select>
		</div>
		<div class="field" *ngIf="colorEditVisible">
			<label>{{colorEditLabel}}</label>
			<input soho-colorpicker [(ngModel)]="textColor" [disabled]="!colorEditEnabled"/>
		</div>
	</div>
	`,
})
export class SettingsComponent implements IWidgetSettingsComponent, OnInit {
	@Input() widgetSettingsContext: IWidgetSettingsContext2;
	@Input() widgetSettingsInstance: IWidgetSettingsInstance2;

	@ViewChild(TitleSettingComponent, { static: true }) titleSettingComponent: TitleSettingComponent;
	@ViewChild(SohoBusyIndicatorDirective, { static: true }) busyIndicator: SohoBusyIndicatorDirective;

	colorEditEnabled: boolean;
	colorEditVisible: boolean;
	colorEditLabel: string;

	styleEditVisible: boolean;
	styleEditEnabled: boolean;
	styleEditLabel: string;

	textStyleOptions: string[];

	textStyle: string;
	textColor: string;

	ngOnInit(): void {
		this.initFromSettings();
		this.fetchStyleSettingsAsync();
		this.setupSettingsClosingHandler();
	}

	private initFromSettings(): void {
		const widgetContext = this.widgetSettingsContext.getWidgetContext();
		const settings = widgetContext.getSettings();

		this.textColor = settings.get<string>(SettingKeys.textColor);
		this.styleEditLabel = widgetContext.getLanguage().get("textStyleSettingLabel");
		this.colorEditVisible = settings.isSettingVisible(SettingKeys.textColor);
		this.colorEditEnabled = settings.isSettingEnabled(SettingKeys.textColor);

		this.colorEditLabel = widgetContext.getLanguage().get("textColorSettingLabel");
		this.styleEditVisible = settings.isSettingVisible(SettingKeys.textStyle);
		this.styleEditEnabled = settings.isSettingEnabled(SettingKeys.textStyle);
	}

	private fetchStyleSettingsAsync(): void {
		this.busyIndicator.activated = true;
		setTimeout(() => {
			const settings = this.widgetSettingsContext.getWidgetContext().getSettings();
			this.textStyleOptions = ["Normal", "Italic", "Bold"];
			this.textStyle = settings.get<string>(SettingKeys.textStyle);
			this.busyIndicator.activated = false;
		}, 3000);
	}

	private setupSettingsClosingHandler(): void {
		this.widgetSettingsInstance.closing = (closingArg) => {
			const settings = this.widgetSettingsContext.getWidgetContext().getSettings();
			if (closingArg.isSave) {
				if (this.colorEditEnabled) {
					settings.set(SettingKeys.textColor, this.textColor);
				}
				if (this.styleEditEnabled) {
					settings.set(SettingKeys.textStyle, this.textStyle);
				}
				this.titleSettingComponent.save();
			}
		};
	}
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SohoButtonModule,
		SohoBusyIndicatorModule,
		SohoDropDownModule,
		SohoColorPickerModule
	],
	declarations: [
		WidgetComponent,
		SettingsComponent,
		TitleSettingComponent
	],
	entryComponents: [
		WidgetComponent,
		SettingsComponent
	],
})
export class WidgetModule { }
