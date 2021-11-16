import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolUsageType } from 'src/app/model/pool-usage-type-model';

@Component({
  selector: 'app-pool-usage-type-list',
  templateUrl: './pool-usage-type-list.component.html',
  styleUrls: ['./pool-usage-type-list.component.css']
})
export class PoolUsageTypeListComponent implements OnInit {

  poolUsageTypes:PoolUsageType[]|undefined;
  constructor(private poolUsageTypeOperationService:PoolUsageTypeOperationServiceService,private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllPoolUsageType();
  }

  private getAllPoolUsageType(){
    this.poolUsageTypeOperationService.getAllPoolUsageTypeList().subscribe(data=>{
      this.poolUsageTypes=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  poolUsageTypeDetails(id:number|undefined){
    this.router.navigate(['/admin-dashboard/pool-usage-type-details',id]);
  }

}
