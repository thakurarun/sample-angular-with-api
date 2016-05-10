export interface IUserModel {
    id: number,
    firstName: string,
    lastName: string,
    isActive: boolean,
    sex: string
}
export class UserModel implements IUserModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public isActive: boolean;
    public sex: string;
    constructor() { }
}