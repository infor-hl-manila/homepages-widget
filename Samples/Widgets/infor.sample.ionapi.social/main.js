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
=======
define(["require", "exports", "@angular/common", "@angular/core", "lime", "rxjs", "rxjs/operators", "./service"], function (require, exports, common_1, core_1, lime_1, rxjs_1, operators_1, service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Prerequisites
    // =============
    // The following steps are required before testing this sample widget.
    // - Aquire the server and port number for the ION API server to test with.
    // - Configure and start a localhost proxy with the ION API server and port number.
    // - Example: node proxy.js 8083 "yourservername" 443
    // - Example: \Samples\StartIonApiProxy.cmd
    //
    // - Set the ionApiUrl property in the configuration.json file to the URL of the localhost proxy.
    // - The configuration.json file is located in the root of the Widgets sample project by default.
    // - The URL should include the tenant to test with.
    // - Example: "ionApiUrl": "http://localhost:8083/tenantid"
    //
    // - Acquire an OAuth token string.
    // - Log on to Ming.le.
    // - Example: https://yourservername/tenantid/
    // - Open a new tab in the same browser and navigate to the Grid SAML Session Provider OAuth resource
    // - The Grid must be version 2.0 or later with a SAML Session Provider configured for the same IFS as Ming.le.
    // - Example: https://yourservernameandport/grid/rest/security/sessions/oauth
    // - Copy the the OAuth token string from the browser window.
    //
    // - If there are issues you can verify if your user has access to the grid by navigating to the Grid user page.
    // - Note that you must be logged on to Ming.le before doing this.
    // - Example: https://yourservernameandport/grid/user
    //
    // - Set the ionApiToken property in the configuration.json file to the OAuth token string.
    // - Example: "ionApiToken": "V9k5niTDR1kq6RuYlEq3N3HxGq8u"
    //
    // - Set the devConfiguration attribute on the lm-page-container to the name of the configuration.json file
    // - Example:
    //   <lm-page-container devWidget="infor.sample.ionapi.m3" devConfiguration="configuration.json"></lm-page-container>
    //
    //
    // Developing and debugging
    // ========================
    // A widget using the ION API can be developed and debugged like any other widget.
    // Just remember to start the proxy and configure the configuration.json file.
    // The OAuth token will time out and when that happens you must acquire a new token and update
    // the configuration.json file.
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
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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
<<<<<<< HEAD
                template: "\n\t<div class=\"lm-padding-md\">\n\t\t<h3>Name</h3>\n\t\t<p>{{fullName}}</p>\n\n\t\t<h3>Email</h3>\n\t\t<p>{{user?.Email}}</p>\n\n\t\t<p><img src=\"{{photoUrl}}\" /></p>\n\t</div>\n\t"
            })
=======
                template: "\n\t<div class=\"lm-padding-md\" *ngIf=\"user$ | async as user\">\n\t\t<h3>Name</h3>\n\t\t<p>{{user.FirstName + \" \" + user.LastName}}</p>\n\n\t\t<h3>Email</h3>\n\t\t<p>{{user.Email}}</p>\n\n\t\t<p *ngIf=\"photoUrl$ | async as photoUrl\">\n\t\t\t<img [src]=\"photoUrl\" />\n\t\t</p>\n\t</div>\n\t"
            }),
            __metadata("design:paramtypes", [service_1.DataService])
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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