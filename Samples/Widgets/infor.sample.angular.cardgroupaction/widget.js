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
    var CardGroupActionComponent = /** @class */ (function () {
        function CardGroupActionComponent() {
            this.originalItems = [];
            this.sortedItems = [];
            this.category = ["All", "Customer", "Warehouse"];
            this.logPrefix = "[CardGroupActionComponent] ";
            this.reverseKey = "reverse";
            this.reverse = false;
        }
        CardGroupActionComponent.prototype.ngAfterViewInit = function () {
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
                    description: "Stocklevel has reached 100 items",
                    category: "Warehouse"
                },
                {
                    title: "Customer returns",
                    description: "Customer returns has increased with 10%",
                    category: "Customer"
                },
                {
                    title: "Customer approved",
                    description: "Customer Hulk Holding has been approved.",
                    category: "Customer"
                },
                {
                    title: "Stock level Chair-3",
                    description: "WHLO 200 has 500 items",
                    category: "Warehouse"
                },
                {
                    title: "Planned machine maintenance",
                    description: "Planned time",
                    category: "Warehouse"
                }
            ];
            // Check order by and create the filtered collection
            // Create a new sorted array
            this.originalItems = items;
            this.sortedItems = this.sortCollection(items, this.reverse);
        };
        CardGroupActionComponent.prototype.onRendered = function (event) {
            this.logInfo("Rendered listview: " + event);
        };
        CardGroupActionComponent.prototype.onSelected = function (event) {
            var filterChoice = $(event.args).text().trim();
            if (filterChoice !== this.category[0]) {
                var filterItems = this.originalItems.filter(function (item) { return item.category == filterChoice; });
                this.sortedItems = this.sortCollection(filterItems, this.reverse);
            }
            else {
                this.sortedItems = this.sortCollection(this.originalItems, this.reverse);
            }
        };
        CardGroupActionComponent.prototype.onSorted = function (event) {
            this.logInfo("Sorted: " + event);
        };
        CardGroupActionComponent.prototype.createMetadata = function () {
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
        CardGroupActionComponent.prototype.sortCollection = function (items, reverse) {
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
        CardGroupActionComponent.prototype.logInfo = function (message, ex) {
            lime_1.Log.info(this.logPrefix + message, ex);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CardGroupActionComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CardGroupActionComponent.prototype, "widgetInstance", void 0);
        CardGroupActionComponent = __decorate([
            core_1.Component({
                template: "\n\t<div class=\"card-content\">\n\t<!-- Cardgroup Action with filter menu -->\n\t\t<div class=\"card-group-action\">\n\t\t\t\t<soho-toolbar>\n\t\t\t\t\t<soho-toolbar-title>\n\t\t\t\t\tCategory\n\t\t\t\t\t</soho-toolbar-title>\n\t\t\t\t\t<soho-toolbar-button-set>\n\t\t\t\t\t<button soho-menu-button icon=\"filter\" menu=\"filtermenu\" (selected)=\"onSelected($event)\"></button>\n\t\t\t\t\t<ul soho-popupmenu id=\"filtermenu\">\n\t\t\t\t\t\t<li soho-popupmenu-item *ngFor=\"let item of category\"><a soho-popupmenu-label>{{item}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t</soho-toolbar-button-set>\n\t\t\t\t</soho-toolbar>\n\t\t</div>\n\t<!-- Listview with items to filter -->\n\t\t<soho-listview id=\"listview\"\n\t\t\t(rendered)=\"onRendered($event)\"\n\t\t\t(sorted)=\"onSorted($event)\">\n\t\t\t<li soho-listview-item *ngFor=\"let item of sortedItems\">\n\t\t\t\t<p soho-listview-header>{{item.title}}</p>\n\t\t\t\t<p soho-listview-subheader>{{item.description}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t</div>",
                styles: ["\n\t\t.card-content {\n\t\t\toverflow: hidden;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\t.card-group-action {\n\t\t\tflex: 0 0 auto;\n\t\t}\n\t\t#listview {\n\t\t\toverflow: auto;\n\t\t\tflex: 0 1 auto;\n\t\t}\n\t\t"]
            })
        ], CardGroupActionComponent);
        return CardGroupActionComponent;
    }());
    exports.CardGroupActionComponent = CardGroupActionComponent;
    var CardGroupActionModule = /** @class */ (function () {
        function CardGroupActionModule() {
        }
        CardGroupActionModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, sohoxi_angular_1.SohoComponentsModule],
                declarations: [CardGroupActionComponent],
                entryComponents: [CardGroupActionComponent]
            })
        ], CardGroupActionModule);
        return CardGroupActionModule;
    }());
    exports.CardGroupActionModule = CardGroupActionModule;
    // Widget factory function
    exports.widgetFactory = function (context) {
        return {
            angularConfig: {
                moduleType: CardGroupActionModule,
                componentType: CardGroupActionComponent
            }
        };
    };
});
//# sourceMappingURL=widget.js.map