import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Proyecto } from '../inscripcion/models/proyecto';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.baseUrl + 'api/Proyecto')
      .pipe(
        catchError(this.handleErrorService.handleError<Proyecto[]>('Consulta Proyecto', null))
      );
  }

  post(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.baseUrl + 'api/Proyecto', proyecto)
      .pipe(
        tap(_ => this.handleErrorService.log('Proyecto registrado')),
        catchError(this.handleErrorService.handleError<Proyecto>('Registrar Proyecto', null))
      );
  }

  put(proyecto: Proyecto): Observable<any> {
    const url = `${this.baseUrl}api/Proyecto/${proyecto.idProyecto}`;
    return this.http.put(url, proyecto, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
      catchError(this.handleErrorService.handleError<any>('Editar proyecto'))
    );
  }

  getId(idProyecto: number): Observable<Proyecto> {
    const url = `${this.baseUrl + 'api/Proyecto'}/${idProyecto}`;
      return this.http.get<Proyecto>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Proyecto>('Buscar proyecto', null))
      );
  }

  delete(proyecto: Proyecto| string): Observable<string> {
    const id = typeof proyecto === 'string' ? proyecto : proyecto.idProyecto;
    return this.http.delete<string>(this.baseUrl + 'api/Proyecto/' + id)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
      catchError(this.handleErrorService.handleError<string>('Elimiar proyecto', null))
    );
  }
}
