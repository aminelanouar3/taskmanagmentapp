import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
  tasks = [
    { id:1,title: 'Learn Angular', done: false },
    { id:2,title: 'Build ToDoList App', done: false },
    { id:3,title: 'Celebrate!', done: true }
  ];
  addtask(){
    this.tasks.push({id:4,title:'new task',done:false})
  }
  deletetask(ind:number){
    this.tasks.splice(ind,1);
  }
}
