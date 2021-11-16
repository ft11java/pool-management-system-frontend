import { AddressCreateDTO } from "./address-create-dto";
import { MaintenancePlanInPoolViewUserDTO } from "./maintenance-plan-in-pool-view-user-dto";
import { PoolTypeCreateDTO } from "./pool-type-create-dto";
import { PoolUsageTypeCreateDTO } from "./pool-usage-type-create-dto";
import { UserInPoolViewUserDTO } from "./user-in-pool-view-user-dto";

export class PoolViewUserDTO{
    poolNumber:String|undefined;
    poolName:String|undefined;
    capacity:number|undefined;
    resigtrationDate:Date|undefined;
    users:UserInPoolViewUserDTO[]|undefined;
    poolType:PoolTypeCreateDTO|undefined;
    poolUsageType:PoolUsageTypeCreateDTO|undefined;
    address:AddressCreateDTO|undefined;
    maintenancePlans:MaintenancePlanInPoolViewUserDTO[]|undefined;
        

}