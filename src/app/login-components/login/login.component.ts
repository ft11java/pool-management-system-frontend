import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AuthenticationService } from 'src/app/login-services/authentication.service';

import { LoginUser } from '../LoginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  userName:new FormControl(''),
  password:new FormControl('')
})
 
  model:LoginUser=new LoginUser();
  constructor(
    private alertify:AlertifyService,
    private router: Router,
    private authenticationServices:AuthenticationService) { }

  ngOnInit(): void {
  }

  

  onSubmit(){
    this.model=this.loginForm.value;
    this.authenticationServices.authenticate(this.model).subscribe(
      data=>{
        this.alertify.success("Giriş Yaptınız");
        sessionStorage.setItem('role', data.role.role);
        this.router.navigate([''])
        
      },
      error => {
        this.alertify.error("Giriş Başarısız");

      }
    );

  }

}
