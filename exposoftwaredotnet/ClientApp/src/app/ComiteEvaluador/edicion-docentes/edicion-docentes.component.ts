import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from 'src/app/inscripcion/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { AreaService } from 'src/app/services/area.service';
import { Area } from 'src/app/areaMateria/models/area';

@Component({
  selector: 'app-edicion-docentes',
  templateUrl: './edicion-docentes.component.html',
  styleUrls: ['./edicion-docentes.component.css']
})
export class EdicionDocentesComponent implements OnInit {

  docente: Docente;
  areas: Area[];
  constructor(private rutaActiva: ActivatedRoute, private modalService: NgbModal,
    private docenteService: DocenteService, private areaService: AreaService) { }

  ngOnInit(): void {
    this.obtenerRuta();
    this.cargarArea();
  }

  obtenerRuta() {
    const id = this.rutaActiva.snapshot.params.identificacion;
    this.docenteService.getId(id).subscribe(d => {
      if (d != null) {
        this.docente = d;
      }
    });
  }
  public cargarArea() {
    this.areaService.get().subscribe(result => {
      this.areas = result;
    });
  }

  update() {
    this.docenteService.put(this.docente).subscribe(d => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Actualizado correctamente!';
    });
  }

  delete() {
    this.docenteService.delete(this.docente).subscribe(d => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Eliminado correctamente!';
    });
  }
}
