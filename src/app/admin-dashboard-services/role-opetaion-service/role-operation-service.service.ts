import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleCreateDTO } from 'src/app/model/role-create-dto';
import { Role } from 'src/app/model/role-model';

@Injectable({
  providedIn: 'root'
})
export class RoleOperationServiceService {

 private baseURL="http://localhost:8081/api/v1/admin/role";
  constructor(private httpClient:HttpClient) { }

  getAllRoleList():Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.baseURL}`);
  }

  createRole(roleCreateDTO:RoleCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,roleCreateDTO);
  }

  getRoleById(id:number|undefined):Observable<Role>{
    return this.httpClient.get<Role>(`${this.baseURL}/${id}`)
  }

  deleteRole(id:number|undefined):Observable<Object>{
    return this.httpClient.delete<String>(`${this.baseURL}/${id}`)
  }
}
