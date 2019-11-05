import { IWidgetContext, IWidgetInstance } from "lime";
import { getActions, RemindersWidgetComponent, RemindersWidgetModule } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
  return {
    actions: getActions(context),
    angularConfig: {
      moduleType: RemindersWidgetModule,
      componentType: RemindersWidgetComponent
    }
  };
};
