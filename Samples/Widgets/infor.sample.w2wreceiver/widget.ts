import { IWidgetContext2, IWidgetInstance2 } from "lime";
import {W2WReceiverComponent, W2WReceiverModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: W2WReceiverModule,
			componentType: W2WReceiverComponent
		}
	};
};
