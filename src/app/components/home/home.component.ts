import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { products } from '../../interface/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  productList:products[]=[];
  // isLoading:boolean=true;
constructor(private _product:ProductsService) {}

ngOnInit() : void{
  this._product.getProducts().subscribe({
    next:(respone)=>{
      this.productList= respone.data;
      // this.isLoading=false;

      },
    
    error:(error)=>{console.log(error)},
    
    
  })
}

}
