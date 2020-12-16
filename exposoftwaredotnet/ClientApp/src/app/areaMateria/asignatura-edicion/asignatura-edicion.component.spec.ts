import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaEdicionComponent } from './asignatura-edicion.component';

describe('AsignaturaEdicionComponent', () => {
  let component: AsignaturaEdicionComponent;
  let fixture: ComponentFixture<AsignaturaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
