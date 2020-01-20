import { IWidgetContext, IWidgetInstance } from "lime";
import { TicketsComponent } from "./main";
import { TicketsModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		angularConfig: {
			moduleFactory: TicketsModuleNgFactory,
			componentType: TicketsComponent
		}
	};
};
