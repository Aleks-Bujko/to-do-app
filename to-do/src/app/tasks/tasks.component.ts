import { Component, OnInit } from '@angular/core';
import { TodosStoreService } from '../todos-store.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  todos: Todo[];
  
  constructor(private todoStore: TodosStoreService) {
    this.todos = [];
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoStore.getTodos()
        .subscribe(todos => this.todos = todos);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.todoStore.addTodo(({ title }) as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(h => h !== todo);
    this.todoStore.deleteTodo(todo).subscribe();
  }

}
