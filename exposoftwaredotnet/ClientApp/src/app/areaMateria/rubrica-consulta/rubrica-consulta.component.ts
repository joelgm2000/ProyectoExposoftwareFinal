import { Component, OnInit } from '@angular/core';
import { ItemsRubrica } from '../models/items-rubrica';
import { Rubrica } from '../models/rubrica';
import { RubricaService } from 'src/app/services/rubrica.service';
import { ItemsRubricaService } from 'src/app/services/items-rubrica.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-rubrica-consulta',
  templateUrl: './rubrica-consulta.component.html',
  styleUrls: ['./rubrica-consulta.component.css']
})
export class RubricaConsultaComponent implements OnInit {

  itemsRubrica: ItemsRubrica[];
  id: string;
  constructor(private itemsRubricaService: ItemsRubricaService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  buscar() {
    this.itemsRubricaService.get(this.id).subscribe(result => {
      this.itemsRubrica = result;
    });
  }
}
