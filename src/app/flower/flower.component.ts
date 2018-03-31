import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

interface FlowerData {
  name: string,
  img: string,
  price:string,
  description: string
}

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input() flower: FlowerData;
  @Output() onDetail = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
console.log(this.flower)
  }


  onClick() {
    this.onDetail.emit(this.flower.name);
    //let str = "Ten:" + this.flower.name + "\n";
    //str += "Mo ta: " + this.flower.description ;
    //alert(str);
  }

}
 