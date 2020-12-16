import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionConsultaComponent } from './inscripcion-consulta.component';

describe('InscripcionConsultaComponent', () => {
  let component: InscripcionConsultaComponent;
  let fixture: ComponentFixture<InscripcionConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
