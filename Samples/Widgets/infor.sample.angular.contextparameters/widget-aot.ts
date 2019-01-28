import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { ContextParametersComponent } from "./main";
import { ContextParametersModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
    return {
        angularConfig: {
            moduleFactory: ContextParametersModuleNgFactory,
            componentType: ContextParametersComponent,
        },
    };
};
