import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserViewUserDTO } from 'src/app/model/user-view-user-dto';

@Injectable({
  providedIn: 'root'
})
export class StaffForStaffServicesService {

  private baseURL="http://localhost:8081/api/v1/user/username";
  constructor(private httpClient:HttpClient) { }

  getUserUserByUserName(userName:String|undefined):Observable<UserViewUserDTO>{
    return this.httpClient.get<UserViewUserDTO>(`${this.baseURL}/${userName}`);

  }

}
