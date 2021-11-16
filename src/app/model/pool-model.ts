import { Address } from "./address-model";
import { MainTenancePlanInPoolDTO } from "./maintenance-plan-in-pool-dto";
import { PoolType } from "./pool-type-model";
import { PoolUsageType } from "./pool-usage-type-model";
import { UserInPoolDTO } from "./user-in-pool-view-admin-dto";

export class Pool{
    id:number|undefined;
    poolNumber:String|undefined;
    poolName:String|undefined;
    capacity:number|undefined;
    resigtrationDate:Date|undefined;
    users:UserInPoolDTO[]|undefined;
    poolType:PoolType|undefined;
    poolUsageType:PoolUsageType|undefined;
    address:Address|undefined;
    maintenancePlans:MainTenancePlanInPoolDTO[] | undefined;
}