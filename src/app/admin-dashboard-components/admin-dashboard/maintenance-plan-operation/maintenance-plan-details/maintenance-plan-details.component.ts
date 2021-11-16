import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaintenancePlanOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-plan-operation-service/maintenance-plan-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenancePlan } from 'src/app/model/maintenance-plan-model';

@Component({
  selector: 'app-maintenance-plan-details',
  templateUrl: './maintenance-plan-details.component.html',
  styleUrls: ['./maintenance-plan-details.component.css']
})
export class MaintenancePlanDetailsComponent implements OnInit {

  id:number|undefined;
  maintenancePlan!:MaintenancePlan;
  constructor(private maintenancePlanOperationService:MaintenancePlanOperationServiceService,
    private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.maintenancePlan=new MaintenancePlan();
    this.maintenancePlanOperationService.getMaintenancePlanId(this.id).subscribe(data=>{
      this.maintenancePlan.operationMade=data.operationMade;
      this.maintenancePlan.nextMaintenanceDate=data.nextMaintenanceDate;
      this.maintenancePlan.maintenanceOperation=data.maintenanceOperation;
      this.maintenancePlan.invoicePrice=data.invoicePrice;
      this.maintenancePlan.pool=data.pool;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }
  }


