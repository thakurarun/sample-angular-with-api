import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {IUserModel, UserModel} from './UserModel';
import {TemplateUrl} from './../common';
@Component({
    selector: "user-profile",
    templateUrl: TemplateUrl("user/templates/user-form.component.html")
})
export class UserProfile {
    @Input() user: UserModel;
    @Output() addNewUser: EventEmitter<IUserModel> = new EventEmitter();

    sexList: Array<string>;
    constructor() {
        this.sexList = ['Female','Male','Not Decided'];
    }
    onSubmit(_user: IUserModel) {
        this.addNewUser.next(_user);
    }
    get diagnostic() { return JSON.stringify(this.user); }
}
