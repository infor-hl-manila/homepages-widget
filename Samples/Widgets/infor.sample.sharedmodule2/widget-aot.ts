import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { SharedModuleSampleTwoComponent } from "./main";
import { SharedModuleSampleTwoModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: SharedModuleSampleTwoModuleNgFactory,
			componentType: SharedModuleSampleTwoComponent
		}
	};
};
