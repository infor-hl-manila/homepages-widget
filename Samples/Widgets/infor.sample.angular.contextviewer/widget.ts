import { IWidgetContext, IWidgetInstance } from "lime";
import { ContextViewerComponent, ContextViewerModule } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		angularConfig: {
			moduleType: ContextViewerModule,
			componentType: ContextViewerComponent,
		},
	};
};
