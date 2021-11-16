import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressOperationServiceService } from 'src/app/admin-dashboard-services/address-operation-service/address-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { Address } from 'src/app/model/address-model';


@Component({
  selector: 'app-address-datails',
  templateUrl: './address-datails.component.html',
  styleUrls: ['./address-datails.component.css']
})
export class AddressDatailsComponent implements OnInit {

  id:number|undefined;
  address!:Address;
  constructor(private addressOperationService:AddressOperationServiceService,
    private route:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.address=new Address();
    this.addressOperationService.getAddressId(this.id).subscribe(data=>{
      this.address.address=data.address;
      this.address.street=data.street;
      this.address.neighborhood=data.neighborhood;
      this.address.district=data.district;
      this.address.city=data.city;
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistem Yüklenirken Bir Hata Oluştu");
    })
  }

}
