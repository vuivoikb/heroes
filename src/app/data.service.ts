import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'

@Injectable()
export class DataService {
flowerList:object[]
  constructor(private httpClient:HttpClient) { }
  getOne(id: Number){
    return this.httpClient.get("http://localhost:3000/products?id="+id);
  }
  getList(type?:string){
//return this.flowerList;
   if(type !=undefined){ return this.httpClient.get("http://localhost:3000/products?type="+type)
  }else{
    return this.httpClient.get("http://localhost:3000/products");
  }}

  insertData (data:object) {
    return this.httpClient.post("http://localhost:3000/products",data);
  }
  updateData(id:Number,data:object){
    return this.httpClient.put("http://localhost:3000/products",data);
  }
  removeData(id: Number){
    return this.httpClient.delete("http://localhost:3000/products/"+id);
  }
}
