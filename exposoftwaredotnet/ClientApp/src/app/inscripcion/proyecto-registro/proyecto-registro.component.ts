import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../../services/proyecto.service';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../areaMateria/models/asignatura';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DatosLocalSService } from '../../services/datos-local-s.service';

@Component({
  selector: 'app-proyecto-registro',
  templateUrl: './proyecto-registro.component.html',
  styleUrls: ['./proyecto-registro.component.css']
})

export class ProyectoRegistroComponent implements OnInit {

  formGroup: FormGroup;
  proyecto: Proyecto;
  asignaturas: Asignatura[];
  ids: string[];
  tamano: number;
  constructor(
    private proyectoService: ProyectoService, private formBuilder: FormBuilder,
    private asignaturaService: AsignaturaService, private datosLocalS: DatosLocalSService) { }

  ngOnInit(): void {
    this.ObtenerDatos();
    this.buildForm();
    this.cargarAsignatura();
  }

  private buildForm() {
    this.proyecto = new Proyecto();

    this.proyecto.identificacion = this.ids[0];
    this.proyecto.estudiante1 = this.ids[1];
    this.proyecto.estudiante2 = this.ids[2];
    this.proyecto.titulo = '';
    this.proyecto.asignatura = '';
    this.proyecto.semestre = '';
    this.proyecto.resumen = '';
    this.proyecto.metodologia = '';
    this.proyecto.resultados = '';

    this.formGroup = this.formBuilder.group({
      identificacion: this.proyecto.identificacion,
      estudiante1: this.proyecto.estudiante1,
      estudiante2: this.proyecto.estudiante2,
      titulo: [this.proyecto.titulo, Validators.required],
      asignatura: [this.proyecto.asignatura, Validators.required],
      semestre: [this.proyecto.semestre, Validators.required],
      resumen: [this.proyecto.resumen, Validators.required],
      metodologia: [this.proyecto.metodologia, Validators.required],
      resultados: [this.proyecto.resultados, Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
    this.ngOnInit();
  }

  add() {
    this.proyecto = this.formGroup.value;
    this.proyectoService.post(this.proyecto).subscribe(p => {
      if (p != null) {
        this.proyecto = p;
        this.datosLocalS.clearStore();
      }
    });
  }


  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  public getErrorV(controlName: string): ValidationErrors {
    return this.formGroup.get(controlName).errors;
  }
  get f() { return this.formGroup.controls; }

  get control() { return this.formGroup.controls; }

  public cargarAsignatura() {
    this.asignaturaService.get().subscribe(result => {
      this.asignaturas = result;
    });
  }

  ObtenerDatos() {
    this.ids = this.datosLocalS.get();
  }

}
