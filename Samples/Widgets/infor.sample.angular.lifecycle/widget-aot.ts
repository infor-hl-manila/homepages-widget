import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { LifecycleComponent } from "./lifecycle.component";
import { LifecycleModuleNgFactory } from "./lifecycle.module.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleFactory: LifecycleModuleNgFactory,
			componentType: LifecycleComponent,
		},
	};
};
