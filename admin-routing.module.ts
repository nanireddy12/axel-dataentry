import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceGuard } from '../guard/service.guard';
import { AddroleComponent } from './addrole/addrole.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin.component';
import { EditroleComponent } from './editrole/editrole.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { ViewuserComponent } from './viewuser/viewuser.component';




const routes: Routes = [{ path: '', component: AdminComponent },
                        {path: 'edituser',component:EdituserComponent,canActivate:[ServiceGuard]},
                        {path: 'addrole',component:AddroleComponent,canActivate:[ServiceGuard]},
                        {path: 'editrole',component:EditroleComponent},
                        {path: 'viewrole',component:ViewroleComponent,canActivate:[ServiceGuard]},
                        {path: 'viewuser',component:ViewuserComponent,canActivate:[ServiceGuard]},
                        {path: 'user-details',component:UserdetailsComponent},
                        {path:'adduser',component:AdduserComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
