import { IWidgetContext, IWidgetInstance, IWidgetAction } from "lime";
import { SubmenuComponent, getActions } from "./main";
import { SubmenuModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleFactory: SubmenuModuleNgFactory,
			componentType: SubmenuComponent
		}
	};
};