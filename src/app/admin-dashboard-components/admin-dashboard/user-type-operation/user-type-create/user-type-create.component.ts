import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTypeOperationServiceService } from 'src/app/admin-dashboard-services/user-type-opetration-service/user-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { UserTypeCreateDTO } from 'src/app/model/user-type-create-dto';

@Component({
  selector: 'app-user-type-create',
  templateUrl: './user-type-create.component.html',
  styleUrls: ['./user-type-create.component.css']
})
export class UserTypeCreateComponent implements OnInit {
  userTypeCreateForm=new FormGroup({
    userTitleName:new FormControl('',Validators.required)
  });

  userTypeCreateDTO:UserTypeCreateDTO=new UserTypeCreateDTO;
  constructor(private userTypeOperationService:UserTypeOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userTypeCreateDTO=this.userTypeCreateForm.value;
    this.createUserType();
  }

  createUserType(){
    this.userTypeOperationService.createUserType(this.userTypeCreateDTO).subscribe(data=>{
      console.log(data);
      this.alertify.success("Kullanıcı Tipi Eklendi");
      this.goToUserTypeList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Sorun İle Karşılaşıldı");
    })
  }

  goToUserTypeList(){
    this.router.navigate(['/admin-dashboard/user-type-list']);
  }

  reset(){
    this.userTypeCreateForm.reset();
  }
}
