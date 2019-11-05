var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
<<<<<<< HEAD
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "lime"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, lime_1) {
=======
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1) {
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuicknoteComponent = /** @class */ (function () {
        function QuicknoteComponent() {
<<<<<<< HEAD
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
=======
        }
        QuicknoteComponent.prototype.ngOnInit = function () {
            this.lang = this.widgetContext.getLanguage();
            this.init();
            this.updateAction();
            this.setCustomTitle();
        };
        QuicknoteComponent.prototype.addNote = function (note) {
            this.notes = [note].concat(this.notes);
            this.widgetInstance.actions[0].isEnabled = this.getIsActionEnabled();
            if (this.notesEnabled) {
                this.widgetContext.save();
            }
            this.note = "";
        };
        QuicknoteComponent.prototype.clear = function () {
            this.notes = [];
            this.widgetInstance.actions[0].isEnabled = false;
            this.widgetContext.save();
        };
        QuicknoteComponent.prototype.init = function () {
            var settings = this.widgetContext.getSettings();
            this.notes = settings.get("notes");
            this.notesEnabled = settings.isSettingEnabled("notes");
        };
        QuicknoteComponent.prototype.updateAction = function () {
            var _this = this;
            var customAction = this.widgetInstance.actions[0];
            customAction.execute = function () { return _this.clear(); };
            customAction.isEnabled = this.getIsActionEnabled();
            customAction.text = this.lang.get("clear");
        };
        QuicknoteComponent.prototype.setCustomTitle = function () {
            var context = this.widgetContext;
            if (context.isTitleEditEnabled()) {
                context.setTitle("QuickNote");
            }
        };
        QuicknoteComponent.prototype.getIsActionEnabled = function () {
            return this.notesEnabled && !!this.notes.length;
        };
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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
<<<<<<< HEAD
                template: "\n\t<div class=\"row lm-padding-sm-b lm-padding-sm-t\">\n\t\t<div class=\"eight columns\">\n\t\t\t<input type=\"text\" [(ngModel)]=\"text\">\n\t\t</div>\n\t\t<div class=\"four columns\">\n\t\t\t<button soho-button=\"tertiary\" [disabled]=\"!text\" (click)=\"addNote(text)\">{{lang?.add}}</button>\n\t\t</div>\n\t</div>\n\t<soho-listview>\n\t\t<li soho-listview-item *ngFor=\"let item of items\">\n\t\t\t<p soho-listview-header>{{item}}</p>\n\t\t</li>\n\t</soho-listview>"
=======
                template: "\n\t<div class=\"card-group-action\" *ngIf=\"notesEnabled\">\n\t\t<soho-toolbar-flex>\n\t\t\t<soho-toolbar-flex-section [isButtonSet]=\"true\">\n\t\t\t\t<input class=\"input-sm\" type=\"text\" [(ngModel)]=\"note\">\n\t\t\t\t<button soho-button=\"tertiary\" [disabled]=\"!note\" (click)=\"addNote(note)\">{{lang.add}}</button>\n\t\t\t</soho-toolbar-flex-section>\n\t\t</soho-toolbar-flex>\n\t</div>\n\t<soho-listview>\n\t\t<li soho-listview-item *ngFor=\"let note of notes\">\n\t\t\t<p soho-listview-header>{{note}}</p>\n\t\t</li>\n\t</soho-listview>",
                styles: ["\n\t\t:host {\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden;\n\t\t}\n\n\t\tsoho-listview {\n\t\t\tflex: 1 1 auto;\n\t\t\toverflow-y: auto;\n\t\t}\n\n\t\tsoho-toolbar-flex-section {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\tinput {\n\t\t\tflex: 1 0 auto;\n\t\t}\n\t"]
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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
<<<<<<< HEAD
                imports: [common_1.CommonModule, forms_1.FormsModule, sohoxi_angular_1.SohoListViewModule, sohoxi_angular_1.SohoButtonModule],
=======
                imports: [common_1.CommonModule, forms_1.FormsModule, sohoxi_angular_1.SohoListViewModule, sohoxi_angular_1.SohoButtonModule, sohoxi_angular_1.SohoToolbarFlexModule, sohoxi_angular_1.SohoInputModule],
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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