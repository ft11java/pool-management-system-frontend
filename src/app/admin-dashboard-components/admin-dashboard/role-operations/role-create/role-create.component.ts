import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleOperationServiceService } from 'src/app/admin-dashboard-services/role-opetaion-service/role-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { RoleCreateDTO } from 'src/app/model/role-create-dto';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
  roleCreateForm=new FormGroup({
    role:new FormControl('',Validators.required)
  });

  roleCreateDTO:RoleCreateDTO =new RoleCreateDTO;
  constructor(private roleOperationService:RoleOperationServiceService,
    private router:Router,
    private alertify:AlertifyService
    ) { }

  ngOnInit(  ): void {
  }
  onSubmit(){
    this.roleCreateDTO=this.roleCreateForm.value;
    this.creatRole();
  }

  creatRole(){
    this.roleOperationService.createRole(this.roleCreateDTO).subscribe(data=>{
      console.log(data);
      this.alertify.success("Role Eklendi");
      this.goToRoleList();

    },
    error=>console.log(error));
  }

  goToRoleList(){
    this.router.navigate(['/admin-dashboard/role-list']);
  }

  reset(){
    this.roleCreateForm.reset();
  }

}
