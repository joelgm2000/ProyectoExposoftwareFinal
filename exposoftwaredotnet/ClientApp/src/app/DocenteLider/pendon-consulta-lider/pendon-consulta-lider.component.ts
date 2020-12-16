import { Component, OnInit } from '@angular/core';
import { Pendon } from 'src/app/inscripcion/models/pendon';
import { PendonService } from 'src/app/services/pendon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-pendon-consulta-lider',
  templateUrl: './pendon-consulta-lider.component.html',
  styleUrls: ['./pendon-consulta-lider.component.css']
})
export class PendonConsultaLiderComponent implements OnInit {

  id: string;
  pendon: Pendon;
  constructor(private pendonService: PendonService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.pendon = new Pendon();

    this.pendon.idProyecto = 0;
    this.pendon.titulo = '';
    this.pendon.introduccion = '';
    this.pendon.metodologia = '';
    this.pendon.resultados = '';
    this.pendon.objetivos = '';
    this.pendon.conclusion = '';
    this.pendon.referencias = '';
    this.pendon.observacion = '';
    this.pendon.estado = '';
  }
  buscar() {
    this.pendonService.getId(this.id).subscribe(result => {
      this.pendon = result;
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
