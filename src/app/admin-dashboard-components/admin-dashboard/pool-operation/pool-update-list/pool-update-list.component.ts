import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolServiceService } from 'src/app/admin-dashboard-services/pool-operation-service/pool-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Pool } from 'src/app/model/pool-model';

@Component({
  selector: 'app-pool-update-list',
  templateUrl: './pool-update-list.component.html',
  styleUrls: ['./pool-update-list.component.css']
})
export class PoolUpdateListComponent implements OnInit {

  pools:Pool[]|undefined;
  filterPools:Pool[]|undefined;
  constructor(private poolOperationService:PoolServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllPoolList();
  }

  private getAllPoolList(){
    this.poolOperationService.getAllPoolList().subscribe(data=>{
      this.pools=data;
      this.filterPools=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  poolUpdate(id:number|undefined){
    this.router.navigate(['/admin-dashboard/pool-update',id]);
  }

  search(searchText:string):void{
    searchText=searchText.toLowerCase();
    this.filterPools=this.pools?.filter((pool:Pool)=>{
      return pool.poolName!.toLowerCase().indexOf(searchText)>-1 || pool.poolNumber!.toLowerCase().indexOf(searchText)>-1;
    })
    }
}