import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { IonApiSocialComponent, dataService } from "./main";
import { IonApiSocialModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	dataService.init(context);
	return {
		angularConfig: {
			moduleFactory: IonApiSocialModuleNgFactory,
			componentType: IonApiSocialComponent
		}
	};
};