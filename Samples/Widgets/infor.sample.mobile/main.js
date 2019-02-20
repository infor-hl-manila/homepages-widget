var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "rxjs", "rxjs/operators"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, rxjs_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MobileWidgetComponent = /** @class */ (function () {
        function MobileWidgetComponent(zone) {
            this.zone = zone;
            this.imageSource = "all";
            this.videoSource = "all";
            this.sensors$ = new rxjs_1.Subject();
            this.qr$ = new rxjs_1.Subject();
            this.audio$ = new rxjs_1.Subject();
            this.video$ = new rxjs_1.Subject();
            this.image$ = new rxjs_1.Subject();
            this.network$ = new rxjs_1.Subject();
            this.location$ = new rxjs_1.Subject();
            this.initLogging();
        }
        MobileWidgetComponent.prototype.ngOnInit = function () {
            this.device$ = this.widgetContext.getDevice();
        };
        MobileWidgetComponent.prototype.launchLink = function (url) {
            this.widgetContext.launch({ url: url });
        };
        MobileWidgetComponent.prototype.launchMobileLink = function (url) {
            this.device$.pipe(operators_1.switchMap(function (device) { return device.openExternalLink({ url: url }); })).subscribe();
        };
        MobileWidgetComponent.prototype.getImage = function (source) {
            var _this = this;
            this.device$.pipe(operators_1.switchMap(function (device) { return device.getImage({ source: source }); }), operators_1.map(function (result) { return result.data; })).subscribe(function (imageData) { return _this.image$.next(imageData); });
        };
        MobileWidgetComponent.prototype.getVideo = function (source) {
            var _this = this;
            this.device$.pipe(operators_1.switchMap(function (device) { return device.getVideo({ source: source }); }), operators_1.map(function (result) { return result.data; })).subscribe(function (videoData) { return _this.video$.next(videoData); });
        };
        MobileWidgetComponent.prototype.getAudio = function () {
            var _this = this;
            this.device$.pipe(operators_1.switchMap(function (device) { return device.getAudio(); }), operators_1.map(function (result) { return result.data; })).subscribe(function (audioData) { return _this.audio$.next(audioData); });
        };
        MobileWidgetComponent.prototype.showMapLocation = function () {
            this.device$.pipe(operators_1.switchMap(function (device) { return device.showMap({
                mapType: "location",
                coordinates: { latitude: 0, longitude: 0 },
            }); })).subscribe();
        };
        MobileWidgetComponent.prototype.showMapMarkers = function () {
            this.device$.pipe(operators_1.switchMap(function (device) { return device.showMap({
                mapType: "marker",
                markers: [
                    {
                        coordinates: { latitude: 0, longitude: 0 },
                        label: "Marker 1",
                    },
                    {
                        coordinates: { latitude: 0, longitude: 0.1 },
                        label: "Marker 2",
                    },
                    {
                        coordinates: { latitude: 0, longitude: 0.2 },
                        label: "Marker 3",
                    },
                ],
            }); })).subscribe();
        };
        MobileWidgetComponent.prototype.showMapNavigation = function () {
            this.device$.pipe(operators_1.switchMap(function (device) { return device.showMap({
                mapType: "navigation",
                start: { latitude: 0, longitude: 0 },
                destination: { latitude: 1, longitude: 1 },
            }); })).subscribe();
        };
        MobileWidgetComponent.prototype.getLocation = function () {
            var _this = this;
            this.device$.pipe(operators_1.switchMap(function (device) { return device.getLocation(); })).subscribe(function (location) { return _this.location$.next(location); });
        };
        MobileWidgetComponent.prototype.readQR = function () {
            var _this = this;
            this.device$.pipe(operators_1.switchMap(function (device) { return device.readQRCode(); }), operators_1.map(function (result) { return result.text; })).subscribe(function (value) { return _this.qr$.next(value); });
        };
        MobileWidgetComponent.prototype.getNetwork = function () {
            var _this = this;
            this.device$.pipe(operators_1.switchMap(function (device) { return device.getNetwork(); })).subscribe(function (data) { return _this.network$.next(data); });
        };
        MobileWidgetComponent.prototype.getSensors = function () {
            var _this = this;
            this.device$.pipe(operators_1.switchMap(function (device) { return device.getSensors(); })).subscribe(function (sensorData) { return _this.sensors$.next(sensorData); });
        };
        /**
         * NOTE: This method will override console.log and console.error.
         * This should never ever ever ever be done in a production environment,
         * and it is quite dangerous to do even in development.
         */
        MobileWidgetComponent.prototype.initLogging = function () {
            var _this = this;
            var consoleLogs$ = rxjs_1.Observable.create(function (observer) {
                var oldConsoleLog = console.log;
                var oldConsoleError = console.error;
                console.log = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var message = args.map(function (s) { return JSON.stringify(s); }).join(" ");
                    _this.zone.run(function () { return observer.next({ message: message }); });
                    oldConsoleLog.apply(void 0, args);
                };
                console.error = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var message = args.map(function (s) { return JSON.stringify(s); }).join(" ");
                    _this.zone.run(function () { return observer.next({ message: message, isError: true }); });
                    oldConsoleError.apply(void 0, args);
                };
            });
            this.logs$ = consoleLogs$.pipe(operators_1.scan(function (entries, entry) { return [entry].concat(entries); }, []));
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], MobileWidgetComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], MobileWidgetComponent.prototype, "widgetInstance", void 0);
        MobileWidgetComponent = __decorate([
            core_1.Component({
                template: "\n\t\t<soho-accordion>\n\t\t\t<soho-accordion-header>Location</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"getLocation()\">Get location</button>\n\t\t\t\t\t<p *ngIf=\"location$ | async as location\">\n\t\t\t\t\t\tlatitude: <b>{{location.latitude}}</b>,\n\t\t\t\t\t\tlongitude: <b>{{location.longitude}}</b>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>QR Reader</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"readQR()\">Start QR Reader</button>\n\t\t\t\t\t<p *ngIf=\"qr$ | async as qr\">{{qr}}</p>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Network</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"getNetwork()\">Get network</button>\n\t\t\t\t\t<p *ngIf=\"network$ | async as network\">\n\t\t\t\t\t\tconnectionState: <b>{{network.connectionState}}</b>,\n\t\t\t\t\t\tconnectionType: <b>{{network.connectionType}}</b>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Links</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<input #url type=\"text\" value=\"https://example.com\">\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"launchMobileLink(url.value)\">Mobile Launch</button>\n\t\t\t\t\t<button soho-button=\"tertiary\" (click)=\"launchLink(url.value)\">Context Launch</button>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Motion sensors</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"getSensors()\">Get sensors</button>\n\t\t\t\t\t<p *ngIf=\"sensors$ | async as sensors\">\n\t\t\t\t\t\tacceleration: <b>{{sensors.acceleration}}</b>,\n\t\t\t\t\t\tgyroscope: <b>{{sensors.gyroscope}}</b>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Maps</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<button soho-button=\"tertiary\" (click)=\"showMapLocation()\">Open map with a location</button>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<button soho-button=\"tertiary\" (click)=\"showMapMarkers()\">Open map with markers</button>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<button soho-button=\"tertiary\" (click)=\"showMapNavigation()\">Open map with navigation</button>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Image</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<input soho-radiobutton type=\"radio\" id=\"i-source-all\" name=\"i-source-all\" value=\"all\" [(ngModel)]=\"imageSource\">\n\t\t\t\t\t<label soho-label [forRadioButton]=\"true\" for=\"i-source-all\">Both</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<input soho-radiobutton type=\"radio\" id=\"i-source-camera\" name=\"i-source-camera\" value=\"camera\" [(ngModel)]=\"imageSource\">\n\t\t\t\t\t<label soho-label [forRadioButton]=\"true\" for=\"i-source-camera\">Camera</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<input soho-radiobutton type=\"radio\" id=\"i-source-library\" name=\"i-source-library\" value=\"library\" [(ngModel)]=\"imageSource\">\n\t\t\t\t\t<label soho-label [forRadioButton]=\"true\" for=\"i-source-library\">Library</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"getImage(imageSource)\">Get Image</button>\n\t\t\t\t\t<img *ngIf=\"image$ | async as imageUrl\" [src]=\"imageUrl\">\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Video</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<input soho-radiobutton type=\"radio\" id=\"v-source-all\" name=\"v-source-all\" value=\"all\" [(ngModel)]=\"videoSource\">\n\t\t\t\t\t<label soho-label [forRadioButton]=\"true\" for=\"v-source-all\">Both</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<input soho-radiobutton type=\"radio\" id=\"v-source-camera\" name=\"v-source-camera\" value=\"camera\" [(ngModel)]=\"videoSource\">\n\t\t\t\t\t<label soho-label [forRadioButton]=\"true\" for=\"v-source-camera\">Camera</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<input soho-radiobutton type=\"radio\" id=\"v-source-library\" name=\"v-source-library\" value=\"library\" [(ngModel)]=\"videoSource\">\n\t\t\t\t\t<label soho-label [forRadioButton]=\"true\" for=\"v-source-library\">Library</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"getVideo(videoSource)\">Get Video</button>\n\t\t\t\t\t<video *ngIf=\"video$ | async as videoUrl\" [src]=\"videoUrl\" controls></video>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Audio</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<button soho-button=\"primary\" (click)=\"getAudio()\">Get Audio</button>\n\t\t\t\t\t<audio *ngIf=\"audio$ | async as audioUrl\" controls>\n\t\t\t\t\t\t<source [src]=\"audioUrl\" type=\"audio/mp3\">\n\t\t\t\t\t</audio>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\n\t\t\t<soho-accordion-header>Logs</soho-accordion-header>\n\t\t\t<soho-accordion-pane>\n\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t<button soho-button=\"tertiary\" (click)=\"initLogging()\">Clear</button>\n\t\t\t\t\t<div class=\"log-container\">\n\t\t\t\t\t\t<p *ngFor=\"let logEntry of logs$ | async\" [class.error-msg]=\"logEntry.isError\">{{logEntry.message}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</soho-accordion-pane>\n\t\t</soho-accordion>\n\t",
                styles: ["\n\t\t.log-container > p {\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 12px;\n\t\t\tmargin: 0;\n\t\t\tpadding: 1px;\n\t\t\tborder: 1px solid lightgray;\n\t\t}\n\t\t.error-msg {\n\t\t\tcolor: red;\n\t\t}\n\t"]
            }),
            __metadata("design:paramtypes", [core_1.NgZone])
        ], MobileWidgetComponent);
        return MobileWidgetComponent;
    }());
    exports.MobileWidgetComponent = MobileWidgetComponent;
    var MobileWidgetModule = /** @class */ (function () {
        function MobileWidgetModule() {
        }
        MobileWidgetModule = __decorate([
            core_1.NgModule({
                declarations: [MobileWidgetComponent],
                entryComponents: [MobileWidgetComponent],
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    sohoxi_angular_1.SohoAccordionModule,
                    sohoxi_angular_1.SohoButtonModule,
                    sohoxi_angular_1.SohoRadioButtonModule,
                    sohoxi_angular_1.SohoLabelModule,
                ],
            })
        ], MobileWidgetModule);
        return MobileWidgetModule;
    }());
    exports.MobileWidgetModule = MobileWidgetModule;
});
//# sourceMappingURL=main.js.map