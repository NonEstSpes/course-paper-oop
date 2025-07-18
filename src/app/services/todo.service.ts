import {computed, effect, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Filter, Todo} from '../types/todo';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: WritableSignal<Todo[]> = signal<Todo[]>([])
  public filterList: WritableSignal<Filter> = signal<Filter>(Filter.All)
  public filteredTodoList = computed(() => {
    switch (this.filterList()) {
      case Filter.All:
        return this.todoList();
      case Filter.Active:
        return this.todoList().filter(value => !value.completed)
      case Filter.Completed:
        return this.todoList().filter(value => value.completed)
    }
  })

  public get read(): Signal<Todo[]> {
    return this.todoList.asReadonly()
  }

  public create(title: string) {
    if (title.length <= 0) return
    this.todoList.update(value => [
      ...value,
      {
        id: uuid.v4(),
        title: title,
        completed: false,
      }
    ])
  }

  public update(title: string, completed: boolean, id: string) {
    this.todoList.update(value => value.map(val => {
      if (val.id === id) {
        val.completed = completed;
        val.title = title;
      }
      return val;
    }))
  }

  public delete(id: string): void {
    this.todoList.update((value: Todo[]): Todo[] => value.filter(val => val.id !== id))
  }

  public clearCompleted(): void {
    this.todoList.update((value: Todo[]): Todo[] => value.filter(val => !val.completed))
  }

  public switchStatusAllTasks(value: boolean): void {
    this.todoList.update(val => val.map((todo: Todo): Todo => {
      return {...todo, completed: value}
    }))
  }
}
