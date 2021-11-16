import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressOperationServiceService } from 'src/app/admin-dashboard-services/address-operation-service/address-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AddressCreateDTO } from 'src/app/model/address-create-dto';
import { Address } from 'src/app/model/address-model';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {

  addressUpdateForm=new FormGroup({
    address:new FormControl(''),
    street:new FormControl(''),
    neighborhood:new FormControl(''),
    district:new FormControl(''),
    city:new FormControl('')
  });
  id:number|undefined;
  address!:Address;
  addressCreateDTO:AddressCreateDTO=new AddressCreateDTO;
  constructor(private addressOperationService:AddressOperationServiceService,
    private router:Router,
    private alertify:AlertifyService,
    private route:ActivatedRoute) { }

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
    
  onSubmit(){
    this.addressCreateDTO=this.addressUpdateForm.value;
    this.updateAddress(this.address.id);
  }

  updateAddress(id:number|undefined){
    this.addressOperationService.updateAddress(this.id,this.addressCreateDTO).subscribe(data=>{
      this.alertify.success("Adres Güncellendi");
      this.goToPoolUsageTypeList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Güncelleme Yapılırken Bir Hata Oluştu");

    })  
  }

  goToPoolUsageTypeList (){
    this.router.navigate(['/admin-dashboard/address-update-list']);
  }


}
