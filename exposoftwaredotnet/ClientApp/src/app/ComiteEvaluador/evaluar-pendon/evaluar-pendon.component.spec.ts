import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarPendonComponent } from './evaluar-pendon.component';

describe('EvaluarPendonComponent', () => {
  let component: EvaluarPendonComponent;
  let fixture: ComponentFixture<EvaluarPendonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarPendonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarPendonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
