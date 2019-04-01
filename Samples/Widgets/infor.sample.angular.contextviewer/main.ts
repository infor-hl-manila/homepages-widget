import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoTextAreaModule } from "@infor/sohoxi-angular";
import { IWidgetComponent, IWidgetContext, IWidgetInstance } from "lime";

@Component({
	template: `
	<div class="lm-height-full">
		<textarea style="height: 100%;" soho-textarea [(ngModel)]="messageData"></textarea>
	</div>`
})
export class ContextViewerComponent implements AfterViewInit, IWidgetComponent {
	@Input() widgetContext: IWidgetContext;
	@Input() widgetInstance: IWidgetInstance;
	messageData: string;

	private messageType: string;

	ngAfterViewInit() {
		// Subscribe to the event that is triggered when settings are saved to update message type to subscribe to
		this.widgetInstance.settingsSaved = () => {
			this.registerHandler();
		};

		this.registerHandler();
	}

	private registerHandler(): void {
		// Unregister any existing handler
		if (this.messageType) {
			infor.companyon.client.unRegisterMessageHandler(this.messageType);
		}

		// Register a handler with the message type defined in settings
		this.messageType = this.widgetContext.getSettings().getString("MessageType");
		const self = this;
		infor.companyon.client.registerMessageHandler(this.messageType, (data: {}) => {
			self.messageData = JSON.stringify(data, null, 3);
		});
	}
}

@NgModule({
	imports: [CommonModule, SohoTextAreaModule, FormsModule],
	declarations: [ContextViewerComponent],
	entryComponents: [ContextViewerComponent]
})
export class ContextViewerModule {
}
