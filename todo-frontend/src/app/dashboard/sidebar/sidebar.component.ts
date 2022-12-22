import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Board } from '../@shared/models/board.model';
import { BoardService } from '../@shared/services/board.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  selectedBoard: Board | null;
  boards: Board[];
  subscription: Subscription;

  constructor(
    private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
    const boardsSub = this.boardService.getBoards()
      .subscribe({ next: (boards => this.boards = boards) })

    const currentBoardSub = this.boardService.getCurrentBoard()
      .subscribe({next : (board => {
        if(board) {
          this.selectedBoard = board;
          this.router.navigate([`board/${board.id}`]);
        }
      })})
    this.subscription.add(boardsSub);
    this.subscription.add(currentBoardSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createBoard() {
    const defaultBoard = { name: 'New Board' };
    this.boardService.createBoard(defaultBoard);
  }
}
