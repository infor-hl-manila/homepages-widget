var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "lime", "rxjs", "rxjs/operators"], function (require, exports, common_1, core_1, lime_1, rxjs_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = /** @class */ (function () {
        function DataService() {
            this.serviceUrl = "Mingle/SocialService.Svc";
        }
        DataService.prototype.loadUser = function (widgetContext) {
            var _this = this;
            if (this.user) {
                return rxjs_1.of(this.user);
            }
            var request = this.createRequest("User/Detail");
            return widgetContext.executeIonApiAsync(request).pipe(operators_1.map(function (response) { return response.data.UserDetailList[0]; }), operators_1.tap(function (user) { return _this.user = user; }));
        };
        DataService.prototype.loadPhoto = function (userGuid, widgetContext) {
            var relativeUrl = "User/" + userGuid + "/ProfilePhoto?thumbnailType=3";
            var request = this.createRequest(relativeUrl, { Accept: "image/png, image/jpeg" });
            request.responseType = "blob";
            return widgetContext.executeIonApiAsync(request).pipe(operators_1.map(function (response) { return response.data; }));
        };
        DataService.prototype.createRequest = function (relativeUrl, headers) {
            if (!headers) {
                headers = { Accept: "application/json" };
            }
            // Create the relative URL to the ION API
            var url = this.serviceUrl + "/" + relativeUrl;
            // Create HTTP GET request object
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: headers || null
            };
            return request;
        };
        DataService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            })
        ], DataService);
        return DataService;
    }());
    exports.DataService = DataService;
    var IonApiSocialComponent = /** @class */ (function () {
        function IonApiSocialComponent(dataService) {
            this.dataService = dataService;
            this.logPrefix = "[IonApiSocialSample] ";
        }
        IonApiSocialComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.setBusy(true);
            this.user$ = this.dataService.loadUser(this.widgetContext).pipe(operators_1.catchError(function (error) {
                _this.onRequestError(error, "Unable to load user info");
                return rxjs_1.of();
            }));
            this.photoUrl$ = this.user$.pipe(operators_1.filter(function (user) { return !!user.UserGUID; }), operators_1.switchMap(function (user) { return _this.dataService.loadPhoto(user.UserGUID, _this.widgetContext); }), operators_1.switchMap(function (blob) { return _this.getPhoto(blob); }), operators_1.tap(function () { return _this.setBusy(false); }), operators_1.catchError(function (error) {
                _this.onRequestError(error, "Unable to load profile photo");
                return rxjs_1.of("");
            }));
        };
        IonApiSocialComponent.prototype.setBusy = function (isBusy) {
            this.widgetContext.setState(isBusy ? lime_1.WidgetState.busy : lime_1.WidgetState.running);
        };
        IonApiSocialComponent.prototype.getPhoto = function (response) {
            var subject = new rxjs_1.AsyncSubject();
            var reader = new FileReader();
            reader.onload = function () {
                subject.next(reader.result);
                subject.complete();
            };
            reader.readAsDataURL(response);
            return subject.asObservable();
        };
        IonApiSocialComponent.prototype.onRequestError = function (error, message) {
            lime_1.Log.error(this.logPrefix + "ION API Error: " + JSON.stringify(error));
            this.widgetContext.showWidgetMessage({
                message: message,
                type: lime_1.WidgetMessageType.Error
            });
            this.setBusy(false);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], IonApiSocialComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], IonApiSocialComponent.prototype, "widgetInstance", void 0);
        IonApiSocialComponent = __decorate([
            core_1.Component({
                template: "\n\t<div class=\"lm-padding-md\" *ngIf=\"user$ | async as user\">\n\t\t<h3>Name</h3>\n\t\t<p>{{user.FirstName + \" \" + user.LastName}}</p>\n\n\t\t<h3>Email</h3>\n\t\t<p>{{user.Email}}</p>\n\n\t\t<p *ngIf=\"photoUrl$ | async as photoUrl\">\n\t\t\t<img [src]=\"photoUrl\" />\n\t\t</p>\n\t</div>\n\t"
            }),
            __metadata("design:paramtypes", [DataService])
        ], IonApiSocialComponent);
        return IonApiSocialComponent;
    }());
    exports.IonApiSocialComponent = IonApiSocialComponent;
    var IonApiSocialModule = /** @class */ (function () {
        function IonApiSocialModule() {
        }
        IonApiSocialModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule],
                declarations: [IonApiSocialComponent],
                entryComponents: [IonApiSocialComponent]
            })
        ], IonApiSocialModule);
        return IonApiSocialModule;
    }());
    exports.IonApiSocialModule = IonApiSocialModule;
});
//# sourceMappingURL=main.js.map