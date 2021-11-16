import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressOperationServiceService } from 'src/app/admin-dashboard-services/address-operation-service/address-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { AddressCreateDTO } from 'src/app/model/address-create-dto';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {

  addressCreateForm=new FormGroup({
    address:new FormControl(''),
    street:new FormControl(''),
    neighborhood:new FormControl(''),
    district:new FormControl(''),
    city:new FormControl('')
  });
  addressCreateDTO:AddressCreateDTO=new AddressCreateDTO;
  constructor(private addressOperationService:AddressOperationServiceService,
    private router:Router,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addressCreateDTO=this.addressCreateForm.value;
    this.createAddress();
  }

  createAddress(){
    this.addressOperationService.createAddress(this.addressCreateDTO).subscribe(data=>{
      this.alertify.success("Address Eklendi");
      this.goToAddressList();
    },
    error=>{
      console.log(error);
      this.alertify.error("Sistemsel Bir Sorun İle Karşılaşıldı");
    })
  }

  goToAddressList(){
    this.router.navigate(['/admin-dashboard/address-list']);
  }
}
