import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { WidgetComponent } from "./main";
import { WidgetModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => ({
	angularConfig: {
		moduleFactory: WidgetModuleNgFactory,
		componentType: WidgetComponent
	}
});