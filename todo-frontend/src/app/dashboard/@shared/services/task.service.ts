import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTaskDTO } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http : HttpClient
  ) { }

  createTask(boardId : number, data : CreateTaskDTO) {
    this.http.post(`${environment.apiUrl}/board/${boardId}/task`, {...data})
    .subscribe()
  }
}
