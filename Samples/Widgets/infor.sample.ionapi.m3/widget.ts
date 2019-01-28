import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { IonApiM3Component, IonApiM3Module } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: IonApiM3Module,
			componentType: IonApiM3Component
		}
	};
};
