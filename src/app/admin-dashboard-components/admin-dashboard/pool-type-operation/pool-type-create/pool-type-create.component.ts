import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PoolTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-type-operation-service/pool-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolTypeCreateDTO } from 'src/app/model/pool-type-create-dto';

@Component({
  selector: 'app-pool-type-create',
  templateUrl: './pool-type-create.component.html',
  styleUrls: ['./pool-type-create.component.css']
})
export class PoolTypeCreateComponent implements OnInit {
  poolTypeCreateForm=new FormGroup({
    poolTypeName:new FormControl('')
  });

  poolTypeCreateDTO:PoolTypeCreateDTO=new PoolTypeCreateDTO;
  constructor(private poolTypeOperationService:PoolTypeOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.poolTypeCreateDTO=this.poolTypeCreateForm.value;
    this.createPoolType();

  }

  createPoolType(){
    this.poolTypeOperationService.createPoolType(this.poolTypeCreateDTO).subscribe(data=>{
      this.alertify.success("Havuz Tipi Eklendi");
      this.goToPoolTypeList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Sorun İle Karşılaşıldı")
    })
  }

  goToPoolTypeList(){
    this.router.navigate(['/admin-dashboard/pool-type-list']);
  }

}
