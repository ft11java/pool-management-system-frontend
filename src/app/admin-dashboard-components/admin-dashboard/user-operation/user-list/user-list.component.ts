import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOperationServiceService } from 'src/app/admin-dashboard-services/user-operation-service/user-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[]|undefined;
  filterUsers:User[]|undefined;
  constructor(private userOperationService:UserOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllUserList();
  }

  private getAllUserList(){
    this.userOperationService.getAllUserList().subscribe(data=>{
      this.users=data;
      this.filterUsers=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  userDetails(id:number|undefined){
    this.router.navigate(['/admin-dashboard/user-details',id]);
  }

  search(searchText:string):void{
    searchText=searchText.toLowerCase();
    this.filterUsers=this.users?.filter((user:User)=>{
      return user.userName!.toLowerCase().indexOf(searchText)>-1 || user.name!.toLowerCase().indexOf(searchText)>-1
      || user.lastName!.toLowerCase().indexOf(searchText)>-1 || user.roles!.role!.toLowerCase().indexOf(searchText)>-1;
    })
    }

}
