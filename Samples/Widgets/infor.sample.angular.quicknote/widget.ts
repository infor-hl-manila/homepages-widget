import { IWidgetAction, IWidgetContext2, IWidgetInstance2 } from "lime";
import { getActions, QuicknoteComponent, QuicknoteModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: QuicknoteModule,
			componentType: QuicknoteComponent
		},
		actions: getActions()
	};
};
