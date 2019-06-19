import { Injectable, ViewContainerRef } from "@angular/core";
import { PanelComponentType, SohoContextualActionPanelService } from "@infor/sohoxi-angular";

@Injectable({
	providedIn: "root",
})
export class WorkspaceService {
	constructor(private capService: SohoContextualActionPanelService) { }

	open<T extends IWorkspaceComponent>(options: IWorkspaceOptions<T>) {
		const cap = this.capService.contextualactionpanel(options.component, options.viewRef);
		cap.options({
			centerTitle: true,
		});
		cap.buttons([
			{
				click: () => cap.close(),
				text: "Cancel",
				align: "left",
			} as SohoContextualActionPanelButton,
			{
				align: "center",
				cssClass: "btn-icon",
				icon: "#icon-launch",
				click: () => {
					cap.componentPanel.launchClicked();
					cap.close();
				},
			} as SohoContextualActionPanelButton,
			{
				text: "Submit",
				align: "right",
				click: () => {
					cap.componentPanel.submitClicked();
					cap.close();
				},
			} as SohoContextualActionPanelButton,
		]);
		cap.apply(component => {
			if (options.props) {
				for (const propertyKey in options.props) {
					if (options.props.hasOwnProperty(propertyKey)) {
						component[propertyKey] = options.props[propertyKey];
					}
				}
			}
		});
		cap.title(options.title || " ");
		cap.trigger("immediate");
		cap.open();
	}
}

export interface IWorkspaceComponent {
	submitClicked: () => void;
	launchClicked: () => void;
}

export interface IWorkspaceOptions<T> {
	component: PanelComponentType<T>;
	viewRef: ViewContainerRef;
	title?: string;
	props?: Partial<T>;
}
