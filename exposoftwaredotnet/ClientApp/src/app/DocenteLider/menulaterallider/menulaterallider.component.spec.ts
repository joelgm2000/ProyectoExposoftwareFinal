import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulateralliderComponent } from './menulaterallider.component';

describe('MenulateralliderComponent', () => {
  let component: MenulateralliderComponent;
  let fixture: ComponentFixture<MenulateralliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulateralliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulateralliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
