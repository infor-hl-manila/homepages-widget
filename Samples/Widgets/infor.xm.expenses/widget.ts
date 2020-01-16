import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ExpenseComponent, ExpenseModule, getActions } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleType: ExpenseModule,
			componentType: ExpenseComponent
		}
	};
};
