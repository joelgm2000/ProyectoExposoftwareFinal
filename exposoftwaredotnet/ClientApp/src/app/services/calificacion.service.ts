import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { Calificacion } from '../areaMateria/models/calificacion';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
      this.baseUrl = baseUrl;
     }
     get(idEvaluador: string): Observable<Calificacion[]> {
      const url = `${this.baseUrl + 'api/Calificacion'}/${idEvaluador}`;
      return this.http.get<Calificacion[]>(url, httpOptions)
        .pipe(
          catchError(this.handleErrorService.handleError<Calificacion[]>('Consulta calificaciones', null))
        );
    }

    gets(): Observable<Calificacion[]> {
      return this.http.get<Calificacion[]>(this.baseUrl + 'api/Calificacion')
        .pipe(
          catchError(this.handleErrorService.handleError<Calificacion[]>('Consulta Calificaciones', null))
        );
    }

    post(calificacion: Calificacion): Observable<Calificacion> {
      return this.http.post<Calificacion>(this.baseUrl + 'api/Calificacion', calificacion)
        .pipe(
          tap(_ => this.handleErrorService.log('Asignación exitosa')),
          catchError(this.handleErrorService.handleError<Calificacion>('Registrar Calificacion', null))
        );
    }

    put(calificacion: Calificacion): Observable<any> {
      const url = `${this.baseUrl}api/Calificacion/${calificacion.idCalificacion}`;
      return this.http.put(url, calificacion, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
        catchError(this.handleErrorService.handleError<any>('Editar calificacion'))
      );
    }

    delete(calificacion: Calificacion| string): Observable<string> {
      const id = typeof calificacion === 'string' ? calificacion : calificacion.idCalificacion;
      return this.http.delete<string>(this.baseUrl + 'api/Calificacion/' + id)
      .pipe(
        tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
        catchError(this.handleErrorService.handleError<string>('Elimiar proyecto', null))
      );
    }
}
