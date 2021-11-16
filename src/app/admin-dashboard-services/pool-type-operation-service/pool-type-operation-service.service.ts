import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoolTypeCreateDTO } from 'src/app/model/pool-type-create-dto';
import { PoolType } from 'src/app/model/pool-type-model';


@Injectable({
  providedIn: 'root'
})
export class PoolTypeOperationServiceService {

  private baseURL="http://localhost:8081/api/v1/admin/pool-type";
  constructor(private httpClient:HttpClient) { }

  getAllPoolTypeList():Observable<PoolType[]>{
    return this.httpClient.get<PoolType[]>(`${this.baseURL}`)
  }

  createPoolType(poolTypeCreateDTO:PoolTypeCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,poolTypeCreateDTO)
  }

  getPoolTypeId(id:number|undefined):Observable<PoolType>{
    return this.httpClient.get<PoolType>(`${this.baseURL}/${id}`)
  }

  deletePoolType(id:number|undefined):Observable<Object>{
    return this.httpClient.delete<String>(`${this.baseURL}/${id}`)
  }

  updatePoolType(id:number|undefined,poolTypeCreateDTO:PoolTypeCreateDTO):Observable<Object>{
    return this.httpClient.put<PoolType>(`${this.baseURL}/${id}`,poolTypeCreateDTO)
  }


}
