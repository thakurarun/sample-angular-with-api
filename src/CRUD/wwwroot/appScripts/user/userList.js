var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var UserModel_1 = require('./UserModel');
var common_1 = require('./../common');
var UserList = (function () {
    function UserList() {
        this.selectionChange = new core_1.EventEmitter();
    }
    UserList.prototype.ngOnInit = function () {
        this.hasUsers = this.users.length > 0;
        console.log(this.hasUsers);
    };
    UserList.prototype.onSelectionChange = function (_user) {
        this.selectionChange.next(_user);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserList.prototype, "users", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', UserModel_1.UserModel)
    ], UserList.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserList.prototype, "selectionChange", void 0);
    UserList = __decorate([
        core_1.Component({
            selector: "user-list",
            templateUrl: common_1.TemplateUrl("user/templates/user-list.component.html")
        }), 
        __metadata('design:paramtypes', [])
    ], UserList);
    return UserList;
})();
exports.UserList = UserList;
//# sourceMappingURL=userList.js.map