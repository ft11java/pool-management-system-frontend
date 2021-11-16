import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolType } from 'src/app/model/pool-type-model';

@Component({
  selector: 'app-pool-type-details',
  templateUrl: './pool-type-details.component.html',
  styleUrls: ['./pool-type-details.component.css']
})
export class PoolTypeDetailsComponent implements OnInit {

  id:number|undefined;
  poolType!:PoolType;
  constructor(private route:ActivatedRoute,private poolTypeOperationService:PoolTypeOperationServiceService,
    private alertify:AlertifyService) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.poolType=new PoolType();
    this.poolTypeOperationService.getPoolTypeId(this.id).subscribe(data=>{
      this.poolType.poolTypeName=data.poolTypeName;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

}
