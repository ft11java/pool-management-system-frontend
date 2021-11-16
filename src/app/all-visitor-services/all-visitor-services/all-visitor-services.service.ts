import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoolAllVisitorViewDTO } from 'src/app/model/pool-all-visitor-view-dto';

@Injectable({
  providedIn: 'root'
})
export class AllVisitorServicesService {
  private baseURL="http://localhost:8081/api/v1/viewall/pool"
  
  poolNumber:String|undefined;
  constructor(private httpClient:HttpClient) { }
  

  getPoolViewAllVisitorByPoolNumber(poolNumber:String|undefined):Observable<PoolAllVisitorViewDTO>{
    console.log(poolNumber);
    return this.httpClient.get<PoolAllVisitorViewDTO>(`${this.baseURL}/${poolNumber}`);
  }
}
