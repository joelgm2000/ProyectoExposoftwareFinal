import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaConsultaComponent } from './rubrica-consulta.component';

describe('RubricaConsultaComponent', () => {
  let component: RubricaConsultaComponent;
  let fixture: ComponentFixture<RubricaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
