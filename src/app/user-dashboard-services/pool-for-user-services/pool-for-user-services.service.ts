import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoolViewUserDTO } from 'src/app/model/pool-view-user-dto';

@Injectable({
  providedIn: 'root'
})
export class PoolForUserServicesService {

  private baseURL="http://localhost:8081/api/v1/user/pools";
  constructor(private httpClient:HttpClient) { }
  
  getPoolUserByUserName(userName:String):Observable<PoolViewUserDTO[]>{
    return this.httpClient.get<PoolViewUserDTO[]>(`${this.baseURL}/${userName}`);
  }

  getPoolUserByPoolNumber(poolNumber:String|undefined):Observable<PoolViewUserDTO>{
    return this.httpClient.get<PoolViewUserDTO>(`${this.baseURL}/${"poolnumber"}/${poolNumber}`);
  }
}
