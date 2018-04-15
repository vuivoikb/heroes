import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


interface Product{
  id:number,
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
//public data:Product;
@Input() data?:Product;
title = "Tạo mới sản phẩm"
isCreate:boolean;
  constructor(private dataService:DataService,activeRoute:ActivatedRoute) { 
    //if(this.data== undefined && this.data){
      this.data={
      id:0,
      name:"",
      type:"",
      price:0,
      img:"",
      description:""
    }
    this.isCreate=true
  //}else{
    if(activeRoute.snapshot.queryParams.id !=undefined){
      this.isCreate = false;
      this.title="update sản phẩm";
    this.dataService.getOne(activeRoute.snapshot.queryParams.id)
    .subscribe(res =>{
      console.log(res)
      if(res && res[0])
      this.data = <Product>res[0];
    });
  }
}

  ngOnInit() {
    
  }
  editProduct(){
    this.dataService.updateData(this.data.id, this.data)
    .subscribe(res =>{
      console.log(999,res)
  })
}
  createProduct(){
    this.dataService.insertData(this.data)
    .subscribe(res =>{
      console.log(888,res)
    });
  }
  onClick(){
    let isValidate=this.validate();
    //this.dataService.insertData(this.data)
      //.subscribe(res => {console.log(res)})
      if(this.isCreate==true){
        if(isValidate){
        this.createProduct();
        window.location.assign("/quanly");
      }else{
        alert("invalid.");
      }
    }else{
        this.editProduct();
      }
    }
    validate(){
      let isValidate =true;
      for(let i in this.data){
        if(this.data[i]===""){
          isValidate=false;
          break;
        }
      }
      return isValidate;
    }

}
