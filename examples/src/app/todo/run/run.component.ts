import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'run',
  template: `
      <input
              #titleInput

              (keyup.enter)="createTodoOptimistic(titleInput.value)"
      >

      <ul>
          <li *ngFor="let todo of todos">
              <span>{{ todo.title }}</span>
              <button (click)="deleteTodoOptimistic(todo.id)">Delete</button>
          </li>
      </ul>
  `,
  styles: []
})
export class RunComponent implements OnInit {

  todos;

  constructor(private todoService: TodoService) {
    this.todoService.getTodos()
      .subscribe(
        (todos: Todo[]) => this.todos = todos,
        this.logError
      );
  }

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe(
        (todos: Todo[]) => this.todos = todos,
        this.logError
      );
  }

  createTodo(title) {
    this.todoService.createTodo(title)
      .subscribe(
        (todo: Todo) => this.todos = [todo, ...this.todos],
        this.logError
      );
  }

  deleteTodo(todoId) {
    this.todoService.deleteTodo(todoId)
      .subscribe(
        () => this.todos = this.todos.filter(todo => todo.id !== todoId),
        this.logError
      );
  }

  createTodoOptimistic(title) {
    const todosBackup = this.todos;
    const newTodo = {
      title
    };

    this.todos = [newTodo, ...this.todos],

      this.todoService.createTodo(title)
        .subscribe(
          ({id}) => (newTodo as Todo).id = id,
          error => {
            this.todos = todosBackup;
            this.logError(error);
          }
        );
  }

  deleteTodoOptimistic(todoId) {
    const todosBackup = this.todos;
    this.todos = this.todos.filter(todo => todo.id !== todoId);

    this.todoService.deleteTodo(todoId)
      .subscribe(
        null,
        (error) => {
          this.logError(error);
          this.todos = todosBackup;
        }
      );
  }

  private logError(error) {
    console.log(error);
  }
}
