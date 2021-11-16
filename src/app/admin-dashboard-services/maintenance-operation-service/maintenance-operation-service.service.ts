import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaintenanceOperation } from 'src/app/model/maintenance-operation';
import { MaintenanceOperationCreateDTO } from 'src/app/model/maintenance-operation-create';


@Injectable({
  providedIn: 'root'
})
export class MaintenanceOperationServiceService {

 
  private baseURL="http://localhost:8081/api/v1/admin/maintenance-operation"

  constructor(private httpClient:HttpClient) { }
  
  getAllMaintenanceOperation():Observable<MaintenanceOperation[]>{
    return this.httpClient.get<MaintenanceOperation[]>(`${this.baseURL}`);
  }

  createMaintenanceOperation(maintenanceCreateOperation:MaintenanceOperationCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,maintenanceCreateOperation);
  }

  getMaintenanceOperationId(id:number|undefined):Observable<MaintenanceOperation>{
    return this.httpClient.get<MaintenanceOperation>(`${this.baseURL}/${id}`);
  }

  deleteMaintenanceOperation(id:number|undefined):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateMaintenanceOperation(id:number|undefined,maintenanceOperationCreate:MaintenanceOperationCreateDTO):Observable<MaintenanceOperation>{
    return this.httpClient.put<MaintenanceOperation>(`${this.baseURL}/${id}`,maintenanceOperationCreate);

  }
}
