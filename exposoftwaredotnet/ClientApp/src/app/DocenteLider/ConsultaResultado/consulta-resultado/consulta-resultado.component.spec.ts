import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaResultadoComponent } from './consulta-resultado.component';

describe('ConsultaResultadoComponent', () => {
  let component: ConsultaResultadoComponent;
  let fixture: ComponentFixture<ConsultaResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
