import { Pipe, PipeTransform } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(value : Task[], status : TaskStatus): Task[] {
    if(value) {
      return value.filter(task => task.status === status);
    }
    
    return [];
  }

}
