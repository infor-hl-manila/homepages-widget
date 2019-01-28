﻿import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule } from "@angular/core";
import { IWidgetComponent, IWidgetContext2, IWidgetInstance2 } from "lime";

@Component({
	template: `
	<div>
		<h1 [ngStyle]="{'margin-top': '20px', 'text-align': 'center', 'color': color, 'font-size': fontSize}">
			{{message}}
		</h1>
	</div>`
})
export class HelloWorldComponent implements AfterViewInit, IWidgetComponent {
	@Input()
	widgetContext: IWidgetContext2;
	@Input()
	widgetInstance: IWidgetInstance2;
	message: string;
	color: string;
	fontSize: string;

	private defaultColor = "1A1A1A";

	ngAfterViewInit() {
		// Subscribe to the event that is triggered when settings are saved to be able to update the message text
		this.widgetInstance.settingsSaved = () => {
			this.updateContent();
		};

		// Initial update of the message text and color
		this.updateContent();
	}

	private getColor(): string {
		const color = this.widgetContext.getSettings().get<string>("Color");
		return color || this.defaultColor;
	}

	private getFontSize(): string {
		const textSize = this.widgetContext.getSettings().get<string>("TextSize");
		switch (textSize) {
			case "small":
				return "10px";
			case "medium":
				return "14px";
			case "large":
				return "18px";
			case "extraLarge":
				return "22px";
			default:
				return "14px";
		}
	}

	private updateContent() {
		this.message = this.widgetContext.getSettings().get<string>("Message");
		this.color = "#" + this.getColor();
		this.fontSize = this.getFontSize();
	}
}

@NgModule({
	imports: [CommonModule],
	declarations: [HelloWorldComponent],
	entryComponents: [HelloWorldComponent]
})
export class HelloWorldModule {
}
