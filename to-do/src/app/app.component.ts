import { Component } from '@angular/core';
import { TodosStoreService } from './todos-store.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'to-do';

}
