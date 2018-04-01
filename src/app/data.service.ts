import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'

@Injectable()
export class DataService {
flowerList:object[]
  constructor(private httpClient:HttpClient) { }
getList(type:string){
  this.flowerList = [
    {
      name: "Hoa Sen",
      price: "40000",
      img: "assets/logo/1.jpg",
      description: "Thanh khiết"
    },
    {
      name: "Hoa Hong",
      price: "50000",
      img: "assets/logo/2.jpg",
      description: "Ngọt ngào, nồng thắm"
    },
    {
      name: "Hoa Păng-Xê",
      price: "70000",
      img: "assets/logo/3.jpg",
      description: "Mê hoặc, quyến rũ"
    },
    {
      name: "Cẩm Chướng",
      price: "70000",
      img: "assets/logo/4.jpg",
      description: "Yêu Thương, tôn kính"
    }
];
//return this.flowerList;
return this.httpClient.get("http://localhost:3000/products?type="+type)
}
}
