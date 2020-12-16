import { Component, OnInit } from '@angular/core';
import { PendonService } from 'src/app/services/pendon.service';
import { Pendon } from 'src/app/inscripcion/models/pendon';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-evaluar-pendon',
  templateUrl: './evaluar-pendon.component.html',
  styleUrls: ['./evaluar-pendon.component.css']
})
export class EvaluarPendonComponent implements OnInit {

  pendon: Pendon;
  docente: string;
  proyecto: string;
  constructor(private pendonService: PendonService, private modalService: NgbModal,
    private rutaActiva: ActivatedRoute, private proyectoService: ProyectoService,
    private docenteService: DocenteService) { }

  ngOnInit(): void {
    this.obtenerRuta();
  }
  obtenerRuta() {
    const id = this.rutaActiva.snapshot.params.idPendon;
    this.pendonService.getId(id).subscribe(p => {
      if (p != null) {
        this.pendon = p;
        this.proyectoService.getId(this.pendon.idProyecto).subscribe(pe => {
          if (pe != null) {
            this.proyecto = pe.identificacion;
            this.docenteService.getId(this.proyecto).subscribe(d => {
              if (d != null) {
                this.docente = d.primerNombre + ' ' + d.primerApellido;
              }
            });
          }
        });
      }
    });
  }

  update() {
    this.pendonService.put(this.pendon).subscribe(p => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Actualizado correctamente!';
    });
  }
}
