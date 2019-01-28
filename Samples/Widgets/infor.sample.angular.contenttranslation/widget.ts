import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ContentTranslationComponent, ContentTranslationModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
	return {
		angularConfig: {
			moduleType: ContentTranslationModule,
			componentType: ContentTranslationComponent,
		},
	};
};
