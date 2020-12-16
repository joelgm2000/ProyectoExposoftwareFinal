import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsRubricaService } from 'src/app/services/items-rubrica.service';
import { ItemsRubrica } from 'src/app/areaMateria/models/items-rubrica';
import { DescripcionCService } from 'src/app/services/descripcion-c.service';
import { DescripcionCalificacion } from 'src/app/areaMateria/models/descripcion-calificacion';

@Component({
  selector: 'app-registrar-calificacion',
  templateUrl: './registrar-calificacion.component.html',
  styleUrls: ['./registrar-calificacion.component.css']
})
export class RegistrarCalificacionComponent implements OnInit {

  itemsRubrica: ItemsRubrica[];
  descripcion: DescripcionCalificacion;
  valor1: number;
  valor2: number;
  valor3: number;
  idProyecto: number;
  total: number;
  constructor(private rutaActiva: ActivatedRoute, private itemsRubricaService: ItemsRubricaService,
    private descripcionCService: DescripcionCService) { }

  ngOnInit(): void {
    this.obtenerRuta();
    this.valor1 = 0;
    this.valor2 = 0;
    this.valor3 = 0;
    this.total = 0;
  }
  obtenerRuta() {
    const idP = this.rutaActiva.snapshot.params.idProyecto;
    const idR = this.rutaActiva.snapshot.params.idRubrica;
    this.cargarItem(idR);
    this.idProyecto = idP;
  }

  cargarItem(rubrica: string) {
    this.itemsRubricaService.get(rubrica).subscribe(result => {
      this.itemsRubrica = result;
    });
  }
  add() {
    const idP = this.rutaActiva.snapshot.params.idProyecto;
    const idR = this.rutaActiva.snapshot.params.idRubrica;
    this.descripcion = new DescripcionCalificacion();
    this.descripcion.p1 = this.valor1;
    this.descripcion.p2 = this.valor2;
    this.descripcion.p3 = this.valor3;
    this.total = this.valor1 + this.valor2 + this.valor3;
    this.descripcion.valor = this.total;
    this.descripcion.idProyecto = parseInt(idP, 10);
    this.descripcionCService.post(this.descripcion).subscribe(d => {
      if (d != null) {
        this.descripcion = d;
      }
    });
  }
}
