import { IWidgetContext2, IWidgetInstance2, } from "lime";
import { CardListComponent } from "./main";
import { CardListModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: CardListModuleNgFactory,
			componentType: CardListComponent
		}
	};
};