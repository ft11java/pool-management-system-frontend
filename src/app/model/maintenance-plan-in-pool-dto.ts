import { MaintenanceOperation } from "./maintenance-operation";

export class MainTenancePlanInPoolDTO{
    id:number|undefined;
    operationMade:Date|undefined;
    nextMaintenanceDate:Date|undefined;
    maintenanceOperation:MaintenanceOperation[] | undefined;
    invoicePrice:number|undefined;
}