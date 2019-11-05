import { IWidgetContext, IWidgetInstance } from "lime";
import { getActions, RemindersWidgetComponent } from "./main";
import { RemindersWidgetModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleFactory: RemindersWidgetModuleNgFactory,
			componentType: RemindersWidgetComponent,
		},
	};
};
