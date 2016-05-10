var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var UserModel_1 = require('./UserModel');
var common_1 = require('./../common');
var UserProfile = (function () {
    function UserProfile() {
        this.addNewUser = new core_1.EventEmitter();
        this.sexList = ['Female', 'Male', 'Not Decided'];
    }
    UserProfile.prototype.onSubmit = function (_user) {
        this.addNewUser.next(_user);
    };
    Object.defineProperty(UserProfile.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', UserModel_1.UserModel)
    ], UserProfile.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserProfile.prototype, "addNewUser", void 0);
    UserProfile = __decorate([
        core_1.Component({
            selector: "user-profile",
            templateUrl: common_1.TemplateUrl("user/templates/user-form.component.html")
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfile);
    return UserProfile;
})();
exports.UserProfile = UserProfile;
//# sourceMappingURL=userProfile.js.map