import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoolServiceService } from 'src/app/admin-dashboard-services/pool-operation-service/pool-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Pool } from 'src/app/model/pool-model';


@Component({
  selector: 'app-pool-details',
  templateUrl: './pool-details.component.html',
  styleUrls: ['./pool-details.component.css']
})
export class PoolDetailsComponent implements OnInit {

  id:number|undefined;
  pool!:Pool;
  constructor(private poolOperationService:PoolServiceService,
    private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.pool=new Pool();
    this.poolOperationService.getPoolId(this.id).subscribe(data=>{
    this.pool.poolNumber=data.poolNumber;
    this.pool.poolName=data.poolName;
    this.pool.capacity=data.capacity;
    this.pool.resigtrationDate=data.resigtrationDate;
    this.pool.users=data.users;
    this.pool.poolType=data.poolType;
    this.pool.poolUsageType=data.poolUsageType;
    this.pool.address=data.address;
    this.pool.maintenancePlans=data.maintenancePlans;
    
    
 
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }


}
