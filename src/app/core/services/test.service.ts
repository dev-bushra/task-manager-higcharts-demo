import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]); // all tasks saved here (main tasks list)
  tasksObservable$ = this.tasks.asObservable(); // for read-only and subscribtions
 
  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(), title, completed: false
    };
    this.tasks.next([...this.tasks.value, newTask]);
  }

  toggleTask(id: number) {
    const updated = this.tasks.value.map(task => 
      task.id === id
      ?
      {...task, completed: !task.completed } : task
    );
    this.tasks.next(updated)
  }

  removeTask(id: number) {
    const updated = this.tasks.value.filter(task => task.id !== id);
    this.tasks.next(updated);
  }

}
