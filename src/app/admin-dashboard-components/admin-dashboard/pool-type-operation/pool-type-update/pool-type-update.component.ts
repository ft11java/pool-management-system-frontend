import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolTypeCreateDTO } from 'src/app/model/pool-type-create-dto';
import { PoolType } from 'src/app/model/pool-type-model';

@Component({
  selector: 'app-pool-type-update',
  templateUrl: './pool-type-update.component.html',
  styleUrls: ['./pool-type-update.component.css']
})
export class PoolTypeUpdateComponent implements OnInit {
  
  poolTypeUpdateForm=new FormGroup({
    poolTypeName:new FormControl('')
  });

  poolTypeCreateDTO:PoolTypeCreateDTO=new PoolTypeCreateDTO;
  constructor(private poolTypeOperationService:PoolTypeOperationServiceService,
    private router:Router,
    private alertify:AlertifyService,
    private route:ActivatedRoute) { }

    id:number|undefined;
    poolType!:PoolType;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.poolType=new PoolType();
    this.poolTypeOperationService.getPoolTypeId(this.id).subscribe(data=>{
      this.poolType.poolTypeName=data.poolTypeName;
    })
  }

  onSubmit(){
    this.poolTypeCreateDTO=this.poolTypeUpdateForm.value;
    this.updatePoolType(this.poolType.id);
  }

  updatePoolType(id:number|undefined){
    this.poolTypeOperationService.updatePoolType(this.id,this.poolTypeCreateDTO).subscribe(data=>{
      this.alertify.success("Havuz Tipi Güncellendi");
     this.goToPoolTpeUpdateList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Güncelleme Yapılırken Bir Hata Oluştu");
    })
  }

  goToPoolTpeUpdateList(){
    this.router.navigate(['/admin-dashboard/pool-type-update-list'])
  }
}
