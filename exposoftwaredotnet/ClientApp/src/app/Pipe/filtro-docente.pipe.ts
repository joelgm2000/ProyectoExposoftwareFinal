import { Pipe, PipeTransform } from '@angular/core';
import { Docente } from '../inscripcion/models/docente';

@Pipe({
  name: 'filtroDocente'
})
export class FiltroDocentePipe implements PipeTransform {

  transform(docente: Docente[], searchText: string): unknown {
    if (searchText == null) { return docente; }
    return docente.filter(d => d.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
    d.primerNombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || 
    d.tipoDocente.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
