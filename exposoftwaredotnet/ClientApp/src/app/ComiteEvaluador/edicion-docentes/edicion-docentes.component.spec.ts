import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDocentesComponent } from './edicion-docentes.component';

describe('EdicionDocentesComponent', () => {
  let component: EdicionDocentesComponent;
  let fixture: ComponentFixture<EdicionDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
