import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenanceOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-operation-service/maintenance-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenanceOperation } from 'src/app/model/maintenance-operation';

@Component({
  selector: 'app-maintenance-operation-delete',
  templateUrl: './maintenance-operation-delete.component.html',
  styleUrls: ['./maintenance-operation-delete.component.css']
})
export class MaintenanceOperationDeleteComponent implements OnInit {

  maintenanceOperations:MaintenanceOperation[]|undefined;
  maintenanceOperation!:MaintenanceOperation;
  constructor(private maintenanceOperationService:MaintenanceOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllMaintenanceOperationList();
  }

  getAllMaintenanceOperationList(){
    this.maintenanceOperationService.getAllMaintenanceOperation().subscribe(data=>{
      this.maintenanceOperations=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  maintenanceOperationDelete(id:number|undefined){
    this.maintenanceOperationService.deleteMaintenanceOperation(id).subscribe(data=>{
      this.alertify.success("Bakım Operasyonu Silindi");
      this.getAllMaintenanceOperationList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Bakım Operasyonunun Silinmesi İçin Hiç Bir Bakım Planı Tarafından Kullanılmamalıdır");
    })
  }

}
