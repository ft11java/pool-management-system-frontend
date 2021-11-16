import { MaintenancePlanViewAllVisitorDTO } from "./maintenance-plan-view-all-visitor-dto";
import { PoolTypeCreateDTO } from "./pool-type-create-dto";
import { PoolUsageTypeCreateDTO } from "./pool-usage-type-create-dto";

export class PoolAllVisitorViewDTO{
    poolNumber:String|undefined;
    poolName:String|undefined;
    capacity:number|undefined;
    poolType:PoolTypeCreateDTO|undefined;
    poolUsageType:PoolUsageTypeCreateDTO | undefined;
    maintenancePlanViewAllDTO:MaintenancePlanViewAllVisitorDTO[]|undefined;

}