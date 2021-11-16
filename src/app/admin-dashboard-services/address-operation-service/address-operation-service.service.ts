import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressCreateDTO } from 'src/app/model/address-create-dto';
import { Address } from 'src/app/model/address-model';

@Injectable({
  providedIn: 'root'
})
export class AddressOperationServiceService {

  private baseURL="http://localhost:8081/api/v1/admin/address";
  constructor(private httpClient:HttpClient) { }

  getAllAddressList():Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.baseURL}`);
  }

  createAddress(addressCreateDTO:AddressCreateDTO):Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURL}`,addressCreateDTO);
  }

  getAddressId(id:number|undefined):Observable<Address>{
    return this.httpClient.get<Address>(`${this.baseURL}/${id}`);
  }

  deleteAddress(id:number|undefined):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateAddress(id:number|undefined,addressCreateDTO:AddressCreateDTO):Observable<Address>{
    return this.httpClient.put<Address>(`${this.baseURL}/${id}`,addressCreateDTO);
  }
}
