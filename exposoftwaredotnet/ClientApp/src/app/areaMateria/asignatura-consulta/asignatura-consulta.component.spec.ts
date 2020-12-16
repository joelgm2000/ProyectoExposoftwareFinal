import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaConsultaComponent } from './asignatura-consulta.component';

describe('AsignaturaConsultaComponent', () => {
  let component: AsignaturaConsultaComponent;
  let fixture: ComponentFixture<AsignaturaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
