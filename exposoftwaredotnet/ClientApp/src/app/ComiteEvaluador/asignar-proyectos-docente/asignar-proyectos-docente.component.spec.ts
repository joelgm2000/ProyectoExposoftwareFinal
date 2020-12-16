import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProyectosDocenteComponent } from './asignar-proyectos-docente.component';

describe('AsignarProyectosDocenteComponent', () => {
  let component: AsignarProyectosDocenteComponent;
  let fixture: ComponentFixture<AsignarProyectosDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarProyectosDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarProyectosDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
