import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { SidebarService } from './@shared/services/sidebar.service';
import { BoardService } from './@shared/services/board.service';
import { Observable } from 'rxjs';
import { Board } from './@shared/models/board.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('toggleSidebar', [
      state('open', style({
        marginLeft: 0
      })),
      state('collapsed', style({
        marginLeft: '-16rem'
      })),
      transition('open => collapsed', [animate('0.3s')]),
      transition('collapsed => open', [animate('0.3s')])
    ])
  ]
})
export class DashboardComponent implements OnInit{

  currentBoard : Observable<Board | null>;

  constructor(
    private sidebarService : SidebarService,
    private boardService : BoardService,
  ) { }

  ngOnInit(): void {
    this.boardService.loadBoards();
    this.currentBoard = this.boardService.getCurrentBoard();
  }

  isSidebarCollapsed() {
    return this.sidebarService.getSidebarStatus();
  }

  toggleSidebar(collapsed: boolean) {
    this.sidebarService.toggleSidebar(collapsed);
  } 

}
