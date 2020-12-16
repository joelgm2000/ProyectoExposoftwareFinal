import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCalificacionComponent } from './registrar-calificacion.component';

describe('RegistrarCalificacionComponent', () => {
  let component: RegistrarCalificacionComponent;
  let fixture: ComponentFixture<RegistrarCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
