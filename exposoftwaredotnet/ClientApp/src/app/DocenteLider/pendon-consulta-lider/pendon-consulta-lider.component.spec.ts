import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendonConsultaLiderComponent } from './pendon-consulta-lider.component';

describe('PendonConsultaLiderComponent', () => {
  let component: PendonConsultaLiderComponent;
  let fixture: ComponentFixture<PendonConsultaLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendonConsultaLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendonConsultaLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
