import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DividerComponent } from './Components/divider/divider.component';
import { DapproachComponent } from './Components/approach/dapproach.component';
import { TeamComponent } from './Components/team/team.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './login-components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard-components/admin-dashboard/admin-dashboard.component';
import { StartComponent } from './admin-dashboard-components/admin-dashboard/start/start.component';
import { HeaderComponent } from './admin-dashboard-components/admin-dashboard/header/header.component';
import { SidebarComponent } from './admin-dashboard-components/admin-dashboard/sidebar/sidebar.component';
import { UserDashboardComponent } from './user-dashboard-components/user-dashboard/user-dashboard.component';
import { UserStartComponent } from './user-dashboard-components/user-dashboard/user-start/user-start.component';
import { UserHeaderComponent } from './user-dashboard-components/user-dashboard/user-header/user-header.component';
import { UserSidebarComponent } from './user-dashboard-components/user-dashboard/user-sidebar/user-sidebar.component';
import { AlertifyService } from './alertify-services/alertify.service';
import { BasicAuthHtppInterceptorService } from './login-services/basic-auth-htpp-interceptor.service';
import { RoleListComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-list/role-list.component';
import { RoleCreateComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-create/role-create.component';
import { RoleUpdateComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-update/role-update.component';
import { RoleDetailsComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-details/role-details.component';
import { RoleDeleteComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-delete/role-delete.component';

import { UserTypeCreateComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-create/user-type-create.component';
import { UserTypeListComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-list/user-type-list.component';
import { UserTypeDetailsComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-details/user-type-details.component';
import { UserTypeDeleteComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-delete/user-type-delete.component';
import { UserTypeUpdateComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-update/user-type-update.component';
import { UserTypeUpdateListComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-update-list/user-type-update-list.component';
import { PoolTypeListComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-list/pool-type-list.component';
import { PoolTypeCreateComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-create/pool-type-create.component';
import { PoolTypeDeleteComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-delete/pool-type-delete.component';
import { PoolTypeUpdateListComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-update-list/pool-type-update-list.component';
import { PoolTypeUpdateComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-update/pool-type-update.component';
import { PoolTypeDetailsComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-details/pool-type-details.component';
import { PoolUsageTypeListComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-list/pool-usage-type-list.component';
import { PoolUsageTypeCreateComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-create/pool-usage-type-create.component';
import { PoolUsageTypeDeleteComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-delete/pool-usage-type-delete.component';
import { PoolUsageTypeDetailsComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-details/pool-usage-type-details.component';
import { PoolUsageTypeUpdateComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-update/pool-usage-type-update.component';
import { PoolUsageTypeUpdateListComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-update-list/pool-usage-type-update-list.component';
import { AddressListComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-list/address-list.component';
import { AddressCreateComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-create/address-create.component';
import { AddressDeleteComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-delete/address-delete.component';
import { AddressDatailsComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-datails/address-datails.component';
import { AddressUpdateComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-update/address-update.component';
import { AddressUpdateListComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-update-list/address-update-list.component';
import { MaintenanceOperationListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-list/maintenance-operation-list.component';
import { MaintenanceOperationDetailsComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-details/maintenance-operation-details.component';
import { MaintenanceOperationCreateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-create/maintenance-operation-create.component';
import { MaintenanceOperationDeleteComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-delete/maintenance-operation-delete.component';
import { MaintenanceOperationUpdateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-update/maintenance-operation-update.component';
import { MaintenanceOperationUpdateListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-update-list/maintenance-operation-update-list.component';
import { PoolListComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-list/pool-list.component';
import { PoolDetailsComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-details/pool-details.component';
import { PoolCreateComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-create/pool-create.component';
import { PoolDeleteComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-delete/pool-delete.component';
import { PoolUpdateListComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-update-list/pool-update-list.component';
import { PoolUpdateComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-update/pool-update.component';
import { UserListComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-list/user-list.component';
import { UserCreateComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-create/user-create.component';
import { UserDeleteComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-delete/user-delete.component';
import { UserDetailsComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-details/user-details.component';
import { UserUpdateComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-update/user-update.component';
import { UserUpdateListComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-update-list/user-update-list.component';
import { PoolAddRemoveUserListComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-add-remove-user-list/pool-add-remove-user-list.component';
import { PoolAddUserComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-add-user/pool-add-user.component';
import { PoolRemoveUserComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-remove-user/pool-remove-user.component';
import { MaintenancePlanCreateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-create/maintenance-plan-create.component';
import { MaintenancePlanDeleteComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-delete/maintenance-plan-delete.component';
import { MaintenancePlanDetailsComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-details/maintenance-plan-details.component';
import { MaintenancePlanListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-list/maintenance-plan-list.component';
import { MaintenancePlanUpdateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-update/maintenance-plan-update.component';
import { MaintenancePlanUpdateListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-update-list/maintenance-plan-update-list.component';
import { MaintenancePlanAddRemoveMaintenanceOperationComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-add-remove-maintenance-operation/maintenance-plan-add-remove-maintenance-operation.component';
import { MaintenancePlanAddRemoveMainOpListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-add-remove-main-op-list/maintenance-plan-add-remove-main-op-list.component';
import { PoolListOperationComponent } from './user-dashboard-components/user-dashboard/pool-operation/pool-list-operation/pool-list-operation.component';
import { PoolListDatailsComponent } from './user-dashboard-components/user-dashboard/pool-operation/pool-list-datails/pool-list-datails.component';
import { UserInformationViewComponent } from './user-dashboard-components/user-dashboard/user-operation/user-information-view/user-information-view.component';
import { StaffDashboardComponent } from './staff-dashboard-component/staff-dashboard/staff-dashboard.component';
import { StaffStartComponent } from './staff-dashboard-component/staff-dashboard/staff-start/staff-start.component';
import { StaffSidebarComponent } from './staff-dashboard-component/staff-dashboard/staff-sidebar/staff-sidebar.component';
import { StaffHeaderComponent } from './staff-dashboard-component/staff-dashboard/staff-header/staff-header.component';
import { PoolListForStaffOperationComponent } from './staff-dashboard-component/staff-dashboard/pool-operation/pool-list-for-staff-operation/pool-list-for-staff-operation.component';
import { PoolDetailsForStaffComponent } from './staff-dashboard-component/staff-dashboard/pool-operation/pool-details-for-staff/pool-details-for-staff.component';
import { StaffInformationViewComponent } from './staff-dashboard-component/staff-dashboard/staff-operation/staff-information-view/staff-information-view.component';
import { AllVisitorOperationComponent } from './all-visitor-component/all-visitor-operation/all-visitor-operation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    DividerComponent,
    DapproachComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    StartComponent,
    HeaderComponent,
    SidebarComponent,
    UserDashboardComponent,
    UserStartComponent,
    UserHeaderComponent,
    UserSidebarComponent,
    RoleListComponent,
    RoleCreateComponent,
    RoleUpdateComponent,
    RoleDetailsComponent,
    RoleDeleteComponent,
    UserTypeListComponent,
    UserTypeCreateComponent,
    UserTypeListComponent,
    UserTypeDetailsComponent,
    UserTypeDeleteComponent,
    UserTypeUpdateComponent,
    UserTypeUpdateListComponent,
    PoolTypeListComponent,
    PoolTypeCreateComponent,
    PoolTypeDeleteComponent,
    PoolTypeUpdateListComponent,
    PoolTypeUpdateComponent,
    PoolTypeDetailsComponent,
    PoolUsageTypeListComponent,
    PoolUsageTypeCreateComponent,
    PoolUsageTypeDeleteComponent,
    PoolUsageTypeDetailsComponent,
    PoolUsageTypeUpdateComponent,
    PoolUsageTypeUpdateListComponent,
    AddressListComponent,
    AddressCreateComponent,
    AddressDeleteComponent,
    AddressDatailsComponent,
    AddressUpdateComponent,
    AddressUpdateListComponent,
    MaintenanceOperationListComponent,
    MaintenanceOperationDetailsComponent,
    MaintenanceOperationCreateComponent,
    MaintenanceOperationDeleteComponent,
    MaintenanceOperationUpdateComponent,
    MaintenanceOperationUpdateListComponent,
    PoolListComponent,
    PoolDetailsComponent,
    PoolCreateComponent,
    PoolDeleteComponent,
    PoolUpdateListComponent,
    PoolUpdateComponent,
    UserListComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UserUpdateListComponent,
    PoolAddRemoveUserListComponent,
    PoolAddUserComponent,
    PoolRemoveUserComponent,
    MaintenancePlanCreateComponent,
    MaintenancePlanDeleteComponent,
    MaintenancePlanDetailsComponent,
    MaintenancePlanListComponent,
    MaintenancePlanUpdateComponent,
    MaintenancePlanUpdateListComponent,
    MaintenancePlanAddRemoveMaintenanceOperationComponent,
    MaintenancePlanAddRemoveMainOpListComponent,
    PoolListOperationComponent,
    PoolListDatailsComponent,
    UserInformationViewComponent,
    StaffDashboardComponent,
    StaffStartComponent,
    StaffSidebarComponent,
    StaffHeaderComponent,
    PoolListForStaffOperationComponent,
    PoolDetailsForStaffComponent,
    StaffInformationViewComponent,
    AllVisitorOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService,
   { provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
