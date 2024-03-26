import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent  implements OnInit,OnDestroy{

  categoryName:string="labtop"
  intervadId:any;
  constructor(){
    console.log('this is constructor')
  }

  changeCategory():void{
    this.categoryName = this.categoryName + Math.random()
  }

  ngOnInit(): void {
    
    console.log('this ng onInit')
   this.intervadId=  setInterval(()=>{console.log('hi')},1000)
  }

  ngOnDestroy(): void {
    console.log('this on destroy')
    clearInterval(this.intervadId)
  }
}
