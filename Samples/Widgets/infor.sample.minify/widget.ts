import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { getActions, MinifySampleComponent, MinifySampleModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: MinifySampleModule,
			componentType: MinifySampleComponent
		},
		actions: getActions()
	};
};
