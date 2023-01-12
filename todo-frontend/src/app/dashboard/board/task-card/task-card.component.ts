import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../../@shared/models/task.model';
import { TaskService } from '../../@shared/services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit{

  @Input() task: Task;

  isEditing = false;
  taskTitle = new FormControl('');

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskTitle.setValue(this.task.title);
  }

  isHovered = false;

  over() {
    this.isHovered = true;
  }

  out() {
    this.isHovered = false;
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  deleteTask() {
    this.taskService.deleteTask(this.task);
  }
}
