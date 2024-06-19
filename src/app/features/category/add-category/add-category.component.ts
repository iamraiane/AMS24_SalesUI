import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { CategoryServiceService } from '../services/category-service.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  model: AddCategoryRequest;

  constructor(private categoryService:CategoryServiceService, 
    private router: Router){
    this.model = {
      description: '',
      imagemurl: '',
    };
  }

  onFormSubmit(): void{
    console.log(this.model);
   this.categoryService.addCategory(this.model);
  //[] .subscribe({
    //next:(response) => {
      //this.router.navigateByUrl ("/category-list");
   // }
  // });
  }

}
