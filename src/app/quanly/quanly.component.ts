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
  selector: 'app-quanly',
  templateUrl: './quanly.component.html',
  styleUrls: ['./quanly.component.css']
})
export class QuanlyComponent implements OnInit {
  public dataList:Product[];
  title = "Quản lý sản phẩm"
  
    constructor(private dataService:DataService) { 
      
    }
  ngOnInit() {
    this.getList();
    }
    getList(){
      this.dataService.getList()
      .subscribe(res=>{
        this.dataList =<Product[]>res;
      });
    }
  }

