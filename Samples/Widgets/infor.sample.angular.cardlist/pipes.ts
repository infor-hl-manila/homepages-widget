import { Pipe, PipeTransform } from "@angular/core";
import { ICardItem } from "./core";

@Pipe({ name: "sortBy" })
export class SortByPipe implements PipeTransform {
	transform(items: ICardItem[], sortOrder: string): ICardItem[] {
		return items.sort((a: ICardItem, b: ICardItem) => {
			const titleA = a.title;
			const titleB = b.title;

			return sortOrder === "asc" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
		});
	}
}
