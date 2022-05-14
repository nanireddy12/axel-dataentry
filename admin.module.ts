import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { AddroleComponent } from './addrole/addrole.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditroleComponent } from './editrole/editrole.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    EdituserComponent,
    EditroleComponent,
    EdituserComponent,
    AddroleComponent,
    EditroleComponent,
    ViewroleComponent,
    ViewuserComponent,
    UserdetailsComponent,
    AdduserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
    ]
})
export class AdminModule{ }
