import { IWidgetContext, IWidgetInstance } from "lime";
import { SharedModuleSampleOneModuleNgFactory } from "./main.ngfactory";
import { SharedModuleSampleOneModule, SharedModuleSampleOneComponent } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		angularConfig: {
			moduleFactory: SharedModuleSampleOneModuleNgFactory,
			componentType: SharedModuleSampleOneComponent
		}
	};
};
