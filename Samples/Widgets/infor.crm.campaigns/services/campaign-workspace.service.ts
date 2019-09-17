import {
  Injectable,
  ViewContainerRef
} from "@angular/core";
import {
  PanelComponentType,
  SohoContextualActionPanelRef,
  SohoContextualActionPanelService
} from "@infor/sohoxi-angular";
import {
  IWorkspaceOptions
} from "./campaign-workspace.service";

@Injectable({
  providedIn: "root"
})

export class CampaignWorkspaceService {
  capDialog: SohoContextualActionPanelRef<any>;
  title: string;

  constructor(private capService: SohoContextualActionPanelService) {}

  open<T extends ICWorkspaceComponent>(options: IWorkspaceOptions<T>) {
    this.capDialog = this.capService.contextualactionpanel(options.component, options.viewRef);

    this.capDialog.options({
      centerTitle: true,
    });
    this.capDialog.buttons([
      {
        align: "left",
        icon: "#icon-close",
        cssClass: "btn-icon",
        click: () => this.capDialog.close(),
      } as SohoContextualActionPanelButton,
      {
        icon: "#icon-launch",
        align: "right",
        cssClass: "btn-icon",
        click: () => this.capDialog.componentPanel.campaignWebAppClicked(),
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
    this.capDialog.title("Campaign Details");
    this.capDialog.trigger("immediate");
    this.capDialog.open();
  }

  close(refresh?: boolean): void {
    this.capDialog.close(true);
  }
}

export interface ICWorkspaceComponent {
  campaignWebAppClicked: () => void;
}

export interface IWorkspaceOptions<T> {
  component: PanelComponentType<T>;
  viewRef: ViewContainerRef;
  title?: string;
  props?: Partial<T>;
}
