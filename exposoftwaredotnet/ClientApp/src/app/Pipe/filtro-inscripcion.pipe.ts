import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from '../inscripcion/models/proyecto';

@Pipe({
  name: 'filtroInscripcion'
})
export class FiltroInscripcionPipe implements PipeTransform {

  transform(proyecto: Proyecto[], searchText: string): any {
    if (searchText == null) { return proyecto; }
    return proyecto.filter(p => p.titulo.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      p.identificacion.indexOf(searchText) !== -1 ||  p.estado.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
