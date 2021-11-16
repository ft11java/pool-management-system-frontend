import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressOperationServiceService } from 'src/app/admin-dashboard-services/address-operation-service/address-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Address } from 'src/app/model/address-model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {


  addresses:Address[]|undefined;
  constructor(private addressOperationService:AddressOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getAllAddressList();
  }

  private getAllAddressList(){
    this.addressOperationService.getAllAddressList().subscribe(data=>{
      this.addresses=data;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

  addressDetails(id:number|undefined){
    this.router.navigate(['/admin-dashboard/address-details',id]);
  }

}
