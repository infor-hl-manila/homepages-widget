import { IWidgetContext2, IWidgetInstance2, IWidgetAction } from "lime";
import { ExpenseReportComponent, getActions } from "./main";
import { ExpenseReportModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleFactory: ExpenseReportModuleNgFactory,
			componentType: ExpenseReportComponent
		}
	};
};