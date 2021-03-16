import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../todo';

import { TodosStoreService } from '../todos-store.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  @Input()todoList: Todos;
  
  constructor(public todoStore: TodosStoreService) {
  }

  ngOnInit() {
  }

  complete(todoId: number) {
    this.todoStore.completeTodo(todoId);
  }

  remove(todoId: number) {
    this.todoStore.removeTodo(todoId);
  }

  clearComplete() {
    this.todoStore.removeCompleted();
  }

}
