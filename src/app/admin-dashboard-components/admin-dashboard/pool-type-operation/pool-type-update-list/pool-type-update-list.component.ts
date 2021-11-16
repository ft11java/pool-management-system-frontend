import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolType } from 'src/app/model/pool-type-model';

@Component({
  selector: 'app-pool-type-update-list',
  templateUrl: './pool-type-update-list.component.html',
  styleUrls: ['./pool-type-update-list.component.css']
})
export class PoolTypeUpdateListComponent implements OnInit {

  poolTypes:PoolType[]|undefined;
  poolType!: PoolType;

  constructor(private poolTypeOperationService:PoolTypeOperationServiceService,private router:Router,
    private alertify:AlertifyService) { }

    ngOnInit(): void {
      this.getAllPoolType();
    }
  
    private getAllPoolType(){
      this.poolTypeOperationService.getAllPoolTypeList().subscribe(data=>{
        this.poolTypes=data;
      },
      error=>{
        console.log(error);
        this.alertify.error("Sistemsel Bir Hata Oluştu");
      })
    }

    poolTypeUpdate(id:number|undefined){
      this.router.navigate(['/admin-dashboard/pool-type-update',id]);
    }

}
