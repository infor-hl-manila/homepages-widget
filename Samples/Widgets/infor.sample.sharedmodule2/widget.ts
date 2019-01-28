import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { SharedModuleSampleTwoComponent, SharedModuleSampleTwoModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: SharedModuleSampleTwoModule,
			componentType: SharedModuleSampleTwoComponent
		}
	};
};
