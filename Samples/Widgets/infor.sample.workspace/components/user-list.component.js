var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../services/user.service"], function (require, exports, core_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserListComponent = /** @class */ (function () {
        function UserListComponent(userService) {
            this.userService = userService;
<<<<<<< HEAD
            this.userClick = new core_1.EventEmitter();
=======
<<<<<<< HEAD
            this.userClick = new core_1.EventEmitter();
=======
            this.userEditClick = new core_1.EventEmitter();
            this.userViewClick = new core_1.EventEmitter();
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
            this.users$ = this.userService.users$;
        }
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
        ], UserListComponent.prototype, "userClick", void 0);
        UserListComponent = __decorate([
            core_1.Component({
                selector: "sample-user-list",
                template: "\n\t\t<soho-listview>\n\t\t\t<li soho-listview-item *ngFor=\"let user of users$ | async\" (click)=\"userClick.emit(user)\">\n\t\t\t\t<p soho-listview-header>{{user.firstName}} {{user.lastName}}</p>\n\t\t\t\t<p soho-listview-subheader>{{user.email}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t",
<<<<<<< HEAD
=======
=======
        ], UserListComponent.prototype, "userEditClick", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UserListComponent.prototype, "userViewClick", void 0);
        UserListComponent = __decorate([
            core_1.Component({
                selector: "sample-user-list",
                template: "\n\t\t<soho-listview [selectable]=\"false\">\n\t\t\t<li soho-listview-item *ngFor=\"let user of users$ | async\">\n\t\t\t\t<p soho-listview-header>\n\t\t\t\t\t<span>{{user.firstName}} {{user.lastName}}</span>\n\t\t\t\t</p>\n\t\t\t\t<p soho-listview-subheader>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{user.email}}\n\t\t\t\t\t\t<button soho-button=\"icon\" icon=\"edit\" (click)=\"userEditClick.emit(user)\"></button>\n\t\t\t\t\t\t<button soho-button=\"icon\" icon=\"user\" (click)=\"userViewClick.emit(user)\"></button>\n\t\t\t\t\t</span>\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t",
                styles: ["\n\t\tbutton {\n\t\t\tfloat: right;\n\t\t\tbottom: 25px;\n\t\t}\n\t"]
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
            }),
            __metadata("design:paramtypes", [user_service_1.UserService])
        ], UserListComponent);
        return UserListComponent;
    }());
    exports.UserListComponent = UserListComponent;
});
//# sourceMappingURL=user-list.component.js.map