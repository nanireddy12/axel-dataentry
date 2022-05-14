import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/class';
import { LoginService } from '../login.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  userId:any;
  new: any;

  constructor( private loginService: LoginService, public fb:FormBuilder,private router:Router ) { }

  ngOnInit(): void {
     this.login();

  }

  form=this.fb.group({
    username:[''],
    password:['']
  })
  login() {
    const loginModel = new LoginModel(this.form.controls['username'].value,
                                      this.form.controls['password'].value);
    this.loginService
      .login(loginModel)
      .subscribe((res: any) => {
        console.log(res);
        if(res=='')
        {

        }
        else
        {
          alert("Login Sucessful");
           this.userId=res[0].userId;
           console.log(this.userId);
           this.getUserById(this.userId);
           this.form.reset();
           this.router.navigate(['admin']);
         }
      });
      localStorage.setItem('user',this.form.controls['username'].value);
      sessionStorage.setItem('role',this.form.controls['username'].value)
  }

     getUserById(input:any)
     {
       const obj={
        "userId": input
     }
      this.loginService.getUserbyId(obj).subscribe((res:any)=>{
         console.log(res);
       });
    }
   }



