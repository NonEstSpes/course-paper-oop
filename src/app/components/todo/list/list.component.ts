import {Component, inject} from '@angular/core';
import {ItemComponent} from '../item/item.component';
import {TodoService} from '../../../services/todo.service';

@Component({
  selector: 'app-list',
  imports: [
    ItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  protected todoService: TodoService = inject(TodoService)
}
