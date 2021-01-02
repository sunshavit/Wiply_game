import { Injectable } from '@angular/core';
import { Squre } from './squre';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


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
      for (let j = 0; j < this.colSize; j++) {
        this.board[i][j]= { color:'#'+(Math.random()*0xFFFFFF<<0).toString(16)}
      }
    }
    
    // firestore.collection('board').valueChanges().subscribe(s=>{
    //   for (let i = 0; i < this.rowSize; i++) {
    //     this.board[i] = [];
    //     for (let j = 0; j < this.colSize; j++) {
    //       this.board[i][j]= { color : s[0].squre[i*this.rowSize+j] }
    //     }
    //   }
    // })
  }

 


  async updateSqure(row : number, col : number ,color : string ) : Promise<void>{
    this.board[row][col] = {color};
    // try {
    //   await this.firestorePlacesCollection
    //     .doc(row+"")
    //     .set({ color: color });
    // } catch (err) {
    //   console.log(err);
    // }
  } 

  getBoard(): Observable<Squre[][]>{
    return of(this.board);
  }
}
