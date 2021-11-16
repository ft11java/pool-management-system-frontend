import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeOperationServiceService } from 'src/app/admin-dashboard-services/user-type-opetration-service/user-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { UserType } from 'src/app/model/user-type-model';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.css']
})
export class UserTypeListComponent implements OnInit {

  userTypes:UserType[]|undefined;
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
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
        
  }

  userTypeDetails(id:number|undefined){
    this.router.navigate(['/admin-dashboard/user-type-detailst',id]);
  }

  search(searchText:string):void{
    searchText=searchText.toLowerCase();
    this.filterUserTypes=this.userTypes?.filter((usageType:UserType)=>{
      return usageType.userTitleName!.toLowerCase().indexOf(searchText)>-1 ;
    })
    }


}
