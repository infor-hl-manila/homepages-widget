import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { W2WReceiverComponent } from "./main";
import { W2WReceiverModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: W2WReceiverModuleNgFactory,
			componentType: W2WReceiverComponent
		}
	};
};
