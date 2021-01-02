import { Component, OnInit } from '@angular/core';
import { Squre } from '../squre';
import {BoardService} from "../board.service"

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  rowSize = 3;
  colSize = 3;
  board :Squre[][];

  constructor(private service: BoardService ) {
    this.board = [] ;
  }

  getBoard(): void {
    this.service.getBoard()
        .subscribe(row => this.board = row);
  }

  onClick(row: number,col: number){
    this.service.updateSqure(row,col,'#'+(Math.random()*0xFFFFFF<<0).toString(16))
  }

  ngOnInit() {
    this.getBoard();
  }
}
