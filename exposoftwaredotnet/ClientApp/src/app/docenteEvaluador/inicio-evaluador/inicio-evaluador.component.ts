import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/inscripcion/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { CalificacionService } from 'src/app/services/calificacion.service';
import { Calificacion } from 'src/app/areaMateria/models/calificacion';

@Component({
  selector: 'app-inicio-evaluador',
  templateUrl: './inicio-evaluador.component.html',
  styleUrls: ['./inicio-evaluador.component.css']
})
export class InicioEvaluadorComponent implements OnInit {

  proyectos: Proyecto[];
  listaP: Proyecto[];
  lista: Proyecto[] = [];
  calificaciones: Calificacion[];
  idRubrica: string;
  id: string;
  constructor(private proyectoService: ProyectoService, private calificacionService: CalificacionService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.calificaciones = [];
    this.calificacionService.get(this.id).subscribe(result => {
      this.calificaciones = result;
      this.cargarProyectos();
    });
  }
  cargarProyectos() {
    this.lista = [];
    this.listaP = [];
    this.proyectoService.get().subscribe(result => {
      this.listaP = result;
      this.listaP.forEach(elementP => {
        this.calificaciones.forEach(elementC => {
          this.idRubrica = elementC.idRubrica;
          if (elementC.idProyecto == elementP.idProyecto) {
            this.lista.push(elementP);
          }
        });
      });
      this.proyectos = this.lista;
    });
  }

}
