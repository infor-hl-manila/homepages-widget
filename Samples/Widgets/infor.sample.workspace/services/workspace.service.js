var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@infor/sohoxi-angular"], function (require, exports, core_1, sohoxi_angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorkspaceService = /** @class */ (function () {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
        function WorkspaceService(capService) {
            this.capService = capService;
        }
        WorkspaceService.prototype.open = function (options) {
<<<<<<< HEAD
=======
=======
        function WorkspaceService(capService, messageService) {
            this.capService = capService;
            this.messageService = messageService;
        }
        WorkspaceService.prototype.open = function (options) {
            var _this = this;
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
            var cap = this.capService.contextualactionpanel(options.component, options.viewRef);
            cap.options({
                centerTitle: true,
            });
<<<<<<< HEAD
            cap.buttons([
=======
<<<<<<< HEAD
            cap.buttons([
=======
            var buttons = [
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
                {
                    click: function () { return cap.close(); },
                    text: "Cancel",
                    align: "left",
                },
                {
                    align: "center",
                    cssClass: "btn-icon",
                    icon: "#icon-launch",
                    click: function () {
                        cap.componentPanel.launchClicked();
                        cap.close();
                    },
                },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
                {
                    text: "Submit",
                    align: "right",
                    click: function () {
                        cap.componentPanel.submitClicked();
                        cap.close();
                    },
                },
            ]);
<<<<<<< HEAD
=======
=======
            ];
            if (!options.props.readOnly) {
                buttons.push({
                    text: "Submit",
                    align: "right",
                    click: function () {
                        cap.componentPanel.submitClicked().subscribe(function () { return cap.close(); }, function (error) { return _this.showError(error); });
                    },
                });
            }
            cap.buttons(buttons);
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
            cap.apply(function (component) {
                if (options.props) {
                    for (var propertyKey in options.props) {
                        if (options.props.hasOwnProperty(propertyKey)) {
                            component[propertyKey] = options.props[propertyKey];
                        }
                    }
                }
            });
            cap.title(options.title || " ");
            cap.trigger("immediate");
            cap.open();
        };
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        WorkspaceService.prototype.showError = function (error) {
            var messageRef = this.messageService.error({
                title: "Error when submitting changes",
                message: error.message,
                buttons: [
                    { text: "Close", click: function () { return messageRef.close(); } }
                ],
            });
            messageRef.open();
        };
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
        WorkspaceService = __decorate([
            core_1.Injectable({
                providedIn: "root",
            }),
<<<<<<< HEAD
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoContextualActionPanelService])
=======
<<<<<<< HEAD
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoContextualActionPanelService])
=======
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoContextualActionPanelService, sohoxi_angular_1.SohoMessageService])
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
        ], WorkspaceService);
        return WorkspaceService;
    }());
    exports.WorkspaceService = WorkspaceService;
});
//# sourceMappingURL=workspace.service.js.map