import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo, Todos} from './todo';

@Injectable({
    providedIn: 'root'
})
export class TodosStoreService {

    todos: Todos = [];
    todosFiltered: Todos = [];
    filter: string = 'all';
    public objObservable: any;
    private objObserver: any;

    constructor() {
        this.objObservable = new Observable((localObserver) => {
            this.objObserver = localObserver; // Convert this.objObserver from any to an observer object
            this.objObserver.next(this.todos); // Connect this.todos to observable object by observer
        });
    }

    getTodos(): Observable<Todos> {
        return this.objObservable;
    }

    addTodo(newTodo: Todo) {
        this.todos = [...this.todos, newTodo];
        return this.objObserver.next(this.todos);
    }

    completeTodo(todoId: number) {
        const itemIndex = this.todos.findIndex((item: Todo) => item.id === todoId);
        this.todos = this.todos.map((item: Todo, index: number) => index === itemIndex ? {...item, isCompleted: !item.isCompleted} : item);
        return this.objObserver.next(this.todos);
    }

    removeTodo(todoId: number) {
        this.todos = this.todos.filter((item: Todo) => item.id !== todoId);
        return this.objObserver.next(this.todos);
    }

    todosFilter(): Todo[] {
        if (this.filter === 'all') {
            return this.todos;
        } else if (this.filter === 'active') {
            return this.todos.filter(todo => !todo.isCompleted);
        } else if (this.filter === 'completed') {
            return this.todos.filter(todo => todo.isCompleted);
        }

        return this.todos;
    }

    remainingTodos() {
        return this.todos.filter(todo => !todo.isCompleted).length;
    }

    removeCompleted() {
        this.todos = this.todos.filter((item: Todo) => !item.isCompleted);
        console.log(this.todos);
        return this.objObserver.next(this.todos);
    }

}