define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) {
<<<<<<< HEAD
        main_1.dataService.init(context);
=======
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
        return {
            angularConfig: {
                moduleType: main_1.IonApiSocialModule,
                componentType: main_1.IonApiSocialComponent
            }
        };
    };
});
//# sourceMappingURL=widget.js.map