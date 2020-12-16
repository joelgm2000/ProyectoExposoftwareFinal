import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { ItemsRubrica } from '../areaMateria/models/items-rubrica';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsRubricaService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) {
    this.baseUrl = baseUrl;
  }
  get(idRubrica: string): Observable<ItemsRubrica[]> {
    const url = `${this.baseUrl + 'api/ItemsRubrica'}/${idRubrica}`;
      return this.http.get<ItemsRubrica[]>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<ItemsRubrica[]>('Buscar Rubrica', null))
      );
  }
  post(itemsRubrica: ItemsRubrica): Observable<ItemsRubrica> {
    return this.http.post<ItemsRubrica>(this.baseUrl + 'api/ItemsRubrica', itemsRubrica)
      .pipe(
        catchError(this.handleErrorService.handleError<ItemsRubrica>('Registrar itemRúbrica', null))
      );
  }
  put(itemsRubrica: ItemsRubrica): Observable<any> {
    const url = `${this.baseUrl}api/ItemsRubrica/${itemsRubrica.idRubrica}`;
    return this.http.put(url, itemsRubrica, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha actualizado correctamente!')),
      catchError(this.handleErrorService.handleError<any>('Editar itemrubrica'))
    );
  }

  delete(itemsRubrica: ItemsRubrica| string): Observable<string> {
    const id = typeof itemsRubrica === 'string' ? itemsRubrica : itemsRubrica.idRubrica;
    return this.http.delete<string>(this.baseUrl + 'api/ItemsRubrica/' + id)
    .pipe(
      tap(_ => this.handleErrorService.log('Se ha eliminado correctamente!')),
      catchError(this.handleErrorService.handleError<string>('Elimiar itemrubrica', null))
    );
  }
}
