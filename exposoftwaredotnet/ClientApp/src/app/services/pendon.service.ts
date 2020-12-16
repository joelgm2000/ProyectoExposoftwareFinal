import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { Pendon } from '../inscripcion/models/pendon';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PendonService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Pendon[]> {
    return this.http.get<Pendon[]>(this.baseUrl + 'api/Pendon')
      .pipe(
        catchError(this.handleErrorService.handleError<Pendon[]>('Consulta Pendon', null))
      );
  }

  post(pendon: Pendon): Observable<Pendon> {
    return this.http.post<Pendon>(this.baseUrl + 'api/Pendon', pendon)
      .pipe(
        tap(_ => this.handleErrorService.log('Pendon registrado')),
        catchError(this.handleErrorService.handleError<Pendon>('Registrar Pendon', null))
      );
  }

  put(pendon: Pendon): Observable<any> {
    const url = `${this.baseUrl}api/Pendon/${pendon.idPendon}`;
    return this.http.put(url, pendon, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
        catchError(this.handleErrorService.handleError<any>('Editar pendon'))
      );
  }

  getId(idPendon: string): Observable<Pendon> {
    const url = `${this.baseUrl + 'api/Pendon'}/${idPendon}`;
    return this.http.get<Pendon>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Pendon>('Buscar Pendon', null))
      );
  }

  delete(pendon: Pendon | string): Observable<string> {
    const id = typeof pendon === 'string' ? pendon : pendon.idPendon;
    return this.http.delete<string>(this.baseUrl + 'api/Pendon/' + id)
      .pipe(
        tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
        catchError(this.handleErrorService.handleError<string>('Elimiar Pendon', null))
      );
  }
}
