import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRadioCheckboxUtComponent } from './select-radio-checkbox-ut.component';

describe('SelectRadioCheckboxUtComponent', () => {
  let component: SelectRadioCheckboxUtComponent;
  let fixture: ComponentFixture<SelectRadioCheckboxUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRadioCheckboxUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRadioCheckboxUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
