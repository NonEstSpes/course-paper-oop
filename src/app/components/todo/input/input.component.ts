import {Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoService} from '../../../services/todo.service';

@Component({
  selector: 'app-input',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  protected todoService: TodoService = inject(TodoService)
  protected formInput: FormControl = new FormControl();

  protected createNewTask(): void {
    this.todoService.create(this.formInput.value)
    this.formInput.setValue(null)
  }
}
