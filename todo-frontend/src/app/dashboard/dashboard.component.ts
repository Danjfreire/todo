import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

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
        position: 'relative',
        marginLeft: '-16rem'
      })),
      transition('open => collapsed', [animate('0.4s')]),
      transition('collapsed => open', [animate('0.4s')])
    ])
  ]
})
export class DashboardComponent {

  sidebarCollapsed = false;

  toggleSidebar(collapsed: boolean) {
    console.log(`Sidebar collapsed : ${collapsed}`)
    this.sidebarCollapsed = collapsed;
  }

}
