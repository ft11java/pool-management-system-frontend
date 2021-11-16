import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PoolUsageTypeOperationServiceService } from 'src/app/admin-dashboard-services/pool-usage-type-operation-service/pool-usage-type-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolUsageTypeCreateDTO } from 'src/app/model/pool-usage-type-create-dto';

@Component({
  selector: 'app-pool-usage-type-create',
  templateUrl: './pool-usage-type-create.component.html',
  styleUrls: ['./pool-usage-type-create.component.css']
})
export class PoolUsageTypeCreateComponent implements OnInit {

  poolUsageTypeCreateForm=new FormGroup({
    poolUsageTypeName:new FormControl('')
  });
  poolUsageTypeCreateDTO:PoolUsageTypeCreateDTO=new PoolUsageTypeCreateDTO();
  constructor(private poolUsageTypeOperationService:PoolUsageTypeOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.poolUsageTypeCreateDTO=this.poolUsageTypeCreateForm.value;
    this.createPoolUsageType();
  }

  createPoolUsageType(){
    this.poolUsageTypeOperationService.createPoolUsageType(this.poolUsageTypeCreateDTO).subscribe(data=>{
      this.alertify.success("Havuz Kullanık Tipi Eklendi");
      this.goToPoolUsageTypeList();

    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Sorun İle Karşılaşıldı");
    })
  }

  goToPoolUsageTypeList(){
    this.router.navigate(['/admin-dashboard/pool-usage-type-list']);
  }
}
