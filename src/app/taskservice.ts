import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {
  private tasks = [
{ title: 'Learn Angular', done: false },
{ title: 'Build ToDoList App', done: false },
{ title: 'Celebrate!', done: true }
];
getTasks() {
return this.tasks;
}
addTask(title: string) {
this.tasks.push({ title, done: false });
}
}
