import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule, NgZone } from "@angular/core";
import { ILanguage, IWidgetComponent, IWidgetContext, IWidgetInstance, Log, StringUtil } from "lime";

interface IPerson {
	id: number;
	lastName: string;
	firstName: string;
	title: string;
	status: string;
	anniversary: string;
}

interface IMyLanguage extends ILanguage {
	title?: string;
	status?: string;
	anniversary?: string;
	noContent?: string;
}

@Component({
	template: `
	<div class="twelve columns lm-margin-md-t">
		<div *ngIf="person">
			<h2 class="lm-margin-xl-b">{{person?.id}} - {{person?.firstName}} {{person?.lastName}}</h2>

			<h3>{{language?.title}}</h3>
			<p>{{person?.title}}</p>

			<h3 class="lm-margin-lg-t">{{language?.status}}</h3>
			<p>{{person?.status}}</p>

			<h3 class="lm-margin-lg-t">{{language?.anniversary}}</h3>
			<p>{{person?.anniversary}}</p>
		</div>

		<p *ngIf="!person">{{language?.noContent}}</p>
	</div>
	`
})
export class W2WReceiverComponent implements AfterViewInit, IWidgetComponent {
	@Input()
	widgetContext: IWidgetContext;
	@Input()
	widgetInstance: IWidgetInstance;

	person: IPerson;
	language: IMyLanguage;

	private instanceId: string;
	private pageId: string;
	private messageType: string;
	private isHandlerRegistered: boolean;
	private logPrefix: string;

	constructor(private zone: NgZone) {}

	ngAfterViewInit(): void {
		const widgetContext = this.widgetContext;
		this.language = widgetContext.getLanguage();
		this.instanceId = widgetContext.getWidgetInstanceId();
		this.pageId = widgetContext.getPageId();
		this.logPrefix = `[${widgetContext.getId()}] `;

		// Subscribe to the event that is triggered when settings are saved to be able to update the message type
		this.widgetInstance.settingsSaved = () => {
			this.updateMessageType();
		};

		// Set initial message type used for communication
		this.updateMessageType();
	}

	private registerHandler(messageType: string): void {
		const callback = (args: IPerson) => this.handleMessage(args);
		infor.companyon.client.registerMessageHandler(messageType, callback);
		this.messageType = messageType;
		this.isHandlerRegistered = true;

		Log.debug(this.logPrefix + "Message handler registered for message type: " + messageType);
	}

	private unregisterHandler(messageType: string): void {
		infor.companyon.client.unRegisterMessageHandler(messageType);

		Log.debug(this.logPrefix + "Message handler unregistered for message type: " + messageType);
	}

	private updateMessageType(): void {
		const messageType = this.widgetContext.getSettings().get<string>("MessageType");
		const newMessageType = messageType + this.pageId;
		const original = this.messageType;
		if (!StringUtil.isNullOrWhitespace(messageType) && newMessageType !== original) {
			if (this.isHandlerRegistered) {
				this.unregisterHandler(original);
			}
			this.registerHandler(newMessageType);
		}
	}

	private handleMessage(person: IPerson): void {
		if (person) {
			this.zone.run(() => {
				this.person = person;
			});
		}

		Log.debug(this.logPrefix + "Received message from sender widget: " + JSON.stringify(person));
	}
}

@NgModule({
	imports: [CommonModule],
	declarations: [W2WReceiverComponent],
	entryComponents: [W2WReceiverComponent]
})
export class W2WReceiverModule {
}
