import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPendonComponent } from './informacion-pendon.component';

describe('InformacionPendonComponent', () => {
  let component: InformacionPendonComponent;
  let fixture: ComponentFixture<InformacionPendonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPendonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPendonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
