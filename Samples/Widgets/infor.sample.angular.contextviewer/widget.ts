import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ContextViewerComponent, ContextViewerModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: ContextViewerModule,
			componentType: ContextViewerComponent,
		},
	};
};
