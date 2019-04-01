import { IWidgetContext, IWidgetInstance } from "lime";
import { IonApiSocialComponent, dataService } from "./main";
import { IonApiSocialModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	dataService.init(context);
	return {
		angularConfig: {
			moduleFactory: IonApiSocialModuleNgFactory,
			componentType: IonApiSocialComponent
		}
	};
};