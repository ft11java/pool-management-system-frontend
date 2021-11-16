import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressCreateComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-create/address-create.component';
import { AddressDatailsComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-datails/address-datails.component';
import { AddressDeleteComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-delete/address-delete.component';
import { AddressListComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-list/address-list.component';
import { AddressUpdateListComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-update-list/address-update-list.component';
import { AddressUpdateComponent } from './admin-dashboard-components/admin-dashboard/address-operation/address-update/address-update.component';
import { AdminDashboardComponent } from './admin-dashboard-components/admin-dashboard/admin-dashboard.component';
import { MaintenanceOperationCreateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-create/maintenance-operation-create.component';
import { MaintenanceOperationDeleteComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-delete/maintenance-operation-delete.component';
import { MaintenanceOperationDetailsComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-details/maintenance-operation-details.component';
import { MaintenanceOperationListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-list/maintenance-operation-list.component';
import { MaintenanceOperationUpdateListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-update-list/maintenance-operation-update-list.component';
import { MaintenanceOperationUpdateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-operation-operation/maintenance-operation-update/maintenance-operation-update.component';
import { MaintenancePlanAddRemoveMainOpListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-add-remove-main-op-list/maintenance-plan-add-remove-main-op-list.component';
import { MaintenancePlanAddRemoveMaintenanceOperationComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-add-remove-maintenance-operation/maintenance-plan-add-remove-maintenance-operation.component';
import { MaintenancePlanCreateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-create/maintenance-plan-create.component';
import { MaintenancePlanDeleteComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-delete/maintenance-plan-delete.component';
import { MaintenancePlanDetailsComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-details/maintenance-plan-details.component';
import { MaintenancePlanListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-list/maintenance-plan-list.component';
import { MaintenancePlanUpdateListComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-update-list/maintenance-plan-update-list.component';
import { MaintenancePlanUpdateComponent } from './admin-dashboard-components/admin-dashboard/maintenance-plan-operation/maintenance-plan-update/maintenance-plan-update.component';
import { PoolAddRemoveUserListComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-add-remove-user-list/pool-add-remove-user-list.component';
import { PoolAddUserComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-add-user/pool-add-user.component';
import { PoolCreateComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-create/pool-create.component';
import { PoolDeleteComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-delete/pool-delete.component';
import { PoolDetailsComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-details/pool-details.component';
import { PoolListComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-list/pool-list.component';
import { PoolRemoveUserComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-remove-user/pool-remove-user.component';
import { PoolUpdateListComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-update-list/pool-update-list.component';
import { PoolUpdateComponent } from './admin-dashboard-components/admin-dashboard/pool-operation/pool-update/pool-update.component';
import { PoolTypeCreateComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-create/pool-type-create.component';
import { PoolTypeDeleteComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-delete/pool-type-delete.component';
import { PoolTypeDetailsComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-details/pool-type-details.component';
import { PoolTypeListComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-list/pool-type-list.component';
import { PoolTypeUpdateListComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-update-list/pool-type-update-list.component';
import { PoolTypeUpdateComponent } from './admin-dashboard-components/admin-dashboard/pool-type-operation/pool-type-update/pool-type-update.component';
import { PoolUsageTypeCreateComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-create/pool-usage-type-create.component';
import { PoolUsageTypeDeleteComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-delete/pool-usage-type-delete.component';
import { PoolUsageTypeDetailsComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-details/pool-usage-type-details.component';
import { PoolUsageTypeListComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-list/pool-usage-type-list.component';
import { PoolUsageTypeUpdateListComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-update-list/pool-usage-type-update-list.component';
import { PoolUsageTypeUpdateComponent } from './admin-dashboard-components/admin-dashboard/pool-usage-type-operation/pool-usage-type-update/pool-usage-type-update.component';
import { RoleCreateComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-create/role-create.component';
import { RoleDeleteComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-delete/role-delete.component';
import { RoleDetailsComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-details/role-details.component';
import { RoleListComponent } from './admin-dashboard-components/admin-dashboard/role-operations/role-list/role-list.component';
import { StartComponent } from './admin-dashboard-components/admin-dashboard/start/start.component';
import { UserCreateComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-create/user-create.component';
import { UserDeleteComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-delete/user-delete.component';
import { UserDetailsComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-details/user-details.component';
import { UserListComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-list/user-list.component';
import { UserUpdateListComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-update-list/user-update-list.component';
import { UserUpdateComponent } from './admin-dashboard-components/admin-dashboard/user-operation/user-update/user-update.component';
import { UserTypeCreateComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-create/user-type-create.component';
import { UserTypeDeleteComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-delete/user-type-delete.component';
import { UserTypeDetailsComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-details/user-type-details.component';
import { UserTypeListComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-list/user-type-list.component';
import { UserTypeUpdateListComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-update-list/user-type-update-list.component';
import { UserTypeUpdateComponent } from './admin-dashboard-components/admin-dashboard/user-type-operation/user-type-update/user-type-update.component';
import { AllVisitorOperationComponent } from './all-visitor-component/all-visitor-operation/all-visitor-operation.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './login-components/login/login.component';
import { AuthGaurdService } from './login-services/auth-gaurd.service';
import { PoolDetailsForStaffComponent } from './staff-dashboard-component/staff-dashboard/pool-operation/pool-details-for-staff/pool-details-for-staff.component';
import { PoolListForStaffOperationComponent } from './staff-dashboard-component/staff-dashboard/pool-operation/pool-list-for-staff-operation/pool-list-for-staff-operation.component';
import { StaffDashboardComponent } from './staff-dashboard-component/staff-dashboard/staff-dashboard.component';
import { StaffInformationViewComponent } from './staff-dashboard-component/staff-dashboard/staff-operation/staff-information-view/staff-information-view.component';
import { StaffStartComponent } from './staff-dashboard-component/staff-dashboard/staff-start/staff-start.component';
import { PoolListDatailsComponent } from './user-dashboard-components/user-dashboard/pool-operation/pool-list-datails/pool-list-datails.component';
import { PoolListOperationComponent } from './user-dashboard-components/user-dashboard/pool-operation/pool-list-operation/pool-list-operation.component';
import { UserDashboardComponent } from './user-dashboard-components/user-dashboard/user-dashboard.component';
import { UserInformationViewComponent } from './user-dashboard-components/user-dashboard/user-operation/user-information-view/user-information-view.component';
import { UserStartComponent } from './user-dashboard-components/user-dashboard/user-start/user-start.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'admin-dashboard', component:AdminDashboardComponent, canActivate:[AuthGaurdService],data:{role:'ROLE_ADMIN'},
  children:[
    {path:'',redirectTo:'start',pathMatch:'full'},
    {path:'start',component:StartComponent},
    {path:'role-list',component:RoleListComponent},
    {path:'role-create',component:RoleCreateComponent},
    {path:'role-detailst/:id',component:RoleDetailsComponent},
    {path:'role-delete',component:RoleDeleteComponent},
    {path:'user-type-list',component:UserTypeListComponent},
    {path:'user-type-detailst/:id',component:UserTypeDetailsComponent},
    {path:'user-type-create',component:UserTypeCreateComponent},
    {path:'user-type-delete',component:UserTypeDeleteComponent},
    {path:'user-type-update-list',component:UserTypeUpdateListComponent},
    {path:'user-type-update/:id',component:UserTypeUpdateComponent},
    {path:'pool-type-list',component:PoolTypeListComponent},
    {path:'pool-type-details/:id',component:PoolTypeDetailsComponent},
    {path:'pool-type-create',component:PoolTypeCreateComponent},
    {path:'pool-type-delete',component:PoolTypeDeleteComponent},
    {path:'pool-type-update-list',component:PoolTypeUpdateListComponent},
    {path:'pool-type-update/:id',component:PoolTypeUpdateComponent},
    {path:'pool-usage-type-list',component:PoolUsageTypeListComponent},
    {path:'pool-usage-type-details/:id',component:PoolUsageTypeDetailsComponent},
    {path:'pool-usage-type-create',component:PoolUsageTypeCreateComponent},
    {path:'pool-usage-type-delete',component:PoolUsageTypeDeleteComponent},
    {path:'pool-usage-type-update-list',component:PoolUsageTypeUpdateListComponent},
    {path:'pool-usage-type-update/:id',component:PoolUsageTypeUpdateComponent},
    {path:'address-list',component:AddressListComponent},
    {path:'address-details/:id',component:AddressDatailsComponent},
    {path:'address-create',component:AddressCreateComponent},
    {path:'address-delete',component:AddressDeleteComponent},
    {path:'address-update-list',component:AddressUpdateListComponent},
    {path:'address-update/:id',component:AddressUpdateComponent},
    {path:'maintenance-operation-list',component:MaintenanceOperationListComponent},
    {path:'maintenance-operation-details/:id',component:MaintenanceOperationDetailsComponent},
    {path:'maintenance-operation-create',component:MaintenanceOperationCreateComponent},
    {path:'maintenance-operation-delete',component:MaintenanceOperationDeleteComponent},
    {path:'maintenance-operation-update-list',component:MaintenanceOperationUpdateListComponent},
    {path:'maintenance-operation-update/:id',component:MaintenanceOperationUpdateComponent},
    {path:'pool-list',component:PoolListComponent},
    {path:'pool-details/:id',component:PoolDetailsComponent},
    {path:'pool-create',component:PoolCreateComponent},
    {path:'pool-delete',component:PoolDeleteComponent},
    {path:'pool-update-list',component:PoolUpdateListComponent},
    {path:'pool-update/:id',component:PoolUpdateComponent},
    {path:'pool-add-remove-user-list',component:PoolAddRemoveUserListComponent},
    {path:'pool-add-user/:id',component:PoolAddUserComponent},
    {path:'pool-remove-user/:id',component:PoolRemoveUserComponent},
    {path:'user-list',component:UserListComponent},
    {path:'user-details/:id',component:UserDetailsComponent},
    {path:'user-create',component:UserCreateComponent},
    {path:'user-delete',component:UserDeleteComponent},
    {path:'user-update-list',component:UserUpdateListComponent},
    {path:'user-update/:id',component:UserUpdateComponent},
    {path:'maintenance-plan-list',component:MaintenancePlanListComponent},
    {path:'maintenance-plan-details/:id',component:MaintenancePlanDetailsComponent},
    {path:'maintenance-plan-create',component:MaintenancePlanCreateComponent},
    {path:'maintenance-plan-delete',component:MaintenancePlanDeleteComponent},
    {path:'maintenance-plan-update-list',component:MaintenancePlanUpdateListComponent},
    {path:'maintenance-plan-update/:id',component:MaintenancePlanUpdateComponent},
    {path:'maintenance-plan-add-remove-main-op-list',component:MaintenancePlanAddRemoveMainOpListComponent},
    {path:'maintenance-plan-add-remove-maintenance-operation/:id',component:MaintenancePlanAddRemoveMaintenanceOperationComponent}
  ]},
  { path: 'user-dashboard', component:UserDashboardComponent, canActivate:[AuthGaurdService],data:{role:'ROLE_USER'},
  children:[
    {path:'',redirectTo:'start',pathMatch:'full'},
    {path:'start',component:UserStartComponent},
    {path:'pool-list-user',component:PoolListOperationComponent},
    {path:'pool-list-details/:poolNumber',component:PoolListDatailsComponent},
    {path:'user-information-view',component:UserInformationViewComponent},
    
  ]},
  { path: 'staff-dashboard', component:StaffDashboardComponent, canActivate:[AuthGaurdService],data:{role:'ROLE_STAFF'},
  children:[
    {path:'',redirectTo:'start',pathMatch:'full'},
    {path:'start',component:StaffStartComponent},
    {path:'pool-list-for-staff',component:PoolListForStaffOperationComponent},
    {path:'pool-details-for-staff/:poolNumber',component:PoolDetailsForStaffComponent},
    {path:'staff-information-view',component:StaffInformationViewComponent},
    
  ]},
  { path: 'all-visitor-operation', component:AllVisitorOperationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
