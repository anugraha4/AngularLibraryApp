import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
uname=""
lpassword=""

user=()=>
{
  let login:any={"uname":this.uname,"lpassword":this.lpassword}
  console.log(login);
}
}
