import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/employees'; // api

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Obtem todos os users
  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Obtem um user pelo id
  getUserById(id: number): Observable<User> {
    return this.httpClient
      .get<User>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  // salva um user
  saveUser(user: User): Observable<User> {
    return this.httpClient
      .post<User>(this.url, JSON.stringify(user), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // autualiza um user
  updateUser(user: User): Observable<User> {
    return this.httpClient
      .put<User>(
        this.url + '/' + user.id,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // deleta um user
  deleteUser(user: User) {
    return this.httpClient
      .delete<User>(this.url + '/' + user.id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
