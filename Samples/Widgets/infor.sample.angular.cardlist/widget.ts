import { IWidgetContext2, IWidgetInstance2, } from "lime";
import { CardListComponent, CardListModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: CardListModule,
			componentType: CardListComponent
		}
	};
};
