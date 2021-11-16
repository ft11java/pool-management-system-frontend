import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleOperationServiceService } from 'src/app/admin-dashboard-services/role-opetaion-service/role-operation-service.service';
import { UserOperationServiceService } from 'src/app/admin-dashboard-services/user-operation-service/user-operation-service.service';
import { UserTypeOperationServiceService } from 'src/app/admin-dashboard-services/user-type-opetration-service/user-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Role } from 'src/app/model/role-model';
import { User } from 'src/app/model/user';
import { UserCreateDTO } from 'src/app/model/user-create-dto';
import { UserType } from 'src/app/model/user-type-model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  
  userUpdateForm=new FormGroup({
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
  enabled:boolean|undefined;
  credentialsNonExpired:boolean|undefined;
  accountNonLocked:boolean|undefined;
  accountNonExpired:boolean|undefined;
  roleId:number|undefined;
  userTypeId:number|undefined;
  id:number|undefined;
  user!:User;
   userCreateDTO:UserCreateDTO=new UserCreateDTO;
   userTypes:UserType[] | undefined;
   roles:Role[] | undefined;
  constructor(private userOperationService:UserOperationServiceService,
    private userTypeOperationService:UserTypeOperationServiceService,
    private roleOperationService:RoleOperationServiceService,
    private router:Router,
    private alertify:AlertifyService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllUserTypeList()
    this.getAllRoleList();
    this.id=this.route.snapshot.params['id'];
    this.user=new User();
    this.userOperationService.getUserId(this.id).subscribe(data=>{
      this.user.userName=data.userName;
      this.user.email=data.email;
      this.user.password=data.password;
      this.user.name=data.name;
      this.user.lastName=data.lastName;
      this.user.phoneNumber=data.phoneNumber;
      this.user.userTitles=data.userTitles;
      this.user.accountNonExpired=data.accountNonExpired;
      this.user.accountNonLocked=data.accountNonLocked;
      this.user.credentialsNonExpired=data.credentialsNonExpired;
      this.user.enabled=data.enabled;
      this.user.roles=data.roles;
      this.userTypeId=this.user.userTitles?.id;
      this.roleId=this.user.roles?.id;
      this.accountNonExpired=this.user.accountNonExpired;
      this.accountNonLocked=this.user.accountNonLocked;
      this.credentialsNonExpired=this.user.credentialsNonExpired;
      this.enabled=this.user.enabled;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
   
  }

  getAllUserTypeList(){
    this.userTypeOperationService.getAllUserTypeList().subscribe(data=>{
      this.userTypes=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Kullanıcı Tipine Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });

  }

  getAllRoleList(){
    this.roleOperationService.getAllRoleList().subscribe(data=>{
      this.roles=data;
     },
    error=>{
      console.log(error);
      this.alertify.error("Role Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });
  }

  onSubmit(){
    this.userCreateDTO=this.userUpdateForm.value;
    this.updateUser(this.user.id);
  }

  updateUser(id:number|undefined){
    this.userOperationService.updateUser(this.id,this.userCreateDTO).subscribe(data=>{
      this.alertify.success("Kullanıcı Güncellendi");
      this.goToUserUpdateList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Güncelleme Yapılırken Bir Hata Oluştu");

    })  
  }

  goToUserUpdateList(){
    this.router.navigate(['/admin-dashboard/user-update-list'])
  }
}
