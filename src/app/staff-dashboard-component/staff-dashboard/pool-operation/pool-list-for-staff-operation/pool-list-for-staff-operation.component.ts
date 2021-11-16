import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolViewUserDTO } from 'src/app/model/pool-view-user-dto';
import { PoolForStaffServicesService } from 'src/app/staff-dashboard-services/pool-for-staff-services/pool-for-staff-services.service';

@Component({
  selector: 'app-pool-list-for-staff-operation',
  templateUrl: './pool-list-for-staff-operation.component.html',
  styleUrls: ['./pool-list-for-staff-operation.component.css']
})
export class PoolListForStaffOperationComponent implements OnInit {

  pools:PoolViewUserDTO[]|undefined;
  constructor(private poolForStaffOperationServive:PoolForStaffServicesService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllPoolList();
  }

  private getAllPoolList(){
    let userName = sessionStorage.getItem('username')
    this.poolForStaffOperationServive.getPoolUserByUserName(userName!).subscribe(data=>{
      this.pools=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  poolDetails(poolNumber:String|undefined){
    this.router.navigate(['/staff-dashboard/pool-details-for-staff',poolNumber]);
  }

}


