import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http : HttpClient) {
  
  }
  
  getCategory(){
    this.http.get("http://localhost:5003/api/Categories");
  }
}
