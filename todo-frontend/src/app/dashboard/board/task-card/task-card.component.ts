import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';
import { CreateTaskDTO, Task } from '../../@shared/models/task.model';
import { TaskService } from '../../@shared/services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (this.isEditing && event.key === "Enter") {
      this.updateTask();
      this.toggleEditMode();
      console.log(event)
    }
  }
  @Input() task: Task;

  isEditing = false;
  taskTitle = new FormControl('');
  isHovered = false;

  constructor(
    private taskService: TaskService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.taskTitle.setValue(this.task.title);
    this.taskTitle.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe({
      next: (value) => { this.updateTask() }
    });
  }

  over() {
    this.isHovered = true;
  }

  out() {
    this.isHovered = false;
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
    const element = this.renderer.selectRootElement(`#task-${this.task.id}`);
    console.log(element);
    element.focus();
  }

  deleteTask() {
    this.taskService.deleteTask(this.task);
  }

  updateTask() {
    if (!this.isEditing) {
      return;
    }
    const data: CreateTaskDTO = {
      status: this.task.status,
      title: this.taskTitle.value ?? this.task.title,
    }
    this.taskService.updateTask(this.task.id, this.task.boardId, data)
  }
}
