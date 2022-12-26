import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskLaneModule } from './task-lane/task-lane.module';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskLaneModule
  ]
})
export class BoardModule { }
