import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateTaskDTO, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = new BehaviorSubject<Task[] | null>(null);

  constructor(
    private http: HttpClient
  ) { }

  private addtask(newTask: Task, replaceId?: number) {
    if (replaceId && this.tasks.value) {
      this.tasks.next(this.tasks.value.map(task => {
        if (task.id === replaceId) {
          return newTask
        }
        return task;
      }))
      return;
    }

    if (this.tasks.value === null) {
      this.tasks.next([newTask])
    } else {
      this.tasks.next([...this.tasks.value, newTask]);
    }
  }

  private removeTask(taskId : number) {
    if(this.tasks.value) {
      this.tasks.next(this.tasks.value.filter(task => task.id !== taskId));
    }
  }

  createTask(boardId: number, data: CreateTaskDTO) {
    // add task right away to make it feel fast
    const tempTaskId = -1;
    const task: Task = {
      id: tempTaskId,
      boardId,
      status: data.status,
      title: data.title,
      description: data.description
    }
    this.addtask(task);

    this.http.post<Task>(`${environment.apiUrl}/board/${boardId}/task`, { ...data })
      .subscribe({
        next: (task) => {
          // updadate temporary task with actual task
          this.addtask(task, tempTaskId)
        },
        error: (err) => {
          // remove temp task if something went wrong
          this.removeTask(tempTaskId)
        }
      })
  }

  listTasks(boardId: number) {
    // reset tasks and request updated list
    this.tasks.next(null);
    this.http.get<Task[]>(`${environment.apiUrl}/board/${boardId}/task`)
      .subscribe({
        next: (tasks) => { this.tasks.next(tasks) },
        error: (err) => console.error(err)
      })
    return this.tasks.asObservable();
  }

  deleteTask(task : Task) {
    // remove task fast and make request
    if(!this.tasks.value) {
      return;
    }
    const previousTasks = [...this.tasks.value];
    const filteredTasks = this.tasks.value.filter(tsk => tsk.id !== task.id);
    this.tasks.next(filteredTasks)
    this.http.delete(`${environment.apiUrl}/board/${task.boardId}/task/${task.id}`)
    .subscribe({
      next : (task) => {},
      error : (err) => {
        // show some error
        console.log(err);
        this.tasks.next(previousTasks);
      }
    })
  }
}
