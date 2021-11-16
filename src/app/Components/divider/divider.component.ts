import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AllVisitorServicesService } from 'src/app/all-visitor-services/all-visitor-services/all-visitor-services.service';
import { PoolAllVisitorViewDTO } from 'src/app/model/pool-all-visitor-view-dto';
import { PoolNumber } from 'src/app/model/pool-number';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  poolNumberFormGroup=new FormGroup({
    poolNumber:new FormControl('')
  })

  pool:PoolAllVisitorViewDTO=new PoolAllVisitorViewDTO();
  poolNumber!:PoolNumber;
  
  
  constructor(private allVisitorServices:AllVisitorServicesService,
    private alertify:AlertifyService,
   ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.poolNumber=this.poolNumberFormGroup.value; 
    this.allVisitorServices.getPoolViewAllVisitorByPoolNumber(this.poolNumber.poolNumber).subscribe(data=>{
      this.pool.poolNumber=data.poolNumber;
      this.pool.poolName=data.poolName;
      this.pool.capacity=data.capacity;
      this.pool.poolType=data.poolType;
      this.pool.poolUsageType=data.poolUsageType;
      this.pool.maintenancePlanViewAllDTO=data.maintenancePlanViewAllDTO;
     },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    }) 
  }

}
