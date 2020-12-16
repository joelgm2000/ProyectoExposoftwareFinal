import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProyectosComponent } from './asignar-proyectos.component';

describe('AsignarProyectosComponent', () => {
  let component: AsignarProyectosComponent;
  let fixture: ComponentFixture<AsignarProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
