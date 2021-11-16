import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTypeCreateDTO } from 'src/app/model/user-type-create-dto';
import { UserType } from 'src/app/model/user-type-model';

@Injectable({
  providedIn: 'root'
})
export class UserTypeOperationServiceService {

  private baseURL="http://localhost:8081/api/v1/admin/user-title";
  constructor(private httpClient:HttpClient) { }
 
  getAllUserTypeList():Observable<UserType[]>{
    return this.httpClient.get<UserType[]>(`${this.baseURL}`)
  }

  createUserType(userTitleCreateDTO:UserTypeCreateDTO):Observable<Object>{
    
    return this.httpClient.post<String>(`${this.baseURL}`,userTitleCreateDTO)
  }

  getUserTypeId(id:number|undefined):Observable<UserType>{
    return this.httpClient.get<UserType>(`${this.baseURL}/${id}`)
  }

  deleteUserType(id:number|undefined):Observable<Object>{
    return this.httpClient.delete<String>(`${this.baseURL}/${id}`)
  }

  updateUserType(id:number|undefined,userTypeCreateDTO:UserTypeCreateDTO):Observable<Object>{
    return this.httpClient.put<UserType>(`${this.baseURL}/${id}`,userTypeCreateDTO)

  }
}
