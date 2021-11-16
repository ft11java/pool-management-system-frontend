import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOperationServiceService } from 'src/app/admin-dashboard-services/user-operation-service/user-operation-service.service';
import { AlertifyService } from 'src/app/alertify-services/alertify.service';
import { PoolInUserViewAdminDTO } from 'src/app/model/pool-in-user-view-admin-dto';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  id: number | undefined;
  user!: User;
  accountNonExpired!: String;
  accountNonLocked: String | undefined;
  credentialsNonExpired: String | undefined;
  enabled: String | undefined;

  constructor(
    private userOperationService: UserOperationServiceService,
    private route: ActivatedRoute,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.userOperationService.getUserId(this.id).subscribe(
      (data) => {
        this.user.userName = data.userName;
        this.user.email = data.email;
        this.user.name = data.name;
        this.user.lastName = data.lastName;
        this.user.phoneNumber = data.phoneNumber;
        this.user.userTitles = data.userTitles;
        this.user.accountNonExpired = data.accountNonExpired;
        this.user.accountNonLocked = data.accountNonLocked;
        this.user.credentialsNonExpired = data.credentialsNonExpired;
        this.user.enabled = data.enabled;
        this.user.roles = data.roles;
        this.user.poolInUserViewAdminDTO = data.poolInUserViewAdminDTO;
        this.conrol();
      },
      (error) => {
        console.log(error);
        this.alertify.error('Sistem Yüklenirken Bir Hata Oluştu');
      })
  }

  conrol() {
    if (this.user.accountNonExpired) {
      this.accountNonExpired = 'Evet';
    }
    else {
      this.accountNonExpired = 'Hayır';
    }

    if (this.user.accountNonLocked) {
      this.accountNonLocked = 'Evet';
    }
    else {
      this.accountNonLocked = 'Hayır';
    }

    if (this.user.credentialsNonExpired) {
      this.credentialsNonExpired = 'Evet';
    }
    else {
      this.credentialsNonExpired = 'Hayır';
    }

    if (this.user.enabled) {
      this.enabled = 'Evet';
    }
    else {
      this.enabled = 'Hayır';
    }
  }
}
