import { Injectable, ViewContainerRef } from "@angular/core";
import { PanelComponentType, SohoContextualActionPanelRef, SohoContextualActionPanelService } from "@infor/sohoxi-angular";
import { IWorkspaceOptions } from "../services/reminder-workspace.service";

@Injectable({
  providedIn: "root",
})
export class ReminderWorkspaceService {
  capDialog: SohoContextualActionPanelRef<any>;

  constructor(private capService: SohoContextualActionPanelService) {}

  open<T extends IRWorkspaceComponent>(options: IWorkspaceOptions<T>) {
    this.capDialog = this.capService.contextualactionpanel(options.component, options.viewRef);

    this.capDialog.options({
      centerTitle: true,
    });
    this.capDialog.buttons([
      {
        text: "Cancel",
        align: "left",
        click: () => this.capDialog.close(),
      } as SohoContextualActionPanelButton,
      {
        icon: "#icon-launch",
        text: "View on Web Application",
        cssClass: "btn",
        align: "right",
        click: () => {
          this.capDialog.componentPanel.launchWebAppClicked();
        },
      } as SohoContextualActionPanelButton
    ]);
    this.capDialog.apply(component => {
      if (options.props) {
        for (const propertyKey in options.props) {
          if (options.props.hasOwnProperty(propertyKey)) {
            component[propertyKey] = options.props[propertyKey];
          }
        }
      }
    });
    this.capDialog.title(options.title || "Meeting Outcome");
    this.capDialog.trigger("immediate");
    this.capDialog.open();
  }

  close(): void {
    this.capDialog.close();
  }
}

export interface IRWorkspaceComponent {
  submitData: (dataModel: object) => void;
  launchWebAppClicked: () => void;
}

export interface IWorkspaceOptions<T> {
  component: PanelComponentType<T>;
  viewRef: ViewContainerRef;
  title?: string;
  props?: Partial<T>;
}
