import { Component } from '@angular/core';
import { AddProductRequest } from '../models/add-product-request.models';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  model: AddProductRequest;

  constructor(){
    this.model={
      description: ""
    };
  }

  onFormSubmit(){
    console.log(this.model)
  }
  
}
