import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AuthenticationService } from 'src/app/login-services/authentication.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private alertify:AlertifyService,
    private router: Router,
    private authenticationServices:AuthenticationService) { } 

  ngOnInit(): void {
  }
  rotuerDashboard(){
    let role = sessionStorage.getItem('role')
    if(role==="ROLE_ADMIN"){
      this.router.navigate(['admin-dashboard']);

    }
   else if(role==="ROLE_USER"){
      this.router.navigate(['user-dashboard']);

    }

   else if(role==="ROLE_STAFF"){
      this.router.navigate(['staff-dashboard']);

    }

  }

  isLoggedIn(){
    return this.authenticationServices.isUserLoggedIn();
  }
  logout(){
    this.authenticationServices.logOut();
    this.alertify.error("Çıkış Yaptınız");  
  }

}


