import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenancePlanOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-plan-operation-service/maintenance-plan-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenancePlan } from 'src/app/model/maintenance-plan-model';

@Component({
  selector: 'app-maintenance-plan-update-list',
  templateUrl: './maintenance-plan-update-list.component.html',
  styleUrls: ['./maintenance-plan-update-list.component.css']
})
export class MaintenancePlanUpdateListComponent implements OnInit {

  maintenancePlans:MaintenancePlan[]|undefined;
  constructor(private maintenancePlanOperationService:MaintenancePlanOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllMaintenancePlanList();
  }

  private getAllMaintenancePlanList(){
    this.maintenancePlanOperationService.getAllMaintenancePlanList().subscribe(data=>{
      this.maintenancePlans=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  maintenancePlanUpdate(id:number|undefined){
    this.router.navigate(['/admin-dashboard/maintenance-plan-update',id]);
  }

  
}
