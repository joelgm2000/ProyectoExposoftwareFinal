import { Pipe, PipeTransform } from '@angular/core';
import { Area } from 'src/app/areaMateria/models/area';

@Pipe({
  name: 'filtroArea'
})
export class FiltroAreaPipe implements PipeTransform {

  transform(area: Area[], searchText: string): any {
  if (searchText == null) { return area; }
  return area.filter(a => a.idArea.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
    a.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
}

}
