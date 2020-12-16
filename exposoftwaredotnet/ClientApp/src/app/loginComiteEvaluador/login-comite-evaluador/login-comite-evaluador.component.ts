import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/seguridad/user';

@Component({
  selector: 'app-login-comite-evaluador',
  templateUrl: './login-comite-evaluador.component.html',
  styleUrls: ['./login-comite-evaluador.component.css']
})
export class LoginComiteEvaluadorComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  user: User;
  ruta: string;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService,
    private modalService: NgbModal, private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.ObtenerRuta();
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.ruta]);
        },
        error => {
          const modalRef = this.modalService.open(AlertModalComponent);
          modalRef.componentInstance.title = 'Acceso Denegado';
          modalRef.componentInstance.message = error.error;
          this.loading = false;
        });
  }

  public ObtenerRuta() {
    this.usuarioService.getId(this.f.username.value).subscribe(u => {
      if (u != null) {
        if (u.rol == 'admin') {
          this.ruta = this.route.snapshot.queryParams['returnUrl'] || '/inicio';
        } else if (u.rol == 'Docente evaluador') {
          this.ruta = this.route.snapshot.queryParams['returnUrl'] || '/inicioEvaluador';
        } else if ( u.rol == 'Docente lider') {
          this.ruta = this.route.snapshot.queryParams['returnUrl'] || '/inicioDocenteLider';
        }
      }
    });
  }


}
