import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { IonApiM3Component } from "./main";
import { IonApiM3ModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: IonApiM3ModuleNgFactory,
			componentType: IonApiM3Component
		}
	};
};