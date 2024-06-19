import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(
      'http://localhost:5003/api/Product'
    );
  }
}
