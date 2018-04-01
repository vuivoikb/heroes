import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  flowerList:object [];
  title = "Hoa Bán Chạy";
  constructor(private messageService: MessageService,private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getList("banchay")
    .subscribe(res =>{this.flowerList=<object[]>res;});
  }
  onDetail(flowerName:string){
    this.messageService.showMessage(flowerName);
  }

}
