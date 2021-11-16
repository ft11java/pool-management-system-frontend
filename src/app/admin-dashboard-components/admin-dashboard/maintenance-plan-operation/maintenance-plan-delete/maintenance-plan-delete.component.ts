import { Component, OnInit } from '@angular/core';
import { MaintenancePlanOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-plan-operation-service/maintenance-plan-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenancePlan } from 'src/app/model/maintenance-plan-model';

@Component({
  selector: 'app-maintenance-plan-delete',
  templateUrl: './maintenance-plan-delete.component.html',
  styleUrls: ['./maintenance-plan-delete.component.css']
})
export class MaintenancePlanDeleteComponent implements OnInit {

  maintenancePlans:MaintenancePlan[]|undefined;
  constructor(private maintenancePlanOperationService:MaintenancePlanOperationServiceService,
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

  maintenancePlanDelete(id:number|undefined){
    this.maintenancePlanOperationService.deleteMaintenancePlan(id).subscribe(data=>{
      this.alertify.success("Bakım Planı Silindi");
      this.getAllMaintenancePlanList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Bakım Planı Silinmesi İçin Hiç Bir Havuz Tarafından Kullanılmamalıdır");
    })
  }
}
