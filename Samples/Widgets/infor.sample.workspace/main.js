var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "./components/user-list.component", "./components/user-workspace.component", "./services/workspace.service"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, user_list_component_1, user_workspace_component_1, workspace_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorkspaceWidgetComponent = /** @class */ (function () {
        function WorkspaceWidgetComponent(workspaceService, viewRef) {
            this.workspaceService = workspaceService;
            this.viewRef = viewRef;
        }
        WorkspaceWidgetComponent.prototype.openWorkspace = function (user) {
            this.workspaceService.open({
                component: user_workspace_component_1.UserWorkspaceComponent,
                viewRef: this.viewRef,
                props: {
                    user: user,
                    widgetContext: this.widgetContext,
                },
            });
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], WorkspaceWidgetComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], WorkspaceWidgetComponent.prototype, "widgetInstance", void 0);
        WorkspaceWidgetComponent = __decorate([
            core_1.Component({
                template: "\n\t\t<sample-user-list (userClick)=\"openWorkspace($event)\"></sample-user-list>\n\t",
            }),
            __metadata("design:paramtypes", [workspace_service_1.WorkspaceService, core_1.ViewContainerRef])
        ], WorkspaceWidgetComponent);
        return WorkspaceWidgetComponent;
    }());
    exports.WorkspaceWidgetComponent = WorkspaceWidgetComponent;
    var WorkspaceWidgetModule = /** @class */ (function () {
        function WorkspaceWidgetModule() {
        }
        WorkspaceWidgetModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    sohoxi_angular_1.SohoButtonModule,
                    sohoxi_angular_1.SohoListViewModule,
                    sohoxi_angular_1.SohoIconModule,
                ],
                declarations: [
                    WorkspaceWidgetComponent,
                    user_workspace_component_1.UserWorkspaceComponent,
                    user_list_component_1.UserListComponent,
                ],
                entryComponents: [
                    WorkspaceWidgetComponent,
                    user_workspace_component_1.UserWorkspaceComponent,
                ],
            })
        ], WorkspaceWidgetModule);
        return WorkspaceWidgetModule;
    }());
    exports.WorkspaceWidgetModule = WorkspaceWidgetModule;
});
//# sourceMappingURL=main.js.map