import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
cname=""
bookTitle=""
dateIssue=""
member=""

issue=()=>
{
  let issues:any={"cname":this.cname,"bookTitle":this.bookTitle,"dateIssue":this.dateIssue,"member":this.member}
  console.log(issues);
}
}
