import { AddressCreateDTO } from "./address-create-dto";

export class PoolCreateDTO{
    poolNumber:String|undefined;
    poolName:String|undefined;
    capacity:number|undefined;
    resigtrationDate:Date|undefined;
    usersId:number|undefined;
    poolTypeId:number|undefined;
    poolUsageTypeId:number|undefined;
    address:AddressCreateDTO|undefined;
}