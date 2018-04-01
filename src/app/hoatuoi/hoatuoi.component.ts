import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-hoatuoi',
  templateUrl: './hoatuoi.component.html',
  styleUrls: ['./hoatuoi.component.css']
})
export class HoatuoiComponent implements OnInit {

  constructor(private messageService: MessageService,private dataService:DataService) { }
  flowerList:object [];
  title = "Hoa tuoi";
  ngOnInit() {
    this.dataService.getList("hoatuoi")
    .subscribe(res => {this.flowerList=<object[]>res;})
  }
  onDetail(flowerName:string){
    this.messageService.showMessage(flowerName);
}
}