import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ContextViewerComponent } from "./main";
import { ContextViewerModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
    return {
        angularConfig: {
            moduleFactory: ContextViewerModuleNgFactory,
            componentType: ContextViewerComponent,
        },
    };
};
