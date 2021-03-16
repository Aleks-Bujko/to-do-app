import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo, Todos } from '../todo';
import { TodosStoreService } from '../todos-store.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.sass']
})
export class TodoInputComponent implements OnInit {

  constructor(private todoStore: TodosStoreService) { }

  ngOnInit() {
  }

  getInputTodo() {
    const txtInput = <HTMLInputElement>document.getElementById('todo-input');
    const userInput = txtInput.value.trim();
    if (userInput.length > 0) {
        const newTodo: Todo = { id: Date.now(), title: userInput, isCompleted: false };
        this.todoStore.addTodo(newTodo);
    }
}

}
