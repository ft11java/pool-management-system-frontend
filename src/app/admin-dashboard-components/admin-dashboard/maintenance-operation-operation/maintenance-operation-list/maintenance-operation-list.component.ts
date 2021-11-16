import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenanceOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-operation-service/maintenance-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenanceOperation } from 'src/app/model/maintenance-operation';

@Component({
  selector: 'app-maintenance-operation-list',
  templateUrl: './maintenance-operation-list.component.html',
  styleUrls: ['./maintenance-operation-list.component.css']
})
export class MaintenanceOperationListComponent implements OnInit {

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

  maintenanceOperationDetails(id:number|undefined){
    this.router.navigate(['/admin-dashboard/maintenance-operation-details',id]);
  }

}
