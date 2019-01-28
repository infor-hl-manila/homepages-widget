import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { MinifySampleModuleNgFactory } from "./main.ngfactory";
import { MinifySampleComponent, getActions } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: MinifySampleModuleNgFactory,
			componentType: MinifySampleComponent
		},
		actions: getActions()
	};
};
