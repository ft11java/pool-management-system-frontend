import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoolServiceService } from 'src/app/admin-dashboard-services/pool-operation-service/pool-operation-service.service';
import { UserOperationServiceService } from 'src/app/admin-dashboard-services/user-operation-service/user-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Pool } from 'src/app/model/pool-model';
import { User } from 'src/app/model/user';
import { UserInPoolDTO } from 'src/app/model/user-in-pool-view-admin-dto';

@Component({
  selector: 'app-pool-add-user',
  templateUrl: './pool-add-user.component.html',
  styleUrls: ['./pool-add-user.component.css']
})
export class PoolAddUserComponent implements OnInit {

  poolName:String | undefined;
  poolNumber:String | undefined;
  id:number|undefined;
  pool!:Pool;
  filterPoolUsers:UserInPoolDTO[] | undefined
  users:User[]|undefined;
  filterUsers:User[]|undefined;
  constructor(private poolOperationService:PoolServiceService,
    private userOperationService:UserOperationServiceService,
    private route:ActivatedRoute,private alertify:AlertifyService,
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getPool(this.id);
  }
  private getPool(id:number|undefined){
    this.pool=new Pool();
    this.poolOperationService.getPoolId(id).subscribe(data=>{
    this.pool.id=data.id;
    this.pool.poolNumber=data.poolNumber;
    this.pool.poolName=data.poolName;
    this.pool.users=data.users;
    this.poolNumber=this.pool.poolNumber;
    this.poolName=this.pool.poolName;
    this.filterPoolUsers=data.users;
    this.userOperationService.getAllUserList().subscribe(data=>{
      this.users=data; 
       this.pool.users?.forEach(user=>{
       this.users=this.users?.filter(item=> item.id!=user.id);
        })  
        this.filterUsers=this.users;      
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    }) 
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })

  }

  poolAddUser(id:number|undefined){
    this.poolOperationService.addPoolToUser(this.pool.id,id).subscribe(data=>{
      this.alertify.success("Ekleme İşlemi Yapıldı")
      this.getPool(this.id);
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  poolRemoveUser(id:number|undefined){
    this.poolOperationService.removePoolToUser(this.pool.id,id).subscribe(data=>{
      this.alertify.success("Çıkarma İşlemi Yapıldı")
      this.getPool(this.id);
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })

  }
  search(searchText:string):void{
    searchText=searchText.toLowerCase();
    this.filterPoolUsers=this.pool?.users?.filter((user:UserInPoolDTO)=>{
      return user.name!.toLowerCase().indexOf(searchText)>-1 || user.lastName!.toLowerCase().indexOf(searchText)>-1;
    })
    }

    search1(searchText1:string):void{
      searchText1=searchText1.toLowerCase();
      this.filterUsers=this.users?.filter((user:User)=>{
        return user.name!.toLowerCase().indexOf(searchText1)>-1 || user.lastName!.toLowerCase().indexOf(searchText1)>-1;
      })
      }
}

