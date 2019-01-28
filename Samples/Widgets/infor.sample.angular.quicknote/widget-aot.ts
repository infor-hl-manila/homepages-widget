import { IWidgetAction, IWidgetContext2, IWidgetInstance2 } from "lime";
import { QuicknoteComponent, getActions } from "./main";
import { QuicknoteModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: QuicknoteModuleNgFactory,
			componentType: QuicknoteComponent
		},
		actions: getActions()
	};
};
