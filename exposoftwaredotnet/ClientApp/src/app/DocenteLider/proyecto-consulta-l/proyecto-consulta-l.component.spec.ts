import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoConsultaLComponent } from './proyecto-consulta-l.component';

describe('ProyectoConsultaLComponent', () => {
  let component: ProyectoConsultaLComponent;
  let fixture: ComponentFixture<ProyectoConsultaLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoConsultaLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoConsultaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
