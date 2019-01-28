import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { WidgetComponent, WidgetModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => ({
	angularConfig: {
		moduleType: WidgetModule,
		componentType: WidgetComponent
	}
});
