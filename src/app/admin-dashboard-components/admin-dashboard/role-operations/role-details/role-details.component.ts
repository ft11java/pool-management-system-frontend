import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleOperationServiceService } from 'src/app/admin-dashboard-services/role-opetaion-service/role-operation-service.service';
import { Role } from 'src/app/model/role-model';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  id:number | undefined;
  role!:Role;

  constructor(private route:ActivatedRoute, private roleOperationService:RoleOperationServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.role=new Role();
    this.roleOperationService.getRoleById(this.id).subscribe(data=>{
      this.role.role=data.role;
    });
  }

}
