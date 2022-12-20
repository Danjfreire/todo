import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Board {
  name: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() sidebarCollapsed = new EventEmitter<boolean>();

  boards: Board[];

  constructor() { 
    this.boards = [
      {name : 'board 1'},
      {name : 'board 2'},
      {name : 'board 3'},
    ]
  }

  ngOnInit(): void {
    
  }

  collapse() {
    this.sidebarCollapsed.emit(true);
  }


}
