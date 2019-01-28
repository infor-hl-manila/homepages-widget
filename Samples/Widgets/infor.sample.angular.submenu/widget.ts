import { IWidgetAction, IWidgetContext2, IWidgetInstance2 } from "lime";
import { getActions, SubmenuComponent, SubmenuModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(context),
		angularConfig: {
			moduleType: SubmenuModule,
			componentType: SubmenuComponent
		}
	};
};
