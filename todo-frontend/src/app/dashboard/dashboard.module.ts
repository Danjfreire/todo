import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { BoardModule } from './board/board.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    BoardModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
