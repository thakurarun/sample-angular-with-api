import {Component} from 'angular2/core';
import {UserBrowser} from "./user/userBrowser";
import {TemplateUrl} from './common';

@Component({
    selector: 'my-app',
    directives: [UserBrowser],
    template: '<user-browser></user-browser>'
})
export class AppComponent { }