import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
interface Product{
  name:string,
  type:string,
  price:number,
  img: string,
  description:string

}
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
public data:Product;
title = "Quản lý sản phẩm"

  constructor(private dataService:DataService) { 
    this.data={
      name:"",
      type:"",
      price:0,
      img:"",
      description:""
    }
  }

  ngOnInit() {
    
  }
  onClick(){
    this. dataService.insertData(this.data)
      .subscribe(res => {console.log(res)})
  }

}
