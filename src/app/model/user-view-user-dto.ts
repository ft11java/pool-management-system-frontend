import { PoolInUserViewUserDTO } from "./pool-in-user-view-user-dto";
import { RoleCreateDTO } from "./role-create-dto";
import { UserTypeCreateDTO } from "./user-type-create-dto";

export class UserViewUserDTO{
    userName:String|undefined;
    email:String|undefined;
    name:String|undefined;
    lastName:String|undefined;
    phoneNumber:String|undefined;
    userTitles:UserTypeCreateDTO|undefined;
    roles:RoleCreateDTO|undefined;
    poolInUserViewUserDTO:PoolInUserViewUserDTO[]|undefined;

}