import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { Taskservice } from './taskservice';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,DecimalPipe,CurrencyPipe,PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
  tasks: any[] =[]; 
  constructor(private taskService:Taskservice){}
  ngOnInit(){
    this.tasks=this.taskService.getTasks();
  }
  addtask(){
    this.tasks.push({id:4,title:'new task',done:false})
  }
  deletetask(ind:number){
    this.tasks.splice(ind,1);
  }
  today = new Date(); 
  price = 1234.56;
  percentage = 0.259;
}
