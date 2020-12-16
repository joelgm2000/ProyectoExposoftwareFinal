import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../../areaMateria/models/asignatura';

@Pipe({
  name: 'filtroAsignatura'
})
export class FiltroAsignaturaPipe implements PipeTransform {

  transform(asignatura: Asignatura[], searchText: string): any {
    if (searchText == null) { return asignatura; }
    return asignatura.filter(a => a.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
    a.nombreArea.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
