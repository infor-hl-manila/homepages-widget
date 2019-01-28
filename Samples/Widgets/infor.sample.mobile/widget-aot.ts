import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { MobileWidgetComponent } from "./main";
import { MobileWidgetModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
   return {
      angularConfig: {
         moduleFactory: MobileWidgetModuleNgFactory,
         componentType: MobileWidgetComponent,
      },
   };
};
