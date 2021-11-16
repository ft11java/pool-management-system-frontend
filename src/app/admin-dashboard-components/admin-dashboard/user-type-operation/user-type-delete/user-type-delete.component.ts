import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeOperationServiceService } from 'src/app/admin-dashboard-services/user-type-opetration-service/user-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { UserType } from 'src/app/model/user-type-model';

@Component({
  selector: 'app-user-type-delete',
  templateUrl: './user-type-delete.component.html',
  styleUrls: ['./user-type-delete.component.css']
})
export class UserTypeDeleteComponent implements OnInit {

  userTypes:UserType[]|undefined;
  userType!:UserType;
  filterUserTypes:UserType[]|undefined;
  constructor(private userTypeOperationService:UserTypeOperationServiceService,private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllUserType();
  }

  private getAllUserType(){
    this.userTypeOperationService.getAllUserTypeList().subscribe(data=>{
      this.userTypes=data;
      this.filterUserTypes=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Hata Oluştu");
    })
  }

 userTypeDelete(id:number|undefined){
   this.userTypeOperationService.deleteUserType(id).subscribe(data=>{
     console.log(data);
     this.alertify.success("Kullanıcı Tipi Silindi");
     this.getAllUserType();
   },
   error=>{
     console.log(error);
     this.alertify.error("Kullanıcı Tipinin Silinmesi İçin Hiç Bir Kullanıcı Tarafından Kullanılmamalı")
   });
 }

 search(searchText:string):void{
  searchText=searchText.toLowerCase();
  this.filterUserTypes=this.userTypes?.filter((usageType:UserType)=>{
    return usageType.userTitleName!.toLowerCase().indexOf(searchText)>-1 ;
  })
  }

}
