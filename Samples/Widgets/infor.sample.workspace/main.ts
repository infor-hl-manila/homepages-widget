import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, ViewContainerRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoButtonModule, SohoIconModule, SohoListViewModule } from "@infor/sohoxi-angular";
import { IWidgetComponent, IWidgetContext2, IWidgetInstance2 } from "lime";
import { UserListComponent } from "./components/user-list.component";
import { UserWorkspaceComponent } from "./components/user-workspace.component";
import { IUser } from "./services/user.service";
import { WorkspaceService } from "./services/workspace.service";

@Component({
	template: `
		<sample-user-list (userClick)="openWorkspace($event)"></sample-user-list>
	`,
})
export class WorkspaceWidgetComponent implements IWidgetComponent {
	@Input() widgetContext: IWidgetContext2;
	@Input() widgetInstance: IWidgetInstance2;

	constructor(private workspaceService: WorkspaceService, private viewRef: ViewContainerRef) { }

	openWorkspace(user: IUser) {
		this.workspaceService.open({
			component: UserWorkspaceComponent,
			viewRef: this.viewRef,
			props: {
				user: user,
				widgetContext: this.widgetContext,
			},
		});
	}
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SohoButtonModule,
		SohoListViewModule,
		SohoIconModule,
	],
	declarations: [
		WorkspaceWidgetComponent,
		UserWorkspaceComponent,
		UserListComponent,
	],
	entryComponents: [
		WorkspaceWidgetComponent,
		UserWorkspaceComponent,
	],
})
export class WorkspaceWidgetModule { }
