export class ReceiptItem {
	fileName: string;
	receiptId: string;
	receiptSource: string;

	constructor(item: any) {
		this.fileName = item.fileName;
		this.receiptId = item.receiptId;
		this.receiptSource = item.receiptSource;
	}
}