import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolViewUserDTO } from 'src/app/model/pool-view-user-dto';
import { PoolForUserServicesService } from 'src/app/user-dashboard-services/pool-for-user-services/pool-for-user-services.service';

@Component({
  selector: 'app-pool-list-operation',
  templateUrl: './pool-list-operation.component.html',
  styleUrls: ['./pool-list-operation.component.css']
})
export class PoolListOperationComponent implements OnInit {

  pools:PoolViewUserDTO[]|undefined;
  constructor(private poolForUserOperationServive:PoolForUserServicesService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllPoolList();
  }

  private getAllPoolList(){
    let userName = sessionStorage.getItem('username')
    this.poolForUserOperationServive.getPoolUserByUserName(userName!).subscribe(data=>{
      this.pools=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  poolDetails(poolNumber:String|undefined){
    this.router.navigate(['/user-dashboard/pool-list-details',poolNumber]);
  }

}
