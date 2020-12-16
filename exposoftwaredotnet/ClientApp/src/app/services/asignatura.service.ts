import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Asignatura } from '../areaMateria/models/asignatura';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.baseUrl + 'api/Asignatura')
      .pipe(
        catchError(this.handleErrorService.handleError<Asignatura[]>('Consulta Asignatura', null))
      );
  }
  post(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(this.baseUrl + 'api/Asignatura', asignatura)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Asignatura>('Registrar Asignatura', null))
      );
  }
  put(asignatura: Asignatura): Observable<any> {
    const url = `${this.baseUrl}api/Asignatura/${asignatura.idAsignatura}`;
    return this.http.put(url, asignatura, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
      catchError(this.handleErrorService.handleError<any>('Editar asignatura'))
    );
  }

  getId(idAsignatura: string): Observable<Asignatura> {
    const url = `${this.baseUrl + 'api/Asignatura'}/${idAsignatura}`;
      return this.http.get<Asignatura>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Asignatura>('Buscar Asignatura', null))
      );
  }

  delete(asignatura: Asignatura| string): Observable<string> {
    const id = typeof asignatura === 'string' ? asignatura : asignatura.idAsignatura;
    return this.http.delete<string>(this.baseUrl + 'api/Asignatura/' + id)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
      catchError(this.handleErrorService.handleError<string>('Elimiar asignatura', null))
    );
  }

}
