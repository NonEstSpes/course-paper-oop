import {Component, effect, HostBinding, inject, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {Todo} from '../../../types/todo';
import {TodoService} from '../../../services/todo.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  animations: [
    trigger('stateAnimation', [
      state('incomplete', style({
        'color': 'black',
        'text-decoration': 'none'
      })),
      state('complete', style({
        'color': '#d9d9d9',
        'text-decoration': 'line-through'
      })),
      transition('incomplete => complete', [
        style({
          'text-decoration': 'line-through'
        }),
        animate('0.2s')
      ]),
      transition('complete => incomplete', [
        style({
          'text-decoration': 'none'
        }),
        animate('0.2s')
      ])
    ])
  ]
})
export class ItemComponent {
  protected todoService: TodoService = inject(TodoService)
  protected viewDelete: WritableSignal<boolean> = signal(false)

  todo: InputSignal<Todo> = input<Todo>({} as Todo)

  @HostBinding('@stateAnimation') get state() {
    return this.todo().completed ? 'complete' : 'incomplete';
  }
}
