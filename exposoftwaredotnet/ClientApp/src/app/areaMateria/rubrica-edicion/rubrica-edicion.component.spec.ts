import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaEdicionComponent } from './rubrica-edicion.component';

describe('RubricaEdicionComponent', () => {
  let component: RubricaEdicionComponent;
  let fixture: ComponentFixture<RubricaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
