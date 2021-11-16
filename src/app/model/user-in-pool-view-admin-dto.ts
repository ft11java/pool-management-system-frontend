import { UserType } from "./user-type-model";

export class UserInPoolDTO{
    id:number|undefined;
    name:String|undefined;
    lastName:String|undefined;
    phoneNumber:String|undefined;
    userTitles:UserType|undefined;
    }