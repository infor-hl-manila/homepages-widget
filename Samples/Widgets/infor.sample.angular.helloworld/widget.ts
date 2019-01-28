import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { HelloWorldComponent, HelloWorldModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: HelloWorldModule,
			componentType: HelloWorldComponent
		}
	};
};
