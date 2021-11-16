import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTypeOperationServiceService } from 'src/app/admin-dashboard-services/user-type-opetration-service/user-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { UserTypeCreateDTO } from 'src/app/model/user-type-create-dto';
import { UserType } from 'src/app/model/user-type-model';

@Component({
  selector: 'app-user-type-update',
  templateUrl: './user-type-update.component.html',
  styleUrls: ['./user-type-update.component.css']
})
export class UserTypeUpdateComponent implements OnInit {

  userTypeCreateForm=new FormGroup({
    userTitleName:new FormControl('',Validators.required)
  });

  userTypeCreateDTO:UserTypeCreateDTO=new UserTypeCreateDTO;
  constructor(private userTypeOperationService:UserTypeOperationServiceService,
    private router:Router,
    private alertify:AlertifyService,
    private route:ActivatedRoute) { }


  id:number|undefined;
  userType!:UserType;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userType=new UserType();
    this.userTypeOperationService.getUserTypeId(this.id).subscribe(data=>{
      this.userType.userTitleName=data.userTitleName;
    })
  }
  
  onSubmit(){
    this.userTypeCreateDTO=this.userTypeCreateForm.value;
    this.updateUserType(this.userType.id);

  }
  updateUserType(id:number|undefined){
    this.userTypeOperationService.updateUserType(this.id,this.userTypeCreateDTO).subscribe(data=>{
      console.log(data);
      this.alertify.success("Kullanıcı Tipi Güncellnedi");
      this.goToUserUpdateList();
      },
      error=>{
        console.log(error);
        this.alertify.error("Güncellme Yapılırken Hata Oluştu");
      })
  }

  goToUserUpdateList(){
    this.router.navigate(['/admin-dashboard/user-type-update-list'])
  }

}
