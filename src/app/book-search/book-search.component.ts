import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
titlebook=""

search=()=>
{
  let ser:any={"titlebook":this.titlebook}
  console.log(ser);
}
}
