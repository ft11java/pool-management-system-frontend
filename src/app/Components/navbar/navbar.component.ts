import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AuthenticationService } from 'src/app/login-services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private alertify:AlertifyService,
    private router: Router,
    private authenticationServices:AuthenticationService) { }

  ngOnInit(): void {
   
  }

  rotuerDashboard(){
    
    let role = sessionStorage.getItem('role')
    if(role=="ROLE_ADMIN"){
      this.router.navigate(['admin-dashboard']);

    }
   else if(role=="ROLE_USER"){
      this.router.navigate(['user-dashboard']);

    }

   else if(role=="ROLE_STAFF"){
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

  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  toPortfolio(){
    document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"});
  }

  toBlog(){
    document.getElementById("blog")?.scrollIntoView({behavior:"smooth"});
  }
  
  toDivider(){
    document.getElementById("divider")?.scrollIntoView({behavior:"smooth"});
  }

  toApproach(){
    document.getElementById("approach")?.scrollIntoView({behavior:"smooth"});
  }
  toTeam(){
    document.getElementById("team")?.scrollIntoView({behavior:"smooth"});
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }



}
