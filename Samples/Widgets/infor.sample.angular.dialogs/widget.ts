import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { DialogsComponent, DialogsModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: DialogsModule,
			componentType: DialogsComponent
		}
	};
};
