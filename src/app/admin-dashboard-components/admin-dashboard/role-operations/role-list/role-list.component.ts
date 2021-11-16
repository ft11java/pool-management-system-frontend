import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleOperationServiceService } from 'src/app/admin-dashboard-services/role-opetaion-service/role-operation-service.service';
import { Role } from 'src/app/model/role-model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles:Role[]|undefined;
  filterRoles:Role[]|undefined;
  constructor(private roleOperationService:RoleOperationServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllRole();
    
  }

  private getAllRole(){
    this.roleOperationService.getAllRoleList().subscribe(data=> {
      this.roles=data;
      this.filterRoles=data;
      
    })
  }
  roleDetalist(id:number|undefined){
    this.router.navigate(['/admin-dashboard/role-detailst',id]);
  }

  search(searchText:string):void{
    searchText=searchText.toLowerCase();
    this.filterRoles=this.roles?.filter((role:Role)=>{
      return role.role!.toLowerCase().indexOf(searchText)>-1 ;
    })
    }
}
