import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleOperationServiceService } from 'src/app/admin-dashboard-services/role-opetaion-service/role-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Role } from 'src/app/model/role-model';

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.css']
})
export class RoleDeleteComponent implements OnInit {

  roles:Role[]|undefined;
  role!:Role 
  filterRoles:Role[]|undefined;
  constructor(private roleOperationService:RoleOperationServiceService,private router:Router,
    private alertify:AlertifyService
    ) { }

  ngOnInit(): void {
    this.getAllRole();
    
  }

  private getAllRole(){
    this.roleOperationService.getAllRoleList().subscribe(data=> {
      this.roles=data;
      this.filterRoles=data;
      
    })
  }
  roleDelete(id:number|undefined){
    
      this.roleOperationService.deleteRole(id).subscribe(data=>{
        console.log(data);
        this.alertify.success("Role Silindi");
        this.getAllRole();},
        error=>{console.log(error);
          this.alertify.error("Role Silinmesi İçin Herhangi Bir Kullanıcı Tarafından Kullanılmaması Gereklidir.")
        }
      );
  }

  search(searchText:string):void{
    searchText=searchText.toLowerCase();
    this.filterRoles=this.roles?.filter((role:Role)=>{
      return role.role!.toLowerCase().indexOf(searchText)>-1 ;
    })
    }
  
}
