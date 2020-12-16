import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Area } from '../areaMateria/models/area';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Area[]> {
    return this.http.get<Area[]>(this.baseUrl + 'api/Area')
      .pipe(
        catchError(this.handleErrorService.handleError<Area[]>('Consulta Area', null))
      );
  }
  post(area: Area): Observable<Area> {
    return this.http.post<Area>(this.baseUrl + 'api/Area', area)
      .pipe(
        tap(_ => this.handleErrorService.log('Area registrada Correctamente!')),
        catchError(this.handleErrorService.handleError<Area>('Registrar Area', null))
      );
  }
  put(area: Area): Observable<any> {
    const url = `${this.baseUrl}api/Area/${area.idArea}`;
    return this.http.put(url, area, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
      catchError(this.handleErrorService.handleError<any>('Editar area'))
    );
  }

  getId(idArea: string): Observable<Area> {
    const url = `${this.baseUrl + 'api/Area'}/${idArea}`;
      return this.http.get<Area>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Area>('Buscar Area', null))
      );
  }

  delete(area: Area| string): Observable<string> {
    const id = typeof area === 'string' ? area : area.idArea;
    return this.http.delete<string>(this.baseUrl + 'api/Area/' + id)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
      catchError(this.handleErrorService.handleError<string>('Elimiar area', null))
    );
  }

}
