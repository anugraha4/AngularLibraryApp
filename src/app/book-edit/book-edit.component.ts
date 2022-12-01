import { Component } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
edittitle=""

edits=()=>
{
  let ed:any={"edittitle":this.edittitle}
  console.log(ed);
}
}
