import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AllVisitorServicesService } from 'src/app/all-visitor-services/all-visitor-services/all-visitor-services.service';
import { PoolAllVisitorViewDTO } from 'src/app/model/pool-all-visitor-view-dto';
import { PoolNumber } from 'src/app/model/pool-number';

@Component({
  selector: 'app-all-visitor-operation',
  templateUrl: './all-visitor-operation.component.html',
  styleUrls: ['./all-visitor-operation.component.css']
})
export class AllVisitorOperationComponent implements OnInit {

  poolNumberFormGroup=new FormGroup({
    poolNumber:new FormControl('')
  })

  poolAllVisitorViewDTO:PoolAllVisitorViewDTO=new PoolAllVisitorViewDTO();
  poolNumber!:PoolNumber;
  
  constructor(private allVisitorServices:AllVisitorServicesService,
    private alertify:AlertifyService,
    private router:Router) { }


  ngOnInit(): void {
  }
  onSubmit(){
    this.poolNumber=this.poolNumberFormGroup.value;    
    this.allVisitorServices.getPoolViewAllVisitorByPoolNumber(this.poolNumber.poolNumber).subscribe(data=>{
      this.poolAllVisitorViewDTO=data;
      console.log(this.poolAllVisitorViewDTO);
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    }) 
  }
}
