import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ResponsiveWidgetComponent, getActions } from "./main";
import { ResponsiveWidgetModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(),
		angularConfig: {
			moduleFactory: ResponsiveWidgetModuleNgFactory,
			componentType: ResponsiveWidgetComponent
		}
	};
};