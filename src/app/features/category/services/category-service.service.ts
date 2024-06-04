import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http : HttpClient) {}
  
  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(
      'http://localhost:5003/api/Categories'
    );
  }
}
