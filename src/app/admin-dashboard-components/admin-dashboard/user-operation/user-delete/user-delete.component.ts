import { Component, OnInit } from '@angular/core';
import { UserOperationServiceService } from 'src/app/admin-dashboard-services/user-operation-service/user-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  users:User[]|undefined;
  user!:User;
  filterUsers:User[]|undefined;
  constructor(private userOperationService:UserOperationServiceService,
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

  userDelete(id:number|undefined){
    this.userOperationService.deleteUser(id).subscribe(data=>{
    this.alertify.success("Kullanıcı Silindi");
    this.getAllUserList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Kullanıcı Silinmesi İçin Hiç Bir Havuz Tarafından Kullanılmamalıdır");
    })
  }

  search(searchText:string):void{
    searchText=searchText.toLowerCase();
    this.filterUsers=this.users?.filter((user:User)=>{
      return user.userName!.toLowerCase().indexOf(searchText)>-1 || user.name!.toLowerCase().indexOf(searchText)>-1
      || user.lastName!.toLowerCase().indexOf(searchText)>-1 || user.roles!.role!.toLowerCase().indexOf(searchText)>-1;
    })
    }

}
