import { Component } from '@angular/core';
import { TaskService } from '../../@shared/services/task.service';

@Component({
  selector: 'app-task-lane',
  templateUrl: './task-lane.component.html',
  styleUrls: ['./task-lane.component.css']
})
export class TaskLaneComponent {

  constructor(
    private taskService : TaskService
  ){}

  createTask() {
    this.taskService.createTask(1, {title : 'first task', status : 'backlog'})
  }

}
