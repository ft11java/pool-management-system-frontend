import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintenancePlanOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-plan-operation-service/maintenance-plan-operation-service.service';
import { PoolServiceService } from 'src/app/admin-dashboard-services/pool-operation-service/pool-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenancePlanCreateDTO } from 'src/app/model/maintenance-plan-create-dto';
import { Pool } from 'src/app/model/pool-model';

@Component({
  selector: 'app-maintenance-plan-create',
  templateUrl: './maintenance-plan-create.component.html',
  styleUrls: ['./maintenance-plan-create.component.css']
})
export class MaintenancePlanCreateComponent implements OnInit {

  maintenancePlanCreateForm=new FormGroup({
    operationMade:new FormControl(''),
    nextMaintenanceDate:new FormControl(''),
    invoicePrice:new FormControl(''),
    poolId:new FormControl('')
  })
  
  maintenancePlanCreateDTO:MaintenancePlanCreateDTO=new MaintenancePlanCreateDTO;
  pools:Pool[]|undefined;
  constructor(private maintenancePlanOperationService:MaintenancePlanOperationServiceService,
    private poolOperationService:PoolServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.poolOperationService.getAllPoolList().subscribe(data=>{
      this.pools=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Havuzlara Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });
  }

  onSubmit(){
    this.maintenancePlanCreateDTO=this.maintenancePlanCreateForm.value;
    this.createMaintenancePlan();
  }

  createMaintenancePlan(){
    this.maintenancePlanOperationService.createMaintenancePlan(this.maintenancePlanCreateDTO).subscribe(data=>{
      this.alertify.success("Bakım Planı Eklendi");
      this.goToMaintenancePlanList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Sorun İle Karşılaşıldı");
    })

  }
    goToMaintenancePlanList(){
      this.router.navigate(['/admin-dashboard/maintenance-plan-list']);
    }
 

}
