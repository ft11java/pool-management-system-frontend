import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaintenanceOperationServiceService } from 'src/app/admin-dashboard-services/maintenance-operation-service/maintenance-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { MaintenanceOperation } from 'src/app/model/maintenance-operation';
import { MaintenanceOperationCreateDTO } from 'src/app/model/maintenance-operation-create';

@Component({
  selector: 'app-maintenance-operation-update',
  templateUrl: './maintenance-operation-update.component.html',
  styleUrls: ['./maintenance-operation-update.component.css']
})
export class MaintenanceOperationUpdateComponent implements OnInit {

  maintenanceOperationUpdateForm=new FormGroup({
    operationName:new FormControl(''),
    whatFrequency:new FormControl(''),
    unitPrice:new FormControl('')
  });

  id:number|undefined;
  maintenanceOperation!:MaintenanceOperation;
  maintenanceOperationCreateDTO:MaintenanceOperationCreateDTO=new MaintenanceOperationCreateDTO;
  constructor(private maintenanceOperationService:MaintenanceOperationServiceService,
    private router:Router,
    private alertify:AlertifyService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.maintenanceOperation=new MaintenanceOperation;
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

    onSubmit(){
      this.maintenanceOperationCreateDTO=this.maintenanceOperationUpdateForm.value;
      this.updateMaintenanceOperation(this.maintenanceOperation.id);
    }

    updateMaintenanceOperation(id:number|undefined){
      this.maintenanceOperationService.updateMaintenanceOperation(this.id,this.maintenanceOperationCreateDTO).subscribe(data=>{
        this.alertify.success("Bakım Operasyonu Güncellendi");
        this.goToMaintenanceOperationList();

      },
      error=>{
        console.log(error);
        this.alertify.error("Güncelleme Yapılırken Bir Hata Oluştu");
  
      }) 
    }

    goToMaintenanceOperationList(){
      this.router.navigate(['/admin-dashboard/maintenance-operation-list']);
    }
    

  }


