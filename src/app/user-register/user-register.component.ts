import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
usname=""
admission=""
address=""
pincode=""
dob=""
email=""
phnumber=""
username=""
uspassword=""
conpassword=""

register=()=>
{
  let regis:any={"usname":this.usname,"admission":this.admission,"address":this.address,"pincode":this.pincode,"dob":this.dob,
"email":this.email,"phnumber":this.phnumber,"username":this.username,"uspassword":this.uspassword,"conpassword":this.conpassword}
console.log(regis);
}
}
