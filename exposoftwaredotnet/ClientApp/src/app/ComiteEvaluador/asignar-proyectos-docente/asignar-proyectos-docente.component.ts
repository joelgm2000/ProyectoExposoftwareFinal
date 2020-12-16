import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/inscripcion/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from 'src/app/areaMateria/models/asignatura';
import { AreaService } from 'src/app/services/area.service';
import { Area } from 'src/app/areaMateria/models/area';
import { RubricaService } from 'src/app/services/rubrica.service';
import { Rubrica } from 'src/app/areaMateria/models/rubrica';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from 'src/app/inscripcion/models/docente';
import { CalificacionService } from 'src/app/services/calificacion.service';
import { Calificacion } from 'src/app/areaMateria/models/calificacion';

@Component({
  selector: 'app-asignar-proyectos-docente',
  templateUrl: './asignar-proyectos-docente.component.html',
  styleUrls: ['./asignar-proyectos-docente.component.css']
})
export class AsignarProyectosDocenteComponent implements OnInit {

  proyecto: Proyecto;
  asignatura: Asignatura;
  areas: Area[];
  area: Area;
  evaluador: string;
  rubricas: Rubrica[];
  rubrica: Rubrica;
  docentes: Docente[];
  listas: Docente[];
  lista: Docente[] = [];
  calificacion: Calificacion;
  constructor(private proyectoService: ProyectoService, private rutaActiva: ActivatedRoute,
    private modalService: NgbModal, private asignaturaService: AsignaturaService,
    private areaService: AreaService, private rubricaService: RubricaService,
    private docenteService: DocenteService, private calificacionService: CalificacionService) { }

  ngOnInit(): void {
    this.calificacion = new Calificacion();
    this.obtenerRuta();
  }
  obtenerRuta() {
    const id = this.rutaActiva.snapshot.params.idProyecto;
    this.proyectoService.getId(id).subscribe(p => {
      if (p != null) {
        this.proyecto = p;
        this.asignaturaService.getId(this.proyecto.asignatura).subscribe(a => {
          if (a != null) {
            this.asignatura = a;
            this.buscarArea(this.asignatura);
          }
        });
      }
    });
  }

  buscarArea(asignatura: Asignatura) {
    this.areaService.get().subscribe(result => {
      this.areas = result;
      this.areas.forEach(element => {
        if (element.nombre == asignatura.nombreArea) {
          this.area = element;
        }
      });
      this.buscarRubrica(this.area);
    });
  }

  buscarRubrica(area: Area) {
    this.rubricaService.get().subscribe(result => {
      this.rubricas = result;
      this.rubricas.forEach(element => {
        if (element.idArea == area.idArea) {
          this.rubrica = element;
          this.buscarDocente(area);
        }
      });
    });
  }

  buscarDocente(area: Area) {
    this.docenteService.get().subscribe(result => {
      this.listas = result;
      this.listas.forEach(element => {
        if (element.nombreArea == area.nombre) {
          if (element.tipoDocente == 'Docente evaluador') {
            this.lista.push(element);
          }
        }
      });
      this.docentes = this.lista;
    });
  }

  add() {
    this.calificacion.idProyecto = this.proyecto.idProyecto;
    this.calificacion.identificacion = this.proyecto.identificacion;
    this.calificacion.idRubrica = this.rubrica.idRubrica;
    this.calificacion.evaluador = this.evaluador;
    this.calificacionService.post(this.calificacion).subscribe(c => {
      if (c != null) {
        this.calificacion = c;
      }
    });
  }

}
