var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@infor/sohoxi-angular", "lime", "./core", "./pipes"], function (require, exports, common_1, core_1, sohoxi_angular_1, lime_1, core_2, pipes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardListComponent = /** @class */ (function () {
        function CardListComponent(changeDetectionRef) {
            this.changeDetectionRef = changeDetectionRef;
            this.items = [];
        }
        CardListComponent.prototype.ngOnInit = function () {
            var _this = this;
            var instance = this.widgetInstance;
            instance.settingsSaved = function () { return _this.updateSortOrder(); };
            instance.getMetadata = function () { return _this.getMetadata(); };
            this.items = core_2.mockData;
            this.updateSortOrder();
        };
        CardListComponent.prototype.updateSortOrder = function () {
            this.sortOrder = this.widgetContext.getSettings().get("order", "asc");
            this.changeDetectionRef.markForCheck();
        };
        CardListComponent.prototype.getMetadata = function () {
            // Dynamically create metadata for the standard metadata controlled settings UI.
            // For dynamic settings / values that need to be resolved asynchronously,
            // implement IWidgetInstance getMetadataAsync() instead.
            // For known/hardcoded values, place the metadata in the manifest instead.
            return [{
                    labelId: "order",
                    type: lime_1.WidgetSettingsType.selectorType,
                    name: "order",
                    defaultValue: this.items.length > 3 ? "asc" : "desc",
                    values: [
                        { textId: "ascending", value: "asc" },
                        { textId: "descending", value: "desc" }
                    ]
                }];
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CardListComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CardListComponent.prototype, "widgetInstance", void 0);
        CardListComponent = __decorate([
            core_1.Component({
                template: "\n\t\t<soho-listview>\n\t\t\t<li soho-listview-item\n\t\t\t\t *ngFor=\"let item of items | sortBy: sortOrder\">\n\t\t\t\t<p soho-listview-header>{{item.title}}</p>\n\t\t\t\t<p soho-listview-subheader>{{item.description}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t",
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
        ], CardListComponent);
        return CardListComponent;
    }());
    exports.CardListComponent = CardListComponent;
    var CardListModule = /** @class */ (function () {
        function CardListModule() {
        }
        CardListModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, sohoxi_angular_1.SohoListViewModule],
                declarations: [CardListComponent, pipes_1.SortByPipe],
                entryComponents: [CardListComponent]
            })
        ], CardListModule);
        return CardListModule;
    }());
    exports.CardListModule = CardListModule;
});
//# sourceMappingURL=main.js.map