import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class UserService {
	private usersSubject = new BehaviorSubject(generateUsers());

	get users$(): Observable<IUser[]> {
		return this.usersSubject.pipe(map(deepCopy));
	}

	update(user: PartialWithId<IUser>) {
		const users = this.usersSubject.value;
		const index = users.findIndex(({ id }) => id === user.id);
		if (index === -1) {
			throw new Error(`Could not find user with id '${user.id}'`);
		}
		users[index] = { ...users[index], ...user };
		this.usersSubject.next(users);
	}
}

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	title: string;
	email: string;
	photoUrl: string;
}

type PartialWithId<T> = Partial<T> & { id: unknown };

function deepCopy<T>(value: T): T {
	// tslint:disable-next-line: no-unsafe-any
	return JSON.parse(JSON.stringify(value));
}

function generateUsers(): IUser[] {
	return [
		user({ firstName: "Eddard", lastName: "Stark", title: "Warden of the North", email: "ned@housestark.north" }),
		user({ firstName: "Jamie", lastName: "Lannister", title: "Kniggit", email: "jamie@kingsguard.gov" }),
		user({ firstName: "John", lastName: "Doe" }),
		user({ firstName: "James", lastName: "Bond", title: "Secret Agent" }),
		user({ firstName: "Bilbo", lastName: "Baggins", title: "Burglar" }),
	];

	function user(partial: Partial<IUser>): IUser {
		return {
			id: `id-${Math.random()}`,
			photoUrl: "https://picsum.photos/80",
			email: "example@example.com",
			firstName: "First",
			lastName: "Last",
			title: "Unknown",
			...partial,
		};
	}
}
