import { Injectable } from '@angular/core';
import { Squre } from './squre';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

const COLLECTION_NAME = "board";

@Injectable({
  providedIn: 'root'
})

export class BoardService {

  board : Squre[][]
  rowSize;
  colSize;

  constructor(private firestore: AngularFirestore) { 
    this.board = [] ;
    this.rowSize = 3;
    this.colSize = 3;
    for (let i = 0; i < this.rowSize; i++) {
      this.board[i] = [];
    }


    firestore.collection(COLLECTION_NAME).valueChanges().subscribe(squers=>{
      squers.map((squre : any)=>{
        this.board[squre.row][squre.col] = {color : squre.color};
      })
    })

  }

 

  getId(row :number ,col: number): string{
    return (row*this.colSize + col)+""
  }

  updateSqure(row : number, col : number ,color : string ) : void{
    this.board[row][col] = {color};
    this.firestore.collection(COLLECTION_NAME).doc(this.getId(row,col)).set({row,col,color})
  } 

  getBoard(): Observable<Squre[][]>{
    return of(this.board);
  }
}
