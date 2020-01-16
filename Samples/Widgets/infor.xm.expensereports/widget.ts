import { IWidgetContext, IWidgetInstance } from "lime";
import { ExpenseReportComponent, ExpenseReportModule, getActions } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleType: ExpenseReportModule,
			componentType: ExpenseReportComponent
		}
	};
};
