import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DocenteRegistroComponent } from './inscripcion/docente-registro/docente-registro.component';
import { EstudianteRegistroComponent } from './inscripcion/estudiante-registro/estudiante-registro.component';
import { ProyectoRegistroComponent } from './inscripcion/proyecto-registro/proyecto-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { DocenteService } from './services/docente.service';
import { EstudianteService } from './services/estudiante.service';
import { ProyectoService } from './services/proyecto.service';
import { FooterComponent } from './footer/footer.component';
import { AsignaturaService } from './services/asignatura.service';
import { DatosLocalSService } from './services/datos-local-s.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { InformacionComponent } from './informacion/informacion/informacion.component';
import { LoginComiteEvaluadorComponent } from './loginComiteEvaluador/login-comite-evaluador/login-comite-evaluador.component';
import { LoginDocenteEvaluadorComponent } from './loginDocenteEvaluador/login-docente-evaluador/login-docente-evaluador.component';
import { LoginLiderProyectoComponent } from './loginLiderProyecto/login-lider-proyecto/login-lider-proyecto.component';
import { InicioComponent } from './ComiteEvaluador/inicio/inicio.component';
import { EvaluarPendonComponent } from './ComiteEvaluador/evaluar-pendon/evaluar-pendon.component';
import { EvaluaInscripcionComponent } from './ComiteEvaluador/evalua-inscripcion/evalua-inscripcion.component';
import { RegistrarPendonComponent } from './DocenteLider/RegistrarPendon/registrar-pendon/registrar-pendon.component';
import { ConsultaResultadoComponent } from './DocenteLider/ConsultaResultado/consulta-resultado/consulta-resultado.component';
import { InicioLiderComponent } from './DocenteLider/InicioLider/inicio-lider/inicio-lider.component';
import { AsignaturaRegistroComponent } from './areaMateria/asignatura-registro/asignatura-registro.component';
import { AsignaturaConsultaComponent } from './areaMateria/asignatura-consulta/asignatura-consulta.component';
import { MenuTopComponent } from './adminGUI/menu-top/menu-top.component';
import { MenuLateralComponent } from './adminGUI/menu-lateral/menu-lateral.component';
import { AreaService } from './services/area.service';
import { FiltroAsignaturaPipe } from './@base/pipe/filtro-asignatura.pipe';
import { AreaRegistroComponent } from './areaMateria/area-registro/area-registro.component';
import { AreaConsultaComponent } from './areaMateria/area-consulta/area-consulta.component';
import { AreaEdicionComponent } from './areaMateria/area-edicion/area-edicion.component';
import { RegistrarDocentesComponent } from './ComiteEvaluador/registrar-docentes/registrar-docentes.component';
import { FiltroInscripcionPipe } from './Pipe/filtro-inscripcion.pipe';
import { AsignaturaEdicionComponent } from './areaMateria/asignatura-edicion/asignatura-edicion.component';
import { ConsultarDocentesComponent } from './comiteEvaluador/consultar-docentes/consultar-docentes.component';
import { FiltroDocentePipe } from './pipe/filtro-docente.pipe';
import { FiltroAreaPipe } from './@base/pipe/filtro-area.pipe';
import { EdicionDocentesComponent } from './ComiteEvaluador/edicion-docentes/edicion-docentes.component';
import { RubricaRegistroComponent } from './areaMateria/rubrica-registro/rubrica-registro.component';
import { RubricaConsultaComponent } from './areaMateria/rubrica-consulta/rubrica-consulta.component';
import { RubricaEdicionComponent } from './areaMateria/rubrica-edicion/rubrica-edicion.component';
import { RubricaService } from './services/rubrica.service';
import { ItemsRubricaService } from './services/items-rubrica.service';
import { InscripcionConsultaComponent } from './ComiteEvaluador/inscripcion-consulta/inscripcion-consulta.component';
import { PendonConsultaComponent } from './ComiteEvaluador/pendon-consulta/pendon-consulta.component';
import { InicioEvaluadorComponent } from './docenteEvaluador/inicio-evaluador/inicio-evaluador.component';
import { RegistrarCalificacionComponent } from './docenteEvaluador/registrar-calificacion/registrar-calificacion.component';
import { MenulateralliderComponent } from './DocenteLider/menulaterallider/menulaterallider.component';
import { PendonService } from './services/pendon.service';
import { ProyectoConsultaLComponent } from './DocenteLider/proyecto-consulta-l/proyecto-consulta-l.component';
import { InformacionPendonComponent } from './DocenteLider/informacion-pendon/informacion-pendon.component';
import { PendonConsultaLiderComponent } from './DocenteLider/pendon-consulta-lider/pendon-consulta-lider.component';
import { CalificacionService } from './services/calificacion.service';
import { AsignarProyectosComponent } from './ComiteEvaluador/asignar-proyectos/asignar-proyectos.component';
import { AsignarProyectosDocenteComponent } from './ComiteEvaluador/asignar-proyectos-docente/asignar-proyectos-docente.component';
import { UsuarioRegistroComponent } from './usuario/usuario-registro/usuario-registro.component';
import { UsuarioService } from './services/usuario.service';
import { JwtInterceptor } from './services/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DocenteRegistroComponent,
    EstudianteRegistroComponent,
    ProyectoRegistroComponent,
    FooterComponent,
    AlertModalComponent,
    InformacionComponent,
    LoginComiteEvaluadorComponent,
    LoginDocenteEvaluadorComponent,
    LoginLiderProyectoComponent,
    InicioComponent,
    EvaluarPendonComponent,
    EvaluaInscripcionComponent,
    RegistrarPendonComponent,
    ConsultaResultadoComponent,
    InicioLiderComponent,
    AsignaturaRegistroComponent,
    AsignaturaConsultaComponent,
    MenuTopComponent,
    MenuLateralComponent,
    FiltroAsignaturaPipe,
    AreaRegistroComponent,
    AreaConsultaComponent,
    AreaEdicionComponent,
    RegistrarDocentesComponent,
    FiltroInscripcionPipe,
    AsignaturaEdicionComponent,
    ConsultarDocentesComponent,
    FiltroDocentePipe,
    FiltroAreaPipe,
    EdicionDocentesComponent,
    RubricaRegistroComponent,
    RubricaConsultaComponent,
    RubricaEdicionComponent,
    InscripcionConsultaComponent,
    PendonConsultaComponent,
    InicioEvaluadorComponent,
    RegistrarCalificacionComponent,
    MenulateralliderComponent,
    ProyectoConsultaLComponent,
    InformacionPendonComponent,
    PendonConsultaLiderComponent,
    AsignarProyectosComponent,
    AsignarProyectosDocenteComponent,
    UsuarioRegistroComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [AlertModalComponent],
  providers: [
    DocenteService,
    EstudianteService,
    ProyectoService,
    AsignaturaService,
    DatosLocalSService,
    AreaService,
    RubricaService,
    ItemsRubricaService,
    PendonService,
    CalificacionService,
    UsuarioService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
