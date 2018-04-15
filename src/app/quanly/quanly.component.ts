import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ProductManagerComponent } from '../product-manager/product-manager.component';
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
  public currentDataList:Product[];
  selectecRow:any;
  paginator:any;
  
  title = "Quản lý sản phẩm"
  
    constructor(private dataService:DataService) { 
      this.paginator ={
        pages:0,
        currentPage:0,
        rows:1,
        pageList:[]
      };
    }
  ngOnInit() {
    this.getList();
    }
  getList(){
      this.dataService.getList()
      .subscribe(res=>{
        this.dataList =<Product[]>res;
        this.paginationHandle()
      });
    }
    create(event){
      window.location.assign("/admin");
    
    }
    edit(event){
      if(this.selectecRow){
        window.location.assign("/admin?id="+this.selectecRow.id);
      }
    }
    remove(event){
      if(this.selectecRow){
        this.dataService.removeData(this.selectecRow.id)
        .subscribe(res=>{
          this.getList();
        })
    }
  }
    selectRow(event, product){
      this.selectecRow = product;
    }
    paginationHandle(index?:any){
      let len =this.dataList.length;
      let pages =Math.ceil(len/this.paginator.rows);
      this.paginator.pages=pages;
      if(index ==undefined){
        this.paginator.currentPage=pages;
      if(pages>0){
        this.paginator.currentPage=1;
      }
    }else{
      this.paginator.currentPage=index;
    }
    
      let pageList=[];
      if(pages>6) {
        if(this.paginator.currentPage>pages-3){
          pageList.push(1,2,3);
          pageList.push("...");
          pageList.push(this.paginator.pages-2,this.paginator.pages-1,this.paginator.pages);
        }else{
        pageList.push(this.paginator.pages,this.paginator.pages+1,this.paginator.pages+2);
        pageList.push("...");
        pageList.push(this.paginator.pages-2,this.paginator.pages-1,this.paginator.pages);
      }
    }
      else{
        for(let i=1;i<=pages;i++){
        pageList.push(i);
        }
      }
    
    let currentData = [];
    let currentIndex =(this.paginator.currentPage )*this.paginator.rows;
    for(let i=currentIndex;i<this.dataList.length;i++){
      if(currentData.length==this.paginator.rows)
      break;
      currentData.push(this.dataList[i]);
    }
    this.currentDataList = <Product[]>currentData;
  }
}


  

