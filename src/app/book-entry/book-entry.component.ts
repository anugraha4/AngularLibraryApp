import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  image=""
  title=""
  author=""
  discription=""
  releasedyear=""

  readValues = ()=>
  {
let books:any={
  "image":this.image,
  "title":this.title,
  "author":this.author,
  "discription":this.discription,
  "releasedyear":this.releasedyear
}
console.log(books);

  }
}
