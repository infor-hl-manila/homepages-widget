var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "lime"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, lime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListItem = /** @class */ (function () {
        function ListItem() {
        }
        return ListItem;
    }());
    var EditItemComponent = /** @class */ (function () {
        function EditItemComponent(translationService) {
            this.translationService = translationService;
            // tslint:disable-next-line:no-any
            this.lang = {};
            this.item = {};
            this.maxTitle = 40;
            this.maxDescription = 100;
            this.isTranslation = translationService.isEnabled();
        }
        EditItemComponent.prototype.ngAfterViewInit = function () {
            this.item = this.parameter.item;
            this.lang = this.parameter.lang;
        };
        EditItemComponent.prototype.onClose = function () {
            this.dialog.close();
        };
        EditItemComponent.prototype.onSave = function () {
            this.dialog.close(this.item);
        };
        EditItemComponent.prototype.canSave = function () {
            var item = this.item;
            return !!item.title && !!item.description;
        };
        EditItemComponent.prototype.onTranslations = function () {
            var item = this.item;
            var options = {
                view: this.view,
                data: item.translations || {},
                items: [
                    {
                        name: "title",
                        label: this.lang.name,
                        labelId: "sample-ct-tr-ttl-lbl",
                        valueId: "sample-ct-tr-ttl-v",
                        maxLength: this.maxTitle,
                        isPrimary: true,
                        defaultValue: item.title
                    }, {
                        name: "description",
                        label: this.lang.description,
                        labelId: "sample-ct-tr-desc-lbl",
                        valueId: "sample-ct-tr-desc-v",
                        maxLength: this.maxDescription,
                        defaultValue: item.description
                    }
                ]
            };
            this.translationService.translate(options).subscribe(function (result) {
                item.translations = result.data;
            }, function (cancelResult) {
                // Handle cancel
            });
        };
        __decorate([
            core_1.ViewChild("editItemView", { read: core_1.ViewContainerRef }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], EditItemComponent.prototype, "view", void 0);
        EditItemComponent = __decorate([
            core_1.Component({
                template: "\n\t<div #editItemView style=\"max-width: 390px\">\n\t\t<div>\n\n\t\t\t<div class=\"field\">\n\t\t\t\t<label class=\"required\" for=\"sample-ct-edt-ttl\">{{lang.title}}</label>\n\t\t\t\t<input id=\"sample-ct-edt-ttl\" name=\"sample-ct-edt-ttl\" type=\"text\"\n\t\t\t\t[(ngModel)]=\"item.title\"\n\t\t\t\t[maxlength]=\"maxTitle\"\n\t\t\t\tdata-validate=\"required\" />\n\t\t\t</div>\n\n\t\t\t<div class=\"field\">\n\t\t\t\t<label class=\"required\" for=\"sample-ct-edt-desc\">{{lang.description}}</label>\n\t\t\t\t<input id=\"sample-ct-edt-desc\" type=\"text\"\n\t\t\t\t[(ngModel)]=\"item.description\"\n\t\t\t\t[maxlength]=\"maxDescription\"\n\t\t\t\tdata-validate=\"required\" />\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"isTranslation\" class=\"field\">\n\t\t\t<button class=\"btn-secondary\" (click)=\"onTranslations()\">{{lang.translations}}</button>\n\t\t</div>\n\n\t\t<div class=\"modal-buttonset\">\n\t\t\t<button class=\"btn-modal\" (click)=\"onClose()\">{{lang.cancel}}</button>\n\t\t\t<button class=\"btn-modal-primary no-validation\" [disabled]=\"!canSave()\" (click)=\"onSave()\">\n\t\t\t\t{{lang.save}}\n\t\t\t</button>\n\t\t</div>\n\t</div>"
            }),
            __metadata("design:paramtypes", [lime_1.TranslationService])
        ], EditItemComponent);
        return EditItemComponent;
    }());
    exports.EditItemComponent = EditItemComponent;
    var ContentTranslationComponent = /** @class */ (function () {
        function ContentTranslationComponent(widgetContext, widgetInstance, sohoModalDialogService, translationService) {
            var _this = this;
            this.widgetContext = widgetContext;
            this.widgetInstance = widgetInstance;
            this.sohoModalDialogService = sohoModalDialogService;
            this.translationService = translationService;
            this.items = [];
            this.itemKey = "items";
            this.lang = widgetContext.getLanguage();
            this.languageCode = translationService.getLanguage();
            this.items = widgetContext.getSettings().get(this.itemKey) || [];
            var lang = widgetContext.getLanguage();
            widgetInstance.actions = [{
                    text: lang.get("add"),
                    isPrimary: true,
                    standardIconName: "#icon-add",
                    execute: function () { _this.onAdd(); }
                }];
        }
        ContentTranslationComponent.prototype.getTitle = function (item) {
            return this.getItem(item).title;
        };
        ContentTranslationComponent.prototype.getDescription = function (item) {
            return this.getItem(item).description;
        };
        ContentTranslationComponent.prototype.onDelete = function (item) {
            lime_1.ArrayUtil.remove(this.items, item);
            this.save();
        };
        ContentTranslationComponent.prototype.onEdit = function (item) {
            this.openDialog(item);
        };
        ContentTranslationComponent.prototype.onAdd = function () {
            this.openDialog();
        };
        ContentTranslationComponent.prototype.getItem = function (item) {
            var translationItem = item.translations ? item.translations[this.languageCode] : null;
            return translationItem || item;
        };
        ContentTranslationComponent.prototype.addItem = function (item) {
            this.items.push(item);
            this.save();
        };
        ContentTranslationComponent.prototype.updateItem = function (item, index) {
            this.items[index] = item;
            this.save();
        };
        ContentTranslationComponent.prototype.save = function () {
            this.widgetContext.getSettings().set(this.itemKey, this.items);
            this.widgetContext.save();
        };
        ContentTranslationComponent.prototype.openDialog = function (item) {
            var _this = this;
            var isAdd = !item;
            var existingIndex;
            if (isAdd) {
                item = {};
            }
            else {
                existingIndex = lime_1.ArrayUtil.indexOf(this.items, item);
                item = lime_1.CommonUtil.copyJson(item);
            }
            var lang = this.lang;
            var dialog = this.sohoModalDialogService
                .modal(EditItemComponent, this.view)
                .title(lang.get("editItem"))
                .afterClose(function (editItem) {
                if (editItem) {
                    if (isAdd) {
                        _this.addItem(editItem);
                    }
                    else {
                        _this.updateItem(editItem, existingIndex);
                    }
                }
            });
            dialog.apply(function (component) {
                component.dialog = dialog;
                component.parameter = {
                    item: item,
                    lang: lang
                };
            }).open();
        };
        __decorate([
            core_1.ViewChild("contentTranslationView", { read: core_1.ViewContainerRef }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], ContentTranslationComponent.prototype, "view", void 0);
        ContentTranslationComponent = __decorate([
            core_1.Component({
                template: "\n\t<div #contentTranslationView>\n\t\t<soho-listview>\n\t\t\t<li soho-listview-item *ngFor=\"let item of items\">\n\t\t\t\t<p soho-listview-header>{{getTitle(item)}}\n\t\t\t\t\t<button class=\"lm-pull-right\" soho-button=\"icon\" icon=\"delete\" (click)=\"onDelete(item)\"></button>\n\t\t\t\t\t<button class=\"lm-pull-right\" soho-button=\"icon\" icon=\"edit\" (click)=\"onEdit(item)\"></button>\n\t\t\t\t</p>\n\t\t\t\t<p soho-listview-subheader>{{getDescription(item)}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t</div>"
            }),
            __param(0, core_1.Inject(lime_1.widgetContextInjectionToken)),
            __param(1, core_1.Inject(lime_1.widgetInstanceInjectionToken)),
            __metadata("design:paramtypes", [Object, Object, sohoxi_angular_1.SohoModalDialogService,
                lime_1.TranslationService])
        ], ContentTranslationComponent);
        return ContentTranslationComponent;
    }());
    exports.ContentTranslationComponent = ContentTranslationComponent;
    var ContentTranslationModule = /** @class */ (function () {
        function ContentTranslationModule() {
        }
        ContentTranslationModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, forms_1.FormsModule, sohoxi_angular_1.SohoListViewModule, sohoxi_angular_1.SohoButtonModule],
                declarations: [ContentTranslationComponent, EditItemComponent],
                entryComponents: [ContentTranslationComponent, EditItemComponent]
            })
        ], ContentTranslationModule);
        return ContentTranslationModule;
    }());
    exports.ContentTranslationModule = ContentTranslationModule;
});
//# sourceMappingURL=main.js.map