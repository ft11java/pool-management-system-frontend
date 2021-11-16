import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoolCreateDTO } from 'src/app/model/pool-create-dto';
import { Pool } from 'src/app/model/pool-model';
import { PoolUpdateDTO } from 'src/app/model/pool-update-dto';

@Injectable({
  providedIn: 'root'
})
export class PoolServiceService {

  private baseURL="http://localhost:8081/api/v1/admin/pool";
  constructor(private httpClient:HttpClient) { }

  getAllPoolList():Observable<Pool[]>{
    return this.httpClient.get<Pool[]>(`${this.baseURL}`);
  }

  createPool(poolCreateDTO:PoolCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,poolCreateDTO);
  }

  getPoolId(id:number|undefined):Observable<Pool>{
    return this.httpClient.get<Pool>(`${this.baseURL}/${id}`);
  }

  deletePool(id:number|undefined):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updatePool(id:number|undefined,poolUpdateDTO:PoolUpdateDTO):Observable<Pool>{
    return this.httpClient.put<Pool>(`${this.baseURL}/${id}`,poolUpdateDTO);
  }

  addPoolToUser(poolId:number|undefined,userId:number|undefined):Observable<Pool>{
    return this.httpClient.get<Pool>(`${this.baseURL}/${poolId}/${"adduser"}/${userId}`);
  }

  removePoolToUser(poolId:number|undefined,userId:number|undefined):Observable<Pool>{
    return this.httpClient.get<Pool>(`${this.baseURL}/${poolId}/${"removeuser"}/${userId}`);
  }

  
}
