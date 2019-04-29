var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../data", "./base.component"], function (require, exports, core_1, data_1, base_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LookupDatasetComponent = /** @class */ (function (_super) {
        __extends(LookupDatasetComponent, _super);
        function LookupDatasetComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.columns = data_1.lookupColumns.slice();
            return _this;
        }
        LookupDatasetComponent.prototype.ngOnInit = function () {
            this.model = this.setDefaultValue ? this.isMulti ? ["first", "second"] : "first" : undefined;
            if (!this.isAsync) {
                this.dataset = data_1.lookupDataset.slice();
            }
            if (this.isMulti) {
                this.columns.unshift(data_1.checkboxColumn);
            }
            this.labelInfo = (this.isAsync ? "async " : "") + "dataset " + (this.isMulti ? "multi" : "single") + " select";
        };
        LookupDatasetComponent.prototype.beforeOpen = function () {
            var _this = this;
            if (!this.isAsync) {
                return;
            }
            setTimeout(function () {
                _this.dataset = data_1.lookupDataset.slice();
            }, 1000);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Boolean)
        ], LookupDatasetComponent.prototype, "isMulti", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Boolean)
        ], LookupDatasetComponent.prototype, "isAsync", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], LookupDatasetComponent.prototype, "testId", void 0);
        LookupDatasetComponent = __decorate([
            core_1.Component({
                selector: "ids-dataset-lookup",
                template: "\n\t\t<div class=\"field\">\n\t\t\t<label soho-label\n\t\t\t\t\t[required]=\"true\"\n\t\t\t\t\t[attr.data-lm-tst-smp]=\"testId + '-lbl'\">\n\t\t\t\tLookup ({{labelInfo}})\n\t\t\t\t<br/>\n\t\t\t\tngModel: {{model}}\n\t\t\t</label>\n\t\t\t<input soho-lookup\n\t\t\t\t\t[attr.data-lm-tst-smp]=\"testId + '-ipt'\"\n\t\t\t\t\t[(ngModel)]=\"model\"\n\t\t\t\t\t[columns]=\"columns\"\n\t\t\t\t\t[dataset]=\"dataset\"\n\t\t\t\t\t(beforeopen)=\"beforeOpen()\"\n\t\t\t\t\tdata-validate=\"required\"\n\t\t\t\t\t[multiselect]=\"isMulti\"\n\t\t\t\t\tfield=\"productId\"\n\t\t\t\t\t[attr.disabled]=\"disabled ? '' : null\"/>\n\t\t</div>"
            })
        ], LookupDatasetComponent);
        return LookupDatasetComponent;
    }(base_component_1.ComponentBase));
    exports.LookupDatasetComponent = LookupDatasetComponent;
});
//# sourceMappingURL=lookup.dataset.component.js.map