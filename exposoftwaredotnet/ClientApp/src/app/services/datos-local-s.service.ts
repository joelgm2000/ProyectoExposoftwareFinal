import { Docente } from './../inscripcion/models/docente';
import { Estudiante } from './../inscripcion/models/estudiante';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatosLocalSService {

  constructor() { }

  get(): string[] {
    return JSON.parse(localStorage.getItem('datos'));
  }

  post(id: string) {
    let ids: string[] = [];
    if (this.get() != null) {
      ids = this.get();
    }
    ids.push(id);
    localStorage.setItem('datos', JSON.stringify(ids));
  }

  clearStore() {
    localStorage.clear();
  }

}
