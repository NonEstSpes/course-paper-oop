import {Component, effect, inject, input, InputSignal, signal, WritableSignal} from '@angular/core';
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
  protected viewDelete: WritableSignal<boolean> = signal(false)

  todo: InputSignal<Todo> = input<Todo>({} as Todo)
}
