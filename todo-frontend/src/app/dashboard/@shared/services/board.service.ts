import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Board, CreateBoardDTO } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private currentBoard = new BehaviorSubject<Board | null>(null);
  private boards = new BehaviorSubject<Board[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getBoards() {
    return this.boards.asObservable();
  }

  getCurrentBoard() {
    return this.currentBoard.asObservable();
  }

  setCurrentBoard(board : Board){
    this.currentBoard.next(board);
  }

  loadBoards() {
    this.http.get<Board[]>(`${environment.apiUrl}/board`)
      .subscribe({
        next: (boards) => {
          this.boards.next(boards)
          if(this.boards.value.length > 0){
            this.setCurrentBoard(boards[0]);
          }
          // this.router.navigate([`board/${moveTo ?? this.boards[0].id}`])
        },
        error: (err) => { console.log(err) }
      })
  }

  createBoard(data: CreateBoardDTO) {
    return this.http.post<Board>(`${environment.apiUrl}/board`, { ...data })
      .subscribe(board => {
        this.boards.next([...this.boards.value, board]);
        this.setCurrentBoard(board);
      });
  }

}