import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TodosStoreService } from './todos-store.service';
import { TodoInputComponent } from './todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TodoInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TodosStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
