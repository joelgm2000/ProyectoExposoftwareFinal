import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRegistroComponent } from './area-registro.component';

describe('AreaRegistroComponent', () => {
  let component: AreaRegistroComponent;
  let fixture: ComponentFixture<AreaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
