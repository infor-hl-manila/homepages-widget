/**
 * NOTE:
 * A custom settings UI shall only be implemented if settings are dynamic, for instance based on data
<<<<<<< HEAD
 * retrieved from a server. Or if the settings structure is complicated, and not possible to handle using
=======
 * retrieved from a server and. Or if the settings structure is complicated, and not possible to handle using
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
 * supported metadata setting types (string, boolean, number, selector). For other cases, use metadata settings
 * handled by the default settings UI.
 */
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
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SettingKeys = /** @class */ (function () {
        function SettingKeys() {
        }
        SettingKeys.textColor = "textColor";
        SettingKeys.textStyle = "textStyle";
        return SettingKeys;
    }());
=======
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "./core", "./settings", "./title-setting"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, core_2, settings_1, title_setting_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
    var WidgetComponent = /** @class */ (function () {
        function WidgetComponent() {
            this.textStyle = {};
        }
        WidgetComponent.prototype.ngOnInit = function () {
            this.setupWidgetInstanceListeners();
            this.updateFromSettings(this.widgetContext.getSettings());
        };
        WidgetComponent.prototype.setupWidgetInstanceListeners = function () {
            var _this = this;
            this.widgetInstance.restored = function () { return _this.widgetContext.setStandardTitle(); };
            this.widgetInstance.settingsSaved = function (settingsArg) { return _this.updateFromSettings(settingsArg.settings); };
            this.widgetInstance.widgetSettingsFactory = function () {
                return {
                    angularConfig: {
<<<<<<< HEAD
                        componentType: SettingsComponent,
=======
                        componentType: settings_1.SettingsComponent,
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
                    },
                };
            };
        };
        WidgetComponent.prototype.updateFromSettings = function (settings) {
<<<<<<< HEAD
            var color = settings.get("textColor");
            var textStyle = settings.get("textStyle").toLowerCase();
=======
            var color = settings.get(core_2.SettingKey.Color);
            var textStyle = settings.get(core_2.SettingKey.Style).toLowerCase();
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
            this.textStyle.color = color;
            if (textStyle === "bold") {
                this.textStyle.fontWeight = textStyle;
            }
            else {
                this.textStyle.fontStyle = textStyle;
            }
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], WidgetComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], WidgetComponent.prototype, "widgetInstance", void 0);
        WidgetComponent = __decorate([
            core_1.Component({
<<<<<<< HEAD
                template: "\n\t<div class=\"lm-text-align-c lm-padding-xl\">\n\t\t<span class=\"label lm-margin-xl-b\">\n\t\t\tThis widget shows how to implement a Custom Settings UI using Angular.\n\t\t\tThe Settings UI can be used to change the style and color of the text shown below.\n\t\t</span>\n\t\t<h1\n\t\t\t[style.color]=\"textStyle.color\"\n\t\t\t[style.fontStyle]=\"textStyle.fontStyle\"\n\t\t\t[style.fontWeight]=\"textStyle.fontWeight\">\n\t\t\tColored Text\n\t\t</h1>\n\t</div>\n\t",
=======
                template: "\n\t<div class=\"lm-text-align-c lm-padding-xl\">\n\t\t<span class=\"label lm-margin-xl-b\">\n\t\t\tThis widget shows how to implement a Custom Settings UI using Angular.\n\t\t\tThe Settings UI can be used to change the style and color of the text shown below.\n\t\t</span>\n\t\t<h1 [style.color]=\"textStyle.color\"\n\t\t\t [style.fontStyle]=\"textStyle.fontStyle\"\n\t\t\t [style.fontWeight]=\"textStyle.fontWeight\">\n\t\t\tColored Text\n\t\t</h1>\n\t</div>\n\t",
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
            })
        ], WidgetComponent);
        return WidgetComponent;
    }());
    exports.WidgetComponent = WidgetComponent;
