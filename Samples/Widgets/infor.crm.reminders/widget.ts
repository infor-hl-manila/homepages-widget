import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { getActions, RemindersWidgetComponent, RemindersWidgetModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
  return {
    actions: getActions(context),
    angularConfig: {
      moduleType: RemindersWidgetModule,
      componentType: RemindersWidgetComponent
    }
  };
};
