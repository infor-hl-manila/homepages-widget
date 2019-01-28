import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { FindWidgetsComponent, FindWidgetsModule, getActions } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(context),
		angularConfig: {
			componentType: FindWidgetsComponent,
			moduleType: FindWidgetsModule,
		}
	};
};
