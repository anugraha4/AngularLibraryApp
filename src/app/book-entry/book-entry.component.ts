import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  constructor(private api:ApiServiceService){}
  image=""
  booktitle=""
  author=""
  description=""
  publisher=""
  distributor=""
  price=""

  readValues = ()=>
  {
let books:any={
  "image":this.image,
  "booktitle":this.booktitle,
  "author":this.author,
  "description":this.description,
  "publisher":this.publisher,
  "distributor":this.distributor,
  "price":this.price
}
console.log(books);
this.api.addBook(books).subscribe(
  (response:any)=>
  {
    console.log(response)
    if(response.status=="success"){
      alert("Book added successfully")
      this.booktitle=""
        this.author = ""
        this.description = ""
        this.publisher = ""
        this.distributor = ""
        this.price = ""
        this.image=""
    }
    else{
      alert("Something went wrong")
    }
  }
)

  }
}
