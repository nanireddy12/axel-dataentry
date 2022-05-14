import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


import { LoginModel } from './model/class';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  }),
};



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string = 'http://saapi.azaz.com/api';

  constructor(private http: HttpClient) {}

  login(model: LoginModel) {
    const headersValue = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(this.baseURL+'/login',model,headersValue);
  }

  getUserbyId(obj: any) {
    return this.http.post(
      this.baseURL + '/UserDetails/GetUserbyId',
      JSON.stringify(obj),
      headersData
    );
  }
  saveuser(obj:any){
   return this.http.post(this.baseURL+'/Userdetails/saveUser',JSON.stringify(obj),headersData);

  }

   viewuser(obj:any){
    return this.http.post(this.baseURL+'/Userdetails/GetUserbyId',JSON.stringify(obj),headersData);
   }

 }


