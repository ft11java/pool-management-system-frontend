import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoolServiceService } from 'src/app/admin-dashboard-services/pool-operation-service/pool-operation-service.service';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { UserOperationServiceService } from 'src/app/admin-dashboard-services/user-operation-service/user-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolCreateDTO } from 'src/app/model/pool-create-dto';
import { PoolType } from 'src/app/model/pool-type-model';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-pool-create',
  templateUrl: './pool-create.component.html',
  styleUrls: ['./pool-create.component.css']
})
export class PoolCreateComponent implements OnInit {

  poolUpdateForm=new FormGroup({
    poolNumber:new FormControl('',[Validators.required,Validators.minLength(6)]),
    poolName:new FormControl('',Validators.required),
    capacity:new FormControl('',Validators.required),
    resigtrationDate:new FormControl('',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
    usersId:new FormControl('',Validators.required),
    poolTypeId:new FormControl('',Validators.required),
    poolUsageTypeId:new FormControl('',Validators.required),
    address: new FormGroup({
      address: new FormControl('',Validators.required),
      street: new FormControl('',Validators.required),
      neighborhood: new FormControl('',Validators.required),
      district: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
    })
    

  });
  resigtrationDate:number=Date.now();
  poolCreateDTO:PoolCreateDTO=new PoolCreateDTO();
  users:User[]|undefined;
  poolTypes:PoolType[]|undefined;
  poolUsageTypes:PoolUsageType[]|undefined;
    constructor(private poolOperationService:PoolServiceService,
      private userOperationService:UserOperationServiceService,
      private poolTypeOperationService:PoolTypeOperationServiceService,
      private poolUsageTypeOperationService:PoolUsageTypeOperationServiceService,
      private router:Router,
      private alertify:AlertifyService
        ) { }

     
  ngOnInit(): void {
   

    this.userOperationService.getAllUserList().subscribe(data=>{
      this.users=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Kullanıcılara Ulaşılırken Bir Sorun İle Karşılaşıldı");
    });

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
      this.poolCreateDTO=this.poolUpdateForm.value;
      this.createPool();
    }

    createPool(){
      this.poolOperationService.createPool(this.poolCreateDTO).subscribe(data=>{
        this.alertify.success("Havuz Eklendi");
        this.goToPoolList();
      },
      error=>{
        console.log(error);
        this.alertify.error("Havuz Eklenirken Sistemsel Bir Sorun İle Karşılaşıldı");
      })
    }

    goToPoolList(){
      this.router.navigate(['/admin-dashboard/pool-list']);
    }
    
    get f() {
      return this.poolUpdateForm.get('address') as FormGroup;
  }

  reset(){
    this.poolUpdateForm.reset();
  }
  

  }


