import { UserTypeCreateDTO } from "./user-type-create-dto";

export class UserInPoolViewUserDTO{
    name:String|undefined;
    lastName:String|undefined;
    phoneNumber:String|undefined;
    userTitles:UserTypeCreateDTO|undefined;
}