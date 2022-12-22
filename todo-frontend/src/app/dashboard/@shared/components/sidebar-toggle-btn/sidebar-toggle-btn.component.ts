import { Component, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar-toggle-btn',
  templateUrl: './sidebar-toggle-btn.component.html',
  styleUrls: ['./sidebar-toggle-btn.component.css']
})
export class SidebarToggleBtnComponent {

  @Input() collapse : boolean;

  constructor(
    private sidebarService: SidebarService
  ) { }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(this.collapse);
  }

}
