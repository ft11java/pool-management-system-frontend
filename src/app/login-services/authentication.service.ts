import { Injectable } from '@angular/core';
import { LoginUser} from '../login-components/LoginUser';
import { UserLoginRole } from '../login-components/UserLoginRole';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  private baseURL="http://localhost:8081/api/v1/validateLoginRole";
  modelUserName="";
  

  constructor(private httpClient: HttpClient) { }

  authenticate(model:LoginUser) {
  
    this.modelUserName=model.userName;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(model.userName + ':' + model.password) });
    return this.httpClient.get<UserLoginRole>(`${this.baseURL}/${model.userName}`, { headers }).pipe(
      map(
        userData => {
          
          sessionStorage.setItem('username', this.modelUserName);
          let authString = 'Basic ' + btoa(model.userName + ':' + model.password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('basicauth')
  

  }


}
