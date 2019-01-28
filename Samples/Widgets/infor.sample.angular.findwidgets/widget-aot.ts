import { IWidgetAction, IWidgetContext2, IWidgetInstance2 } from "lime";
import { FindWidgetsComponent, getActions } from "./main";
import { FindWidgetsModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(context),
		angularConfig: {
			componentType: FindWidgetsComponent,
			moduleFactory: FindWidgetsModuleNgFactory
		}
	};
};
