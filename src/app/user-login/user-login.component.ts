import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
uname=""
lpassword=""
constructor(private route:Router){}
user=()=>
{
  let login:any={"uname":this.uname,"lpassword":this.lpassword}
  console.log(login)

  if (login.uname=="user" && login.lpassword==123456) {
    this.route.navigate(['/view'])
    
  } else {
    alert("Invalid Login") 
  }
}
}
