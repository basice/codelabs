import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Todo } from './todo';
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodoService {

  // requires the mock JSON server to be running.
  private url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createTodo(title: string): Observable<Todo> {
    if (!title) {
      return throwError('Cannot create a todo with an empty title');
    }

    return this.http.post<Todo>(this.url, {title})
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTodo(todoId: number): Observable<any> {
    return this.http.delete(`${this.url}/${todoId}`)
      .pipe(
        catchError(error => this.handleError(error, todoId))
      );
  }

  private handleError(error: HttpErrorResponse, ...args) {
    if (error.status === 404) {
      return throwError(`Todo with ID ${args[0]} was not found`);
    }

    return throwError('Unknown todo error occurred');
  }
}
