import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPendonComponent } from './registrar-pendon.component';

describe('RegistrarPendonComponent', () => {
  let component: RegistrarPendonComponent;
  let fixture: ComponentFixture<RegistrarPendonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPendonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPendonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
