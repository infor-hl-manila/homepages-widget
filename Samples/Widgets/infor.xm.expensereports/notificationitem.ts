export class NotificationItem {
	message: string;
	notificationClass: string;
	priorityLevel: number;

	constructor(item: any) {
		this.message = item.message;
		this.notificationClass = item.notificationClass;
		this.priorityLevel = item.priorityLevel;
	}
}