<<<<<<< HEAD
    /**
     * This component can be used to display a Title setting field with a padlock.
     * It works with the given (required) widgetSettingContext to determine whether title should
     * be locked, unlocked, editable, unlockable etc.
     *
     * Call save() to commit the changes to the widget settings.
     */
    var TitleSettingComponent = /** @class */ (function () {
        function TitleSettingComponent() {
        }
        TitleSettingComponent.prototype.ngOnInit = function () {
            if (!this.widgetSettingsContext) {
                throw new Error("Required input: widgetSettingsContext");
            }
            var widgetContext = this.widgetSettingsContext.getWidgetContext();
            this.isTitleEditEnabled = widgetContext.isTitleEditEnabled();
            this.isTitleLocked = widgetContext.isTitleLocked();
            this.title = widgetContext.getResolvedTitle(this.isTitleLocked);
            this.isTitleUnlockable = widgetContext.isTitleUnlockable();
        };
        /**
         * Persist changes to the title and lock by saving to widget context.
         */
        TitleSettingComponent.prototype.save = function () {
            var widgetContext = this.widgetSettingsContext.getWidgetContext();
            widgetContext.setTitleLocked(this.isTitleLocked);
            if (this.isTitleEditEnabled) {
                widgetContext.setTitle(this.title);
            }
        };
        TitleSettingComponent.prototype.onLockClicked = function () {
            this.isTitleLocked = !!!this.isTitleLocked;
            if (this.isTitleLocked) {
                var widgetContext = this.widgetSettingsContext.getWidgetContext();
                this.title = widgetContext.getResolvedTitle(this.isTitleLocked);
            }
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], TitleSettingComponent.prototype, "widgetSettingsContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], TitleSettingComponent.prototype, "label", void 0);
        TitleSettingComponent = __decorate([
            core_1.Component({
                selector: "infor-sample-setting-title-field",
                template: "\n\t<div class=\"field\">\n\t\t<label *ngIf=\"label\">{{label}}</label>\n\t\t<input [readOnly]=\"!isTitleEditEnabled || isTitleLocked\" [(ngModel)]=\"title\" />\n\t\t<button\n\t\t\tsoho-button=\"icon\"\n\t\t\t[icon]=\"isTitleLocked ? 'locked' : 'unlocked'\"\n\t\t\t[disabled]=\"!isTitleUnlockable\"\n\t\t\t(click)=\"onLockClicked()\">\n\t\t</button>\n\t</div>\n\t",
            })
        ], TitleSettingComponent);
        return TitleSettingComponent;
    }());
    exports.TitleSettingComponent = TitleSettingComponent;
    var SettingsComponent = /** @class */ (function () {
        function SettingsComponent() {
        }
        SettingsComponent.prototype.ngOnInit = function () {
            this.initFromSettings();
            this.fetchStyleSettingsAsync();
            this.setupSettingsClosingHandler();
        };
        SettingsComponent.prototype.initFromSettings = function () {
            var widgetContext = this.widgetSettingsContext.getWidgetContext();
            var settings = widgetContext.getSettings();
            this.textColor = settings.get(SettingKeys.textColor);
            this.styleEditLabel = widgetContext.getLanguage().get("textStyleSettingLabel");
            this.colorEditVisible = settings.isSettingVisible(SettingKeys.textColor);
            this.colorEditEnabled = settings.isSettingEnabled(SettingKeys.textColor);
            this.colorEditLabel = widgetContext.getLanguage().get("textColorSettingLabel");
            this.styleEditVisible = settings.isSettingVisible(SettingKeys.textStyle);
            this.styleEditEnabled = settings.isSettingEnabled(SettingKeys.textStyle);
        };
        SettingsComponent.prototype.fetchStyleSettingsAsync = function () {
            var _this = this;
            this.busyIndicator.activated = true;
            setTimeout(function () {
                var settings = _this.widgetSettingsContext.getWidgetContext().getSettings();
                _this.textStyleOptions = ["Normal", "Italic", "Bold"];
                _this.textStyle = settings.get(SettingKeys.textStyle);
                _this.busyIndicator.activated = false;
            }, 3000);
        };
        SettingsComponent.prototype.setupSettingsClosingHandler = function () {
            var _this = this;
            this.widgetSettingsInstance.closing = function (closingArg) {
                var settings = _this.widgetSettingsContext.getWidgetContext().getSettings();
                if (closingArg.isSave) {
                    if (_this.colorEditEnabled) {
                        settings.set(SettingKeys.textColor, _this.textColor);
                    }
                    if (_this.styleEditEnabled) {
                        settings.set(SettingKeys.textStyle, _this.textStyle);
                    }
                    _this.titleSettingComponent.save();
                }
            };
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], SettingsComponent.prototype, "widgetSettingsContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], SettingsComponent.prototype, "widgetSettingsInstance", void 0);
        __decorate([
            core_1.ViewChild(TitleSettingComponent, { static: true }),
            __metadata("design:type", TitleSettingComponent)
        ], SettingsComponent.prototype, "titleSettingComponent", void 0);
        __decorate([
            core_1.ViewChild(sohoxi_angular_1.SohoBusyIndicatorDirective, { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoBusyIndicatorDirective)
        ], SettingsComponent.prototype, "busyIndicator", void 0);
        SettingsComponent = __decorate([
            core_1.Component({
                template: "\n\t<div soho-busyindicator blockUI=\"true\" displayDelay=\"0\">\n\t\t<infor-sample-setting-title-field\n\t\t\t[widgetSettingsContext]=\"widgetSettingsContext\"\n\t\t\tlabel=\"Title\">\n\t\t</infor-sample-setting-title-field>\n\t\t<div class=\"field\" *ngIf=\"styleEditVisible\">\n\t\t\t<label>{{styleEditLabel}}</label>\n\t\t\t<select soho-dropdown [(ngModel)]=\"textStyle\" [disabled]=\"!styleEditEnabled\" noSearch>\n\t\t\t\t<option *ngFor=\"let styleOption of textStyleOptions\" [value]=\"styleOption\">{{styleOption}}</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"field\" *ngIf=\"colorEditVisible\">\n\t\t\t<label>{{colorEditLabel}}</label>\n\t\t\t<input soho-colorpicker [(ngModel)]=\"textColor\" [disabled]=\"!colorEditEnabled\"/>\n\t\t</div>\n\t</div>\n\t",
            })
        ], SettingsComponent);
        return SettingsComponent;
    }());
    exports.SettingsComponent = SettingsComponent;
=======
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
    var WidgetModule = /** @class */ (function () {
        function WidgetModule() {
        }
        WidgetModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    sohoxi_angular_1.SohoButtonModule,
                    sohoxi_angular_1.SohoBusyIndicatorModule,
                    sohoxi_angular_1.SohoDropDownModule,
                    sohoxi_angular_1.SohoColorPickerModule
                ],
                declarations: [
                    WidgetComponent,
<<<<<<< HEAD
                    SettingsComponent,
                    TitleSettingComponent
                ],
                entryComponents: [
                    WidgetComponent,
                    SettingsComponent
=======
                    settings_1.SettingsComponent,
                    title_setting_1.TitleSettingComponent
                ],
                entryComponents: [
                    WidgetComponent,
                    settings_1.SettingsComponent
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
                ],
            })
        ], WidgetModule);
        return WidgetModule;
    }());
    exports.WidgetModule = WidgetModule;
});
//# sourceMappingURL=main.js.map