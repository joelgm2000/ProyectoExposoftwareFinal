import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../inscripcion/models/estudiante';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.baseUrl + 'api/Estudiante')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Estudiante[]>('Consulta Estudiante', null))
      );
  }

  post(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.baseUrl + 'api/Estudiante', estudiante)
      .pipe(
        tap(_ => this.handleErrorService.log('Estudiante registrado')),
        catchError(this.handleErrorService.handleError<Estudiante>('Registrar Estudiante', null))
      );
  }

  getId(id: string): Observable<Estudiante> {
    const url = `${this.baseUrl + 'api/Estudiante'}/${id}`;
    return this.http.get<Estudiante>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Estudiante>('Estudiante no Registrado', null))
      );
  }

}
