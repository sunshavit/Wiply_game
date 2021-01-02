import { Component ,Input } from '@angular/core';
import { Squre } from '../squre';



@Component({
  selector: 'app-squre',
  templateUrl: './squre.component.html',
  styleUrls: ['./squre.component.css']
})
export class SqureComponent  {

  @Input()
  squre!: Squre | { color: "gray"; };

  constructor() {
   }

}
