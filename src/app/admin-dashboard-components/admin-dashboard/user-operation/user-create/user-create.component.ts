import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleOperationServiceService } from 'src/app/admin-dashboard-services/role-opetaion-service/role-operation-service.service';
import { UserOperationServiceService } from 'src/app/admin-dashboard-services/user-operation-service/user-operation-service.service';
import { UserTypeOperationServiceService } from 'src/app/admin-dashboard-services/user-type-opetration-service/user-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Role } from 'src/app/model/role-model';
import { UserCreateDTO } from 'src/app/model/user-create-dto';
import { UserType } from 'src/app/model/user-type-model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userCreateForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    userTitlesId:new FormControl('',Validators.required),
    accountNonExpired:new FormControl('',Validators.required),
    accountNonLocked:new FormControl('',Validators.required),
    credentialsNonExpired:new FormControl('',Validators.required),
    enabled:new FormControl('',Validators.required),
    roleId:new FormControl('',Validators.required)

  });

  userCreateDTO:UserCreateDTO=new UserCreateDTO;
  userTypes:UserType[] | undefined;
  roles:Role[] | undefined;
  constructor(private userOperationService:UserOperationServiceService,
    private userTypeOperationService:UserTypeOperationServiceService,
    private roleOperationService:RoleOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.userTypeOperationService.getAllUserTypeList().subscribe(data=>{
      this.userTypes=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Kullanıcı Tipine Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });

    this.roleOperationService.getAllRoleList().subscribe(data=>{
      this.roles=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Role Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });

  }

  onSubmit(){
    this.userCreateDTO=this.userCreateForm.value;
    this.createUser();

  }

  createUser(){
    this.userOperationService.createUser(this.userCreateDTO).subscribe(data=>{
      this.alertify.success("User Eklendi");
      this.goToUserList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Sorun İle Karşılaşıldı");
    })
  }

  goToUserList(){
    this.router.navigate(['/admin-dashboard/user-list']);
  }


reset(){
  this.userCreateForm.reset();
}

}
