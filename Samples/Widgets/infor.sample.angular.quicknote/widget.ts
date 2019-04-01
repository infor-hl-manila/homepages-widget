import { IWidgetAction, IWidgetContext, IWidgetInstance } from "lime";
import { getActions, QuicknoteComponent, QuicknoteModule } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	return {
		angularConfig: {
			moduleType: QuicknoteModule,
			componentType: QuicknoteComponent
		},
		actions: getActions()
	};
};
