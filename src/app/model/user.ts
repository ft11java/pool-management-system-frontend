import { PoolInUserViewAdminDTO } from "./pool-in-user-view-admin-dto";
import { Role } from "./role-model";
import { UserType } from "./user-type-model";

export class User{
    id:number|undefined;
    userName:String|undefined;
    email:String|undefined;
    password:String|undefined;
    name:String|undefined;
    lastName:String|undefined;
    phoneNumber:String|undefined;
    userTitles:UserType|undefined;
    accountNonExpired:boolean|undefined;
    accountNonLocked:boolean|undefined;
    credentialsNonExpired:boolean|undefined;
    enabled:boolean|undefined;
    roles:Role|undefined;
    poolInUserViewAdminDTO:PoolInUserViewAdminDTO[]|undefined;
}