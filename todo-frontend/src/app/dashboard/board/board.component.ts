import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Board } from '../@shared/models/board.model';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board
  name = new FormControl('');

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getCurrentBoard()
      .subscribe({
        next: (board) => {
          if (board) {
            this.board = board;
            // this.name = new FormControl(board.name);
            this.name.setValue(board.name);
          }
        }
      });

    let debounceTimer: ReturnType<typeof setTimeout>;
    this.name.valueChanges
      .subscribe({
        next: (value) => {

          if (debounceTimer) {
            clearTimeout(debounceTimer);
          }
          if (value && value !== this.board.name) {
            debounceTimer = setTimeout(() => {
              console.log('updating :',value )
              this.boardService.updateBoard(this.board.id, { name: value })
            }, 400)
          }
          // add some debouncing and update

        }
      })
  }

}
