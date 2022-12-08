import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  fetchBook =()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  addBook =(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/entry",dataToSend)
  }

  searchBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
}
