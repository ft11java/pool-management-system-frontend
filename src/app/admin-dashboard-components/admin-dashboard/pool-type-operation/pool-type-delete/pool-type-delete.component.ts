import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolType } from 'src/app/model/pool-type-model';

@Component({
  selector: 'app-pool-type-delete',
  templateUrl: './pool-type-delete.component.html',
  styleUrls: ['./pool-type-delete.component.css']
})
export class PoolTypeDeleteComponent implements OnInit {

  poolTypes:PoolType[]|undefined;
  poolType!:PoolType;

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

  poolTypeDelete(id:number|undefined){
    this.poolTypeOperationService.deletePoolType(id).subscribe(data=>{
      this.alertify.success("Havuz Tipi Silindi");
      this.getAllPoolType();
    },
    error=>{
      console.log(error);
      this.alertify.error("Havuz Tipinin Silinmesi İçin Hiç Havuz Tarafından Kullanılmaması Gerekmektedir");
    });
  }

}
