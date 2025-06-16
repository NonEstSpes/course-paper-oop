import {Component, inject} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ItemComponent} from './item/item.component';
import {FilterComponent} from './filter/filter.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [
    ItemComponent,
    FilterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  protected todoService: TodoService = inject(TodoService)
  protected formInput: FormControl = new FormControl();

  protected createNewTask(): void {
    this.todoService.create(this.formInput.value)
    this.formInput.setValue(null)
  }
}
