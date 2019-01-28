import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { getActions, ResponsiveWidgetComponent, ResponsiveWidgetModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		actions: getActions(),
		angularConfig: {
			moduleType: ResponsiveWidgetModule,
			componentType: ResponsiveWidgetComponent
		}
	};
};
