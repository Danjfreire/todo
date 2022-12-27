import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskLaneComponent } from './task-lane/task-lane.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskStatusPipe } from '../@shared/pipes/task-status.pipe';



@NgModule({
  declarations: [
    BoardComponent,
    TaskLaneComponent,
    TaskCardComponent,
    TaskStatusPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class BoardModule { }
