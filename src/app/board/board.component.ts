import { Component } from '@angular/core';
import { Squre } from '../squre';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{

  rowSize = 3;
  colSize = 3;
  board :Squre[][];

  constructor() {
    this.board = [] ;
    for (let i = 0; i < this.rowSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.colSize; j++) {
        this.board[i][j]= { color:'#'+(Math.random()*0xFFFFFF<<0).toString(16)}
      }
    }
    console.log(this.board)
  }
}
