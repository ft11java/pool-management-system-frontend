import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserCreateDTO } from 'src/app/model/user-create-dto';
import { UserTypeCreateDTO } from 'src/app/model/user-type-create-dto';

@Injectable({
  providedIn: 'root'
})
export class UserOperationServiceService {

  private baseURL="http://localhost:8081/api/v1/admin/user";
  constructor(private httpClient:HttpClient) { }

  getAllUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(userCreateDTO:UserCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,userCreateDTO);
  }

  getUserId(id:number|undefined):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  deleteUser(id:number|undefined):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateUser(id:number|undefined,userCreateDTO:UserCreateDTO):Observable<User>{
    return this.httpClient.put<User>(`${this.baseURL}/${id}`,userCreateDTO);
  }
}
