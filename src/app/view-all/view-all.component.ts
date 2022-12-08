import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {

  constructor(private api:ApiServiceService){
    api.fetchBook().subscribe(
      (response)=>
      {
        this.books=response;
      }
    )
  }
books:any=[
  

]
}
