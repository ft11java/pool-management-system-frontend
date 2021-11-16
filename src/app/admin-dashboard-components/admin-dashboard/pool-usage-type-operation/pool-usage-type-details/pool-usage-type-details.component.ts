import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';

@Component({
  selector: 'app-pool-usage-type-details',
  templateUrl: './pool-usage-type-details.component.html',
  styleUrls: ['./pool-usage-type-details.component.css']
})
export class PoolUsageTypeDetailsComponent implements OnInit {

  id:number|undefined;
  poolUsageType!:PoolUsageType;

  constructor(private poolUsageTypeOperationService:PoolUsageTypeOperationServiceService,
    private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.poolUsageType=new PoolUsageType();
    this.poolUsageTypeOperationService.getPoolUsageTypeId(this.id).subscribe(data=>{
      this.poolUsageType.poolUsageTypeName=data.poolUsageTypeName;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

}
