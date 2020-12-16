import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/inscripcion/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-evalua-inscripcion',
  templateUrl: './evalua-inscripcion.component.html',
  styleUrls: ['./evalua-inscripcion.component.css']
})
export class EvaluaInscripcionComponent implements OnInit {

  proyecto: Proyecto;
  estudiante: string;
  estudiante2: string;
  docente: string;
  ide: string;
  constructor(private proyectoService: ProyectoService, private rutaActiva: ActivatedRoute,
    private modalService: NgbModal, private estudianteService: EstudianteService,
    private docenteService: DocenteService) { }

  ngOnInit() {
    this.obtenerRuta();
  }
  obtenerRuta() {
    const id = this.rutaActiva.snapshot.params.idProyecto;
    this.proyectoService.getId(id).subscribe(p => {
      if (p != null) {
        this.proyecto = p;
        this.estudianteService.getId(this.proyecto.estudiante1).subscribe(e => {
          if (e != null) {
            this.estudiante = e.primerNombre + ' ' + e.primerApellido;
            this.estudianteService.getId(this.proyecto.estudiante2).subscribe(ee => {
              if (ee != null) {
                this.estudiante2 = ee.primerNombre + ' ' + ee.primerApellido;
                this.docenteService.getId(this.proyecto.identificacion).subscribe(d => {
                  if (d != null) {
                    this.docente = d.primerNombre + ' ' + d.primerApellido;
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  update() {
    this.proyectoService.put(this.proyecto).subscribe(p => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Actualizado correctamente!';
    });
  }
}
