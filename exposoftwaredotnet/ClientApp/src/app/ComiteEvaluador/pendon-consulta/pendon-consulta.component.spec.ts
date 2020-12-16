import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendonConsultaComponent } from './pendon-consulta.component';

describe('PendonConsultaComponent', () => {
  let component: PendonConsultaComponent;
  let fixture: ComponentFixture<PendonConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendonConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendonConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
