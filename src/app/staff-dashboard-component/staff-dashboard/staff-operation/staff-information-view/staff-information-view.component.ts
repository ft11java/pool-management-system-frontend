import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { UserViewUserDTO } from 'src/app/model/user-view-user-dto';
import { StaffForStaffServicesService } from 'src/app/staff-dashboard-services/staff-for-staff-services/staff-for-staff-services.service';

@Component({
  selector: 'app-staff-information-view',
  templateUrl: './staff-information-view.component.html',
  styleUrls: ['./staff-information-view.component.css']
})
export class StaffInformationViewComponent implements OnInit {

  user!:UserViewUserDTO;
  constructor(private staffForStaffServices:StaffForStaffServicesService,
    private alertify:AlertifyService ) { }

  ngOnInit(): void {
    let userNamee = sessionStorage.getItem('username');
    this.staffForStaffServices.getUserUserByUserName(userNamee!).subscribe(data=>{
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

