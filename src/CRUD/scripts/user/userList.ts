import {Component, Input, Output, EventEmitter} from "angular2/core";
import {UserModel} from './UserModel';
import {TemplateUrl} from './../common';
@Component({
    selector: "user-list",
    templateUrl: TemplateUrl("user/templates/user-list.component.html")
})
export class UserList {
    @Input() users: UserModel[];
    @Input() selected: UserModel;
    @Output() selectionChange: EventEmitter<UserModel> = new EventEmitter();
    hasUsers: boolean;
    constructor() {

    }
    ngOnInit() {
        this.hasUsers = this.users.length > 0;
        console.log(this.hasUsers);
    }
    onSelectionChange(_user: UserModel) {
        this.selectionChange.next(_user);
    }
}