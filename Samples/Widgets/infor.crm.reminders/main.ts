import { CommonModule } from "@angular/common";
import { Component, Input, NgModule } from "@angular/core";
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

export class RemindersWidgetComponent implements IWidgetComponent {
  @Input() widgetContext: IWidgetContext;
	@Input() widgetInstance: IWidgetInstance;

  constructor() {/**/}

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
