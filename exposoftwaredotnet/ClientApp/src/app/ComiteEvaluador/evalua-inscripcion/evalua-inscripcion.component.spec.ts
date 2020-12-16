import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluaInscripcionComponent } from './evalua-inscripcion.component';

describe('EvaluaInscripcionComponent', () => {
  let component: EvaluaInscripcionComponent;
  let fixture: ComponentFixture<EvaluaInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluaInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluaInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
