import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNavcontainersUtComponent } from './datepicker-navcontainers-ut.component';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DatepickerNavcontainersUtComponent', () => {
  let component: DatepickerNavcontainersUtComponent;
  let fixture: ComponentFixture<DatepickerNavcontainersUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ],
      declarations: [DatepickerNavcontainersUtComponent],
    }).compileComponents();
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
