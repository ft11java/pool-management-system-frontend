import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintenanceOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-operation-service/maintenance-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenanceOperationCreateDTO } from 'src/app/model/maintenance-operation-create';

@Component({
  selector: 'app-maintenance-operation-create',
  templateUrl: './maintenance-operation-create.component.html',
  styleUrls: ['./maintenance-operation-create.component.css']
})
export class MaintenanceOperationCreateComponent implements OnInit {

  maintenanceOperationCreateForm=new FormGroup({
    operationName:new FormControl(''),
    whatFrequency:new FormControl(''),
    unitPrice:new FormControl('')
  });
  maintenanceOperationCreateDTO:MaintenanceOperationCreateDTO=new MaintenanceOperationCreateDTO;
  constructor(private maintenanceOperationService:MaintenanceOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
  this.maintenanceOperationCreateDTO=this.maintenanceOperationCreateForm.value;
  this.createMaintenenceOperation();
  }

  createMaintenenceOperation(){
    this.maintenanceOperationService.createMaintenanceOperation(this.maintenanceOperationCreateDTO).subscribe(data=>{
      this.alertify.success("Bakım Operasyonu Eklendi");
      this.goToMaintenanceOperationList();

    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Sorun İle Karşılaşıldı");
    })
  }

  goToMaintenanceOperationList(){
    this.router.navigate(['admin-dashboard/maintenance-operation-list']);
  }
}
