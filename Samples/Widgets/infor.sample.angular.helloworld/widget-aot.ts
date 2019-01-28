import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { HelloWorldComponent } from "./main";
import { HelloWorldModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: HelloWorldModuleNgFactory,
			componentType: HelloWorldComponent
		}
	};
};
