var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "lime"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, lime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuicknoteComponent = /** @class */ (function () {
        function QuicknoteComponent() {
            this.items = [];
            this.settingsKeyItems = "items";
        }
        QuicknoteComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.lang = this.widgetContext.getLanguage();
            var settings = this.widgetContext.getSettings();
            // Set custom title
            this.widgetContext.setTitle("QuickNote");
            var savedItems = settings.get(this.settingsKeyItems);
            if (savedItems) {
                this.items = savedItems;
            }
            else {
                settings.set(this.settingsKeyItems, this.items);
            }
            // Add custom widget action to widget instance
            // Perhaps there is a better way but extend doesn't exist in Angular 2 and icon must be set earlier
            var customAction = this.widgetInstance.actions[0];
            customAction.execute = function () { _this.clear(); };
            customAction.isEnabled = this.items.length ? true : false;
            customAction.text = this.lang.get("clear");
        };
        QuicknoteComponent.prototype.addNote = function (value) {
            if (value) {
                if (lime_1.ArrayUtil.contains(this.items, value)) {
                    lime_1.ArrayUtil.remove(this.items, value);
                }
                this.items.unshift(value);
                this.widgetInstance.actions[0].isEnabled = true;
                this.widgetContext.save();
            }
            this.text = null;
        };
        // Clear is used from Widget header
        QuicknoteComponent.prototype.clear = function () {
            this.items.length = 0;
            this.widgetInstance.actions[0].isEnabled = false;
            this.widgetContext.save();
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], QuicknoteComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], QuicknoteComponent.prototype, "widgetInstance", void 0);
        QuicknoteComponent = __decorate([
            core_1.Component({
                template: "\n\t<div class=\"row lm-padding-sm-b lm-padding-sm-t\">\n\t\t<div class=\"eight columns\">\n\t\t\t<input type=\"text\" [(ngModel)]=\"text\">\n\t\t</div>\n\t\t<div class=\"four columns\">\n\t\t\t<button soho-button=\"tertiary\" [disabled]=\"!text\" (click)=\"addNote(text)\">{{lang?.add}}</button>\n\t\t</div>\n\t</div>\n\t<soho-listview>\n\t\t<li soho-listview-item *ngFor=\"let item of items\">\n\t\t\t<p soho-listview-header>{{item}}</p>\n\t\t</li>\n\t</soho-listview>"
            })
        ], QuicknoteComponent);
        return QuicknoteComponent;
    }());
    exports.QuicknoteComponent = QuicknoteComponent;
    var QuicknoteModule = /** @class */ (function () {
        function QuicknoteModule() {
        }
        QuicknoteModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, forms_1.FormsModule, sohoxi_angular_1.SohoListViewModule, sohoxi_angular_1.SohoButtonModule],
                declarations: [QuicknoteComponent],
                entryComponents: [QuicknoteComponent]
            })
        ], QuicknoteModule);
        return QuicknoteModule;
    }());
    exports.QuicknoteModule = QuicknoteModule;
    exports.getActions = function () {
        return [{ isPrimary: true, standardIconName: "#icon-delete" }];
    };
});
//# sourceMappingURL=main.js.map