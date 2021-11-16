export class UserCreateDTO{
    userName:String|undefined;
    email:String|undefined;
    password:String|undefined;
    name:String|undefined;
    lastname:String|undefined;
    phoneNumber:String|undefined;
    userTitlesId:number|undefined;
    accountNonExpired:boolean|undefined;
    accountNonLocked:boolean|undefined;
    credentialsNonExpired:boolean|undefined;
    enabled:boolean|undefined;
    roleId:number|undefined;
}