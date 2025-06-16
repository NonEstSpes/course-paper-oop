import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoComponent} from './components/todo/todo.component';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
