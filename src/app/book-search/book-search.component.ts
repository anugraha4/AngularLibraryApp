import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  constructor(private api:ApiServiceService){}
  booktitle=""
  searchBook:any=[]

search=()=>
{
  let ser:any={"booktitle":this.booktitle}
  console.log(ser)
  this.api.searchBook(ser).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("Invalid title")
      } else {
        this.searchBook=response
      }
    }
  )
}
}
