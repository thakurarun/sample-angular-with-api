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
var http_1 = require("angular2/http");
var UserModel_1 = require('./UserModel');
var userList_1 = require("./userList");
var userProfile_1 = require("./userProfile");
var UserBrowser = (function () {
    function UserBrowser(http) {
        this.users = new Array();
        this.selectedUser = new UserModel_1.UserModel();
        this.http = http;
        this.GetSomeUser();
    }
    UserBrowser.prototype.onChange = function (user) {
        this.selectedUser = user;
    };
    UserBrowser.prototype.onAddNewUser = function (_user, http) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://sample.api/api/UserModels", JSON.stringify(_user), options)
            .subscribe(function (res) {
            alert('ok');
            _this.GetSomeUser();
            _this.selectedUser = new UserModel_1.UserModel();
        });
    };
    UserBrowser.prototype.GetSomeUser = function () {
        var _this = this;
        this.http.get("http://sample.api/api/UserModels")
            .subscribe(function (users) {
            var result = users.json();
            _this.users = users.json();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserBrowser.prototype, "users", void 0);
    UserBrowser = __decorate([
        core_1.Component({
            selector: 'user-browser',
            directives: [userList_1.UserList, userProfile_1.UserProfile],
            template: "<user-list [users]=\"users\" [(selected)]=\"selectedUser\" (selectionChange)=\"onChange($event)\"></user-list>\n               <user-profile [(user)]=\"selectedUser\" (addNewUser)=\"onAddNewUser($event)\"></user-profile>",
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserBrowser);
    return UserBrowser;
})();
exports.UserBrowser = UserBrowser;
//# sourceMappingURL=userBrowser.js.map