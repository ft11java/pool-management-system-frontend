import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaintenancePlanCreateDTO } from 'src/app/model/maintenance-plan-create-dto';
import { MaintenancePlan } from 'src/app/model/maintenance-plan-model';

@Injectable({
  providedIn: 'root'
})
export class MaintenancePlanOperationServiceService {

  private baseURL="http://localhost:8081/api/v1/admin/maintenance-plan";
  constructor(private httpClient:HttpClient) { }

  getAllMaintenancePlanList():Observable<MaintenancePlan[]>{
    return this.httpClient.get<MaintenancePlan[]>(`${this.baseURL}`)
  }

  createMaintenancePlan(maintenancePlanCretaeDTO:MaintenancePlanCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,maintenancePlanCretaeDTO);
  }

  getMaintenancePlanId(id:number|undefined):Observable<MaintenancePlan>{
    return this.httpClient.get<MaintenancePlan>(`${this.baseURL}/${id}`);
  }

  deleteMaintenancePlan(id:number|undefined):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateMaintenancePlan(id:number|undefined,maintenancePlanCretaeDTO:MaintenancePlanCreateDTO):Observable<MaintenancePlan>{
    return this.httpClient.put<MaintenancePlan>(`${this.baseURL}/${id}`,maintenancePlanCretaeDTO);
  }

  addMaintenenanceOperation(maintenancePlanId:number|undefined,maintennaceOpeartionId:number|undefined):Observable<MaintenancePlan>{
    return this.httpClient.get<MaintenancePlan>(`${this.baseURL}/${maintenancePlanId}/${"add-maintenance-operation"}/${maintennaceOpeartionId}`);
  }

  removeMaintenenanceOperation(maintenancePlanId:number|undefined,maintennaceOpeartionId:number|undefined):Observable<MaintenancePlan>{
    return this.httpClient.get<MaintenancePlan>(`${this.baseURL}/${maintenancePlanId}/${"remove-maintenance-operation"}/${maintennaceOpeartionId}`);
  }
}
