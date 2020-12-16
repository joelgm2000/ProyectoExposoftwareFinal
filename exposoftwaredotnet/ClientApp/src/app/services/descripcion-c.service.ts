import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DescripcionCalificacion } from '../areaMateria/models/descripcion-calificacion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DescripcionCService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  gets(): Observable<DescripcionCalificacion[]> {
    return this.http.get<DescripcionCalificacion[]>(this.baseUrl + 'api/DescripcionCalificacion')
      .pipe(
        catchError(this.handleErrorService.handleError<DescripcionCalificacion[]>('Consulta descripciones', null))
      );
  }

  post(descripcion: DescripcionCalificacion): Observable<DescripcionCalificacion> {
    return this.http.post<DescripcionCalificacion>(this.baseUrl + 'api/DescripcionCalificacion', descripcion)
      .pipe(
        tap(_ => this.handleErrorService.log('valor registrado')),
        catchError(this.handleErrorService.handleError<DescripcionCalificacion>('Registrar resultados', null))
      );
  }

  put(descripcion: DescripcionCalificacion): Observable<any> {
    const url = `${this.baseUrl}api/DescripcionCalificacion/${descripcion.idDescripcion}`;
    return this.http.put(url, descripcion, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
      catchError(this.handleErrorService.handleError<any>('Editar resultados'))
    );
  }
  delete(descripcion: DescripcionCalificacion| string): Observable<string> {
    const id = typeof descripcion === 'string' ? descripcion : descripcion.idDescripcion;
    return this.http.delete<string>(this.baseUrl + 'api/DescripcionCalificacion/' + id)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
      catchError(this.handleErrorService.handleError<string>('Elimiar resultados', null))
    );
  }
}
