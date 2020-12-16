import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDocentesComponent } from './registrar-docentes.component';

describe('RegistrarDocentesComponent', () => {
  let component: RegistrarDocentesComponent;
  let fixture: ComponentFixture<RegistrarDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
