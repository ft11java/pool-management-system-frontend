import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressOperationServiceService } from 'src/app/admin-dashboard-services/address-operation-service/address-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Address } from 'src/app/model/address-model';

@Component({
  selector: 'app-address-delete',
  templateUrl: './address-delete.component.html',
  styleUrls: ['./address-delete.component.css']
})
export class AddressDeleteComponent implements OnInit {

  addresses:Address[]|undefined;
  address!:Address;
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

  addressDelete(id:number|undefined){
    this.addressOperationService.deleteAddress(id).subscribe(data=>{
      this.alertify.success("Adres Silindi");
      this.getAllAddressList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Adres Silinmesi İçin Hiç Bir Havuz Tarafından Kullanılmamalıdır");
    })
  }
}