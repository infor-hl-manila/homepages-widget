import { IWidgetContext, IWidgetInstance } from "lime";
import { MinifySampleModuleNgFactory } from "./main.ngfactory";
import { MinifySampleComponent, getActions } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		angularConfig: {
			moduleFactory: MinifySampleModuleNgFactory,
			componentType: MinifySampleComponent
		},
		actions: getActions()
	};
};
