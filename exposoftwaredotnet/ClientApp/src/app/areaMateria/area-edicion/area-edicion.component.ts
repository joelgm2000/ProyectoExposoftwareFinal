import { Component, OnInit } from '@angular/core';
import { Area } from '../models/area';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../services/area.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-area-edicion',
  templateUrl: './area-edicion.component.html',
  styleUrls: ['./area-edicion.component.css']
})
export class AreaEdicionComponent implements OnInit {
  area: Area;
  constructor(private areaService: AreaService, private rutaActiva: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerRuta();
  }

  obtenerRuta() {
    const id = this.rutaActiva.snapshot.params.idArea;
    this.areaService.getId(id).subscribe(a => {
      if (a != null) {
        this.area = a;
      }
    });
  }

  update() {
    this.areaService.put(this.area).subscribe(a => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Actualizado correctamente!';
    });
  }

  delete() {
    this.areaService.delete(this.area).subscribe(a => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Eliminado correctamente!';
    });
  }

}
