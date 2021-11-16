import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';

@Component({
  selector: 'app-pool-usage-type-update-list',
  templateUrl: './pool-usage-type-update-list.component.html',
  styleUrls: ['./pool-usage-type-update-list.component.css']
})
export class PoolUsageTypeUpdateListComponent implements OnInit {

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

  poolUsageTypeUpdate(id:number|undefined){
    this.router.navigate(['/admin-dashboard/pool-usage-type-update',id]);
  }
}
