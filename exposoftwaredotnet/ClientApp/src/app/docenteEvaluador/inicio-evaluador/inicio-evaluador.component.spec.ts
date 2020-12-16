import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEvaluadorComponent } from './inicio-evaluador.component';

describe('InicioEvaluadorComponent', () => {
  let component: InicioEvaluadorComponent;
  let fixture: ComponentFixture<InicioEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
