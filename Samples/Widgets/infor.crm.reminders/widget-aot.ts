import { IWidgetContext, IWidgetInstance } from "lime";
import { RemindersWidgetComponent } from "./main";
import { RemindersWidgetModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		angularConfig: {
			moduleFactory: RemindersWidgetModuleNgFactory,
			componentType: RemindersWidgetComponent,
		},
	};
};
