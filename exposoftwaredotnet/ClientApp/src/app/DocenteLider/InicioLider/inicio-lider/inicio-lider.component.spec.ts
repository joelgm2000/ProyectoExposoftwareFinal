import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLiderComponent } from './inicio-lider.component';

describe('InicioLiderComponent', () => {
  let component: InicioLiderComponent;
  let fixture: ComponentFixture<InicioLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
