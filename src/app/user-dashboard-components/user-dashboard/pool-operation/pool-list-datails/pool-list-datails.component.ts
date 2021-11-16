import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolViewUserDTO } from 'src/app/model/pool-view-user-dto';
import { PoolForUserServicesService } from 'src/app/user-dashboard-services/pool-for-user-services/pool-for-user-services.service';

@Component({
  selector: 'app-pool-list-datails',
  templateUrl: './pool-list-datails.component.html',
  styleUrls: ['./pool-list-datails.component.css']
})
export class PoolListDatailsComponent implements OnInit {

  poolNumber!:String|undefined;
  pool!:PoolViewUserDTO;
  constructor(private poolForUserOperationServive:PoolForUserServicesService,
    private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.poolNumber=this.route.snapshot.params['poolNumber'];
    console.log(this.poolNumber);
    this.pool=new PoolViewUserDTO();
    this.poolForUserOperationServive.getPoolUserByPoolNumber(this.poolNumber).subscribe(data=>{
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
