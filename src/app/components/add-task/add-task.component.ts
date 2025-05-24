import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})

export class AddTaskComponent {

  newTask: string = "";

  constructor(private TaskServics: TaskService) {}

  addTask() {
    if(this.newTask.trim()) {
      this.TaskServics.addTask(this.newTask);
      this.newTask = "";
    }
  }
}
 
