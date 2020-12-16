import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDocentesComponent } from './consultar-docentes.component';

describe('ConsultarDocentesComponent', () => {
  let component: ConsultarDocentesComponent;
  let fixture: ComponentFixture<ConsultarDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
