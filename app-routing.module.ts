import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{ path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
   { path: 'contracts', loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule) },
   { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
