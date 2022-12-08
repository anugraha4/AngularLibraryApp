import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
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

  }
}
