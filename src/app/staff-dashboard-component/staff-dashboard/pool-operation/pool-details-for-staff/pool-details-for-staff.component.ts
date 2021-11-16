import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolViewUserDTO } from 'src/app/model/pool-view-user-dto';
import { PoolForStaffServicesService } from 'src/app/staff-dashboard-services/pool-for-staff-services/pool-for-staff-services.service';

@Component({
  selector: 'app-pool-details-for-staff',
  templateUrl: './pool-details-for-staff.component.html',
  styleUrls: ['./pool-details-for-staff.component.css']
})
export class PoolDetailsForStaffComponent implements OnInit {

  poolNumber!:String|undefined;
  pool!:PoolViewUserDTO;
  constructor(private poolForStaffOperationServive:PoolForStaffServicesService,
    private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.poolNumber=this.route.snapshot.params['poolNumber'];
    this.pool=new PoolViewUserDTO();
    this.poolForStaffOperationServive.getPoolUserByPoolNumber(this.poolNumber).subscribe(data=>{
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
