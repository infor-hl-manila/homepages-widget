import { IWidgetContext, IWidgetInstance } from "lime";
import { getActions, QuicknoteComponent } from "./main";
import { QuicknoteModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		angularConfig: {
			moduleFactory: QuicknoteModuleNgFactory,
			componentType: QuicknoteComponent
		},
		actions: getActions()
	};
};
