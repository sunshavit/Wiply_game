import { Component ,Input } from '@angular/core';
import { Squre } from '../squre'

@Component({
  selector: 'app-squre',
  templateUrl: './squre.component.html',
  styleUrls: ['./squre.component.css']
})
export class SqureComponent  {


  
  squre : Squre = {
    color:'#'+(Math.random()*0xFFFFFF<<0).toString(16)
  }

  constructor() { }

  changeColor(){
    this.squre.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

}
