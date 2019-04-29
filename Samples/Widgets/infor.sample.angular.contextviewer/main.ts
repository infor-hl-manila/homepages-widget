import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoTextAreaModule } from "@infor/sohoxi-angular";
import { IWidgetComponent, IWidgetContext, IWidgetInstance } from "lime";
import { Subscription } from "rxjs";

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
	private messageSubscription?: Subscription;

	ngAfterViewInit() {
		// Subscribe to the event that is triggered when settings are saved to update message type to subscribe to
		this.widgetInstance.settingsSaved = () => {
			this.registerHandler();
		};

		this.registerHandler();
	}

	private registerHandler(): void {
		// Unregister any existing handler
		if (this.messageSubscription) {
			this.messageSubscription.unsubscribe();
		}

		// Register a handler with the message type defined in settings
		this.messageType = this.widgetContext.getSettings().getString("MessageType");
		this.messageSubscription = this.widgetContext.receive(this.messageType).subscribe(data => {
			this.messageData = JSON.stringify(data, null, 3);
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
