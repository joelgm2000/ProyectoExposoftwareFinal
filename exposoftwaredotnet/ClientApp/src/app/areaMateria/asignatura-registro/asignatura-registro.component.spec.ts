import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaRegistroComponent } from './asignatura-registro.component';

describe('AsignaturaRegistroComponent', () => {
  let component: AsignaturaRegistroComponent;
  let fixture: ComponentFixture<AsignaturaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
