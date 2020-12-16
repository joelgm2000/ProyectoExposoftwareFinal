import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { Inscripcion } from '../inscripcion/models/inscripcion';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(this.baseUrl + 'api/Inscripcion')
      .pipe(
        catchError(this.handleErrorService.handleError<Inscripcion[]>('Consulta Inscripcion', null))
      );
  }

  post(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(this.baseUrl + 'api/Inscripcion', inscripcion)
      .pipe(
        tap(_ => this.handleErrorService.log('Inscripcion registrada Correctamente!')),
        catchError(this.handleErrorService.handleError<Inscripcion>('Registrar Inscripcion', null))
      );
  }

  getId(idInscripcion: string): Observable<Inscripcion> {
    const url = `${this.baseUrl + 'api/Inscripcion'}/${idInscripcion}`;
    return this.http.get<Inscripcion>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Inscripcion>('Buscar Inscripcion', null))
      );
  }

  delete(inscripcion: Inscripcion | string): Observable<string> {
    const id = typeof inscripcion === 'string' ? inscripcion : inscripcion.idInscripcion;
    return this.http.delete<string>(this.baseUrl + 'api/Inscripcion/' + id)
      .pipe(
        tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
        catchError(this.handleErrorService.handleError<string>('Elimiar inscripcion', null))
      );
  }
}
