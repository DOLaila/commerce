import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './author-component/signup/signin/signin.component';
import { SignupComponent } from './author-component/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"brands",component:BrandsComponent},
  {path:"category",component:CategoryComponent},
  {path:"productdetails/:productId",component:ProductDetailsComponent},
  {path:"mycart",component:MycartComponent},
  {path:"products",component:ProductsComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
