import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { RemindersWidgetComponent } from "./main";
import { RemindersWidgetModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: RemindersWidgetModuleNgFactory,
			componentType: RemindersWidgetComponent,
		},
	};
};
