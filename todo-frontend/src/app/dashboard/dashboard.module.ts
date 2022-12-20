import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { BoardModule } from './board/board.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarToggleBtnComponent } from './@shared/sidebar-toggle-btn/sidebar-toggle-btn.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarToggleBtnComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BoardModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
