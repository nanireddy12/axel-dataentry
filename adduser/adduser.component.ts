import { Component, OnInit } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  userId:any
  Url:string='';
  selectdImage:any=null;


  constructor( private login:LoginService, private builder:FormBuilder, private router:Router) { }

  ngOnInit(): void {}

  signupform=this.builder.group({
     firstname:[''],
     lastname:[''],
     username:[''],
     password:[''],
     profileimage:[''],
     userisadmin:[''],
     address:[''],
     usertype:[''],
     userstatus:[''],
     phonenumber:[''],
     mapaddresslink:[''],
     email:[''],

  })


saveuser(){
  console.log("data is ",this.signupform.value.firstname);
  console.log( this.signupform.value.lastname);

const obj={
  "action": "A",
  "user_Id": 0,
  "user_Firstname": this.signupform.value.firstname,
  "user_Lastname": this.signupform.value.lastname,
  "user_Phone": this.signupform.value.phonenumber,
  "user_Email": this.signupform.value.email,
  "user_Address": this.signupform.value.address,
  "user_Mapaddresslink": this.signupform.value.mapaddresslink,
  "user_Username": this.signupform.value.username,
  "uE_Password": this.signupform.value.password,
  "user_Profileimage": "",
  "user_Roleid": 102,
  "user_IsAdmin": this.signupform.value.userisadmin,
  "user_Type":this.signupform.value.usertype,
  "user_Status": "Y",
  "user_Created_Userid": 1,
  "err_no": 0
  }

this.login.saveuser(obj).subscribe((res:any) => {
 console.log(res);
 if(res==1){
   alert("add user")
   this.router.navigate(['admin']);
   }
 else{
   alert("failed to add")
 }
});

}

}

