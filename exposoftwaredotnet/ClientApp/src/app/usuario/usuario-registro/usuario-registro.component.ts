import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/seguridad/user';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

  formGroup: FormGroup;
  user: User;
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.user = new User();
    this.user.userName = '';
    this.user.password = '';
    this.user.email = '';
    this.user.rol = '';

    this.formGroup = this.formBuilder.group({
      userName: [this.user.userName, Validators.required],
      password: [this.user.password, Validators.required],
      email: [this.user.email, Validators.required],
      rol: [this.user.rol, Validators.required]
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }
  add() {
      this.user = this.formGroup.value;
      this.usuarioService.post(this.user).subscribe(u => {
        if (u != null) {
          this.user = u;
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
