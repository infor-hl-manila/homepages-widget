import { IWidgetContext2, IWidgetInstance2, IWidgetAction } from "lime";
import { SubmenuComponent, getActions } from "./main";
import { SubmenuModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleFactory: SubmenuModuleNgFactory,
			componentType: SubmenuComponent
		}
	};
};