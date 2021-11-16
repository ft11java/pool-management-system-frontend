import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoolServiceService } from 'src/app/admin-dashboard-services/pool-operation-service/pool-operation-service.service';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Pool } from 'src/app/model/pool-model';
import { PoolType } from 'src/app/model/pool-type-model';
import { PoolUpdateDTO } from 'src/app/model/pool-update-dto';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-pool-update',
  templateUrl: './pool-update.component.html',
  styleUrls: ['./pool-update.component.css']
})
export class PoolUpdateComponent implements OnInit {

  poolUpdateForm=new FormGroup({
    poolNumber:new FormControl('',[Validators.required,Validators.minLength(6)]),
    poolName:new FormControl('',Validators.required),
    capacity:new FormControl('',Validators.required),
    resigtrationDate:new FormControl('',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
    poolTypeId:new FormControl('',Validators.required),
    poolUsageTypeId:new FormControl('',Validators.required),
    address: new FormGroup({
      address: new FormControl('',Validators.required),
      street: new FormControl(''),
      neighborhood: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
    })
  })
  poolTypeId:number|undefined;
  poolUsageTypeId:number|undefined;
  id:number|undefined;
  pool!:Pool;
  poolUpdateDTO:PoolUpdateDTO=new PoolUpdateDTO();
  poolTypes:PoolType[]|undefined;
  poolUsageTypes:PoolUsageType[]|undefined;
    constructor(private poolOperationService:PoolServiceService,
      private poolTypeOperationService:PoolTypeOperationServiceService,
      private poolUsageTypeOperationService:PoolUsageTypeOperationServiceService,
      private router:Router,
      private alertify:AlertifyService,
      private route:ActivatedRoute
        ) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.pool=new Pool();
    this.poolOperationService.getPoolId(this.id).subscribe(data=>{
      this.pool.poolNumber=data.poolNumber;
      this.pool.poolName=data.poolName;
      this.pool.capacity=data.capacity;
      this.pool.resigtrationDate=data.resigtrationDate;
      this.pool.poolType=data.poolType;
      this.pool.poolUsageType=data.poolUsageType;
      this.pool.address=data.address;
      this.poolTypeId=this.pool.poolType?.id;
      this.poolUsageTypeId=this.pool.poolUsageType?.id;
    })
    
    
    this.poolTypeOperationService.getAllPoolTypeList().subscribe(data=>{
      this.poolTypes=data;  
    },
    error=>{
      console.log(error);
      this.alertify.error("Havuz Tipine Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });
    this.poolUsageTypeOperationService.getAllPoolUsageTypeList().subscribe(data=>{
      this.poolUsageTypes=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Havuz Kullanım Tipine Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });
    

  }
    onSubmit(){
      this.poolUpdateDTO=this.poolUpdateForm.value;
      this.updatePool(this.id);

    }

    updatePool(id:number|undefined){
      this.poolOperationService.updatePool(id,this.poolUpdateDTO).subscribe(data=>{
        this.alertify.success("Havuz Güncellendi");
        this.goToPoolList();
      },
      error=>{
        console.log(error);
        this.alertify.error("Güncelleme Yapılırken Bir Hata Oluştu");
  
      })  
    }

    goToPoolList(){
      this.router.navigate(['/admin-dashboard/pool-update-list']);
    }

    get f() {
      return this.poolUpdateForm.get('address') as FormGroup;
  }

  reset(){
    this.poolUpdateForm.reset();
  }

  changeCity(e: { target: { value: any; }; }) {
    this.poolUpdateForm.controls.poolUsageTypeId.setValue(e.target.value, {
      onlySelf: true
    })
  }

}
