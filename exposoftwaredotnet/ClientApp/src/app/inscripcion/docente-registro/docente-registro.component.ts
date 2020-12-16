import { Component, OnInit } from '@angular/core';
import { Docente } from '../models/docente';
import { DocenteService } from '../../services/docente.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DatosLocalSService } from '../../services/datos-local-s.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Area } from 'src/app/areaMateria/models/area';
import { AreaService } from 'src/app/services/area.service';


@Component({
  selector: 'app-docente-registro',
  templateUrl: './docente-registro.component.html',
  styleUrls: ['./docente-registro.component.css']
})

export class DocenteRegistroComponent implements OnInit {

  formGroup: FormGroup;
  docente: Docente;
  areas: Area[];
  id: string;
  tipo: string = 'Lider de proyecto';
  bandera: number = 0;
  constructor(
    private docenteService: DocenteService, private formBuilder: FormBuilder,
    private datosLocalS: DatosLocalSService, private modalService: NgbModal,
    private areaService: AreaService) { }

  ngOnInit(): void {
    this.buildForm();
    this.cargarArea();
  }

  private buildForm() {
    this.docente = new Docente();
    this.docente.identificacion = '';
    this.docente.primerNombre = '';
    this.docente.segundoNombre = '';
    this.docente.primerApellido = '';
    this.docente.segundoApellido = '';
    this.docente.celular = '';
    this.docente.correo = '';
    this.docente.perfil = '';
    this.docente.nombreArea = '';
    this.docente.tipoDocente = this.tipo;

    this.formGroup = this.formBuilder.group({
      identificacion: [this.docente.identificacion, Validators.required],
      primerNombre: [this.docente.primerNombre, Validators.required],
      segundoNombre: [this.docente.segundoNombre, this.ValidaVacio],
      primerApellido: [this.docente.primerApellido, Validators.required],
      segundoApellido: [this.docente.segundoApellido, Validators.required],
      celular: [this.docente.celular, Validators.maxLength(10)],
      correo: [this.docente.correo, Validators.required],
      perfil: [this.docente.perfil, Validators.required],
      nombreArea: [this.docente.perfil, Validators.required],
      tipoDocente: this.docente.tipoDocente
    });
  }

  private ValidaVacio(control: AbstractControl) {
    const segundoNombre = control.value;
    if (segundoNombre == null) {
      return null;
    }
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.datosLocalS.clearStore();
    if (this.bandera != 1) {
      this.docente = this.formGroup.value;
      this.guardarLocal(this.docente.identificacion);
      this.docenteService.post(this.docente).subscribe(d => {
        if (d != null) {
          this.docente = d;
        }
      });
    } else {
      this.guardarLocal(this.docente.identificacion);
    }

  }
  public cargarArea() {
    this.areaService.get().subscribe(result => {
      this.areas = result;
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

  buscar() {
    const idb = this.formGroup.get('identificacion').value;
    if (idb == '') {
      const messageBox = this.modalService.open(AlertModalComponent);
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Campo vacío, digite identificación.';
    } else {
      this.docenteService.getId(idb).subscribe(d => {
        if (d != null) {
          this.docente = d;
          this.mapearDocente(this.docente);
        } else {
          const messageBox = this.modalService.open(AlertModalComponent);
          messageBox.componentInstance.title = 'Resultado Operación';
          messageBox.componentInstance.message = 'Docente no registrado';
        }
      });
    }
  }

  mapearDocente(d: Docente) {
    this.bandera = 1;
    this.formGroup.get('primerNombre').setValue(d.primerNombre);
    if (d.segundoNombre == null) {
      this.formGroup.get('segundoNombre').setValue('');
    } else {
      this.formGroup.get('segundoNombre').setValue(d.segundoNombre);
    }
    this.formGroup.get('primerApellido').setValue(d.primerApellido);
    this.formGroup.get('segundoApellido').setValue(d.segundoApellido);
    this.formGroup.get('celular').setValue(d.celular);
    this.formGroup.get('correo').setValue(d.correo);
    this.formGroup.get('perfil').setValue(d.perfil);
    this.formGroup.get('nombreArea').setValue(d.nombreArea);
    this.formGroup.get('tipoDocente').setValue(d.tipoDocente);
    if (d.tipoDocente == 'Comite Evaluador') {
      const messageBox = this.modalService.open(AlertModalComponent);
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'El docente es comité evaluador, no debe registrar proyectos';
    } else if (d.tipoDocente == 'Docente evaluador') {
      const messageBox = this.modalService.open(AlertModalComponent);
      messageBox.componentInstance.title = 'Resultado Operación';
      messageBox.componentInstance.message = 'Docente seleccionado como docente evaluador, no puede registrar proyectos';
    } else if (d.tipoDocente == 'Ninguno') {
      this.formGroup.get('tipoDocente').setValue('');
    }
  }
}
