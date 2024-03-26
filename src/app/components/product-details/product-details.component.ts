
import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  
  productDetails:any;
  constructor(private _Actevated:ActivatedRoute,private _product:ProductsService){}

ngOnInit():void {
 let productId = this._Actevated.snapshot.params['Id']

 this._product.ProductDetails(productId).subscribe({

  next:(response)=>{
    this.productDetails= response.data
    },
  
  error:(err)=>{console.log(err)},

 })
}


}
