import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnChanges {

  @Input() categoryFromParent:string="";
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
