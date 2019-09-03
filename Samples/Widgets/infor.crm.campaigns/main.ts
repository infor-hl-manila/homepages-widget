import {
  CommonModule
} from "@angular/common";
import {
  Component,
  Input,
  NgModule,
  OnInit
} from "@angular/core";
import {
  SohoBusyIndicatorModule,
  SohoButtonModule,
  SohoComponentsModule
} from "@infor/sohoxi-angular";
import {
  IWidgetAction,
  IWidgetComponent,
  IWidgetContext,
  IWidgetInstance
} from "lime";
import {
  CampaignWorkspaceComponent
} from "./components/campaign-workspace.component";
import {
  CampaignsListComponent
} from "./components/campaigns-list.component";
import { DateTimePipe } from "./date.pipe";

@Component({
  template: `
    <campaigns-list></campaigns-list>
  `
})

export class CampaignsWidgetComponent implements IWidgetComponent {
@Input()
widgetContext: IWidgetContext;
@Input()
widgetInstance: IWidgetInstance;
  // tslint:disable-next-line:no-empty
  constructor() {}
}

@NgModule({
  imports: [
    CommonModule,
    SohoButtonModule,
    SohoBusyIndicatorModule,
    SohoComponentsModule
  ],
  declarations: [
    DateTimePipe,
    CampaignsListComponent,
    CampaignsWidgetComponent,
    CampaignWorkspaceComponent
  ],
  entryComponents: [
    CampaignsWidgetComponent,
    CampaignWorkspaceComponent
  ]
})

export class CampaignsWidgetModule { }

export const getActions = (): IWidgetAction[] => {
  return [
    {
      isPrimary: true,
      standardIconName: "#icon-launch",
      text: "Launch Web Application"
    }
  ];
};
