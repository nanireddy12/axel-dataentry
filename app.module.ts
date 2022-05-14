import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { LeadsModule } from './leads/leads.module';
import { CustomerModule } from './customer/customer.module';
import { ContractsModule } from './contracts/contracts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AdminModule,
    UserModule,
    HttpClientModule,
    LeadsModule,
    CustomerModule,
    ContractsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
