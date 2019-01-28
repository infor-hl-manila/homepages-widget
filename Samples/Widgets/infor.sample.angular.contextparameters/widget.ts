import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ContextParametersComponent, ContextParametersModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: ContextParametersModule,
			componentType: ContextParametersComponent,
		},
	};
};
