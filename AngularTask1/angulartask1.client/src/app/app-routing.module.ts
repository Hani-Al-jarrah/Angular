import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CatigoryComponent } from './catigory/catigory.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  { path: 'signin', component: SigninComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'catigory', component: CatigoryComponent },
  { path: 'products', component: ProductsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
