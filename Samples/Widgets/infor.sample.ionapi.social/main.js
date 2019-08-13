var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "lime", "rxjs/AsyncSubject"], function (require, exports, common_1, core_1, lime_1, AsyncSubject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = /** @class */ (function () {
        function DataService() {
            this.serviceUrl = "Mingle/SocialService.Svc";
        }
        DataService.prototype.init = function (widgetContext) {
            this.widgetContext = widgetContext;
            this.preLoadUser();
        };
        DataService.prototype.loadUser = function () {
            // Use the preloaded data if it exists the first time
            var subject = this.userSubject;
            if (subject) {
                var observable = subject.asObservable();
                this.userSubject = null;
                return observable;
            }
            return this.loadUserInternal();
        };
        DataService.prototype.loadPhoto = function (userGuid) {
            var relativeUrl = "User/" + userGuid + "/ProfilePhoto?thumbnailType=3";
            var request = this.createRequest(relativeUrl, { Accept: "image/png, image/jpeg" });
            request.responseType = "blob";
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.preLoadUser = function () {
            var subject = new AsyncSubject_1.AsyncSubject();
            this.userSubject = subject;
            this.loadUserInternal().subscribe(function (response) {
                subject.next(response);
                subject.complete();
            }, function (error) {
                subject.error(error);
            });
        };
        DataService.prototype.loadUserInternal = function () {
            var request = this.createRequest("User/Detail");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.createRequest = function (relativeUrl, headers) {
            if (!headers) {
                // Create default headers
                headers = { Accept: "application/json" };
            }
            // Create the relative URL to the ION API
            var url = this.serviceUrl + "/" + relativeUrl;
            // Create HTTP GET request object
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: headers
            };
            return request;
        };
        return DataService;
    }());
    exports.DataService = DataService;
    // Create a single instance of the service
    exports.dataService = new DataService();
    var IonApiSocialComponent = /** @class */ (function () {
        function IonApiSocialComponent() {
        }
        IonApiSocialComponent.prototype.ngOnInit = function () {
            this.setBusy(true);
            this.loadUser();
        };
        IonApiSocialComponent.prototype.setBusy = function (isBusy) {
            // Show the indeterminate progress indicator when the widget is busy by changing the widget state.
            this.widgetContext.setState(isBusy ? lime_1.WidgetState.busy : lime_1.WidgetState.running);
        };
        IonApiSocialComponent.prototype.loadUser = function () {
            var _this = this;
            exports.dataService.loadUser().subscribe(function (response) {
                _this.updateUser(response.data);
            }, function (error) {
                _this.onRequestError(error);
            });
        };
        IonApiSocialComponent.prototype.updateUser = function (response) {
            var user = response.UserDetailList[0];
            this.user = user;
            this.fullName = user.FirstName + " " + user.LastName;
            this.loadPhoto();
        };
        IonApiSocialComponent.prototype.loadPhoto = function () {
            var _this = this;
            exports.dataService.loadPhoto(this.user.UserGUID).subscribe(function (response) {
                _this.updatePhoto(response.data);
            }, function (error) {
                _this.onRequestError(error);
            });
        };
        IonApiSocialComponent.prototype.updatePhoto = function (response) {
            var _this = this;
            var reader = new FileReader();
            reader.onload = function () {
                _this.photoUrl = reader.result;
                _this.setBusy(false);
            };
            reader.readAsDataURL(response);
        };
        IonApiSocialComponent.prototype.onRequestError = function (error) {
            this.widgetContext.showWidgetMessage({
                message: "Failed to call ION API: " + JSON.stringify(error),
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
                template: "\n\t<div class=\"lm-padding-md\">\n\t\t<h3>Name</h3>\n\t\t<p>{{fullName}}</p>\n\n\t\t<h3>Email</h3>\n\t\t<p>{{user?.Email}}</p>\n\n\t\t<p><img src=\"{{photoUrl}}\" /></p>\n\t</div>\n\t"
            })
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