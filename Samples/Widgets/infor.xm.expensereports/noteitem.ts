export class NoteItem {
	date: number;
	noteMessage: string;
	noteOwner: string;

	constructor(item: any) {
		this.date = item.date;
		this.noteMessage = item.noteMessage;
		this.noteOwner = item.noteOwner;
	}
}