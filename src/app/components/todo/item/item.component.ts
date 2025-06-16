import {Component, effect, inject, input, InputSignal} from '@angular/core';
import {Todo} from '../../../types/todo';
import {TodoService} from '../../../services/todo.service';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  protected todoService: TodoService = inject(TodoService)

  todo: InputSignal<Todo> = input<Todo>({} as Todo)
}
