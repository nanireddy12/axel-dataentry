import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  a:any
  p: number = 1;
  
  constructor( public login:LoginService ) { }

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById()
  {
    const obj={
     "userId": 0
  }
   this.login.getUserbyId(obj).subscribe((res:any)=>{
      console.log(res);
      this.a=res;
    });
 }

}
