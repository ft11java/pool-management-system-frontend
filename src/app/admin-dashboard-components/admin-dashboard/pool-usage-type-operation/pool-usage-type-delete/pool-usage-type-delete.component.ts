import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';

@Component({
  selector: 'app-pool-usage-type-delete',
  templateUrl: './pool-usage-type-delete.component.html',
  styleUrls: ['./pool-usage-type-delete.component.css']
})
export class PoolUsageTypeDeleteComponent implements OnInit {

  poolUsageTypes:PoolUsageType[]|undefined;
  poolUsageType!: PoolUsageType;
  constructor(private poolUsageTypeOperationService:PoolUsageTypeOperationServiceService,
    private router:Router, private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllPoolUsageType();
  }

  private getAllPoolUsageType(){
    this.poolUsageTypeOperationService.getAllPoolUsageTypeList().subscribe(data=>{
      this.poolUsageTypes=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Hata Oluştu");
    })
  }

  poolUsageTypeDelete(id:number|undefined){
    this.poolUsageTypeOperationService.deletePoolUsageType(id).subscribe(data=>{
      this.alertify.success("Havuz Kullanım Tipi Silindi"),
      this.getAllPoolUsageType();
    },
    error=>{
      console.log(error);
      this.alertify.error("Havuz Kullanım Tipinin Silinmesi İçin Hiç Bir Havuz Tarafından Kullanılmamalıdır");
    })
  }

}
