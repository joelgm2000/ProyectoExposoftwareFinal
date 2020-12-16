import { Component, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/areaMateria/models/calificacion';
import { DescripcionCalificacion } from 'src/app/areaMateria/models/descripcion-calificacion';
import { ItemsRubrica } from 'src/app/areaMateria/models/items-rubrica';
import { CalificacionService } from 'src/app/services/calificacion.service';
import { DescripcionCService } from 'src/app/services/descripcion-c.service';
import { ItemsRubricaService } from 'src/app/services/items-rubrica.service';

@Component({
  selector: 'app-consulta-resultado',
  templateUrl: './consulta-resultado.component.html',
  styleUrls: ['./consulta-resultado.component.css']
})
export class ConsultaResultadoComponent implements OnInit {

  itemsRubrica: ItemsRubrica[];
  descripciones: DescripcionCalificacion[];
  calificacion: Calificacion[];
  idRubrica: string;
  idProyecto: number;
  valor1: number;
  valor2: number;
  valor3: number;
  total: number;

  constructor(private calificacionService: CalificacionService, private itemsRubricaService: ItemsRubricaService,
    private descripcionCService: DescripcionCService) { }

  ngOnInit(): void {
    this.valor1 = 0;
    this.valor2 = 0;
    this.valor3 = 0;
    this.total = 0;
  }

  buscar() {
    this.calificacionService.gets().subscribe(c => {
      this.calificacion = c;
      this.calificacion.forEach(element => {
        if ( element.idProyecto == this.idProyecto) {
          this.cargarItem(element.idRubrica, element.idProyecto);
        }
      });
    });
  }
  cargarItem(rubrica: string, idProyecto: number) {
    this.itemsRubricaService.get(rubrica).subscribe(result => {
      this.itemsRubrica = result;
      this.cargarPuntaje(idProyecto);
    });
  }

  cargarPuntaje(idProyecto: number) {
    this.descripcionCService.gets().subscribe(p => {
      this.descripciones = p;
      this.descripciones.forEach(element => {
        if (element.idProyecto == idProyecto) {
          this.valor1 = element.p1;
          this.valor2 = element.p2;
          this.valor3 = element.p3;
          this.total = element.valor;
        }
      });
    });
  }

}
