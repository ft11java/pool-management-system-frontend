import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaintenancePlanOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-plan-operation-service/maintenance-plan-operation-service.service';
import { PoolServiceService } from 'src/app/admin-dashboard-services/pool-operation-service/pool-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenancePlanCreateDTO } from 'src/app/model/maintenance-plan-create-dto';
import { MaintenancePlan } from 'src/app/model/maintenance-plan-model';
import { Pool } from 'src/app/model/pool-model';

@Component({
  selector: 'app-maintenance-plan-update',
  templateUrl: './maintenance-plan-update.component.html',
  styleUrls: ['./maintenance-plan-update.component.css']
})
export class MaintenancePlanUpdateComponent implements OnInit {

  maintenancePlanUpdateForm=new FormGroup({
    operationMade:new FormControl(''),
    nextMaintenanceDate:new FormControl(''),
    invoicePrice:new FormControl(''),
   
  })

  id:number|undefined;
  maintenancePlan!:MaintenancePlan;
  maintenancePlanCreateDTO:MaintenancePlanCreateDTO=new MaintenancePlanCreateDTO;
  pools:Pool[]|undefined;
  constructor(private maintenancePlanOperationService:MaintenancePlanOperationServiceService,
    private poolOperationService:PoolServiceService,
    private router:Router,
    private alertify:AlertifyService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.maintenancePlan=new MaintenancePlan();
    this.maintenancePlanOperationService.getMaintenancePlanId(this.id).subscribe(data=>{
      this.maintenancePlan.operationMade=data.operationMade;
      this.maintenancePlan.nextMaintenanceDate=data.nextMaintenanceDate;
      this.maintenancePlan.invoicePrice=data.invoicePrice;
      this.maintenancePlan.pool=data.pool;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })

    this.poolOperationService.getAllPoolList().subscribe(data=>{
      this.pools=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Havuzlar Yüklenirken Bir Hata Oluştu");
    });
  }

  onSubmit(){
    this.maintenancePlanCreateDTO=this.maintenancePlanUpdateForm.value;
    this.maintenancePlanCreateDTO.poolId=this.maintenancePlan.pool?.id;
    this.updateMaintenancePlan();
  }

  updateMaintenancePlan(){
    this.maintenancePlanOperationService.updateMaintenancePlan(this.id,this.maintenancePlanCreateDTO).subscribe(data=>{
      this.alertify.success("Bakım Planı Güncellendi");
      this.goToMaintenancePlanUpdateList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Güncelleme Yapılırken Bir Hata Oluştu");
    })  
  }

  goToMaintenancePlanUpdateList(){
    this.router.navigate(['/admin-dashboard/maintenance-plan-update-list'])
  }

}
