import { IWidgetAction, IWidgetContext, IWidgetInstance } from "lime";
import { QuicknoteComponent, getActions } from "./main";
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
