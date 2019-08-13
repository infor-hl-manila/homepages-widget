var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@infor/sohoxi-angular", "lime"], function (require, exports, common_1, core_1, sohoxi_angular_1, lime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardItem = /** @class */ (function () {
        function CardItem() {
        }
        return CardItem;
    }());
    var CardListComponent = /** @class */ (function () {
        function CardListComponent() {
            this.sortedItems = [];
            this.logPrefix = "[CardListComponent] ";
            this.reverseKey = "reverse";
            this.reverse = false;
        }
        CardListComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var settings = this.widgetContext.getSettings();
            var reverseSetting = settings.getString(this.reverseKey, null);
            if (reverseSetting == null) {
                // Store the default setting
                reverseSetting = "false";
                settings.set(this.reverseKey, reverseSetting);
            }
            if (reverseSetting.toLowerCase() === "true") {
                this.reverse = true;
            }
            var instance = this.widgetInstance;
            instance.settingsOpening = function (options) {
                _this.logInfo("settingsOpening");
            };
            instance.getMetadata = function () {
                return _this.createMetadata();
            };
            instance.settingsSaved = function () {
                // Handle when settings are saved to update internal state
                var reverseSettings = _this.widgetContext.getSettings().getString(_this.reverseKey, "false");
                _this.reverse = reverseSettings === "true";
                _this.sortedItems = _this.sortCollection(_this.sortedItems, _this.reverse);
            };
            // Get items
            var items = [
                {
                    isError: true,
                    title: "Stock level 31-22",
                    description: "Stocklevel has reached 100 items"
                },
                {
                    title: "Customer returns",
                    description: "Customer returns has increased with 10%"
                },
                {
                    title: "Customer approved",
                    description: "Customer Hulk Holding has been approved."
                },
                {
                    title: "Stock level Chair-3",
                    description: "WHLO 200 has 500 items"
                },
                {
                    title: "Planned machine maintenance",
                    description: "Planned time"
                }
            ];
            // Check order by and create the filtered collection
            // Create a new sorted array
            this.sortedItems = this.sortCollection(items, this.reverse);
        };
        CardListComponent.prototype.onRendered = function (event) {
            this.logInfo("Rendered listview: " + event);
        };
        CardListComponent.prototype.onSelected = function (event) {
            this.logInfo("Selected item: " + event);
        };
        CardListComponent.prototype.onSorted = function (event) {
            this.logInfo("Sorted: " + event);
        };
        CardListComponent.prototype.createMetadata = function () {
            // Dynamically create meta data for the metadata controlled settings UI
            var metadata = [];
            var widgetSetting = {
                labelId: "order",
                type: lime_1.WidgetSettingsType.selectorType,
                name: this.reverseKey,
                defaultValue: "false",
            };
            widgetSetting.values = [{ textId: "ascending", value: "false" }, { textId: "descending", value: "true" }];
            metadata.push(widgetSetting);
            return metadata;
        };
        CardListComponent.prototype.sortCollection = function (items, reverse) {
            return items.concat().sort(function (a, b) {
                var s1 = a.title;
                var s2 = b.title;
                if (reverse) {
                    return s2.localeCompare(s1);
                }
                else {
                    return s1.localeCompare(s2);
                }
            });
        };
        CardListComponent.prototype.logInfo = function (message, ex) {
            lime_1.Log.info(this.logPrefix + message, ex);
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
                template: "\n\t<div>\n\t\t<soho-listview\n\t\t\t(rendered)=\"onRendered($event)\"\n\t\t\t(selected)=\"onSelected($event)\"\n\t\t\t(sorted)=\"onSorted($event)\">\n\t\t\t<li soho-listview-item *ngFor=\"let item of sortedItems\">\n\t\t\t\t<p soho-listview-header>{{item.title}}</p>\n\t\t\t\t<p soho-listview-subheader>{{item.description}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t</div>"
            })
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
                declarations: [CardListComponent],
                entryComponents: [CardListComponent]
            })
        ], CardListModule);
        return CardListModule;
    }());
    exports.CardListModule = CardListModule;
});
//# sourceMappingURL=main.js.map