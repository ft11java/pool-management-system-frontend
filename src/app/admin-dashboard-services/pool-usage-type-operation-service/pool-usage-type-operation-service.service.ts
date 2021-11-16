import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoolUsageTypeCreateDTO } from 'src/app/model/pool-usage-type-create-dto';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';

@Injectable({
  providedIn: 'root'
})
export class PoolUsageTypeOperationServiceService {

  private baseURL="http://localhost:8081/api/v1/admin/pool-usage-type";
  constructor(private httpClient:HttpClient) { }

  getAllPoolUsageTypeList():Observable<PoolUsageType[]>{
    return this.httpClient.get<PoolUsageType[]>(`${this.baseURL}`);
  }

  createPoolUsageType(poolUsageTypeCreateDTO:PoolUsageTypeCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,poolUsageTypeCreateDTO);
  }

  getPoolUsageTypeId(id:number|undefined):Observable<PoolUsageType>{
    return this.httpClient.get<PoolUsageType>(`${this.baseURL}/${id}`);
  }

  deletePoolUsageType(id:number|undefined):Observable<Object>{
    return this.httpClient.delete<String>(`${this.baseURL}/${id}`);
  }

  updatepoolUsageType(id:number|undefined,poolUsageTypeCreateDTO:PoolUsageTypeCreateDTO):Observable<Object>{
    return this.httpClient.put<PoolUsageType>(`${this.baseURL}/${id}`,poolUsageTypeCreateDTO);
  }
}
