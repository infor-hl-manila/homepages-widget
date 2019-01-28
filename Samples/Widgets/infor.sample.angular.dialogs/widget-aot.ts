import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { DialogsComponent } from "./main";
import { DialogsModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			componentType: DialogsComponent,
			moduleFactory: DialogsModuleNgFactory
		}
	};
};
