import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNavcontainersUtComponent } from './datepicker-navcontainers-ut.component';

describe('DatepickerNavcontainersUtComponent', () => {
  let component: DatepickerNavcontainersUtComponent;
  let fixture: ComponentFixture<DatepickerNavcontainersUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerNavcontainersUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNavcontainersUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
