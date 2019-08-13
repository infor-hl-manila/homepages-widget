var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "./services/data.service"], function (require, exports, common_1, core_1, data_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CampaignsWidgetComponent = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function CampaignsWidgetComponent(dataService) {
            this.dataService = dataService;
        }
        CampaignsWidgetComponent.prototype.ngOnInit = function () { };
        CampaignsWidgetComponent = __decorate([
            core_1.Component({
                template: "<p>Hello World</p>"
            }),
            __metadata("design:paramtypes", [data_service_1.DataService])
        ], CampaignsWidgetComponent);
        return CampaignsWidgetComponent;
    }());
    exports.CampaignsWidgetComponent = CampaignsWidgetComponent;
    var CampaignsWidgetModule = /** @class */ (function () {
        function CampaignsWidgetModule() {
        }
        CampaignsWidgetModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    CampaignsWidgetComponent
                ],
                entryComponents: [
                    CampaignsWidgetComponent
                ]
            })
        ], CampaignsWidgetModule);
        return CampaignsWidgetModule;
    }());
    exports.CampaignsWidgetModule = CampaignsWidgetModule;
});
//# sourceMappingURL=main.js.map