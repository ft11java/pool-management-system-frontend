import { MaintenanceOperationCreateDTO } from "./maintenance-operation-create";

export class MaintenancePlanInPoolViewUserDTO{
    operationMade:Date|undefined;
    nextMaintenanceDate:Date|undefined;
    maintenanceOperation:MaintenanceOperationCreateDTO[]|undefined;
    invoicePrice:number|undefined;
}