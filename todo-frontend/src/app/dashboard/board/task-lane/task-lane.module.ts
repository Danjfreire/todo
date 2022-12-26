import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskLaneComponent } from './task-lane.component';



@NgModule({
  declarations: [
    TaskLaneComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TaskLaneComponent
  ]
})
export class TaskLaneModule { }
