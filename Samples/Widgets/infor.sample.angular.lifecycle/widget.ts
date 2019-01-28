import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { LifecycleComponent } from "./lifecycle.component";
import { LifecycleModule } from "./lifecycle.module";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: LifecycleModule,
			componentType: LifecycleComponent,
		},
	};
};
