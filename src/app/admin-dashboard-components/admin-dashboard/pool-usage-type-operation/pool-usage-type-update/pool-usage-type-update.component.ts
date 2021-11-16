import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolUsageTypeCreateDTO } from 'src/app/model/pool-usage-type-create-dto';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';

@Component({
  selector: 'app-pool-usage-type-update',
  templateUrl: './pool-usage-type-update.component.html',
  styleUrls: ['./pool-usage-type-update.component.css']
})
export class PoolUsageTypeUpdateComponent implements OnInit {

  poolUsageTypeUpdateForm=new FormGroup({
    poolUsageTypeName:new FormControl('')
  });

  poolUsageTypeCreateDTO:PoolUsageTypeCreateDTO=new PoolUsageTypeCreateDTO;
  constructor(private poolUsageTypeOperationService:PoolUsageTypeOperationServiceService,
    private router:Router,
    private alertify:AlertifyService,
    private route:ActivatedRoute) { }

    id:number|undefined;
    poolUsageType!:PoolUsageType;

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.poolUsageType=new PoolUsageType();
    this.poolUsageTypeOperationService.getPoolUsageTypeId(this.id).subscribe(data=>{
    this.poolUsageType.poolUsageTypeName=data.poolUsageTypeName;
    })
  }

  onSubmit(){
    this.poolUsageTypeCreateDTO=this.poolUsageTypeUpdateForm.value;
    this.updatePoolUsageType(this.poolUsageType.id);
  }

  updatePoolUsageType(id:number|undefined){
    this.poolUsageTypeOperationService.updatepoolUsageType(this.id,this.poolUsageTypeCreateDTO).subscribe(data=>{
      this.alertify.success("Havuz Kullanım Tipi Güncellendi");
      this.goToPoolUsageTypeList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Güncelleme Yapılırken Bir Hata Oluştu");

    })  
  }
  goToPoolUsageTypeList (){
    this.router.navigate(['/admin-dashboard/pool-usage-type-update-list']);
  }
}
