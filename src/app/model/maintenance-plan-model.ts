import { MaintenanceOperation } from "./maintenance-operation";
import { PoolInMaintenancePlanDTO } from "./pool-in-maintenance-plan-dto";

export class MaintenancePlan{
    id:number|undefined;
    operationMade:Date|undefined;
    nextMaintenanceDate:Date|undefined;
    maintenanceOperation:MaintenanceOperation[]|undefined;
    invoicePrice:number|undefined;
    pool:PoolInMaintenancePlanDTO|undefined;
}