import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolType } from 'src/app/model/pool-type-model';

@Component({
  selector: 'app-pool-type-list',
  templateUrl: './pool-type-list.component.html',
  styleUrls: ['./pool-type-list.component.css']
})
export class PoolTypeListComponent implements OnInit {

  poolTypes:PoolType[]|undefined;
  constructor(private poolTypeOperationService:PoolTypeOperationServiceService,
    private router:Router, private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllPoolType();
  }

  private getAllPoolType(){
    this.poolTypeOperationService.getAllPoolTypeList().subscribe(data=>{
      this.poolTypes=data;
    },
    error=>{
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  poolTypeDetails(id:number|undefined){
    this.router.navigate(['/admin-dashboard/pool-type-details',id])
  }


}
