import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { Rubrica } from '../areaMateria/models/rubrica';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) {
    this.baseUrl = baseUrl;
   }
   get(): Observable<Rubrica[]> {
    return this.http.get<Rubrica[]>(this.baseUrl + 'api/Rubrica')
      .pipe(
        catchError(this.handleErrorService.handleError<Rubrica[]>('Consulta Rubrica', null))
      );
  }
  post(rubrica: Rubrica): Observable<Rubrica> {
    return this.http.post<Rubrica>(this.baseUrl + 'api/Rubrica', rubrica)
      .pipe(
        tap(_ => this.handleErrorService.log('Rúbrica registrada Correctamente!')),
        catchError(this.handleErrorService.handleError<Rubrica>('Registrar Rúbrica', null))
      );
  }
  put(rubrica: Rubrica): Observable<any> {
    const url = `${this.baseUrl}api/Rubrica/${rubrica.idRubrica}`;
    return this.http.put(url, rubrica, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
      catchError(this.handleErrorService.handleError<any>('Editar rubrica'))
    );
  }

  getId(idRubrica: string): Observable<Rubrica> {
    const url = `${this.baseUrl + 'api/Rubrica'}/${idRubrica}`;
      return this.http.get<Rubrica>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Rubrica>('Buscar Rubrica', null))
      );
  }

  delete(rubrica: Rubrica| string): Observable<string> {
    const id = typeof rubrica === 'string' ? rubrica : rubrica.idRubrica;
    return this.http.delete<string>(this.baseUrl + 'api/Rubrica/' + id)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
      catchError(this.handleErrorService.handleError<string>('Elimiar rubrica', null))
    );
  }
}
