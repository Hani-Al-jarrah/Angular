import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: 'category', component: CategoriesComponent }, 
  { path: 'product/:id', component: ProductsComponent }, 
  { path: 'Detproduct/:id', component: ProductDetailsComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'addProduct', component: AddProductComponent } 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
