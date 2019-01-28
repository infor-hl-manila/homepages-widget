import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { SharedModuleSampleOneModuleNgFactory } from "./main.ngfactory";
import { SharedModuleSampleOneModule, SharedModuleSampleOneComponent } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: SharedModuleSampleOneModuleNgFactory,
			componentType: SharedModuleSampleOneComponent
		}
	};
};
