import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ContentTranslationComponent } from "./main";
import { ContentTranslationModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
    return {
        angularConfig: {
            moduleFactory: ContentTranslationModuleNgFactory,
            componentType: ContentTranslationComponent,
        },
    };
};
