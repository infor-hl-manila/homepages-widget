import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { W2WSenderComponent, W2WSenderModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: W2WSenderModule,
			componentType: W2WSenderComponent
		}
	};
};
