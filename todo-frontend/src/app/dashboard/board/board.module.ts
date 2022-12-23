import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BoardModule { }
