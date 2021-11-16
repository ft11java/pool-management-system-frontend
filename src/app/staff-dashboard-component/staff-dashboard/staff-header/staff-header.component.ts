import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AuthenticationService } from 'src/app/login-services/authentication.service';

@Component({
  selector: 'app-staff-header',
  templateUrl: './staff-header.component.html',
  styleUrls: ['./staff-header.component.css']
})
export class StaffHeaderComponent implements OnInit {
 
 

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


