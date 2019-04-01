import { IWidgetContext, IWidgetInstance } from "lime";
import { dataService, IonApiSocialComponent, IonApiSocialModule } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
	dataService.init(context);
	return {
		angularConfig: {
			moduleType: IonApiSocialModule,
			componentType: IonApiSocialComponent
		}
	};
};
