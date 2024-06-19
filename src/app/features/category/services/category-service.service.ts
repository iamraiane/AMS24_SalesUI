import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { HttpClient} from '@angular/common/http';
import { AddCategoryRequest } from '../models/add-category-request.models';


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

  addCategory(categoryRequest:AddCategoryRequest):Observable<AddCategoryRequest>{
    return this.http.post<AddCategoryRequest>('http://localhost:5003/api/Categories',categoryRequest)
    
  }
}
