import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';

export const routes: Routes = [
    {
        path: 'category-list',
        component: CategoryListComponent
    },
    {
        path: 'admin/categorias',
        component: CategoryListComponent
    },
    {
        path: 'admin/categorias/add',
        component:  AddCategoryComponent
    }
];
