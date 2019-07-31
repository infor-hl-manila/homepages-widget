import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoBusyIndicatorModule, SohoButtonModule, SohoComponentsModule, SohoIconModule, } from "@infor/sohoxi-angular";
import {
  IWidgetAction,
  IWidgetComponent,
  IWidgetContext,
  IWidgetContext2,
  IWidgetInstance,
  IWidgetInstance2
} from "lime";
import { ReminderWorkspaceComponent } from "./components/reminder-workspace.component";
import { RemindersListComponent } from "./components/reminders-list.component";
import { DateTimePipe } from "./datetime.pipe";
import { SortFilterService } from "./services/sort-filter.service";

@Component({
  template: `
  <reminders-list></reminders-list>
  `
})

export class RemindersWidgetComponent implements OnInit, IWidgetComponent {
  @Input() widgetContext: IWidgetContext;
	@Input() widgetInstance: IWidgetInstance;

  constructor() {/**/}

  ngOnInit(): void {
    this.widgetInstance.actions[0].execute = () => this.inforCRMiOS();
    this.widgetInstance.actions[1].execute = () => this.webAppCRM();
  }

  inforCRMiOS(): void {
    this.widgetContext.launch( {url: "https://itunes.apple.com/us/app/infor-cloudsuite-crm-mobile/id1401846395?ls=1&mt=8"} );
  }

  private webAppCRM(): void {
    const logicalID = this.widgetContext.getLogicalId();
    const form = encodeURIComponent(`CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Activities,InitialCommand=Refresh))`);
    const url = `?LogicalId=${logicalID}&form=${form}`;

    this.widgetContext.launch({ url: url, resolve: true });
  }
}

@NgModule({
  imports: [
    CommonModule,
    SohoBusyIndicatorModule,
    FormsModule,
    SohoButtonModule,
    SohoComponentsModule,
    SohoIconModule,
  ],
  declarations: [
    DateTimePipe,
    RemindersWidgetComponent,
    RemindersListComponent,
    ReminderWorkspaceComponent
  ],
  entryComponents: [
    RemindersWidgetComponent,
    ReminderWorkspaceComponent
  ],
  providers: [
    SortFilterService
  ]
})

export class RemindersWidgetModule { }

export const getActions = (context: IWidgetContext): IWidgetAction[] => {
  const language = context.getLanguage();
  return [{
    text: language.get("inforCRMiOS")
  },
  {
    text: language.get("launchWebApp")
  }];
};
