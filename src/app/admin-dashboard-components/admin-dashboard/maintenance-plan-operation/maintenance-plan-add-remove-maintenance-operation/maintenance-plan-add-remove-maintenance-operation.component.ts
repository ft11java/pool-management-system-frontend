import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { MaintenanceOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-operation-service/maintenance-operation-service.service';
import { MaintenancePlanOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-plan-operation-service/maintenance-plan-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenanceOperation } from 'src/app/model/maintenance-operation';
import { MaintenancePlan } from 'src/app/model/maintenance-plan-model';

@Component({
  selector: 'app-maintenance-plan-add-remove-maintenance-operation',
  templateUrl: './maintenance-plan-add-remove-maintenance-operation.component.html',
  styleUrls: ['./maintenance-plan-add-remove-maintenance-operation.component.css']
})
export class MaintenancePlanAddRemoveMaintenanceOperationComponent implements OnInit {

  id:number|undefined;
  maintenancePlan!:MaintenancePlan;
  maintenanceOperations:MaintenanceOperation[]|undefined;
  
  constructor(private maintenancePlanOperationServive:MaintenancePlanOperationServiceService,
    private maintenanceOperationService:MaintenanceOperationServiceService,
    private route:ActivatedRoute,private alertify:AlertifyService,) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getMaintenancePlan(this.id);
  }

  private getMaintenancePlan(id:number|undefined){
    this.maintenancePlan=new MaintenancePlan();
    this.maintenancePlanOperationServive.getMaintenancePlanId(id).subscribe(data=>{
      this.maintenancePlan.id=data.id;
      this.maintenancePlan.operationMade=data.operationMade;
      this.maintenancePlan.maintenanceOperation=data.maintenanceOperation;
      this.maintenancePlan.pool=data.pool;
      this.maintenanceOperationService.getAllMaintenanceOperation().subscribe(data=>{
        this.maintenanceOperations=data;
        this.maintenancePlan.maintenanceOperation?.forEach(maintenanceOperation=>{
          this.maintenanceOperations=this.maintenanceOperations?.filter(item=> item.id!=maintenanceOperation.id);
        })
      },
      error=>{
        console.log(error);
        this.alertify.error("Bak??m Operasyonlar?? Y??klenirken Bir Hata Olu??tu");
      })
    },
    error=>{
      console.log(error);
      this.alertify.error("Bak??m Plan?? Y??klenirken Bir Hata Olu??tu");
    })
  }

  maintenancePlanAddMaintenanceOperation(id:number|undefined){
    this.maintenancePlanOperationServive.addMaintenenanceOperation(this.maintenancePlan.id,id).subscribe(data=>{
      this.alertify.success("Ekleme ????lemi Yap??ld??");
      this.getMaintenancePlan(this.id); 
    },
    error=>{
      console.log(error);
      this.alertify.error("Ekleme ????lemi Yap??l??rken Bir Hata Olu??tu");
    })
  }

  maintenancePlanRemoveMaintenanceOperation(id:number|undefined){
    this.maintenancePlanOperationServive.removeMaintenenanceOperation(this.maintenancePlan.id,id).subscribe(data=>{
      this.alertify.success("????karma ????lemi Yap??ld??");
      this.getMaintenancePlan(this.id);  
    },
    error=>{
      console.log(error);
      this.alertify.error("????karma ????lemi Yap??l??rken Bir Hata Olu??tu");
    })
  }
}
