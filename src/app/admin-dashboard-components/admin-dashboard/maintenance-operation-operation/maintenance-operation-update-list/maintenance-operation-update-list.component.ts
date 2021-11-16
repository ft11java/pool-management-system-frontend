import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenanceOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-operation-service/maintenance-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenanceOperation } from 'src/app/model/maintenance-operation';

@Component({
  selector: 'app-maintenance-operation-update-list',
  templateUrl: './maintenance-operation-update-list.component.html',
  styleUrls: ['./maintenance-operation-update-list.component.css']
})
export class MaintenanceOperationUpdateListComponent implements OnInit {
 
  maintenanceOperations:MaintenanceOperation[]|undefined;
  
  constructor(private maintenanceOperationService:MaintenanceOperationServiceService,
    private router:Router,
    private alertify:AlertifyService ) { }

  ngOnInit(): void {
    this.getAllMaintenanceOperationList();
  }

  private getAllMaintenanceOperationList(){
    this.maintenanceOperationService.getAllMaintenanceOperation().subscribe(data=>{
      this.maintenanceOperations=data;
    },   
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  maintenanceOperationUpdate(id:number|undefined){
    this.router.navigate(['/admin-dashboard/maintenance-operation-update',id]);
  }

}
