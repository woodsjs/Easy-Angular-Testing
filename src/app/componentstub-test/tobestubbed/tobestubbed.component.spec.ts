import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobestubbedComponent } from './tobestubbed.component';

describe('TobestubbedComponent', () => {
  let component: TobestubbedComponent;
  let fixture: ComponentFixture<TobestubbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobestubbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobestubbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
