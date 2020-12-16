import { DocenteRegistroComponent } from './inscripcion/docente-registro/docente-registro.component';
import { EstudianteRegistroComponent } from './inscripcion/estudiante-registro/estudiante-registro.component';
import { ProyectoRegistroComponent } from './inscripcion/proyecto-registro/proyecto-registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InformacionComponent } from './informacion/informacion/informacion.component';
import { LoginComiteEvaluadorComponent } from './loginComiteEvaluador/login-comite-evaluador/login-comite-evaluador.component';
import { LoginDocenteEvaluadorComponent } from './loginDocenteEvaluador/login-docente-evaluador/login-docente-evaluador.component';
import { LoginLiderProyectoComponent } from './loginLiderProyecto/login-lider-proyecto/login-lider-proyecto.component';
import { EvaluaInscripcionComponent } from './ComiteEvaluador/evalua-inscripcion/evalua-inscripcion.component';
import { EvaluarPendonComponent } from './ComiteEvaluador/evaluar-pendon/evaluar-pendon.component';
import { InicioComponent } from './ComiteEvaluador/inicio/inicio.component';
import { InicioLiderComponent } from './DocenteLider/InicioLider/inicio-lider/inicio-lider.component';
import { RegistrarPendonComponent } from './DocenteLider/RegistrarPendon/registrar-pendon/registrar-pendon.component';
import { ConsultaResultadoComponent } from './DocenteLider/ConsultaResultado/consulta-resultado/consulta-resultado.component';
import { AsignaturaRegistroComponent } from './areaMateria/asignatura-registro/asignatura-registro.component';
import { AsignaturaConsultaComponent} from './areaMateria/asignatura-consulta/asignatura-consulta.component';
import { AreaRegistroComponent } from './areaMateria/area-registro/area-registro.component';
import { AreaConsultaComponent } from './areaMateria/area-consulta/area-consulta.component';
import { AreaEdicionComponent } from './areaMateria/area-edicion/area-edicion.component';
import { RegistrarDocentesComponent } from './ComiteEvaluador/registrar-docentes/registrar-docentes.component';
import { AsignaturaEdicionComponent } from './areaMateria/asignatura-edicion/asignatura-edicion.component';
import { ConsultarDocentesComponent } from './comiteEvaluador/consultar-docentes/consultar-docentes.component';
import { EdicionDocentesComponent } from './ComiteEvaluador/edicion-docentes/edicion-docentes.component';
import { RubricaRegistroComponent } from './areaMateria/rubrica-registro/rubrica-registro.component';
import { RubricaConsultaComponent } from './areaMateria/rubrica-consulta/rubrica-consulta.component';
import { RubricaEdicionComponent } from './areaMateria/rubrica-edicion/rubrica-edicion.component';
import { InscripcionConsultaComponent } from './ComiteEvaluador/inscripcion-consulta/inscripcion-consulta.component';
import { PendonConsultaComponent } from './ComiteEvaluador/pendon-consulta/pendon-consulta.component';
import { InicioEvaluadorComponent } from './docenteEvaluador/inicio-evaluador/inicio-evaluador.component';
import { RegistrarCalificacionComponent } from './docenteEvaluador/registrar-calificacion/registrar-calificacion.component';
import { ProyectoConsultaLComponent } from './DocenteLider/proyecto-consulta-l/proyecto-consulta-l.component';
import { InformacionPendonComponent } from './DocenteLider/informacion-pendon/informacion-pendon.component';
import { PendonConsultaLiderComponent } from './DocenteLider/pendon-consulta-lider/pendon-consulta-lider.component';
import { AsignarProyectosComponent } from './ComiteEvaluador/asignar-proyectos/asignar-proyectos.component';
import { AsignarProyectosDocenteComponent } from './ComiteEvaluador/asignar-proyectos-docente/asignar-proyectos-docente.component';
import { UsuarioRegistroComponent } from './usuario/usuario-registro/usuario-registro.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
  path: 'proyectoRegistro',
  component: ProyectoRegistroComponent
  },
  {
    path: 'docenteRegistro',
    component: DocenteRegistroComponent
  },
  {
    path: 'estudianteRegistro',
    component: EstudianteRegistroComponent
  },
  {
    path: 'loginLider',
    component: LoginLiderProyectoComponent

  },
  {
    path: 'LoginDocenteEvaluador',
    component: LoginDocenteEvaluadorComponent

  },
  {
    path: 'LoginComiteEvaluador',
    component: LoginComiteEvaluadorComponent

  },
  {
    path: 'Informacion',
    component: InformacionComponent

  },
  {
    path: 'evaluaInscripcion/:idProyecto',
    component: EvaluaInscripcionComponent
  },
  {
    path: 'inscripcionConsulta',
    component: InscripcionConsultaComponent
  },
  {
    path: 'evaluarPendon/:idPendon',
    component: EvaluarPendonComponent
  },
  {
    path: 'pendonConsulta',
    component: PendonConsultaComponent
  },
  {
    path: 'inicio',
    component: InicioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'inicioDocenteLider',
    component: InicioLiderComponent
  },
  {
    path: 'registrarPendon',
    component: RegistrarPendonComponent
  },
  {
    path: 'ConsultaResultado',
    component: ConsultaResultadoComponent
  },
  {
    path: 'AsignaturaRegistro',
    component: AsignaturaRegistroComponent
  },
  {
    path: 'AsignaturaConsulta',
    component: AsignaturaConsultaComponent
  },
  {
    path: 'asignaturaEdicion/:idAsignatura',
    component: AsignaturaEdicionComponent
  },
  {
    path: 'AreaRegistro',
    component: AreaRegistroComponent
  },
  {
    path: 'AreaConsulta',
    component: AreaConsultaComponent
  },
  {
    path: 'areaEdicion/:idArea',
    component: AreaEdicionComponent
  },
  {
    path: 'RegistrarDocente',
    component: RegistrarDocentesComponent
  },
  {
    path: 'consultarDocente',
    component: ConsultarDocentesComponent
  },
  {
    path: 'edicionDocentes/:identificacion',
    component: EdicionDocentesComponent
  },
  {
    path: 'rubricaRegistro',
    component: RubricaRegistroComponent
  },
  {
    path: 'rubricaConsulta',
    component: RubricaConsultaComponent
  },
  {
    path: 'rubricaEdicion/:idRubrica',
    component: RubricaEdicionComponent
  },
  {
    path: 'inicioEvaluador',
    component: InicioEvaluadorComponent
  },
  {
    path: 'registrarCalificacion/:idProyecto/:idRubrica',
    component: RegistrarCalificacionComponent
  },
  {
    path: 'proyectoConsultaL',
    component: ProyectoConsultaLComponent
  },
  {
    path: 'informacionPendon',
    component: InformacionPendonComponent
  },
  {
    path: 'pendonConsultaLider',
    component: PendonConsultaLiderComponent
  },
  {
    path: 'asignarProyectos',
    component: AsignarProyectosComponent
  },
  {
    path: 'asignarProyectosDocente/:idProyecto',
    component: AsignarProyectosDocenteComponent
  },
  {
    path: 'usuarioRegistro',
    component: UsuarioRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
