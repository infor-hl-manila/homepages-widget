import { IWidgetContext, IWidgetInstance } from "lime";
import { TicketsComponent, TicketsModule, getActions } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleType: TicketsModule,
			componentType: TicketsComponent
		}
	};
};
