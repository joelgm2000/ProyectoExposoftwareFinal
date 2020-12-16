import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Pendon } from 'src/app/inscripcion/models/pendon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PendonService } from 'src/app/services/pendon.service';

@Component({
  selector: 'app-registrar-pendon',
  templateUrl: './registrar-pendon.component.html',
  styleUrls: ['./registrar-pendon.component.css']
})
export class RegistrarPendonComponent implements OnInit {

  formGroup: FormGroup;
  pendon: Pendon;
  constructor(private formBuilder: FormBuilder, private pendonService: PendonService,
    private modalService: NgbModal) { }

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

    this.formGroup = this.formBuilder.group({
      idProyecto: [this.pendon.idProyecto, Validators.required],
      titulo: [this.pendon.titulo, Validators.required],
      introduccion: [this.pendon.introduccion, Validators.required],
      metodologia: [this.pendon.metodologia, Validators.required],
      resultados: [this.pendon.resultados, Validators.required],
      objetivos: [this.pendon.objetivos, Validators.required],
      conclusion: [this.pendon.conclusion, Validators.required],
      referencias: [this.pendon.referencias, Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.pendon = this.formGroup.value;
    this.pendonService.post(this.pendon).subscribe(p => {
      if (p != null) {
        this.pendon = p;
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

}
