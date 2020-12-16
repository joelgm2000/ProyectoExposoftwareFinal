import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/inscripcion/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-proyecto-consulta-l',
  templateUrl: './proyecto-consulta-l.component.html',
  styleUrls: ['./proyecto-consulta-l.component.css']
})
export class ProyectoConsultaLComponent implements OnInit {

  id: number;
  estudiante: string;
  estudiante2: string;
  docente: string;
  proyecto: Proyecto;
  constructor(private proyectoService: ProyectoService, private modalService: NgbModal,
    private estudianteService: EstudianteService, private docenteService: DocenteService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.proyecto = new Proyecto();

    this.proyecto.titulo = '';
    this.proyecto.asignatura = '';
    this.proyecto.semestre = '';
    this.proyecto.resumen = '';
    this.proyecto.metodologia = '';
    this.proyecto.resultados = '';
    this.proyecto.estado = '';
    this.proyecto.observacion = '';
  }

  buscar() {
    this.proyectoService.getId(this.id).subscribe(result => {
      this.proyecto = result;
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
