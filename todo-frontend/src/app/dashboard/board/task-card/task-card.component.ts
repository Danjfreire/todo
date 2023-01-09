import { Component, Input } from '@angular/core';
import { Task } from '../../@shared/models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  @Input() task : Task;

  isHovered = false;

  over() {
    this.isHovered = true;
  }

  out() {
    this.isHovered = false;
  }
}
