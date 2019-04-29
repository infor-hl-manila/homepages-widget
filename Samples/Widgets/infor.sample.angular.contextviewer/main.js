var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextViewerComponent = /** @class */ (function () {
        function ContextViewerComponent() {
        }
        ContextViewerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // Subscribe to the event that is triggered when settings are saved to update message type to subscribe to
            this.widgetInstance.settingsSaved = function () {
                _this.registerHandler();
            };
            this.registerHandler();
        };
        ContextViewerComponent.prototype.registerHandler = function () {
            var _this = this;
            // Unregister any existing handler
            if (this.messageSubscription) {
                this.messageSubscription.unsubscribe();
            }
            // Register a handler with the message type defined in settings
            this.messageType = this.widgetContext.getSettings().getString("MessageType");
            this.messageSubscription = this.widgetContext.receive(this.messageType).subscribe(function (data) {
                _this.messageData = JSON.stringify(data, null, 3);
            });
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], ContextViewerComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], ContextViewerComponent.prototype, "widgetInstance", void 0);
        ContextViewerComponent = __decorate([
            core_1.Component({
                template: "\n\t<div class=\"lm-height-full\">\n\t\t<textarea style=\"height: 100%;\" soho-textarea [(ngModel)]=\"messageData\"></textarea>\n\t</div>"
            })
        ], ContextViewerComponent);
        return ContextViewerComponent;
    }());
    exports.ContextViewerComponent = ContextViewerComponent;
    var ContextViewerModule = /** @class */ (function () {
        function ContextViewerModule() {
        }
        ContextViewerModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, sohoxi_angular_1.SohoTextAreaModule, forms_1.FormsModule],
                declarations: [ContextViewerComponent],
                entryComponents: [ContextViewerComponent]
            })
        ], ContextViewerModule);
        return ContextViewerModule;
    }());
    exports.ContextViewerModule = ContextViewerModule;
});
//# sourceMappingURL=main.js.map