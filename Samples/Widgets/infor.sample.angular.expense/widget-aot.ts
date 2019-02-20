import { IWidgetContext2, IWidgetInstance2, IWidgetAction } from "lime";
import { ExpenseComponent, getActions } from "./main";
import { ExpenseModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleFactory: ExpenseModuleNgFactory,
			componentType: ExpenseComponent
		}
	};
};