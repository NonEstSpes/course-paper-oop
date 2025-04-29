import {Component, inject, input, InputSignal} from '@angular/core';
import {TodoService} from '../../../services/todo.service';
import {Filter} from '../../../types/todo';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  protected todoService: TodoService = inject(TodoService)
  protected readonly Filter = Filter;

  count(isCompleted: boolean): number {
    return this.todoService.read().filter(value => value.completed === isCompleted).length
  }
}
