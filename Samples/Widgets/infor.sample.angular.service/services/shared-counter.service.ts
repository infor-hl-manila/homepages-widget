import { Injectable } from "@angular/core";
import { Counter } from "./counter";

/**
 * This service is provided in the WidgetComponent and DialogComponent.
 * This will create one instance of the service in each individual component tree,
 * which means that while the state is shared inside the trees themselves, nothing
 * is shared between them.
 */
@Injectable()
export class SharedCounterService extends Counter {
	constructor() {
		super("SharedCounterService");
	}
}
