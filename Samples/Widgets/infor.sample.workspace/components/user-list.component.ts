import { Component, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { IUser, UserService } from "../services/user.service";

@Component({
	selector: "sample-user-list",
	template: `
		<soho-listview>
			<li soho-listview-item *ngFor="let user of users$ | async" (click)="userClick.emit(user)">
				<p soho-listview-header>{{user.firstName}} {{user.lastName}}</p>
				<p soho-listview-subheader>{{user.email}}</p>
			</li>
		</soho-listview>
	`,
})
export class UserListComponent {
	@Output() userClick = new EventEmitter<IUser>();

	users$: Observable<IUser[]> = this.userService.users$;

	constructor(private userService: UserService) { }
}
