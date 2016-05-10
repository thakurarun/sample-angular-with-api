import {Component, Input} from "angular2/core";
import {Http, Headers, RequestOptions, Response} from "angular2/http";
import {IUserModel, UserModel} from './UserModel';
import {UserList} from "./userList";
import {UserProfile} from "./userProfile";
@Component({
    selector: 'user-browser',
    directives: [UserList, UserProfile],
    template: `<user-list [users]="users" [(selected)]="selectedUser" (selectionChange)="onChange($event)"></user-list>
               <user-profile [(user)]="selectedUser" (addNewUser)="onAddNewUser($event)"></user-profile>`,

})
export class UserBrowser {
    selectedUser: IUserModel;
    @Input() users: Array<UserModel>;
    http: Http;
    constructor(http: Http) {
        this.users = new Array<UserModel>();
        this.selectedUser = new UserModel();
        this.http = http;
        this.GetSomeUser();
    }
    onChange(user: UserModel) {
        this.selectedUser = user;
    }
    onAddNewUser(_user: IUserModel, http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post("http://sample.api/api/UserModels",
            JSON.stringify(_user), options)
            .subscribe((res: Response) => {
                alert('ok');
                this.GetSomeUser(); this.selectedUser = new UserModel();
            }
            );
    }
    GetSomeUser() {
        this.http.get("http://sample.api/api/UserModels")
            .subscribe(users => {
                let result = users.json();
                this.users = <Array<UserModel>>users.json();

            });
    }

}
