import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { BoardModule } from './board/board.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarToggleBtnComponent } from './@shared/components/sidebar-toggle-btn/sidebar-toggle-btn.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarToggleBtnComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BoardModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
