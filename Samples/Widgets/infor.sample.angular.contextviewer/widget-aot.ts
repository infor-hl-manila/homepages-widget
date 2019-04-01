import { IWidgetContext, IWidgetInstance } from "lime";
import { ContextViewerComponent } from "./main";
import { ContextViewerModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
    return {
        angularConfig: {
            moduleFactory: ContextViewerModuleNgFactory,
            componentType: ContextViewerComponent,
        },
    };
};
