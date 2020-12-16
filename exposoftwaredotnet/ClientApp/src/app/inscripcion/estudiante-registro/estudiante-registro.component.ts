import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DatosLocalSService } from '../../services/datos-local-s.service';

@Component({
  selector: 'app-estudiante-registro',
  templateUrl: './estudiante-registro.component.html',
  styleUrls: ['./estudiante-registro.component.css']
})

export class EstudianteRegistroComponent implements OnInit {

  formGroup: FormGroup;
  estudiante: Estudiante;
  constructor(
    private estudianteService: EstudianteService, private formBuilder: FormBuilder,
    private datosLocalS: DatosLocalSService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.estudiante = new Estudiante();
    this.estudiante.identificacion = '';
    this.estudiante.primerNombre = '';
    this.estudiante.segundoNombre = '';
    this.estudiante.primerApellido = '';
    this.estudiante.segundoApellido = '';
    this.estudiante.celular = '';
    this.estudiante.correo = '';

    this.formGroup = this.formBuilder.group({
      identificacion: [this.estudiante.identificacion, Validators.required],
      primerNombre: [this.estudiante.primerNombre, Validators.required],
      segundoNombre: [this.estudiante.segundoNombre, this.ValidaVacio],
      primerApellido: [this.estudiante.primerApellido, Validators.required],
      segundoApellido: [this.estudiante.segundoApellido, Validators.required],
      celular: [this.estudiante.celular, [Validators.maxLength(10), this.ValidaVacio]],
      correo: [this.estudiante.correo, Validators.required],
    });
  }

  private ValidaVacio(control: AbstractControl) {
    const segundoNombre = control.value;
    if (segundoNombre == '') {
      return null;
    }
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
    this.buildForm();
  }
  add() {
    this.estudiante = this.formGroup.value;
    this.guardarLocal(this.estudiante.identificacion);
    this.estudianteService.post(this.estudiante).subscribe(e => {
      if (e != null) {
        this.estudiante = e;
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

  guardarLocal(id: string) {
    this.datosLocalS.post(id);
  }
}
