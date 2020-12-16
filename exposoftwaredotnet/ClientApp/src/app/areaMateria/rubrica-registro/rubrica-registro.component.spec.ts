import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaRegistroComponent } from './rubrica-registro.component';

describe('RubricaRegistroComponent', () => {
  let component: RubricaRegistroComponent;
  let fixture: ComponentFixture<RubricaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
