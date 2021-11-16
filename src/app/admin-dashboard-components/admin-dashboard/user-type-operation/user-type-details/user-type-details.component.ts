import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserTypeOperationServiceService } from 'src/app/admin-dashboard-services/user-type-opetration-service/user-type-operation-service.service';
import { UserType } from 'src/app/model/user-type-model';

@Component({
  selector: 'app-user-type-details',
  templateUrl: './user-type-details.component.html',
  styleUrls: ['./user-type-details.component.css']
})
export class UserTypeDetailsComponent implements OnInit {

  id:number|undefined;
  userType!:UserType;
  constructor(private route:ActivatedRoute, private userTyleOperationService:UserTypeOperationServiceService ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userType=new UserType();
    this.userTyleOperationService.getUserTypeId(this.id).subscribe(data=>{
      this.userType.userTitleName=data.userTitleName;
    })
  }

}
