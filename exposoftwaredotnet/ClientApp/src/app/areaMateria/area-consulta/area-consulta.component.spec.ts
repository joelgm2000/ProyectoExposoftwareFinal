import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaConsultaComponent } from './area-consulta.component';

describe('AreaConsultaComponent', () => {
  let component: AreaConsultaComponent;
  let fixture: ComponentFixture<AreaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
