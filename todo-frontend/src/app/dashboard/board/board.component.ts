import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Board } from '../@shared/models/board.model';
import { Task } from '../@shared/models/task.model';
import { BoardService } from '../@shared/services/board.service';
import { TaskService } from '../@shared/services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit , OnDestroy{

  board: Board;
  tasks: Task[];
  name = new FormControl('');
  subscription = new Subscription();

  constructor(
    private boardService: BoardService,
    private taskService: TaskService
    ) { }

  ngOnInit(): void {
    const boardSub = this.boardService.getCurrentBoard()
      .subscribe({
        next: (board) => {
          if (board) {
            this.board = board;
            this.name.setValue(board.name);
            this.loadBoardTasks();
          }
        }
      });

    let debounceTimer: ReturnType<typeof setTimeout>;
    const boardNameSub = this.name.valueChanges
      .subscribe({
        next: (value) => {

          if (debounceTimer) {
            clearTimeout(debounceTimer);
          }
          if (value && value !== this.board.name) {
            debounceTimer = setTimeout(() => {
              console.log('updating :',value )
              this.boardService.updateBoard(this.board.id, { name: value })
            }, 400)
          }
          // add some debouncing and update

        }
      })
      this.subscription.add(boardSub);
      this.subscription.add(boardNameSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadBoardTasks() {
    const taskSub = this.taskService.listTasks(this.board.id)
    .subscribe({
      next : (tasks) => {
        if(tasks) {
          this.tasks = tasks
        }
      }
    });
    this.subscription.add(taskSub);
  }

}
