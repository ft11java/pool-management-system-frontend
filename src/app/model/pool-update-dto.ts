import { AddressCreateDTO } from "./address-create-dto";


export class PoolUpdateDTO{
    poolNumber:String|undefined;
    poolName:String|undefined;
    capacity:number|undefined;
    resigtrationDate:Date|undefined;
    poolTypeId:number|undefined;
    poolUsageTypeId:number|undefined;
    address:AddressCreateDTO|undefined;
}