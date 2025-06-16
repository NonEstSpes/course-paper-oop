import {Component, inject} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ItemComponent} from './item/item.component';
import {FilterComponent} from './filter/filter.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ListComponent} from './list/list.component';
import {InputComponent} from './input/input.component';

@Component({
  selector: 'app-todo',
  imports: [
    FilterComponent,
    ReactiveFormsModule,
    ListComponent,
    InputComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  protected todoService: TodoService = inject(TodoService)
}
