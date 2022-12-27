import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../../@shared/models/task.model';
import { TaskService } from '../../@shared/services/task.service';

@Component({
  selector: 'app-task-lane',
  templateUrl: './task-lane.component.html',
  styleUrls: ['./task-lane.component.css']
})
export class TaskLaneComponent {

  @Input() tasks : Task[];
  @Input() status : TaskStatus;

  constructor(
    private taskService : TaskService
  ){}

  createTask() {
    this.taskService.createTask(1, {title : 'New task', status : this.status})
  }

}
