import { IWidgetAction, IWidgetContext2, IWidgetInstance2 } from "lime";
import { ExpenseComponent, ExpenseModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: ExpenseModule,
			componentType: ExpenseComponent
		}
	};
};
