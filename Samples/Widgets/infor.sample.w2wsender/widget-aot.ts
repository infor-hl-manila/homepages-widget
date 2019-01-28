import { W2WSenderComponent } from "./main";
import { W2WSenderModuleNgFactory } from "./main.ngfactory";
import { IWidgetContext2, IWidgetInstance2 } from "lime";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: W2WSenderModuleNgFactory,
			componentType: W2WSenderComponent
		}
	};
};
