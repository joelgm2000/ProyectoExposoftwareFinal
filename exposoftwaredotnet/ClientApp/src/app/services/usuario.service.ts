import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../seguridad/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
      this.baseUrl = baseUrl;
     }
     get(): Observable<User[]> {
      return this.http.get<User[]>(this.baseUrl + 'api/Usuario')
        .pipe(
          catchError(this.handleErrorService.handleError<User[]>('Consulta usuario', null))
        );
    }

    post(user: User): Observable<User> {
      return this.http.post<User>(this.baseUrl + 'api/Usuario', user)
        .pipe(
          tap(_ => this.handleErrorService.log('Usuario registrado.')),
          catchError(this.handleErrorService.handleError<User>('Registrar Usuario', null))
        );
    }

    getId(userName: string): Observable<User> {
      const url = `${this.baseUrl + 'api/Usuario'}/${userName}`;
      return this.http.get<User>(url, httpOptions)
        .pipe(
          catchError(this.handleErrorService.handleError<User>('Usuario no Registrado', null))
        );
    }

    put(user: User): Observable<any> {
      const url = `${this.baseUrl}api/Usuario/${user.userName}`;
      return this.http.put(url, user, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
        catchError(this.handleErrorService.handleError<any>('Editar usuario'))
      );
    }

    delete(user: User| string): Observable<string> {
      const id = typeof user === 'string' ? user : user.userName;
      return this.http.delete<string>(this.baseUrl + 'api/Usuario/' + id)
      .pipe(
        tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
        catchError(this.handleErrorService.handleError<string>('Elimiar docente', null))
      );
    }
}
