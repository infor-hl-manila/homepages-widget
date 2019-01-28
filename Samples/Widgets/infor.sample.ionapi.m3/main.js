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
    var IonApiM3Component = /** @class */ (function () {
        function IonApiM3Component(messageService) {
            this.messageService = messageService;
            this.logPrefix = "[IonApiM3Component] ";
        }
        IonApiM3Component.prototype.ngOnInit = function () {
            var _this = this;
            this.setBusy(true);
            var request = this.createRequest();
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) { return _this.parseCustomers(response.data); }, function (error) { return _this.showErrorMessage(error); });
        };
        IonApiM3Component.prototype.setBusy = function (isBusy) {
            // Show the indeterminate progress indicator when the widget is busy by changing the widget state.
            this.widgetContext.setState(isBusy ? lime_1.WidgetState.busy : lime_1.WidgetState.running);
        };
        IonApiM3Component.prototype.createRequest = function () {
            return {
                method: "GET",
                url: "/M3/m3api-rest/execute/CRS610MI/LstByName",
                cache: false,
                headers: {
                    Accept: "application/json"
                }
            };
        };
        IonApiM3Component.prototype.parseCustomers = function (miResponse) {
            lime_1.Log.debug(this.logPrefix + " Got MI Response with " + miResponse.MIRecord.length + " records");
            var records = miResponse.MIRecord;
            this.customerItems = this.getItems(records, "CUNO", "CUNM");
            this.setBusy(false);
        };
        IonApiM3Component.prototype.showErrorMessage = function (error) {
            lime_1.Log.error(this.logPrefix + "ION API Error: " + JSON.stringify(error));
            this.setBusy(false);
            this.messageService.error({
                title: "Error " + error.status,
                message: "Failed to call ION API",
                buttons: [
                    {
                        text: "Close",
                        isDefault: true,
                    }
                ],
            }).open();
        };
        IonApiM3Component.prototype.getItems = function (records, titleField, descriptionField) {
            var _this = this;
            return records.map(function (record) { return ({
                title: _this.getValue(record.NameValue, titleField),
                description: _this.getValue(record.NameValue, descriptionField),
            }); });
        };
        IonApiM3Component.prototype.getValue = function (nameValues, name) {
            var nameValueWithMatchingName = nameValues.find(function (nameValue) { return nameValue.Name === name; });
            if (nameValueWithMatchingName) {
                return nameValueWithMatchingName.Value.trim();
            }
            else {
                return null;
            }
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], IonApiM3Component.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], IonApiM3Component.prototype, "widgetInstance", void 0);
        IonApiM3Component = __decorate([
            core_1.Component({
                template: "\n\t<soho-listview>\n\t\t<li soho-listview-item *ngFor=\"let item of customerItems\">\n\t\t\t<p soho-listview-header>{{item.title}}</p>\n\t\t\t<p soho-listview-subheader>{{item.description}}</p>\n\t\t</li>\n\t</soho-listview>\n\t",
            }),
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoMessageService])
        ], IonApiM3Component);
        return IonApiM3Component;
    }());
    exports.IonApiM3Component = IonApiM3Component;
    var IonApiM3Module = /** @class */ (function () {
        function IonApiM3Module() {
        }
        IonApiM3Module = __decorate([
            core_1.NgModule({
                imports: [
                    sohoxi_angular_1.SohoListViewModule,
                    common_1.CommonModule
                ],
                declarations: [IonApiM3Component],
                entryComponents: [IonApiM3Component],
            })
        ], IonApiM3Module);
        return IonApiM3Module;
    }());
    exports.IonApiM3Module = IonApiM3Module;
});
//# sourceMappingURL=main.js.map