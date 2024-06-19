import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products?: Product[]
  constructor(private productsService : ProductServiceService){}
  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe({
      next: (response) =>{
        this.products = response;
      }
    });
  }

}
