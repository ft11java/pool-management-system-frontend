import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { UserViewUserDTO } from 'src/app/model/user-view-user-dto';
import { UserForUserServicesService } from 'src/app/user-dashboard-services/user-for-user-services/user-for-user-services.service';

@Component({
  selector: 'app-user-information-view',
  templateUrl: './user-information-view.component.html',
  styleUrls: ['./user-information-view.component.css']
})
export class UserInformationViewComponent implements OnInit {

  user!:UserViewUserDTO;
  constructor(private userForUserServices:UserForUserServicesService,
    private alertify:AlertifyService ) { }

  ngOnInit(): void {
    let userName = sessionStorage.getItem('username');
    this.userForUserServices.getUserUserByUserName(userName!).subscribe(data=>{
      this.user=new UserViewUserDTO();
      this.user.userName=data.userName;
      this.user.email=data.email;
      this.user.name=data.name;
      this.user.lastName=data.lastName;
      this.user.phoneNumber=data.phoneNumber;
      this.user.userTitles=data.userTitles;
      this.user.roles=data.roles;
      this.user.poolInUserViewUserDTO=data.poolInUserViewUserDTO;
      
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

}
