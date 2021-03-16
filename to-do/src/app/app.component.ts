import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todos } from './todo';
import { TodosStoreService } from './todos-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  todoList: Todos;
  subscription: Subscription;

  constructor(private todoStore: TodosStoreService) {}

  ngOnInit() {
    this.subscription = this.todoStore.getTodos()
                            .subscribe(list => {
                              this.todoList = list;
                            });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
