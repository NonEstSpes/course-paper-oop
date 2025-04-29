import {Component, inject} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ItemComponent} from './item/item.component';
import {FilterComponent} from './filter/filter.component';

@Component({
  selector: 'app-todo',
  imports: [
    ItemComponent,
    FilterComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  protected todoService: TodoService = inject(TodoService)
}
