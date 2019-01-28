import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { SharedModuleSampleOneComponent, SharedModuleSampleOneModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: SharedModuleSampleOneModule,
			componentType: SharedModuleSampleOneComponent
		}
	};
};
