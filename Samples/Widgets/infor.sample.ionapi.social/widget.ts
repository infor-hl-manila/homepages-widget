import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { dataService, IonApiSocialComponent, IonApiSocialModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	dataService.init(context);
	return {
		angularConfig: {
			moduleType: IonApiSocialModule,
			componentType: IonApiSocialComponent
		}
	};
};
