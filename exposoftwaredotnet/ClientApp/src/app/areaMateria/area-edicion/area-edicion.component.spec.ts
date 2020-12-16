import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEdicionComponent } from './area-edicion.component';

describe('AreaEdicionComponent', () => {
  let component: AreaEdicionComponent;
  let fixture: ComponentFixture<AreaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
