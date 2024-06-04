import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../models/Category';
import { CategoryServiceService} from '../services/category-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  
  categories?: Category[]
  constructor(private categoriService: CategoryServiceService){}
  ngOnInit(): void {
    this.categoriService.getAllCategories()
    .subscribe({
      next: (response) =>{
        this.categories = response;
      }
    });
  }
}
