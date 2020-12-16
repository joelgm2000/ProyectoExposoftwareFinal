import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Area } from '../models/area';
import { AreaService } from 'src/app/services/area.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-area-registro',
  templateUrl: './area-registro.component.html',
  styleUrls: ['./area-registro.component.css']
})
export class AreaRegistroComponent implements OnInit {

  formGroup: FormGroup;
  area: Area;
  constructor(
    private areaService: AreaService, private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.area = new Area();
    this.area.idArea = '';
    this.area.nombre = '';

    this.formGroup = this.formBuilder.group({
      idArea: [this.area.idArea, Validators.required],
      nombre: [this.area.nombre, Validators.required]
     });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }
  add() {
    this.area = this.formGroup.value;
    this.areaService.post(this.area).subscribe(a => {
      if (a != null) {
        this.area = a;
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
