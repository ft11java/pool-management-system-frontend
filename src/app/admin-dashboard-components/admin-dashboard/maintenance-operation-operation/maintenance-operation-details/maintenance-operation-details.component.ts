import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaintenanceOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-operation-service/maintenance-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenanceOperation } from 'src/app/model/maintenance-operation';

@Component({
  selector: 'app-maintenance-operation-details',
  templateUrl: './maintenance-operation-details.component.html',
  styleUrls: ['./maintenance-operation-details.component.css']
})
export class MaintenanceOperationDetailsComponent implements OnInit {

  id:number|undefined;
  maintenanceOperation!:MaintenanceOperation;
  constructor(private maintenanceOperationService:MaintenanceOperationServiceService,
    private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.maintenanceOperation=new MaintenanceOperation();
    this.maintenanceOperationService.getMaintenanceOperationId(this.id).subscribe(data=>{
      this.maintenanceOperation.operationName=data.operationName;
      this.maintenanceOperation.whatFrequency=data.whatFrequency;
      this.maintenanceOperation.unitPrice=data.unitPrice;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

}
