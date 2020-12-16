import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../models/asignatura';
import { AsignaturaService } from '../../services/asignatura.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../@base/alert-modal/alert-modal.component';
import { Area } from '../models/area';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-asignatura-edicion',
  templateUrl: './asignatura-edicion.component.html',
  styleUrls: ['./asignatura-edicion.component.css']
})
export class AsignaturaEdicionComponent implements OnInit {
  asignatura: Asignatura;
  areas: Area[];
  constructor(private asignaturaService: AsignaturaService, private rutaActiva: ActivatedRoute,
    private modalService: NgbModal, private areaService: AreaService) { }

  ngOnInit(): void {
    this.obtenerRuta();
    this.cargarArea();
  }
  obtenerRuta() {
    const id = this.rutaActiva.snapshot.params.idAsignatura;
    this.asignaturaService.getId(id).subscribe(a => {
      if (a != null) {
        this.asignatura = a;
      }
    });
  }

  update() {
    this.asignaturaService.put(this.asignatura).subscribe(a => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Actualizado correctamente!';
    });
  }

  delete() {
    this.asignaturaService.delete(this.asignatura).subscribe(a => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Eliminado correctamente!';
    });
  }
  public cargarArea() {
    this.areaService.get().subscribe(result => {
      this.areas = result;
    });
  }

}
